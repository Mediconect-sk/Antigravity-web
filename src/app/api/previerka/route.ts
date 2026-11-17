import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Samoobslužná previerka webu – formulár na mediconect.sk.
 *
 * Táto trasa iba **preposiela** požiadavku do CRM Ordevia, ktoré previerku
 * vykoná a výsledok pošle lekárovi e-mailom (zadanie #4541 v Mediconect-sk/Ordevia).
 * Dôvody, prečo sa nevolá CRM priamo z prehliadača: prehliadač by narazil na
 * cudziu doménu (CORS) a adresa rozhrania by bola verejná.
 *
 * Bez premennej `ORDEVIA_PREVIERKA_URL` sa nič neposiela a formulár
 * zrozumiteľne oznámi, že previerka ešte nie je spustená. Nasadenie tejto
 * stránky preto nikdy nespôsobí chybu, aj keď CRM časť ešte nie je hotová.
 */

const MAX_REQUESTS = 3;
const WINDOW_MS = 10 * 60 * 1000;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const casy = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (casy.length >= MAX_REQUESTS) return true;
  casy.push(now);
  rateLimitMap.set(ip, casy);
  return false;
}

/** Len verejná http(s) adresa; bez prihlásenia, bez lokálnych a vnútorných sietí. */
const adresaWebu = z
  .string()
  .trim()
  .min(4)
  .max(300)
  .transform((v) => (/^https?:\/\//i.test(v) ? v : `https://${v}`))
  .refine((v) => {
    try {
      const u = new URL(v);
      if (u.protocol !== "http:" && u.protocol !== "https:") return false;
      const h = u.hostname.toLowerCase();
      if (!h.includes(".") || h.endsWith(".local")) return false;
      if (["localhost", "127.0.0.1", "0.0.0.0", "::1"].includes(h)) return false;
      if (/^(10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h)) return false;
      return true;
    } catch {
      return false;
    }
  }, "Zadajte platnú adresu webu, napríklad www.vasaambulancia.sk");

const schema = z.object({
  web: adresaWebu,
  email: z.string().trim().email("Neplatný e-mail").max(254),
  meno: z.string().trim().min(1, "Meno je povinné").max(200),
  zariadenie: z.string().trim().max(200).optional().nullable(),
  suhlas: z.literal(true, { message: "Súhlas je povinný" }),
  // Pasca na roboty – skutočný človek toto pole nevyplní.
  web2: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Previerku sme vám už posielali. Skúste to prosím o chvíľu." },
        { status: 429 }
      );
    }

    const vysledok = schema.safeParse(await request.json());
    if (!vysledok.success) {
      return NextResponse.json(
        { error: "Neplatné údaje", details: vysledok.error.flatten() },
        { status: 400 }
      );
    }
    const d = vysledok.data;
    if (d.web2) return NextResponse.json({ ok: true });

    const cielovaUrl = process.env.ORDEVIA_PREVIERKA_URL;
    if (!cielovaUrl) {
      return NextResponse.json(
        {
          error:
            "Previerka sa práve pripravuje a ešte nie je spustená. Napíšte nám na info@mediconect.sk a web vám prejdeme osobne.",
        },
        { status: 503 }
      );
    }

    const odpoved = await fetch(cielovaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: d.web,
        email: d.email,
        meno: d.meno,
        zariadenie: d.zariadenie ?? null,
        suhlas: true,
        zdroj: "mediconect.sk",
      }),
    });

    if (!odpoved.ok) {
      console.error("Previerka: CRM vratilo stav", odpoved.status);
      return NextResponse.json(
        { error: "Previerku sa nepodarilo spustiť. Skúste to prosím neskôr." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (chyba) {
    console.error("Previerka: neocakavana chyba", chyba);
    return NextResponse.json({ error: "Niečo sa pokazilo. Skúste to prosím neskôr." }, { status: 500 });
  }
}
