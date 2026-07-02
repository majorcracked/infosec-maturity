import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const alerts = await prisma.securityAlert.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ alerts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { alertId, action } = await req.json();

    if (!alertId || !action) {
      return NextResponse.json(
        { error: "Missing alertId or action in request body" },
        { status: 400 }
      );
    }

    const alert = await prisma.securityAlert.findUnique({
      where: { id: alertId },
    });

    if (!alert) {
      return NextResponse.json(
        { error: `Alert with ID ${alertId} not found` },
        { status: 404 }
      );
    }

    if (action === "CONVERT") {
      // Find matching question based on alert title/source
      let questionMatch = await prisma.question.findFirst({
        where: {
          text: {
            contains: alert.title.includes("Credentials") || alert.title.includes("S3") || alert.title.includes("Plaintext")
              ? "encrypt"
              : alert.title.includes("MFA")
              ? "multi-factor"
              : "privilege",
          },
        },
      });

      if (!questionMatch) {
        // Fallback to any question
        questionMatch = await prisma.question.findFirst();
      }

      if (questionMatch) {
        // Upsert a high-priority RemediationTask associated with the question
        await prisma.remediationTask.upsert({
          where: { questionId: questionMatch.id },
          update: {
            priority: "HIGH",
            status: "OPEN",
          },
          create: {
            questionId: questionMatch.id,
            priority: "HIGH",
            status: "OPEN",
            assignedTo: "Security Incident Responder",
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days (High Priority)
          },
        });
      }

      // Update Alert Status
      const updatedAlert = await prisma.securityAlert.update({
        where: { id: alertId },
        data: { status: "CONVERTED" },
      });

      return NextResponse.json({
        success: true,
        alert: updatedAlert,
      });
    }

    if (action === "IGNORE") {
      const updatedAlert = await prisma.securityAlert.update({
        where: { id: alertId },
        data: { status: "IGNORED" },
      });

      return NextResponse.json({
        success: true,
        alert: updatedAlert,
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });

  } catch (error: any) {
    console.error("API error in alerts:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
