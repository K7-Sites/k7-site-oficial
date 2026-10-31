type EventParameters = Record<string, string | number | boolean | null | undefined>;
declare global { interface Window { gtag?: (...args: unknown[]) => void } }
export function trackEvent(eventName: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, parameters);
}
