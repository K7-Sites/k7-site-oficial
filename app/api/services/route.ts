import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.K7_GESTAO_LEAD_TOKEN;
  const endpoint = process.env.K7_GESTAO_LEAD_ENDPOINT;
  if (!token || !endpoint) return NextResponse.json({ services: [] }, { status: 503 });
  try {
    const url = new URL(endpoint);
    url.pathname = url.pathname.replace(/\/site\/leads\/?$/, "/site/services");
    if (!url.pathname.endsWith("/site/services")) return NextResponse.json({ services: [] }, { status: 503 });
    const response = await fetch(url.toString(), { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }, cache: "no-store", signal: AbortSignal.timeout(10000) });
    if (!response.ok) return NextResponse.json({ services: [] }, { status: 502 });
    const data = await response.json();
    return NextResponse.json({ services: Array.isArray(data.services) ? data.services : [] }, { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ services: [] }, { status: 502 }); }
}
