import { NextRequest, NextResponse } from "next/server";
import {
  submitToGHL,
  buildCustomFields,
  type GHLFormSubmission,
} from "@/lib/gohighlevel";

function splitName(fullName: string | undefined): { firstName?: string; lastName?: string } {
  if (!fullName) return {};
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  if (!cleaned) return {};
  const parts = cleaned.split(" ");
  if (parts.length === 1) return { firstName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/**
 * POST /api/gohighlevel/payment
 * 
 * Handles payment submissions and sends them to GoHighLevel
 * Note: This should be called after payment processing is complete
 */
export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;
    const pipelineId = process.env.GOHIGHLEVEL_PIPELINE_ID; // Optional
    const stageId = process.env.GOHIGHLEVEL_STAGE_ID; // Optional

    if (!apiKey || !locationId) {
      console.error("GoHighLevel credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const {
      amount,
      paymentMethod,
      transactionId,
      intakeData,
      attributionFields,
    } = body;

    const name =
      typeof intakeData?.name === "string"
        ? intakeData.name
        : typeof intakeData?.fullName === "string"
          ? intakeData.fullName
          : undefined;
    const email =
      typeof intakeData?.email === "string" ? intakeData.email : undefined;
    const phone =
      typeof intakeData?.phone === "string" ? intakeData.phone : undefined;
    const { firstName, lastName } = splitName(name);

    // Build contact data
    const contactData: GHLFormSubmission = {
      contact: {
        source: attributionFields?.source || "Website Payment",
        tags: ["Payment", "Paid Customer", "Website"],
        ...(firstName ? { firstName } : {}),
        ...(lastName ? { lastName } : {}),
        ...(email ? { email } : {}),
        ...(phone ? { phone } : {}),
        customFields: buildCustomFields({
          ...(intakeData || {}),
          ...(attributionFields || {}),
          paymentAmount: amount,
          paymentMethod: paymentMethod || "unknown",
          transactionId: transactionId || "",
          submissionType: "payment",
          submittedAt: new Date().toISOString(),
        }),
      },
      opportunity: {
        title: `Payment Received - ${amount ? `$${amount}` : "Vehicle Inquiry"}`,
        pipelineId: pipelineId || undefined,
        stageId: stageId || undefined,
        monetaryValue: amount ? parseFloat(amount) : undefined,
        customFields: {
          paymentStatus: "completed",
          transactionId: transactionId || "",
        },
      },
      notes: buildPaymentNotes(amount, paymentMethod, transactionId, intakeData),
    };

    // Submit to GoHighLevel
    const result = await submitToGHL(apiKey, locationId, contactData);

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
      opportunityId: result.opportunityId,
    });
  } catch (error) {
    console.error("Error submitting payment to GoHighLevel:", error);
    return NextResponse.json(
      {
        error: "Failed to submit payment data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * Build formatted notes from payment data
 */
function buildPaymentNotes(
  amount: number | string | undefined,
  paymentMethod: string | undefined,
  transactionId: string | undefined,
  intakeData: any
): string {
  const sections: string[] = [];

  sections.push("=== PAYMENT RECEIVED ===\n");

  if (amount) {
    sections.push(`Amount: $${amount}`);
  }
  if (paymentMethod) {
    sections.push(`Payment Method: ${paymentMethod}`);
  }
  if (transactionId) {
    sections.push(`Transaction ID: ${transactionId}`);
  }

  if (intakeData) {
    sections.push("\n=== RELATED INTAKE DATA ===");
    if (intakeData.dreamVehicle) {
      sections.push(`Dream Vehicle: ${intakeData.dreamVehicle}`);
    }
    if (intakeData.priceRange) {
      sections.push(`Price Range: ${intakeData.priceRange.replace(/_/g, " ")}`);
    }
  }

  sections.push(`\nPayment Date: ${new Date().toISOString()}`);

  return sections.join("\n");
}
