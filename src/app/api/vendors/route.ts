import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const vendors = await prisma.vendor.findMany({
      orderBy: { score: "desc" },
    });
    return NextResponse.json({ vendors });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, securityTier, contactEmail } = await req.json();

    if (!name || !securityTier || !contactEmail) {
      return NextResponse.json(
        { error: "Missing required fields: name, securityTier, contactEmail" },
        { status: 400 }
      );
    }

    const vendor = await prisma.vendor.upsert({
      where: { name },
      update: {
        securityTier,
        contactEmail,
      },
      create: {
        name,
        securityTier,
        contactEmail,
        complianceStatus: "PENDING",
        score: 0,
      },
    });

    return NextResponse.json({
      success: true,
      vendor,
    });

  } catch (error: any) {
    console.error("API error in vendors:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { vendorId, score, vendorDetails } = await req.json();

    if (!vendorId) {
      return NextResponse.json(
        { error: "Missing vendorId in request body" },
        { status: 400 }
      );
    }

    let finalScore = score !== undefined ? Number(score) : 0;

    if (vendorDetails) {
      const systemPrompt = `You are a Third-Party Vendor Risk Auditor.
Analyze the vendor's security overview and determine a security rating score (integer between 0 and 100) based on their compliance, controls, encryption, and testing standards.
Your response must be a JSON object with exactly this format:
{
  "score": 85
}
Do not return any markdown tags or text, just the raw JSON.`;

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
            prompt: `Vendor details: "${vendorDetails}"`,
            system: systemPrompt,
            format: "json",
            stream: false,
          }),
        });

        if (ollamaResponse.ok) {
          const rawResult = await ollamaResponse.json();
          const parsed = JSON.parse(rawResult.response.trim());
          if (parsed && typeof parsed.score === "number") {
            finalScore = parsed.score;
          }
        }
      } catch (err: any) {
        console.warn("Ollama vendor risk audit failed, falling back:", err.message);
        // Fallback scoring based on keywords
        const detLower = vendorDetails.toLowerCase();
        if (detLower.includes("soc 2") && detLower.includes("encryption")) finalScore = 90;
        else if (detLower.includes("soc 2") || detLower.includes("encryption")) finalScore = 75;
        else finalScore = 45;
      }
    }

    let complianceStatus = "PENDING";
    if (finalScore >= 80) complianceStatus = "VERIFIED";
    else if (finalScore < 50) complianceStatus = "FAILED";

    const vendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: {
        score: finalScore,
        complianceStatus,
      },
    });

    return NextResponse.json({
      success: true,
      vendor,
    });

  } catch (error: any) {
    console.error("API error in updating vendor:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
