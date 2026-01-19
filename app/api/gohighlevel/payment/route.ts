import { NextRequest, NextResponse } from "next/server";
import {
  buildCustomFields,
  formatPhoneForGHL,
} from "@/lib/gohighlevel";
import { searchIntakeSchema } from "@/lib/search-intake-validation";
import { submitToGHLWebhook } from "@/lib/gohighlevel-webhook";

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
    const pipelineId = process.env.GOHIGHLEVEL_PIPELINE_ID; // Optional
    const stageId = process.env.GOHIGHLEVEL_STAGE_ID; // Optional

    // Parse request body
    const body = await request.json();
    const {
      amount,
      paymentMethod,
      transactionId,
      intakeData,
      attributionFields,
    } = body;

    const parsedIntake =
      intakeData && typeof intakeData === "object"
        ? searchIntakeSchema.partial().safeParse(intakeData)
        : null;

    const safeIntake = parsedIntake?.success ? parsedIntake.data : undefined;

    const name =
      typeof safeIntake?.name === "string"
        ? safeIntake.name
        : typeof intakeData?.fullName === "string"
          ? intakeData.fullName
          : undefined;
    const email =
      typeof safeIntake?.email === "string" ? safeIntake.email : undefined;
    const phone =
      typeof safeIntake?.phone === "string" ? safeIntake.phone : undefined;
    const { firstName, lastName } = splitName(name);

    const submittedAt = new Date().toISOString();

    await submitToGHLWebhook({
      event: "payment",
      submittedAt,
      amount,
      paymentMethod: paymentMethod || "unknown",
      transactionId: transactionId || "",
      tags: ["Payment", "Paid Customer", "Website"],
      source: attributionFields?.source || "Website Payment",
      contact: {
        ...(firstName ? { firstName } : {}),
        ...(lastName ? { lastName } : {}),
        ...(email ? { email } : {}),
        ...(phone ? { phone: formatPhoneForGHL(phone) } : {}),
      },
      opportunity: {
        title: `Payment Received - ${amount ? `$${amount}` : "Vehicle Inquiry"}`,
        pipelineId: pipelineId || undefined,
        stageId: stageId || undefined,
        monetaryValue:
          typeof amount === "number"
            ? amount
            : typeof amount === "string"
              ? parseFloat(amount)
              : undefined,
        customFields: {
          paymentStatus: "completed",
          transactionId: transactionId || "",
        },
      },
      notes: buildPaymentNotes(amount, paymentMethod, transactionId, safeIntake),
      // Keep a flattened version for easier mapping inside GHL workflows
      customFields: buildCustomFields({
        ...(safeIntake || {}),
        ...(attributionFields || {}),
        paymentAmount: amount,
        paymentMethod: paymentMethod || "unknown",
        transactionId: transactionId || "",
        submissionType: "payment",
        submittedAt,
      }),
      intakeData: intakeData || {},
      attribution: attributionFields || {},
      raw: body,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error submitting payment to GoHighLevel webhook:", error);
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
    if (intakeData.vehicleLookingFor) {
      sections.push(`Vehicle Looking For: ${intakeData.vehicleLookingFor}`);
    }
    if (intakeData.phone) {
      sections.push(`Phone: ${intakeData.phone}`);
    }
    if (intakeData.email) {
      sections.push(`Email: ${intakeData.email}`);
    }
  }

  sections.push(`\nPayment Date: ${new Date().toISOString()}`);

  return sections.join("\n");
}
