import { NextRequest, NextResponse } from "next/server";
import { submitToGHLWebhook } from "@/lib/gohighlevel-webhook";
import { buildCustomFields } from "@/lib/gohighlevel";

/**
 * POST /api/gohighlevel/intake
 *
 * Handles intake form submissions and sends them to GoHighLevel via webhook.
 * The intake form submits non-blocking from the client; this route should be fast and resilient.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const intakeData =
      body && typeof body === "object" && "intakeData" in body
        ? (body as any).intakeData
        : undefined;
    const attributionFields =
      body && typeof body === "object" && "attributionFields" in body
        ? (body as any).attributionFields
        : undefined;

    const submittedAt = new Date().toISOString();

    await submitToGHLWebhook({
      event: "intake_form",
      submittedAt,
      source: "Website Intake Form",
      tags: ["Intake Form", "Vehicle Inquiry", "Website"],
      intakeData: intakeData || {},
      attribution: attributionFields || {},
      // Flatten intake + attribution for simple field mapping in GHL workflows
      customFields: buildCustomFields({
        ...(intakeData && typeof intakeData === "object" ? intakeData : {}),
        ...(attributionFields && typeof attributionFields === "object"
          ? attributionFields
          : {}),
        submissionType: "intake_form",
        submittedAt,
      }),
      raw: body,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting intake to GoHighLevel webhook:", error);
    return NextResponse.json(
      {
        error: "Failed to submit intake data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

