"use client";

const fields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const storageKey = "k7_lead_attribution";

export function captureLeadAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const incoming: Record<string, string> = {};
    for (const field of fields) {
      const value = params.get(field)?.trim();
      if (value) incoming[field] = value.slice(0, 255);
    }
    if (!Object.keys(incoming).length) return;
    const previous = readLeadAttribution();
    sessionStorage.setItem(storageKey, JSON.stringify({ ...previous, ...incoming }));
  } catch {
    // Browsers with storage disabled can still submit the lead.
  }
}

export function readLeadAttribution(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(storageKey);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const result: Record<string, string> = {};
    for (const field of fields) {
      const value = (parsed as Record<string, unknown>)[field];
      if (typeof value === "string") result[field] = value.slice(0, 255);
    }
    return result;
  } catch {
    return {};
  }
}
