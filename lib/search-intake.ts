export type SearchIntakeData = {
  name: string;
  email: string;
  phone: string;
  vehicleLookingFor: string;
  submittedAt?: string;
};

const STORAGE_KEY = "lifetime_search_intake_v1";

export function saveSearchIntakeData(data: SearchIntakeData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

export function loadSearchIntakeData(): SearchIntakeData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SearchIntakeData;
  } catch {
    return null;
  }
}

export function clearSearchIntakeData() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

