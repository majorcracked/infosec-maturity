import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { organizationName } = await req.json();

    if (!organizationName) {
      return NextResponse.json(
        { error: "Missing organizationName in request body" },
        { status: 400 }
      );
    }

    // Try to find existing organization
    let org = await prisma.organization.findUnique({
      where: { name: organizationName },
    });

    if (!org) {
      org = await prisma.organization.create({
        data: { name: organizationName },
      });

      // Automatically initialize an assessment for this organization
      await prisma.assessment.create({
        data: {
          organizationId: org.id,
          score: 0.0,
          status: "IN_PROGRESS",
        },
      });
    }

    return NextResponse.json({
      success: true,
      organization: org,
    });

  } catch (error: any) {
    console.error("API error in workspace:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
