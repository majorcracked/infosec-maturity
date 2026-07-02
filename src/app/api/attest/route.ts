import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const attestations = await prisma.employeeAttestation.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ attestations });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { attestationId, employeeName } = await req.json();

    if (!attestationId || !employeeName) {
      return NextResponse.json(
        { error: "Missing required fields: attestationId, employeeName" },
        { status: 400 }
      );
    }

    const att = await prisma.employeeAttestation.findUnique({
      where: { id: attestationId },
    });

    if (!att) {
      return NextResponse.json(
        { error: `Attestation log with ID ${attestationId} not found` },
        { status: 404 }
      );
    }

    const updated = await prisma.employeeAttestation.update({
      where: { id: attestationId },
      data: {
        status: "SIGNED",
        employeeName, // Allow correcting the spelling or confirming name
        signedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      attestation: updated,
    });

  } catch (error: any) {
    console.error("API error in attest:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest) {
  try {
    const { employeeName, employeeEmail, policyTitle } = await req.json();
    if (!employeeName || !employeeEmail || !policyTitle) {
       return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }
    const att = await prisma.employeeAttestation.create({
       data: {
         employeeName,
         employeeEmail,
         policyTitle,
         status: "PENDING",
       }
    });
    return NextResponse.json({ success: true, attestation: att });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
