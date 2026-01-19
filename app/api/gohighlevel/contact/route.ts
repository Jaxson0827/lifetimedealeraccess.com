import { NextRequest, NextResponse } from "next/server";
import {
  formatPhoneForGHL,
  buildCustomFields,
} from "@/lib/gohighlevel";
import { submitToGHLWebhook } from "@/lib/gohighlevel-webhook";

/**
 * POST /api/gohighlevel/contact
 * 
 * Handles contact form submissions and sends them to GoHighLevel
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      ...attributionFields
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, email" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    // Submit to GoHighLevel via webhook
    await submitToGHLWebhook({
      event: "contact_form",
      submittedAt,
      contact: {
        firstName,
        lastName,
        email,
        phone: phone ? formatPhoneForGHL(phone) : undefined,
      },
      message: message || "",
      tags: ["Contact Form", "Website"],
      source: "Website Contact Form",
      // Keep a flattened version for easier mapping inside GHL workflows
      customFields: buildCustomFields({
        ...attributionFields,
        message: message || "",
        submissionType: "contact_form",
        submittedAt,
      }),
      attribution: attributionFields,
      raw: body,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error submitting contact form to GoHighLevel webhook:", error);
    return NextResponse.json(
      {
        error: "Failed to submit form",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
