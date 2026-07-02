import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Polyfill browser globals required by pdfjs-dist (internal to pdf-parse) during build evaluation
if (typeof globalThis.DOMMatrix === "undefined") {
  (globalThis as any).DOMMatrix = class DOMMatrix {};
}
if (typeof globalThis.ImageData === "undefined") {
  (globalThis as any).ImageData = class ImageData {};
}
if (typeof globalThis.Path2D === "undefined") {
  (globalThis as any).Path2D = class Path2D {};
}

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const assessmentId = formData.get("assessmentId") as string;
    const questionId = formData.get("questionId") as string;
    const responseValue = formData.get("response") as string;

    if (!assessmentId || !questionId || !responseValue) {
      return NextResponse.json(
        { error: "Missing required fields: assessmentId, questionId, response" },
        { status: 400 }
      );
    }

    // Retrieve the question to get the correct text payload
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });

    if (!question) {
      return NextResponse.json(
        { error: `Question with ID ${questionId} not found` },
        { status: 404 }
      );
    }

    let extractedText = "";
    let aiVerified: boolean | null = null;
    let aiReasoning: string | null = null;

    // Check if a file was uploaded
    if (file && file.size > 0) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // Parse PDF content
        const pdfData = await pdf(buffer);
        extractedText = pdfData.text || "";
        
        if (!extractedText.trim()) {
          return NextResponse.json(
            { error: "The uploaded PDF appears to be empty or unscannable." },
            { status: 400 }
          );
        }

        // Call our internal verify-evidence API using the request's origin
        const origin = new URL(req.url).origin;
        const verifyRes = await fetch(`${origin}/api/verify-evidence`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionText: question.text,
            documentText: extractedText,
          }),
        });

        if (verifyRes.ok) {
          const verification = await verifyRes.json();
          aiVerified = verification.verified;
          aiReasoning = verification.reasoning;
        } else {
          aiReasoning = "Failed to run AI verification on the document.";
        }
      } catch (pdfError: any) {
        console.error("PDF Parsing or Verification failed:", pdfError);
        return NextResponse.json(
          { error: `Failed to parse PDF evidence: ${pdfError.message}` },
          { status: 400 }
        );
      }
    }

    // Upsert the Answer record
    const answer = await prisma.answer.upsert({
      where: {
        assessmentId_questionId: {
          assessmentId,
          questionId,
        },
      },
      update: {
        response: responseValue,
        evidenceUrl: file ? file.name : null,
        evidenceText: file ? extractedText : null,
        aiVerified,
        aiReasoning,
        verifiedAt: file ? new Date() : null,
      },
      create: {
        assessmentId,
        questionId,
        response: responseValue,
        evidenceUrl: file ? file.name : null,
        evidenceText: file ? extractedText : null,
        aiVerified,
        aiReasoning,
        verifiedAt: file ? new Date() : null,
      },
    });

    // Recalculate Assessment Maturity Score
    // Formula: (Number of YES answers / Total questions) * 5 (maturity levels)
    const totalQuestionsCount = await prisma.question.count();
    const yesAnswersCount = await prisma.answer.count({
      where: {
        assessmentId,
        response: "YES",
      },
    });

    const newScore = totalQuestionsCount > 0 
      ? Math.round(((yesAnswersCount / totalQuestionsCount) * 5) * 10) / 10 
      : 0.0;

    await prisma.assessment.update({
      where: { id: assessmentId },
      data: { score: newScore },
    });

    return NextResponse.json({
      success: true,
      answer,
      newScore,
    });
  } catch (error: any) {
    console.error("API error in upload-evidence:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
