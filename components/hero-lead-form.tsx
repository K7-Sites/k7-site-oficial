"use client";

import { FormEvent, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const services = [
  ["landing-page", "Landing Page"],
  ["site-institucional", "Site institucional"],
  ["pagina-de-vendas", "Página de vendas"],
  ["site-para-cursos", "Site para cursos"],
  ["redesign", "Redesign"],
  ["outros", "Outros serviços"],
];

export function HeroLeadForm({ placement = "hero" }: { placement?: "hero" | "contact" }) {
  const [pending, setPending] = useState(false);
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
      setFeedback("Recebemos seu contato! Em breve falaremos com você pelo WhatsApp.");
      submissionId.current = null;
      form.reset();
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
            {services.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label htmlFor={placement + "-lead-phone"}>Seu WhatsApp
          <input id={placement + "-lead-phone"} name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" pattern="[0-9()+. -]{10,20}" title="Informe seu WhatsApp com DDD" maxLength={20} />
        </label>
        <div className="k7-lead-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <button type="submit" className="k7-lead-submit" disabled={pending}>{pending ? "Enviando..." : "Quero conversar pelo WhatsApp"} <span aria-hidden="true">↗</span></button>
        <p className="k7-lead-privacy">Sem compromisso. Seus dados serão usados apenas para responder ao seu contato.</p>
        <p className={success ? "k7-lead-feedback is-success" : "k7-lead-feedback"} role="status" aria-live="polite">{feedback}</p>
      </form>
    </div>
  );
}
