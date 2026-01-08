// Consultant names for Attribution Gate dropdown
// Add/remove consultants here as needed

export const CONSULTANTS = [
  "Alex Thompson",
  "Maria Garcia",
  "James Wilson",
  "Sarah Chen",
  "Michael Brooks",
] as const;

export type ConsultantName = (typeof CONSULTANTS)[number];

export const ATTRIBUTION_SOURCES = {
  CONSULTANT: "consultant",
  ONLINE: "online",
} as const;

export type AttributionSource = (typeof ATTRIBUTION_SOURCES)[keyof typeof ATTRIBUTION_SOURCES];

