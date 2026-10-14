type EventParameters = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: "event", eventName: string, parameters?: EventParameters) => void;
  }
}

export function trackEvent(eventName: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
    return;
  }

  window.dataLayer.push({ event: eventName, ...parameters });
}
