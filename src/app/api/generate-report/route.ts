import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { assessmentId } = await req.json();

    if (!assessmentId) {
      return NextResponse.json(
        { error: "Missing assessmentId in request body" },
        { status: 400 }
      );
    }

    // Retrieve assessment details along with answers and questions
    const assessment = await prisma.assessment.findUnique({
      where: { id: assessmentId },
      include: {
        organization: true,
        answers: {
          include: {
            question: true,
          },
        },
      },
    });

    if (!assessment) {
      return NextResponse.json(
        { error: `Assessment with ID ${assessmentId} not found` },
        { status: 404 }
      );
    }

    // Fetch all questions to match missing answers
    const allQuestions = await prisma.question.findMany();

    // Group answers and find gaps
    const answersMap = assessment.answers.reduce((acc, ans) => {
      acc[ans.questionId] = ans;
      return acc;
    }, {} as Record<string, typeof assessment.answers[0]>);

    // Calculate domain scores
    const domainSummary = allQuestions.reduce((acc, q) => {
      if (!acc[q.domain]) {
        acc[q.domain] = { total: 0, yes: 0, no: 0, na: 0 };
      }
      acc[q.domain].total += 1;
      
      const ans = answersMap[q.id];
      if (ans) {
        if (ans.response === "YES") acc[q.domain].yes += 1;
        else if (ans.response === "NO") acc[q.domain].no += 1;
        else if (ans.response === "NA") acc[q.domain].na += 1;
      } else {
        acc[q.domain].no += 1; // Default unanswered to lacking/NO
      }
      return acc;
    }, {} as Record<string, { total: number; yes: number; no: number; na: number }>);

    // Calculate overall statistics
    const totalQuestions = allQuestions.length;
    const totalYes = Object.values(domainSummary).reduce((sum, d) => sum + d.yes, 0);
    const overallScore = totalQuestions > 0 ? 1.0 + (totalYes / totalQuestions) * 4.0 : 1.0;

    // Build the AI prompt
    const promptPayload = `
    Generate an Executive Security Compliance and Maturity Audit Report for the following organization:
    - Organization Name: ${assessment.organization.name}
    - Audit Date: ${new Date().toLocaleDateString()}
    - Overall Maturity Rating: ${overallScore.toFixed(1)} / 5.0

    Domain-Specific Score breakdown:
    ${Object.entries(domainSummary)
      .map(([domain, data]) => {
        const score = data.yes === 0 ? 1.0 : 1.0 + (data.yes / data.total) * 4.0;
        return `- ${domain}: ${score.toFixed(1)} / 5.0 (Implemented: ${data.yes}/${data.total})`;
      })
      .join("\n")}

    Detailed Control Statuses:
    ${allQuestions
      .map((q) => {
        const ans = answersMap[q.id];
        const status = ans ? ans.response : "NOT STARTED/NO";
        const verified = ans?.aiVerified ? "VERIFIED" : ans?.aiVerified === false ? "FAILED AI AUDIT" : "NO EVIDENCE PROVIDED";
        const reasoning = ans?.aiReasoning || "None";
        return `- [${q.domain}] ${q.text}
          Status: ${status}
          AI Evidence Check: ${verified}
          AI Auditor Notes: ${reasoning}`;
      })
      .join("\n\n")}

    Please output a highly professional, detailed markdown report. It must contain:
    1. **Executive Summary**: A summary analyzing the organization's current posture and maturity.
    2. **Security Achievements**: Highlights of controls verified successfully with evidence.
    3. **Key Vulnerabilities & Gaps**: Analysis of controls marked NO or failing AI audit checks.
    4. **Remediation Roadmap**: Step-by-step priority recommendations (Immediate, Medium Term, Continuous) to advance the organization to the next maturity level.
    Use high-quality markdown formatting with tables and bullet points. No generic filler text.
    `;

    try {
      const ollamaHost = (process.env.OLLAMA_HOST || "http://127.0.0.1:11434").replace(/\/$/, "");
      const ollamaResponse = await fetch(`${ollamaHost}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          model: process.env.OLLAMA_MODEL || "qwen2.5:7b",
          prompt: promptPayload,
          system: "You are an elite CISO and Principal Security Auditor. Write a comprehensive, highly-professional, print-ready B2B security audit report in Markdown format.",
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      return NextResponse.json({
        report: rawResult.response.trim(),
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Ollama connection failed in generate-report, using fallback report generator:", ollamaError.message);
      
      // Fallback report generator
      const accessControlScore = domainSummary["Access Control"]?.yes === 0 ? 1.0 : 1.0 + (domainSummary["Access Control"]?.yes / domainSummary["Access Control"]?.total) * 4.0;
      const dataSecurityScore = domainSummary["Data Security"]?.yes === 0 ? 1.0 : 1.0 + (domainSummary["Data Security"]?.yes / domainSummary["Data Security"]?.total) * 4.0;
      const incidentResponseScore = domainSummary["Incident Response"]?.yes === 0 ? 1.0 : 1.0 + (domainSummary["Incident Response"]?.yes / domainSummary["Incident Response"]?.total) * 4.0;

      const reportContent = `# Executive InfoSec Maturity & Compliance Audit Report
**Organization**: ${assessment.organization.name}  
**Audit Date**: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}  
**Overall Maturity Rating**: **${overallScore.toFixed(1)} / 5.0**

---

## 1. Executive Summary
This compliance report provides an aggregated assessment of the current security maturity baseline for **${assessment.organization.name}**. Evaluation covers core structural domains: Access Control, Data Security, and Incident Response. 

The organization's overall InfoSec maturity is rated at **${overallScore.toFixed(1)} / 5.0**. This indicates that while foundational controls may be in place, additional rigor is required to enforce, monitor, and document policies to achieve fully optimized, auditor-defensible postures.

| Structural Domain | Implemented Controls | Maturity Rating | Current Posture |
| :--- | :---: | :---: | :--- |
| **Access Control** | ${domainSummary["Access Control"]?.yes || 0} / ${domainSummary["Access Control"]?.total || 0} | ${accessControlScore.toFixed(1)} / 5.0 | ${accessControlScore > 3 ? "Managed" : accessControlScore > 2 ? "Defined" : "Initial/Repeatable"} |
| **Data Security** | ${domainSummary["Data Security"]?.yes || 0} / ${domainSummary["Data Security"]?.total || 0} | ${dataSecurityScore.toFixed(1)} / 5.0 | ${dataSecurityScore > 3 ? "Managed" : dataSecurityScore > 2 ? "Defined" : "Initial/Repeatable"} |
| **Incident Response** | ${domainSummary["Incident Response"]?.yes || 0} / ${domainSummary["Incident Response"]?.total || 0} | ${incidentResponseScore.toFixed(1)} / 5.0 | ${incidentResponseScore > 3 ? "Managed" : incidentResponseScore > 2 ? "Defined" : "Initial/Repeatable"} |

---

## 2. Domain-Specific Assessment

### A. Access Control (Current Rating: ${accessControlScore.toFixed(1)} / 5.0)
- **Strengths**: ${domainSummary["Access Control"]?.yes > 0 ? "Multi-factor authentication (MFA) or quarterly access review frameworks are partially tracked or documented." : "None. Foundational Access Controls are currently missing or lack operational evidence."}
- **Observed Gaps**: ${domainSummary["Access Control"]?.yes < domainSummary["Access Control"]?.total ? "Missing formal enforcement protocols for external integrations and automated quarterly review records." : "None. All evaluated Access Controls are fully verified."}

### B. Data Security (Current Rating: ${dataSecurityScore.toFixed(1)} / 5.0)
- **Strengths**: ${domainSummary["Data Security"]?.yes > 0 ? "Data at rest encryption or log monitoring structures have been initiated." : "None. Core database and storage encryption protections are lacking."}
- **Observed Gaps**: ${domainSummary["Data Security"]?.yes < domainSummary["Data Security"]?.total ? "Production database encryption or log anomaly reviews lack operational automation." : "None. All evaluated Data Security controls are fully verified."}

### C. Incident Response (Current Rating: ${incidentResponseScore.toFixed(1)} / 5.0)
- **Strengths**: ${domainSummary["Incident Response"]?.yes > 0 ? "Incident Response documentation exists and is backed by active tabletop drill policies." : "None. Incident response frameworks are undocumented."}
- **Observed Gaps**: ${domainSummary["Incident Response"]?.yes < domainSummary["Incident Response"]?.total ? "Documented incident response plans or annual tabletop tests are currently missing." : "None. Core Incident Response controls are verified."}

---

## 3. Remediation Roadmap & Recommended Actions

Based on the audit findings, the following actions are prioritized to advance **${assessment.organization.name}** toward **Level 5 (Optimizing)** maturity:

### 🔴 Phase 1: Immediate Actions (Next 30 Days)
${allQuestions
  .filter((q) => !answersMap[q.id] || answersMap[q.id].response !== "YES")
  .map((q) => {
    return `*   **Implement ${q.domain} - ${q.text.split("?")[0]}**
    *Action*: Author and publish formal compliance documentation addressing this requirement. 
    *Evidence Required*: Policy document specifying scope, technical tools, and reviewer roles.`;
  })
  .join("\n")}

### 🟡 Phase 2: Tactical Actions (Next 60-90 Days)
*   **Establish Automated Alerts**: Configure system-level telemetry to monitor configuration drift and database accesses.
*   **Centralize Access Reviews**: Integrate HR directories (e.g., Okta, Rippling) with infrastructure access lists to run automated quarterly reviews.

### 🟢 Phase 3: Continuous Improvements (Ongoing)
*   **Annual Tabletop Drill**: Schedule the next cross-department incident tabletop exercise.
*   **Automated Continuous Audits**: Transition from periodic static assessments to real-time configuration compliance monitoring.

---
*Note: This report was compiled using AegisFlow Audit Engine (Local Fallback Mode due to Ollama server offline state).*
`;

      return NextResponse.json({
        report: reportContent,
        source: "fallback",
      });
    }
  } catch (error: any) {
    console.error("API error in generate-report:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
