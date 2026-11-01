"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const whatsapp = "https://wa.me/5511949214071?text=" + encodeURIComponent("Olá! Vim pela página de orçamento da K7 Sites e quero conversar sobre uma landing page para meu negócio.");

export function WhatsAppContact({ className }: { className: string }) {
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const update = () => {
      const element = document.activeElement;
      setEditing(element instanceof HTMLElement && !!element.closest(".k7-lead-form") && element.matches("input:not([type=checkbox]), textarea, select"));
    };
    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);
    return () => {
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, []);
  return (
    <a className={className} hidden={editing} aria-hidden={editing} href={whatsapp} target="_blank" rel="noreferrer" onClick={() => {
      trackEvent("click_whatsapp", {
        page_path: window.location.pathname,
        button_location: "capture_bottom",
        link_text: "Falar direto no WhatsApp",
      });
    }}>
      <Image src="/whatsapp.svg" alt="" width={24} height={24} aria-hidden="true" />
      <span><strong>Falar direto no WhatsApp</strong></span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
