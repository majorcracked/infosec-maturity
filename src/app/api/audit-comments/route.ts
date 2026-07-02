import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");

    const comments = await prisma.auditComment.findMany({
      where: questionId ? { questionId } : {},
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ comments });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { questionId, author, text } = await req.json();

    if (!questionId || !author || !text) {
      return NextResponse.json(
        { error: "Missing required fields: questionId, author, text" },
        { status: 400 }
      );
    }

    const comment = await prisma.auditComment.create({
      data: {
        questionId,
        author,
        text,
      },
    });

    return NextResponse.json({
      success: true,
      comment,
    });

  } catch (error: any) {
    console.error("API error in audit-comments:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
