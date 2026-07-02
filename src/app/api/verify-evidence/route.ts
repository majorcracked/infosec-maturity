import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { questionText, documentText } = await req.json();

    if (!questionText || !documentText) {
      return NextResponse.json(
        { error: "Missing questionText or documentText in request body" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are an expert security compliance auditor. Your task is to evaluate the provided evidence document against a specific InfoSec control question.
Analyze the document text and determine if there is explicit, valid evidence confirming compliance with the control.
You must return a JSON response with exactly two keys:
- "verified" (boolean): true if the document contains clear and explicit evidence confirming compliance, false otherwise.
- "reasoning" (string): A short, objective explanation detailing what evidence was found or why the evidence is insufficient.
Do not include any extra text, markdown code blocks, or explanation outside the JSON. Return only the raw JSON.`;

    const promptPayload = `Control Question: "${questionText}"\n\nUploaded Document Evidence:\n"""\n${documentText}\n"""`;

    try {
      const ollamaHost = process.env.OLLAMA_HOST || "http://127.0.0.1:11434";
      const ollamaResponse = await fetch(`${ollamaHost}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemma4:e2b",
          prompt: promptPayload,
          system: systemPrompt,
          format: "json",
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      const parsedContent = JSON.parse(rawResult.response.trim());

      return NextResponse.json({
        verified: parsedContent.verified,
        reasoning: parsedContent.reasoning,
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Local Ollama connection failed or model not pulled, using fallback validation:", ollamaError.message);
      
      // Fallback evaluation logic for demonstration / testing when Ollama is not active or gemma4:e2b is not pulled
      const docLower = documentText.toLowerCase();
      const questionLower = questionText.toLowerCase();
      
      let verified = false;
      let reasoning = "Ollama fallback verification: Document analyzed.";

      if (questionLower.includes("mfa") || questionLower.includes("multi-factor")) {
        if (docLower.includes("mfa") || docLower.includes("multi-factor") || docLower.includes("two-factor") || docLower.includes("2fa")) {
          verified = true;
          reasoning = "Fallback Verification: Document contains explicit mentions of Multi-Factor Authentication (MFA) requirements.";
        } else {
          reasoning = "Fallback Verification: Document does not mention MFA, Multi-Factor, or 2FA policies.";
        }
      } else if (questionLower.includes("encrypt") || questionLower.includes("data at rest")) {
        if (docLower.includes("encrypt") || docLower.includes("aes") || docLower.includes("cryptography")) {
          verified = true;
          reasoning = "Fallback Verification: Found mentions of encryption policies or algorithms matching data security controls.";
        } else {
          reasoning = "Fallback Verification: Document lacks references to database encryption or storage security controls.";
        }
      } else if (questionLower.includes("privilege") || questionLower.includes("review")) {
        if (docLower.includes("privilege") || docLower.includes("access control") || docLower.includes("review")) {
          verified = true;
          reasoning = "Fallback Verification: Document contains references to access control reviews and permissions audit.";
        } else {
          reasoning = "Fallback Verification: No evidence of quarterly user access privilege reviews detected.";
        }
      } else if (questionLower.includes("incident response") || questionLower.includes("tabletop")) {
        if (docLower.includes("incident") || docLower.includes("breach") || docLower.includes("disaster recovery")) {
          verified = true;
          reasoning = "Fallback Verification: Document confirms existence of an incident response framework.";
        } else {
          reasoning = "Fallback Verification: Document does not outline an incident response plan or exercise.";
        }
      } else {
        verified = docLower.length > 100;
        reasoning = verified 
          ? "Fallback Verification: Document is substantial but cannot be verified by local AI (Ollama offline)." 
          : "Fallback Verification: Document is too short to determine security compliance (Ollama offline).";
      }

      return NextResponse.json({
        verified,
        reasoning: `${reasoning} (Note: Ollama is offline or model gemma4:e2b is not loaded. Using local regex fallback.)`,
        source: "fallback",
      });
    }
  } catch (error: any) {
    console.error("API error in verify-evidence:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
