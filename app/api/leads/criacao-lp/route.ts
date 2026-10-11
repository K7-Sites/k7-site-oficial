import { NextRequest } from "next/server";
import { submitSiteLead } from "../route";

export async function POST(request: NextRequest) {
  return submitSiteLead(request, "criacao-LP");
}
