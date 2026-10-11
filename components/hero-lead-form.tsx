"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type ServiceOption = { value: string; label: string; service_id: number | null };

export function HeroLeadForm({ placement = "hero" }: { placement?: "hero" | "contact" | "modal" }) {
  const [pending, setPending] = useState(false);
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [servicesError, setServicesError] = useState(false);
  useEffect(() => {
    let active = true;
    fetch("/api/services").then(async response => {
      if (!response.ok) throw new Error("Serviços indisponíveis");
      const data = await response.json();
      if (active) setServices(data.services);
    }).catch(() => { if (active) setServicesError(true); });
    return () => { active = false; };
  }, []);
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
    submissionId.current ??= crypto.randomUUID();
    const values = new FormData(form);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          phone: values.get("phone"),
          service: values.get("service"),
          service_id: services.find(item => item.value === values.get("service"))?.service_id ?? null,
          website: values.get("website"),
          submission_id: submissionId.current,
        }),
      });
      if (!response.ok) throw new Error("Falha no envio");
      trackEvent("form_contato_enviado", {
        page_path: window.location.pathname,
        project_type: String(values.get("service") ?? ""),
        form_placement: placement,
      });
      setSuccess(true);
      submissionId.current = null;
      window.location.assign("/mensagem-recebida-com-sucesso");
    } catch {
      setFeedback("Não foi possível enviar. Confira seus dados e tente novamente.");
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <div className="k7-lead-card">
      <div className="k7-lead-card-heading">
        <span className="k7-lead-kicker"><span className="k7-lead-dot" /> ATENDIMENTO PELO WHATSAPP</span>
        <h2>Vamos conversar sobre seu projeto?</h2>
        <p>Preencha os dados abaixo e nossa equipe entra em contato com você pelo WhatsApp.</p>
      </div>
      <form className="k7-lead-form" onSubmit={submit} aria-label={placement === "hero" ? "Orçamento rápido" : "Solicitar orçamento"}>
        <label htmlFor={placement + "-lead-name"}>Seu nome
          <input id={placement + "-lead-name"} name="name" type="text" required minLength={2} maxLength={255} autoComplete="name" placeholder="Como podemos te chamar?" />
        </label>
        <label htmlFor={placement + "-lead-service"}>Qual serviço você precisa?
          <select id={placement + "-lead-service"} name="service" required defaultValue="">
            <option value="" disabled>Selecione o serviço</option>
            {services.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
          </select>
          {servicesError && <span role="alert">Serviços indisponíveis no momento. Tente novamente mais tarde.</span>}
        </label>
        <label htmlFor={placement + "-lead-phone"}>Seu WhatsApp
          <input id={placement + "-lead-phone"} name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" pattern="[(][0-9]{2}[)] [0-9]{4,5}-[0-9]{4}" title="Informe seu WhatsApp com DDD" maxLength={15} onChange={(event) => { event.currentTarget.value = formatPhone(event.currentTarget.value); }} />
        </label>
        <div className="k7-lead-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <button type="submit" className="k7-lead-submit" disabled={pending}>{pending ? "Enviando..." : "Quero conversar pelo WhatsApp"} <Image src="/whatsapp.svg" alt="" width={20} height={20} aria-hidden="true" className="k7-lead-whatsapp-icon" /></button>
        <p className="k7-lead-privacy">Sem compromisso. Seus dados serão usados apenas para responder ao seu contato.</p>
        <p className={success ? "k7-lead-feedback is-success" : "k7-lead-feedback"} role="status" aria-live="polite">{feedback}</p>
      </form>
    </div>
  );
}
