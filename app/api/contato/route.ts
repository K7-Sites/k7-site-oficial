import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const destinationEmail = "k7sites@gmail.com";

function clean(value: unknown, maxLength = 4000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = clean(body.nome, 120);
    const email = clean(body.email, 180);
    const projeto = clean(body.projeto, 120);
    const objetivo = clean(body.objetivo, 160);
    const mensagem = clean(body.mensagem, 5000);
    const honeypot = clean(body.empresa_site, 200);

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!nome || !email || !projeto || !objetivo || !mensagem) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Informe um e-mail válido." },
        { status: 400 },
      );
    }

    const appPassword = process.env.GMAIL_APP_PASSWORD;
    if (!appPassword) {
      console.error("GMAIL_APP_PASSWORD não configurada.");
      return NextResponse.json(
        { error: "Serviço de e-mail indisponível." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: destinationEmail,
        pass: appPassword,
      },
    });

    const safe = {
      nome: escapeHtml(nome),
      email: escapeHtml(email),
      projeto: escapeHtml(projeto),
      objetivo: escapeHtml(objetivo),
      mensagem: escapeHtml(mensagem).replaceAll("\n", "<br />"),
    };

    await transporter.sendMail({
      from: `"K7 Sites — Formulário" <${destinationEmail}>`,
      to: destinationEmail,
      replyTo: email,
      subject: `Novo contato pelo site — ${projeto} — ${nome}`,
      text: [
        "Novo contato recebido pelo site da K7 Sites",
        "",
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Tipo de projeto: ${projeto}`,
        `Objetivo: ${objetivo}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
          <h2 style="color:#1565ff">Novo contato pelo site da K7 Sites</h2>
          <p><strong>Nome:</strong> ${safe.nome}</p>
          <p><strong>E-mail:</strong> ${safe.email}</p>
          <p><strong>Tipo de projeto:</strong> ${safe.projeto}</p>
          <p><strong>Objetivo:</strong> ${safe.objetivo}</p>
          <p><strong>Mensagem:</strong><br />${safe.mensagem}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar formulário de contato:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem." },
      { status: 500 },
    );
  }
}
