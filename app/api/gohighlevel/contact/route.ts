import { NextRequest, NextResponse } from "next/server";
import {
  submitToGHL,
  formatPhoneForGHL,
  buildCustomFields,
  type GHLFormSubmission,
} from "@/lib/gohighlevel";

/**
 * POST /api/gohighlevel/contact
 * 
 * Handles contact form submissions and sends them to GoHighLevel
 */
export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;

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

    // Build contact data
    const contactData: GHLFormSubmission = {
      contact: {
        firstName,
        lastName,
        email,
        phone: phone ? formatPhoneForGHL(phone) : undefined,
        source: "Website Contact Form",
        tags: ["Contact Form", "Website"],
        customFields: buildCustomFields({
          ...attributionFields,
          message: message || "",
          submissionType: "contact_form",
          submittedAt: new Date().toISOString(),
        }),
      },
      notes: message
        ? `Contact Form Message:\n\n${message}`
        : "Contact form submission",
    };

    // Submit to GoHighLevel
    const result = await submitToGHL(apiKey, locationId, contactData);

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
    });
  } catch (error) {
    console.error("Error submitting to GoHighLevel:", error);
    return NextResponse.json(
      {
        error: "Failed to submit form",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
