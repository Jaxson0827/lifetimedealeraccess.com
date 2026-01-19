// Consultant fee schedule used across the app.
export const FEE_SCHEDULE = [
  { maxPrice: 8000, fee: 500, label: "Up to $8,000" },
  { maxPrice: 12000, fee: 600, label: "$8,001 – $12,000" },
  { maxPrice: 16000, fee: 800, label: "$12,001 – $16,000" },
  { maxPrice: 20000, fee: 1000, label: "$16,001 – $20,000" },
  { maxPrice: 25000, fee: 1250, label: "$20,001 – $25,000" },
  { maxPrice: 30000, fee: 1500, label: "$25,001 – $30,000" },
  { maxPrice: Infinity, fee: 1500, label: "$30,000+" },
] as const;

