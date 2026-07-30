import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  website?: string;
  phone?: string;
  message?: string;
  /** Honeypot — bots fill this; humans leave it empty. */
  companyWebsite?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeWebsiteUrl(value?: string) {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  return `https://${trimmed}`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const to = process.env.RESEND_TO;
  const from = process.env.RESEND_FROM;

  if (!to || !from) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // If the honeypot was filled, pretend success so bots don't keep retrying.
  if (body.companyWebsite?.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim();
  const businessName = body.businessName?.trim();
  const email = body.email?.trim();
  const website = normalizeWebsiteUrl(body.website);
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !businessName || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    html: `
      <h2>New Anthem Media contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Business:</strong> ${escapeHtml(businessName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Website:</strong> ${website ? escapeHtml(website) : "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send message." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
