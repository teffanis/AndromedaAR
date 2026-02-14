import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  businessType?: string;
  monthlyBudget?: string;
  objective?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as LeadPayload;

  if (!body.name || !body.email || !body.businessType || !body.monthlyBudget || !body.objective) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  console.log("[ANDROMEDA-AR LEAD]", {
    ...body,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
