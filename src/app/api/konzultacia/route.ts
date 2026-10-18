import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { zapisDoCrm } from "@/lib/crm";
import { POTREBA_VALUES, POTREBY, platnyDetail } from "@/lib/konzultacia";

const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 1000;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const casy = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (casy.length >= MAX_REQUESTS) return true;
  casy.push(now);
  rateLimitMap.set(ip, casy);
  return false;
}

const schema = z.object({
  potreba: z.enum(POTREBA_VALUES),
  detail: z.record(z.string().max(60), z.string().max(60)),
  meno: z.string().trim().min(1, "Meno je povinné").max(200),
  email: z.string().trim().email("Neplatný e-mail").max(254),
  telefon: z.string().trim().max(40).optional().nullable(),
  suhlas: z.literal(true, { message: "Súhlas je povinný" }),
});

function popis(potreba: string): string {
  return POTREBY.find((p) => p.value === potreba)?.label ?? potreba;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Príliš veľa požiadaviek. Skúste to prosím neskôr." }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing environment variable: RESEND_API_KEY");
      return NextResponse.json({ error: "Chyba konfigurácie servera." }, { status: 500 });
    }

    const vysledok = schema.safeParse(await request.json());
    if (!vysledok.success) {
      return NextResponse.json({ error: "Neplatné údaje", details: vysledok.error.flatten() }, { status: 400 });
    }
    const d = vysledok.data;
    if (!platnyDetail(d.potreba, d.detail)) {
      return NextResponse.json({ error: "Neplatné odpovede" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    try {
      await resend.emails.send({
        from: "Mediconect Web <noreply@mediconect.sk>",
        to: ["info@mediconect.sk"],
        subject: `Nová konzultácia z webu: ${popis(d.potreba)}`,
        text: [
          `Čo dnes riešia: ${popis(d.potreba)}`,
          ...Object.entries(d.detail).map(([k, v]) => `${k}: ${v}`),
          "",
          `Meno: ${d.meno}`,
          `E-mail: ${d.email}`,
          d.telefon ? `Telefón: ${d.telefon}` : "",
        ].filter(Boolean).join("\n"),
      });
    } catch (emailError) {
      console.error("Resend error (konzultacia)", emailError);
    }

    await zapisDoCrm({
      typ: "DOPYT",
      email: d.email,
      meno: d.meno,
      telefon: d.telefon ?? null,
      stranka: "/konzultacia",
      potreba: d.potreba,
      potreba_detail: d.detail,
      marketing_suhlas: false,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Konzultacia API error:", error);
    return NextResponse.json({ error: "Nastala chyba. Skúste to prosím neskôr." }, { status: 500 });
  }
}
