import { AttributionSource, ConsultantName } from "./consultants";

const STORAGE_KEY = "lifetime_attribution";

export interface Attribution {
  source: AttributionSource;
  consultantName?: ConsultantName | string;
  otherConsultantName?: string;
  capturedAt: string;
}

/**
 * Save attribution to sessionStorage and cookie
 */
export function saveAttribution(attribution: Attribution): void {
  const data = JSON.stringify(attribution);
  
  // Save to sessionStorage for same-session access
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STORAGE_KEY, data);
    
    // Also save to cookie for cross-tab persistence (7 days)
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(data)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }
}

/**
 * Get attribution from sessionStorage or cookie
 */
export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") {
    return null;
  }

  // Try sessionStorage first
  const sessionData = sessionStorage.getItem(STORAGE_KEY);

  if (sessionData) {
    try {
      const parsed = JSON.parse(sessionData) as Attribution;
      return parsed;
    } catch (e) {
      // Invalid data, continue to cookie
    }
  }

  // Fall back to cookie
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === STORAGE_KEY && value) {
      try {
        const parsed = JSON.parse(decodeURIComponent(value)) as Attribution;
        return parsed;
      } catch (e) {
        // Invalid cookie data
      }
    }
  }

  return null;
}

/**
 * Check if attribution has been captured
 */
export function hasAttribution(): boolean {
  return getAttribution() !== null;
}

/**
 * Clear attribution (for testing/reset)
 */
export function clearAttribution(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(STORAGE_KEY);
    document.cookie = `${STORAGE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

/**
 * Get attribution as URL params (for Calendly, etc.)
 */
export function getAttributionParams(): URLSearchParams {
  const params = new URLSearchParams();
  const attribution = getAttribution();
  
  if (attribution) {
    params.set("attribution_source", attribution.source);
    if (attribution.consultantName) {
      params.set("consultant", attribution.consultantName);
    }
    if (attribution.otherConsultantName) {
      params.set("consultant_other", attribution.otherConsultantName);
    }
  }
  
  return params;
}

/**
 * Get attribution as hidden form fields object
 */
export function getAttributionFormFields(): Record<string, string> {
  const attribution = getAttribution();
  
  if (!attribution) {
    return {};
  }
  
  const fields: Record<string, string> = {
    attribution_source: attribution.source,
  };
  
  if (attribution.consultantName) {
    fields.consultant_name = attribution.consultantName;
  }
  
  if (attribution.otherConsultantName) {
    fields.consultant_other = attribution.otherConsultantName;
  }
  
  return fields;
}

