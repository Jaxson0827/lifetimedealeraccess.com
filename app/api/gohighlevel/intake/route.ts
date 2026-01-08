import { NextRequest, NextResponse } from "next/server";
import {
  submitToGHL,
  formatPhoneForGHL,
  buildCustomFields,
  type GHLFormSubmission,
} from "@/lib/gohighlevel";
import type { IntakeFormData } from "@/lib/intake-types";

/**
 * POST /api/gohighlevel/intake
 * 
 * Handles intake form submissions and sends them to GoHighLevel
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
    const intakeData: IntakeFormData = body.intakeData;
    const attributionFields = body.attributionFields || {};

    // Build contact data from intake form
    const contactData: GHLFormSubmission = {
      contact: {
        source: attributionFields.source || "Website Intake Form",
        tags: ["Intake Form", "Vehicle Inquiry", "Website"],
        customFields: buildCustomFields({
          ...intakeData,
          ...attributionFields,
          submissionType: "intake_form",
          submittedAt: new Date().toISOString(),
        }),
      },
      opportunity: {
        title: `Vehicle Inquiry: ${intakeData.dreamVehicle || "New Lead"}`,
        pipelineId: pipelineId || undefined,
        stageId: stageId || undefined,
        customFields: {
          dreamVehicle: intakeData.dreamVehicle || "",
          priceRange: intakeData.priceRange || "",
          timeline: intakeData.timeline || "",
          paymentMethod: intakeData.paymentMethod || "",
        },
      },
      notes: buildIntakeNotes(intakeData, attributionFields),
    };

    // Submit to GoHighLevel
    const result = await submitToGHL(apiKey, locationId, contactData);

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
      opportunityId: result.opportunityId,
    });
  } catch (error) {
    console.error("Error submitting intake to GoHighLevel:", error);
    return NextResponse.json(
      {
        error: "Failed to submit intake form",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * Build formatted notes from intake form data
 */
function buildIntakeNotes(
  intakeData: IntakeFormData,
  attributionFields: Record<string, any>
): string {
  const sections: string[] = [];

  sections.push("=== VEHICLE INTAKE FORM SUBMISSION ===\n");

  // Step 1: Vehicle Wish List
  if (intakeData.dreamVehicle) {
    sections.push(`Dream Vehicle: ${intakeData.dreamVehicle}`);
  }
  if (intakeData.vehicleSpecificity) {
    sections.push(
      `Specificity: ${intakeData.vehicleSpecificity.replace(/_/g, " ")}`
    );
  }
  if (intakeData.priorities.length > 0) {
    sections.push(`Priorities: ${intakeData.priorities.join(", ")}`);
  }
  if (
    intakeData.alternativeVehicles.option1 ||
    intakeData.alternativeVehicles.option2 ||
    intakeData.alternativeVehicles.option3
  ) {
    const alternatives = [
      intakeData.alternativeVehicles.option1,
      intakeData.alternativeVehicles.option2,
      intakeData.alternativeVehicles.option3,
    ]
      .filter(Boolean)
      .join(", ");
    sections.push(`Alternative Vehicles: ${alternatives}`);
  }

  sections.push("");

  // Step 2: Core Requirements
  if (intakeData.vehicleUse) {
    sections.push(`Vehicle Use: ${intakeData.vehicleUse.replace(/_/g, " ")}`);
  }
  if (intakeData.features.length > 0) {
    sections.push(`Features: ${intakeData.features.join(", ")}`);
  }
  if (!intakeData.colorPreferences.doesntMatter) {
    if (intakeData.colorPreferences.favorites) {
      sections.push(`Favorite Colors: ${intakeData.colorPreferences.favorites}`);
    }
    if (intakeData.colorPreferences.avoid) {
      sections.push(`Colors to Avoid: ${intakeData.colorPreferences.avoid}`);
    }
  } else {
    sections.push("Color: Doesn't matter");
  }

  sections.push("");

  // Step 3: Year & Mileage
  if (intakeData.yearRange.from || intakeData.yearRange.to) {
    sections.push(
      `Year Range: ${intakeData.yearRange.from || "Any"} - ${
        intakeData.yearRange.to || "Any"
      }`
    );
  }
  if (intakeData.mileagePreference) {
    sections.push(
      `Mileage Preference: ${intakeData.mileagePreference.replace(/_/g, " ")}`
    );
  }

  sections.push("");

  // Step 4: Budget & Payment
  if (intakeData.priceRange) {
    sections.push(`Price Range: ${intakeData.priceRange.replace(/_/g, " ")}`);
  }
  if (intakeData.paymentMethod) {
    sections.push(
      `Payment Method: ${intakeData.paymentMethod.replace(/_/g, " ")}`
    );
  }
  if (intakeData.bankName) {
    sections.push(`Bank/Credit Union: ${intakeData.bankName}`);
  }
  if (intakeData.creditScore) {
    sections.push(
      `Credit Score: ${intakeData.creditScore.replace(/_/g, " ")}`
    );
  }
  if (intakeData.monthlyPaymentRange) {
    sections.push(
      `Monthly Payment: ${intakeData.monthlyPaymentRange.replace(/_/g, " ")}`
    );
  }

  sections.push("");

  // Step 5: Timing
  if (intakeData.timeline) {
    sections.push(`Timeline: ${intakeData.timeline.replace(/_/g, " ")}`);
  }
  if (intakeData.openToAdjustments) {
    sections.push(
      `Open to Adjustments: ${intakeData.openToAdjustments.replace(/_/g, " ")}`
    );
  }

  // Attribution
  if (attributionFields.consultantName) {
    sections.push(`\nReferred by: ${attributionFields.consultantName}`);
  }

  return sections.join("\n");
}
