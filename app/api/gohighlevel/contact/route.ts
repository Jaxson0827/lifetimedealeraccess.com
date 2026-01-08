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
  // #region agent log
  const fs = require('fs');
  const logPath = 'c:\\Users\\hales\\Downloads\\concierge7.0\\.cursor\\debug.log';
  const logEntry = {location:'api/gohighlevel/contact/route.ts:14',message:'API route called',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
  try { fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n'); } catch {}
  // #endregion

  try {
    // Get environment variables
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;

    // #region agent log
    const logEntry2 = {location:'api/gohighlevel/contact/route.ts:20',message:'Environment variables check',data:{hasApiKey:!!apiKey,hasLocationId:!!locationId,apiKeyLength:apiKey?.length||0,locationIdLength:locationId?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
    try { fs.appendFileSync(logPath, JSON.stringify(logEntry2) + '\n'); } catch {}
    // #endregion

    if (!apiKey || !locationId) {
      console.error("GoHighLevel credentials not configured");
      // #region agent log
      const logEntry3 = {location:'api/gohighlevel/contact/route.ts:25',message:'Missing credentials',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
      try { fs.appendFileSync(logPath, JSON.stringify(logEntry3) + '\n'); } catch {}
      // #endregion
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    // #region agent log
    const logEntry4 = {location:'api/gohighlevel/contact/route.ts:33',message:'Request body parsed',data:{hasFirstName:!!body.firstName,hasLastName:!!body.lastName,hasEmail:!!body.email,bodyKeys:Object.keys(body)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
    try { fs.appendFileSync(logPath, JSON.stringify(logEntry4) + '\n'); } catch {}
    // #endregion

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
      // #region agent log
      const logEntry5 = {location:'api/gohighlevel/contact/route.ts:45',message:'Validation failed',data:{hasFirstName:!!firstName,hasLastName:!!lastName,hasEmail:!!email},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
      try { fs.appendFileSync(logPath, JSON.stringify(logEntry5) + '\n'); } catch {}
      // #endregion
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

    // #region agent log
    const logEntry6 = {location:'api/gohighlevel/contact/route.ts:68',message:'Submitting to GoHighLevel',data:{hasContactData:!!contactData,hasNotes:!!contactData.notes},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
    try { fs.appendFileSync(logPath, JSON.stringify(logEntry6) + '\n'); } catch {}
    // #endregion

    // Submit to GoHighLevel
    const result = await submitToGHL(apiKey, locationId, contactData);

    // #region agent log
    const logEntry7 = {location:'api/gohighlevel/contact/route.ts:72',message:'GoHighLevel submission success',data:{contactId:result.contactId,hasOpportunityId:!!result.opportunityId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
    try { fs.appendFileSync(logPath, JSON.stringify(logEntry7) + '\n'); } catch {}
    // #endregion

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
    });
  } catch (error) {
    // #region agent log
    const logEntry8 = {location:'api/gohighlevel/contact/route.ts:79',message:'GoHighLevel submission error',data:{error:String(error),errorName:error instanceof Error?error.name:'unknown',errorMessage:error instanceof Error?error.message:String(error),stack:error instanceof Error?error.stack:undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
    try { fs.appendFileSync(logPath, JSON.stringify(logEntry8) + '\n'); } catch {}
    // #endregion
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
