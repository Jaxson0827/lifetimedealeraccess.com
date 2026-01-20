import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_EMAIL } from "@/lib/site-contact";

export const dynamic = "force-dynamic";

type ContactEmailRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: unknown;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function buildEmailText(payload: ContactEmailRequest): string {
  const firstName = typeof payload.firstName === "string" ? payload.firstName : "";
  const lastName = typeof payload.lastName === "string" ? payload.lastName : "";
  const fromEmail = typeof payload.email === "string" ? payload.email : "";
  const phone = typeof payload.phone === "string" ? payload.phone : "";
  const message = typeof payload.message === "string" ? payload.message : "";

  const attributionKeys = Object.keys(payload).filter(
    (k) => k.startsWith("attribution_") || k.startsWith("consultant_") || k.startsWith("utm_")
  );

  const lines: string[] = [];
  lines.push("New Website Message");
  lines.push("");
  lines.push(`Name: ${[firstName, lastName].filter(Boolean).join(" ")}`);
  lines.push(`Email: ${fromEmail}`);
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push("");
  lines.push("Message:");
  lines.push(message || "(no message provided)");

  if (attributionKeys.length) {
    lines.push("");
    lines.push("Attribution:");
    for (const key of attributionKeys) {
      const value = payload[key];
      if (typeof value === "string" && value.trim()) {
        lines.push(`- ${key}: ${value}`);
      }
    }
  }

  lines.push("");
  lines.push(`Submitted At: ${new Date().toISOString()}`);
  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactEmailRequest;

    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
    const replyTo = typeof body.email === "string" ? body.email.trim() : "";

    if (!firstName || !lastName || !replyTo) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, email" },
        { status: 400 }
      );
    }

    const resendApiKey = requireEnv("RESEND_API_KEY");
    const emailFrom = requireEnv("EMAIL_FROM");
    const to = process.env.CONTACT_TO_EMAIL || SITE_EMAIL;

    const resend = new Resend(resendApiKey);

    const subject = `New message from ${firstName} ${lastName}`;
    const text = buildEmailText(body);

    const { error } = await resend.emails.send({
      from: emailFrom,
      to,
      replyTo,
      subject,
      text,
    });

    if (error) {
      throw new Error(
        typeof error === "string" ? error : (error as any)?.message || "Resend error"
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

