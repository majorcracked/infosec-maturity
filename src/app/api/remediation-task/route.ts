import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { questionId, assignedTo, dueDate, status, priority } = await req.json();

    if (!questionId) {
      return NextResponse.json(
        { error: "Missing questionId in request body" },
        { status: 400 }
      );
    }

    const task = await prisma.remediationTask.upsert({
      where: { questionId },
      update: {
        assignedTo: assignedTo !== undefined ? assignedTo : undefined,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        status: status !== undefined ? status : undefined,
        priority: priority !== undefined ? priority : undefined,
      },
      create: {
        questionId,
        assignedTo: assignedTo || "Audit Lead",
        dueDate: dueDate ? new Date(dueDate) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: status || "OPEN",
        priority: priority || "MEDIUM",
      },
    });

    return NextResponse.json({
      success: true,
      task,
    });
  } catch (error: any) {
    console.error("API error in remediation-task:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
