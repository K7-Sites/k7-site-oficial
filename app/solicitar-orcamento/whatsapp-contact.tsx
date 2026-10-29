"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const whatsapp = "https://wa.me/5511949214071?text=" + encodeURIComponent("Olá! Vim pela página de orçamento da K7 Sites e quero conversar sobre uma landing page para meu negócio.");

export function WhatsAppContact({ className }: { className: string }) {
  return (
    <a className={className} href={whatsapp} target="_blank" rel="noreferrer" onClick={() => {
      trackEvent("click_whatsapp", {
        page_path: window.location.pathname,
        button_location: "capture_bottom",
        link_text: "Prefere conversar? Chame no WhatsApp",
      });
    }}>
      <Image src="/whatsapp.svg" alt="" width={24} height={24} aria-hidden="true" />
      <span>Prefere conversar? <strong>Chame no WhatsApp</strong></span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
