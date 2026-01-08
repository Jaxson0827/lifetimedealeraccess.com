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
  // #region agent log
  if (typeof window !== "undefined") {
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:32',message:'getAttribution called',data:{hasWindow:true,hasSessionStorage:typeof sessionStorage!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }
  // #endregion
  
  if (typeof window === "undefined") {
    return null;
  }

  // Try sessionStorage first
  const sessionData = sessionStorage.getItem(STORAGE_KEY);
  // #region agent log
  fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:40',message:'sessionStorage.getItem result',data:{hasSessionData:!!sessionData},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  if (sessionData) {
    try {
      const parsed = JSON.parse(sessionData) as Attribution;
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:44',message:'Attribution parsed from sessionStorage',data:{source:parsed.source},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return parsed;
    } catch (e) {
      // Invalid data, continue to cookie
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:48',message:'sessionStorage parse error',data:{error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
    }
  }

  // Fall back to cookie
  const cookies = document.cookie.split(";");
  // #region agent log
  fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:54',message:'Checking cookies',data:{cookieCount:cookies.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === STORAGE_KEY && value) {
      try {
        const parsed = JSON.parse(decodeURIComponent(value)) as Attribution;
        // #region agent log
        fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:60',message:'Attribution parsed from cookie',data:{source:parsed.source},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        return parsed;
      } catch (e) {
        // Invalid cookie data
        // #region agent log
        fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'attribution.ts:65',message:'Cookie parse error',data:{error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
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

