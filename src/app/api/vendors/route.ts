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
    const { vendorId, score } = await req.json();

    if (!vendorId || score === undefined) {
      return NextResponse.json(
        { error: "Missing vendorId or score in request body" },
        { status: 400 }
      );
    }

    const nScore = Number(score);
    let complianceStatus = "PENDING";
    if (nScore >= 80) complianceStatus = "VERIFIED";
    else if (nScore < 50) complianceStatus = "FAILED";

    const vendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: {
        score: nScore,
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
