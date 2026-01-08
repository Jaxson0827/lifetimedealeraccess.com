// TypeScript types for the Intake Form data

export interface IntakeFormData {
  // Step 1: Vehicle Wish List
  dreamVehicle: string;
  vehicleSpecificity: "very_specific" | "somewhat_flexible" | "very_open" | "";
  priorities: string[];
  prioritiesOther: string;
  alternativeVehicles: {
    option1: string;
    option2: string;
    option3: string;
  };

  // Step 2: Core Requirements
  vehicleUse: "personal" | "family" | "business" | "mixed" | "";
  features: string[];
  featuresOther: string;
  colorPreferences: {
    favorites: string;
    avoid: string;
    doesntMatter: boolean;
  };

  // Step 3: Year & Mileage
  yearRange: {
    from: string;
    to: string;
  };
  mileagePreference: "under_30k" | "under_60k" | "under_90k" | "under_120k" | "case_by_case" | "";

  // Step 4: Budget & Payment
  priceRange: string;
  priceRangeOther: string;
  paymentMethod: "cash" | "own_financing" | "financing_help" | "not_sure" | "";
  bankName: string;
  creditScore: "750_plus" | "700_749" | "650_699" | "600_649" | "below_600" | "not_sure" | "";
  monthlyPaymentRange: string;

  // Step 5: Timing & Flexibility
  timeline: "asap" | "2_4_weeks" | "flexible" | "";
  timelineOther: string;
  openToAdjustments: "yes" | "maybe" | "no" | "";

  // Attribution (backup)
  attributionSource: "consultant" | "online" | "";
  consultantName: string;
  otherConsultantName: string;
}

export const INITIAL_INTAKE_DATA: IntakeFormData = {
  // Step 1
  dreamVehicle: "",
  vehicleSpecificity: "",
  priorities: [],
  prioritiesOther: "",
  alternativeVehicles: {
    option1: "",
    option2: "",
    option3: "",
  },

  // Step 2
  vehicleUse: "",
  features: [],
  featuresOther: "",
  colorPreferences: {
    favorites: "",
    avoid: "",
    doesntMatter: false,
  },

  // Step 3
  yearRange: {
    from: "",
    to: "",
  },
  mileagePreference: "",

  // Step 4
  priceRange: "",
  priceRangeOther: "",
  paymentMethod: "",
  bankName: "",
  creditScore: "",
  monthlyPaymentRange: "",

  // Step 5
  timeline: "",
  timelineOther: "",
  openToAdjustments: "",

  // Attribution
  attributionSource: "",
  consultantName: "",
  otherConsultantName: "",
};

// Price range options (from client instructions)
export const PRICE_RANGES = [
  { value: "up_to_8k", label: "Up to $8k" },
  { value: "8k_12k", label: "$8k–12k" },
  { value: "12k_16k", label: "$12k–16k" },
  { value: "16k_20k", label: "$16k–20k" },
  { value: "20k_25k", label: "$20k–25k" },
  { value: "25k_30k", label: "$25k–30k" },
  { value: "30k_40k", label: "$30k–40k" },
  { value: "40k_50k", label: "$40k–50k" },
  { value: "50k_60k", label: "$50k–60k" },
  { value: "60k_70k", label: "$60k–70k" },
  { value: "70k_80k", label: "$70k–80k" },
  { value: "80k_plus", label: "$80k+" },
] as const;

// Monthly payment options (from client instructions)
export const MONTHLY_PAYMENT_RANGES = [
  { value: "under_300", label: "Under $300" },
  { value: "300_400", label: "$300–400" },
  { value: "400_500", label: "$400–500" },
  { value: "500_650", label: "$500–650" },
  { value: "650_800", label: "$650–800" },
  { value: "800_1000", label: "$800–1,000" },
  { value: "1000_1300", label: "$1,000–1,300" },
  { value: "not_sure", label: "Not sure" },
] as const;

// Priority options (from client instructions)
export const PRIORITY_OPTIONS = [
  { value: "reliability", label: "Reliability & longevity" },
  { value: "features", label: "Features & technology" },
  { value: "space", label: "Space / family needs" },
  { value: "performance", label: "Performance" },
  { value: "business", label: "Business use" },
  { value: "style", label: "Style / appearance" },
] as const;

// Feature options (from client instructions)
export const FEATURE_OPTIONS = [
  { value: "awd_4wd", label: "AWD / 4WD" },
  { value: "third_row", label: "Third-row seating" },
  { value: "towing", label: "Towing capability" },
  { value: "fuel_efficiency", label: "Fuel efficiency" },
  { value: "hybrid_ev", label: "Hybrid or EV" },
  { value: "carplay_android", label: "Apple CarPlay / Android Auto" },
  { value: "safety", label: "Advanced safety features" },
  { value: "leather", label: "Leather interior" },
  { value: "sunroof", label: "Sunroof / panoramic roof" },
  { value: "tech_package", label: "Technology package" },
  { value: "low_mileage", label: "Low mileage" },
  { value: "clean_title", label: "Clean title only" },
  { value: "warranty", label: "Warranty coverage important" },
] as const;

// Fee schedule (from client instructions)
export const FEE_SCHEDULE = [
  { maxPrice: 8000, fee: 500, label: "Up to $8,000" },
  { maxPrice: 12000, fee: 600, label: "$8,001 – $12,000" },
  { maxPrice: 16000, fee: 800, label: "$12,001 – $16,000" },
  { maxPrice: 20000, fee: 1000, label: "$16,001 – $20,000" },
  { maxPrice: 25000, fee: 1250, label: "$20,001 – $25,000" },
  { maxPrice: 30000, fee: 1500, label: "$25,001 – $30,000" },
  { maxPrice: Infinity, fee: 1500, label: "$30,000+" },
] as const;

// Storage key for form persistence
export const INTAKE_STORAGE_KEY = "lifetime_intake_form";

/**
 * Save intake form data to localStorage
 */
export function saveIntakeData(data: IntakeFormData): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(data));
  }
}

/**
 * Load intake form data from localStorage
 */
export function loadIntakeData(): IntakeFormData | null {
  // #region agent log
  if (typeof window !== "undefined") {
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake-types.ts:180',message:'loadIntakeData called',data:{hasWindow:true,hasLocalStorage:typeof localStorage!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }
  // #endregion
  
  if (typeof window === "undefined") {
    return null;
  }
  
  const stored = localStorage.getItem(INTAKE_STORAGE_KEY);
  // #region agent log
  fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake-types.ts:186',message:'localStorage.getItem result',data:{hasStored:!!stored,storedLength:stored?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as IntakeFormData;
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake-types.ts:191',message:'JSON.parse success',data:{parsedKeys:Object.keys(parsed)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return parsed;
    } catch (e) {
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake-types.ts:195',message:'JSON.parse error',data:{error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return null;
    }
  }
  return null;
}

/**
 * Clear intake form data from localStorage
 */
export function clearIntakeData(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(INTAKE_STORAGE_KEY);
  }
}

