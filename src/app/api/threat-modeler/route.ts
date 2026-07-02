import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { techStackDescription } = await req.json();

    if (!techStackDescription) {
      return NextResponse.json(
        { error: "Missing techStackDescription in request body" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a Principal Security Architect and Threat Modeler.
Analyze the user's technology stack and generate a structured JSON array of exactly 3 realistic security risks.
Each risk object in the JSON array must contain exactly these keys:
- "title" (string): Short descriptive title of the risk.
- "threat" (string): Detailed description of the threat and how it manifests.
- "likelihood" (integer 1-5): Probability of occurrence.
- "impact" (integer 1-5): Damage potential.
- "mitigation" (string): Actionable mitigation advice mapped to standard compliance controls.

Return ONLY a raw JSON array. No explanations, no markdown formatting blocks, no extra text.`;

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
          prompt: `Tech Stack: "${techStackDescription}"`,
          system: systemPrompt,
          format: "json",
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      const parsedRisks = JSON.parse(rawResult.response.trim());

      // Save each risk to the database
      const savedRisks = [];
      for (const r of parsedRisks) {
        const saved = await prisma.riskRegister.upsert({
          where: { title: r.title },
          update: {
            threat: r.threat,
            likelihood: Number(r.likelihood) || 3,
            impact: Number(r.impact) || 3,
            mitigation: r.mitigation,
          },
          create: {
            title: r.title,
            threat: r.threat,
            likelihood: Number(r.likelihood) || 3,
            impact: Number(r.impact) || 3,
            mitigation: r.mitigation,
          },
        });
        savedRisks.push(saved);
      }

      return NextResponse.json({
        risks: savedRisks,
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Ollama connection failed in threat-modeler, using fallback risk modeler:", ollamaError.message);

      // Fallback risk generation based on keywords
      const stack = techStackDescription.toLowerCase();
      const fallbackRisks = [];

      if (stack.includes("vercel") || stack.includes("next") || stack.includes("frontend")) {
        fallbackRisks.push({
          title: "Next.js SSR Server-Side Request Forgery (SSRF)",
          threat: "Improper validation of external fetch API calls in Next.js Server Actions allows attackers to request internal cloud endpoints.",
          likelihood: 2,
          impact: 4,
          mitigation: "Strictly validate external URLs before server-side execution, and run server actions in isolated networks.",
        });
      }
      if (stack.includes("aws") || stack.includes("s3") || stack.includes("cloud")) {
        fallbackRisks.push({
          title: "Misconfigured Cloud IAM Roles Escalation",
          threat: "Over-privileged IAM policies attached to cloud server accounts allow attackers who compromise a server to escalate to cluster admin.",
          likelihood: 3,
          impact: 5,
          mitigation: "Implement strict IAM least privilege policies and perform quarterly automated role audits.",
        });
      }
      if (stack.includes("postgres") || stack.includes("db") || stack.includes("sql")) {
        fallbackRisks.push({
          title: "Anomalous SQL Data Extraction",
          threat: "Attackers compromise an API endpoint and issue bulk queries to crawl the customer database, leaking compliance records.",
          likelihood: 3,
          impact: 4,
          mitigation: "Enable database access telemetry logging and configure alerts for anomalous bulk transfers.",
        });
      }

      // Default risk fallback if none matched
      if (fallbackRisks.length === 0) {
        fallbackRisks.push({
          title: "Generic Supply Chain Library Compromise",
          threat: "Outdated third-party npm packages contain known security vulnerabilities exploited to run arbitrary code on servers.",
          likelihood: 3,
          impact: 4,
          mitigation: "Implement automated daily dependency checks (e.g. Snyk, Dependabot) and enforce branch merges check blocks.",
        });
      }

      const savedRisks = [];
      for (const r of fallbackRisks) {
        const saved = await prisma.riskRegister.upsert({
          where: { title: r.title },
          update: {
            threat: r.threat,
            likelihood: r.likelihood,
            impact: r.impact,
            mitigation: r.mitigation,
          },
          create: {
            title: r.title,
            threat: r.threat,
            likelihood: r.likelihood,
            impact: r.impact,
            mitigation: r.mitigation,
          },
        });
        savedRisks.push(saved);
      }

      return NextResponse.json({
        risks: savedRisks,
        source: "fallback",
      });
    }
  } catch (error: any) {
    console.error("API error in threat-modeler:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
