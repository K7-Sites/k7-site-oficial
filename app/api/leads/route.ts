import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.K7_GESTAO_LEAD_TOKEN;
  const endpoint = process.env.K7_GESTAO_LEAD_ENDPOINT;

  if (!token || !endpoint) {
    return NextResponse.json({ message: "Integração indisponível." }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }
  const data = payload as Record<string, unknown>;
  // Honeypot: quietly accept spam without forwarding it to the CRM.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ message: "Contato recebido." }, { status: 200 });
  }
  const services = ["landing-page", "site", "sistema", "outros"];
  if (typeof data.name !== "string" || data.name.trim().length < 2 || data.name.length > 255 ||
      typeof data.phone !== "string" || !/^(?:55)?[1-9][0-9]{9,10}$/.test(data.phone.replace(/\D/g, "")) ||
      !services.includes(String(data.service)) ||
      (data.service !== "outros" && (!Number.isSafeInteger(data.service_id) || Number(data.service_id) <= 0)) || typeof data.submission_id !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.submission_id)) {
    return NextResponse.json({ message: "Confira os campos informados." }, { status: 422 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name: data.name.trim(), phone: data.phone, service: data.service, service_id: data.service_id, submission_id: data.submission_id, website: "" }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      return NextResponse.json({ message: "Não foi possível registrar o contato." }, { status: response.status === 422 ? 422 : 502 });
    }
    return NextResponse.json({ message: "Contato recebido." }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Serviço temporariamente indisponível." }, { status: 502 });
  }
}
