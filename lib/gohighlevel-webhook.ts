/**
 * GoHighLevel Webhook Integration
 *
 * Posts form submissions to a LeadConnector / GoHighLevel webhook trigger URL.
 *
 * Configure with:
 * - GOHIGHLEVEL_WEBHOOK_URL (recommended)
 *
 * A default URL is provided as a fallback to match the current wiring request.
 */
const DEFAULT_GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/E8gRNl4ORiMg8d14mEv0/webhook-trigger/9b17844d-b952-449b-91af-a6fd4f7aa1fa";

export type GHLWebhookEvent =
  | "contact_form"
  | "intake_form"
  | "payment"
  | string;

export function getGHLWebhookUrl(): string {
  return process.env.GOHIGHLEVEL_WEBHOOK_URL || DEFAULT_GHL_WEBHOOK_URL;
}

export async function submitToGHLWebhook(payload: unknown): Promise<{
  status: number;
  responseText: string;
}> {
  const url = getGHLWebhookUrl();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const responseText = await res.text();

    if (!res.ok) {
      throw new Error(
        `GoHighLevel webhook error: ${res.status} - ${
          responseText || "No response body"
        }`
      );
    }

    return { status: res.status, responseText };
  } finally {
    clearTimeout(timeout);
  }
}

