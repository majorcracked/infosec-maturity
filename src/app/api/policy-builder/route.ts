import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { policyTitle } = await req.json();

    if (!policyTitle) {
      return NextResponse.json(
        { error: "Missing policyTitle in request body" },
        { status: 400 }
      );
    }

    const promptPayload = `Write a comprehensive, professional, enterprise-grade corporate Information Security Policy titled "${policyTitle}".
The document should follow regulatory compliance standards (SOC 2, ISO 27001, HIPAA).
Provide a complete template in Markdown, including:
1. Purpose & Scope
2. Core Policy Statements (fully detailed clauses, no shorthand placeholders)
3. Roles & Responsibilities
4. Revision History & Approvals
Do not include any chat introductory or concluding remarks. Start directly with the title.`;

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
          system: "You are a Principal Security compliance manager. Write complete, ready-to-use InfoSec policies in Markdown.",
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      const content = rawResult.response.trim();

      // Save to database
      await prisma.policyDocument.upsert({
        where: { title: policyTitle },
        update: { content, updatedAt: new Date() },
        create: { title: policyTitle, content },
      });

      return NextResponse.json({
        title: policyTitle,
        content,
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Ollama connection failed in policy-builder, using fallback content:", ollamaError.message);

      // Pre-authored high-quality fallback policies
      let fallbackContent = "";
      if (policyTitle.toLowerCase().includes("access")) {
        fallbackContent = `# Access Control Policy
**Document Reference**: AegisFlow-POL-AC-01  
**Version**: 1.0  
**Effective Date**: July 1, 2026  

---

## 1. Purpose
This policy defines the rules and restrictions governing user access to AegisFlow internal assets, networks, cloud endpoints, and infrastructure.

## 2. Scope
This policy applies to all full-time employees, contractors, external consultants, and third-party vendors accessing company resources.

## 3. Policy Statements
- **Least Privilege Access**: Users shall only be granted access permissions required to perform their direct job functions. All administrative privileges require formal ticketed approvals.
- **Multi-Factor Authentication (MFA)**: MFA must be enforced globally on all company accounts, identity providers, and cloud terminals. SMS authentication is prohibited; hardware keys or software OTP generators must be used.
- **Access Reviews**: Logical access lists must be audited quarterly by department managers. Unused accounts must be disabled immediately, and revoked permissions must be cleaned up within 24 hours of employee departure.

## 4. Roles & Responsibilities
- **CISO**: Responsible for policy approvals and annual reviews.
- **IT Operations Team**: Responsible for provisioning, token management, and account deactivations.

---
*Approved by: CISO Audit Team | AegisFlow compliance*
`;
      } else if (policyTitle.toLowerCase().includes("cryptography") || policyTitle.toLowerCase().includes("data")) {
        fallbackContent = `# Data Security & Cryptography Policy
**Document Reference**: AegisFlow-POL-DS-02  
**Version**: 1.0  
**Effective Date**: July 1, 2026  

---

## 1. Purpose
This policy sets encryption standards for safeguarding data at rest and data in transit across organizational servers, databases, and network links.

## 2. Scope
Applies to all database systems, database back-ups, physical laptop devices, and cloud storage volumes owned or controlled by the organization.

## 3. Policy Statements
- **Data At Rest Encryption**: All production databases, S3 buckets, and backup archives must be encrypted at rest using AES-256. Cryptographic keys must be managed through an automated KMS provider with monthly rotation schedules.
- **Data In Transit Encryption**: All public network traffic must be encrypted using TLS 1.3 or TLS 1.2 minimum. HTTP connections must be redirected to HTTPS.
- **Anomalous Log Monitoring**: Real-time log monitoring must be configured for all SQL systems to detect database query injections and unauthorized bulk export attempts.

## 4. Revision History
- **v1.0 (2026-07-01)**: Initial release.

---
*Approved by: Lead DB Administrator | AegisFlow compliance*
`;
      } else {
        fallbackContent = `# Incident Response & Disaster Plan
**Document Reference**: AegisFlow-POL-IR-03  
**Version**: 1.0  
**Effective Date**: July 1, 2026  

---

## 1. Purpose
This plan establishes procedures to detect, contain, mitigate, and recover from cybersecurity incidents and operational breaches.

## 2. Scope
Applies to all security alerts, system failures, and unauthorized exposures.

## 3. Policy Statements
- **Incident Escalation**: Any user discovering an anomaly or potential leak must report it to security@aegisflow.com within 1 hour.
- **Triage and Containment**: Incident responders must isolate affected assets within 30 minutes of confirmation.
- **Annual Exercises**: A simulated tabletop drill must be conducted at least annually. Response playbooks must be updated with learnings from the exercises.

---
*Approved by: Incident Response Team | AegisFlow compliance*
`;
      }

      // Save the fallback content to the DB so it is persistent!
      await prisma.policyDocument.upsert({
        where: { title: policyTitle },
        update: { content: fallbackContent, updatedAt: new Date() },
        create: { title: policyTitle, content: fallbackContent },
      });

      return NextResponse.json({
        title: policyTitle,
        content: fallbackContent,
        source: "fallback",
      });
    }
  } catch (error: any) {
    console.error("API error in policy-builder:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
