"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { captureLeadAttribution, readLeadAttribution } from "@/lib/lead-attribution";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type ServiceOption = { value: string; label: string; service_id: number | null };

type LeadFormCopy = {
  kicker: string;
  title: string;
  description: string;
  submitLabel: string;
};

const defaultCopy: LeadFormCopy = {
  kicker: "ORÇAMENTO PERSONALIZADO",
  title: "Vamos colocar seu projeto no ar?",
  description: "",
  submitLabel: "Quero meu orçamento",
};

export function HeroLeadForm({ placement = "hero", copy = defaultCopy }: {
  placement?: "hero" | "contact" | "modal" | "lp-contact" | "lp-modal" | "lp-capture";
  copy?: LeadFormCopy;
}) {
  const [pending, setPending] = useState(false);
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [servicesError, setServicesError] = useState(false);
  const [retryServices, setRetryServices] = useState(0);
  useEffect(() => {
    captureLeadAttribution();
    let active = true;
    fetch("/api/services").then(async response => {
      if (!response.ok) throw new Error("Serviços indisponíveis");
      const data = await response.json();
      if (!Array.isArray(data.services) || data.services.length === 0) throw new Error("Catálogo vazio");
      if (active) { setServices(data.services); setServicesError(false); }
    }).catch(() => { if (active) setServicesError(true); });
    return () => { active = false; };
  }, [retryServices]);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);
  const sending = useRef(false);
  const submissionId = useRef<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    sending.current = true;
    setPending(true);
    setSuccess(false);
    setFeedback("");
    submissionId.current ??= (typeof crypto.randomUUID === "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, character => { const value = Math.floor(Math.random() * 16); return (character === "x" ? value : (value & 3) | 8).toString(16); }));
    const values = new FormData(form);
    if (values.get("privacy_acknowledgement") !== "yes") { sending.current = false; setPending(false); setFeedback("Confirme a ciência sobre o uso dos dados."); return; }
    try {
      const response = await fetch(placement.startsWith("lp-") ? "/api/leads/criacao-lp" : "/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          phone: values.get("phone"),
          service: values.get("service"),
          service_id: services.find(item => item.value === values.get("service"))?.service_id ?? null,
          website: values.get("website"),
          submission_id: submissionId.current,
          ...(placement === "lp-capture" ? {
            project_type: "Captação Instagram",
            project_message: "Formulário da página Captação Instagram (/solicitar-orcamento).",
          } : {}),
          ...readLeadAttribution(),
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(typeof body?.message === "string" ? body.message : "Não foi possível enviar o contato. Tente novamente.");
      }
      trackEvent("form_contato_enviado", {
        page_path: window.location.pathname,
        project_type: String(values.get("service") ?? ""),
        form_placement: placement,
      });
      setSuccess(true);
      submissionId.current = null;
      window.location.assign("/mensagem-recebida-com-sucesso");
    } catch (error) {
      setFeedback(error instanceof Error && error.message !== "Failed to fetch" ? error.message : "Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <div className="k7-lead-card">
      <div className="k7-lead-card-heading">
        <span className="k7-lead-kicker"><span className="k7-lead-dot" /> {copy.kicker}</span>
        <h2>{copy.title}</h2>
        {copy.description && <p>{copy.description}</p>}
      </div>
      <form className="k7-lead-form" onSubmit={submit} aria-label={placement === "hero" ? "Orçamento rápido" : "Solicitar orçamento"}>
        <label htmlFor={placement + "-lead-name"}>Seu nome
          <input id={placement + "-lead-name"} name="name" type="text" required minLength={2} maxLength={255} autoComplete="name" placeholder="Como podemos chamar você?" />
        </label>
        <label htmlFor={placement + "-lead-service"}>Serviço desejado
          <select
            id={placement + "-lead-service"}
            name="service"
            required
            defaultValue=""
            onChange={(event) => {
              trackEvent("select_service", {
                page_path: window.location.pathname,
                service: event.currentTarget.value,
                form_placement: placement,
              });
            }}
          >
            <option value="" disabled>Selecione o serviço</option>
            {services.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
            {servicesError && <option value="outros">Outro serviço / Quero um orçamento</option>}
          </select>
          {servicesError && <span role="status">Não foi possível carregar todos os serviços. Você pode selecionar “Outro serviço” ou <button type="button" className="k7-service-retry" onClick={() => { setServicesError(false); setRetryServices(value => value + 1); }}>tentar novamente</button>.</span>}
        </label>
        <label htmlFor={placement + "-lead-phone"}>Seu WhatsApp
          <input id={placement + "-lead-phone"} name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" pattern="[(][0-9]{2}[)] [0-9]{4,5}-[0-9]{4}" title="Informe seu WhatsApp com DDD" maxLength={15} onChange={(event) => { event.currentTarget.value = formatPhone(event.currentTarget.value); }} />
        </label>
        <div className="k7-lead-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label className="k7-privacy-consent"><input type="checkbox" name="privacy_acknowledgement" value="yes" required /><span className="k7-privacy-consent-text">Li a <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e estou ciente de que nome, WhatsApp e serviço serão usados para responder meu pedido. O envio não autoriza marketing.</span></label>
        <button type="submit" className="k7-lead-submit" disabled={pending}>{pending ? "Enviando..." : copy.submitLabel} <Image src="/whatsapp.svg" alt="" width={20} height={20} aria-hidden="true" className="k7-lead-whatsapp-icon" /></button>
        <p className="k7-lead-privacy">Seus dados serão usados apenas para entrarmos em contato sobre o seu pedido.</p>
        <p className={success ? "k7-lead-feedback is-success" : "k7-lead-feedback"} role="status" aria-live="polite">{feedback}</p>
      </form>
    </div>
  );
}
