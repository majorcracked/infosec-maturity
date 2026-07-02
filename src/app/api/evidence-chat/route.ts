import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { queryMessage } = await req.json();

    if (!queryMessage) {
      return NextResponse.json(
        { error: "Missing queryMessage in request body" },
        { status: 400 }
      );
    }

    // Retrieve all answers containing verified document text
    const answersWithText = await prisma.answer.findMany({
      where: {
        evidenceText: {
          not: null,
        },
      },
      include: {
        question: true,
      },
    });

    if (answersWithText.length === 0) {
      return NextResponse.json({
        response: "No verified compliance documents have been uploaded to the database yet. Please complete questions and upload policy PDFs first.",
        source: "fallback",
      });
    }

    // Join all extracted policy text to form the RAG context
    const RAGContext = answersWithText
      .map((ans) => {
        return `Document Reference: [${ans.evidenceUrl}]\nControl Mapped: "${ans.question.text}"\nContent:\n${ans.evidenceText}\n---`;
      })
      .join("\n\n");

    const systemPrompt = `You are AegisFlow's Corporate Audit Compliance assistant.
Your goal is to answer the user's query about their company security policies using ONLY the provided document context below.
Provide accurate, professional, and clear answers citing the specific Document Reference (e.g., policy_file.pdf) where the info was found.
If the provided context does not contain the answer, say "I cannot find explicit evidence for this in our uploaded compliance documents."

Uploaded Compliance Context:
"""
${RAGContext}
"""`;

    try {
      const ollamaHost = process.env.OLLAMA_HOST || "http://127.0.0.1:11434";
      const ollamaResponse = await fetch(`${ollamaHost}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemma4:e2b",
          prompt: `User Question: "${queryMessage}"`,
          system: systemPrompt,
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      return NextResponse.json({
        response: rawResult.response.trim(),
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Ollama connection failed in evidence-chat, running local keyword parser:", ollamaError.message);

      // Offline keyword search fallback
      const queryLower = queryMessage.toLowerCase();
      let matchedDocName = "";
      let matchedDocContent = "";

      for (const ans of answersWithText) {
        if (ans.evidenceText && ans.evidenceText.toLowerCase().includes(queryLower)) {
          matchedDocName = ans.evidenceUrl || "policy_document.pdf";
          matchedDocContent = ans.evidenceText;
          break;
        }
      }

      let responseText = "";
      if (matchedDocName) {
        // Extract paragraph containing keyword
        const lines = matchedDocContent.split("\n");
        const matchingLines = lines
          .filter((l) => l.toLowerCase().includes(queryLower))
          .slice(0, 3)
          .map((l) => `> ${l.trim()}`)
          .join("\n");

        responseText = `### Offline Evidence Search Result

I found a keyword match in the uploaded document: **${matchedDocName}**

**Relevant Clauses Found:**
${matchingLines}

*(Note: The local Ollama server running \`gemma4:e2b\` is currently offline. This response is compiled using local keyword indexing.)*`;
      } else {
        responseText = `### Offline Evidence Search Result

I searched across all ${answersWithText.length} uploaded policy documents, but did not find any explicit mentions of your query: *"${queryMessage}"*.

*(Note: The local Ollama server running \`gemma4:e2b\` is currently offline. For deeper semantic audits, ensure Ollama is serving locally.)*`;
      }

      return NextResponse.json({
        response: responseText,
        source: "fallback",
      });
    }

  } catch (error: any) {
    console.error("API error in evidence-chat:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
