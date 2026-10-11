"use client";

import { FormEvent, useRef, useState } from "react";

const options = [
  ["landing-page", "Landing Page"],
  ["site-institucional", "Site institucional"],
  ["pagina-de-vendas", "Página de vendas"],
  ["site-para-cursos", "Site para cursos"],
  ["redesign", "Redesign"],
  ["outros", "Outros serviços"],
];

export function HeroLeadForm() {
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
          submission_id: submissionId.current,
          website: values.get("website"),
        }),
      });
      if (!response.ok) throw new Error("Não foi possível enviar agora. Tente novamente.");
      setSuccess(true);
      setFeedback("Recebemos seus dados! Nossa equipe entrará em contato pelo WhatsApp.");
      submissionId.current = null;
      form.reset();
    } catch {
      setFeedback("Não foi possível enviar agora. Tente novamente.");
    } finally {
      sending.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} aria-label="Solicitar orçamento" style={{ marginTop: 22, display: "grid", gap: 10, maxWidth: 520 }}>
      <p style={{ fontWeight: 700, color: "#F5F7FA" }}>Solicite seu orçamento</p>
      <input name="name" aria-label="Nome" required minLength={2} maxLength={255} autoComplete="name" placeholder="Seu nome"
        style={{ width: "100%", padding: "13px 14px", borderRadius: 10, background: "#11151B", border: "1px solid #34363A", color: "#fff" }} />
      <select name="service" aria-label="Serviço desejado" required defaultValue=""
        style={{ width: "100%", padding: "13px 14px", borderRadius: 10, background: "#11151B", border: "1px solid #34363A", color: "#fff" }}>
        <option value="" disabled>Qual serviço você precisa?</option>
        {options.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
      <input name="phone" aria-label="WhatsApp com DDD" required type="tel" inputMode="tel" autoComplete="tel" placeholder="WhatsApp com DDD"
        pattern="[0-9()+. -]{10,20}" title="Informe seu WhatsApp com DDD" maxLength={20}
        style={{ width: "100%", padding: "13px 14px", borderRadius: 10, background: "#11151B", border: "1px solid #34363A", color: "#fff" }} />
      <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button type="submit" disabled={pending} className="button button-primary" style={{ justifyContent: "center", opacity: pending ? 0.7 : 1 }}>
        {pending ? "Enviando..." : "Solicitar orçamento"}
      </button>
      <p aria-live="polite" role={success ? "status" : "alert"} style={{ fontSize: 13, color: success ? "#86efac" : "#D9DDE3" }}>{feedback}</p>
    </form>
  );
}
