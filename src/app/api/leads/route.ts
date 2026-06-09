import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  model?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 422 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 422 });
  }

  const lead = {
    name,
    email,
    phone: payload.phone?.trim() || null,
    model: payload.model?.trim() || null,
    message: payload.message?.trim() || null,
    receivedAt: new Date().toISOString(),
  };

  // TODO: persist to a database or forward to a CRM / email service.
  // For now we log the lead so it is visible in the server/Vercel logs.
  console.log("New Voyah lead:", lead);

  return NextResponse.json({ ok: true }, { status: 201 });
}
