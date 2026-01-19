/**
 * GoHighLevel API Integration
 * 
 * This module provides functions to interact with the GoHighLevel API
 * for creating contacts, opportunities, and tracking form submissions.
 * 
 * Documentation: https://highlevel.stoplight.io/docs/integrations
 */

export interface GHLContact {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  address?: {
    address1?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
}

export interface GHLOpportunity {
  title: string;
  contactId: string;
  pipelineId?: string;
  stageId?: string;
  monetaryValue?: number;
  assignedTo?: string;
  customFields?: Record<string, any>;
}

export interface GHLFormSubmission {
  contact: GHLContact;
  opportunity?: Omit<GHLOpportunity, "contactId">;
  notes?: string;
}

/**
 * Create or update a contact in GoHighLevel
 */
export async function createGHLContact(
  apiKey: string,
  locationId: string,
  contact: GHLContact
): Promise<{ contactId: string }> {
  const requestBody = {
    ...contact,
    locationId,
  };

  const response = await fetch(
    `https://rest.gohighlevel.com/v1/contacts/`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GoHighLevel API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return { contactId: data.contact?.id || data.id };
}

/**
 * Create an opportunity/deal in GoHighLevel
 */
export async function createGHLOpportunity(
  apiKey: string,
  locationId: string,
  opportunity: GHLOpportunity
): Promise<{ opportunityId: string }> {
  const response = await fetch(
    `https://rest.gohighlevel.com/v1/opportunities/`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify({
        ...opportunity,
        locationId,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GoHighLevel API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return { opportunityId: data.opportunity?.id || data.id };
}

/**
 * Add a note to a contact in GoHighLevel
 */
export async function addGHLNote(
  apiKey: string,
  locationId: string,
  contactId: string,
  note: string
): Promise<void> {
  const response = await fetch(
    `https://rest.gohighlevel.com/v1/contacts/${contactId}/notes`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        body: note,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GoHighLevel API error: ${response.status} - ${error}`);
  }
}

/**
 * Submit a complete form submission to GoHighLevel
 * Creates contact, opportunity (if provided), and notes (if provided)
 */
export async function submitToGHL(
  apiKey: string,
  locationId: string,
  submission: GHLFormSubmission
): Promise<{ contactId: string; opportunityId?: string }> {
  // Create or update contact
  const { contactId } = await createGHLContact(apiKey, locationId, submission.contact);

  let opportunityId: string | undefined;

  // Create opportunity if provided
  if (submission.opportunity) {
    const oppResult = await createGHLOpportunity(apiKey, locationId, {
      ...submission.opportunity,
      contactId,
    });
    opportunityId = oppResult.opportunityId;
  }

  // Add note if provided
  if (submission.notes) {
    await addGHLNote(apiKey, locationId, contactId, submission.notes);
  }

  return { contactId, opportunityId };
}

/**
 * Format phone number for GoHighLevel (E.164 format preferred)
 */
export function formatPhoneForGHL(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");
  
  // If it starts with 1 and has 11 digits, it's already formatted
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  
  // If it has 10 digits, assume US number and add +1
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  
  // Return as-is if already formatted or can't determine
  return phone.startsWith("+") ? phone : `+${digits}`;
}

/**
 * Build custom fields object from form data
 */
export function buildCustomFields(data: Record<string, any>): Record<string, any> {
  const customFields: Record<string, any> = {};
  
  // Flatten nested objects and arrays
  for (const [key, value] of Object.entries(data)) {
    if (value === null || value === undefined || value === "") {
      continue;
    }
    
    if (Array.isArray(value)) {
      customFields[key] = value.join(", ");
    } else if (typeof value === "object") {
      // Flatten nested objects
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        if (nestedValue !== null && nestedValue !== undefined && nestedValue !== "") {
          customFields[`${key}_${nestedKey}`] = nestedValue;
        }
      }
    } else {
      customFields[key] = value;
    }
  }
  
  return customFields;
}
