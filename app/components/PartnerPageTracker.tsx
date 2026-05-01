"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PartnerPageTracker() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "partner_page_view", {
        event_category: "engagement",
      });
    }
  }, []);

  return null;
}
