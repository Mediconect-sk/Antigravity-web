import { NextResponse } from "next/server";
import { z } from "zod";
import { normalizujTelefon, SPRAVA_NEPLATNY_TELEFON } from "@/lib/telefon";

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
  email: z.string().trim().toLowerCase().email("Neplatný e-mail").max(254),
  // Povinný údaj (Viktor, 24. 11. 2026): bez platného telefónu sa previerka nespustí.
  telefon: z
    .string()
    .trim()
    .max(40)
    .transform((v, ctx) => {
      const cislo = normalizujTelefon(v);
      if (!cislo) {
        ctx.addIssue({ code: "custom", message: SPRAVA_NEPLATNY_TELEFON });
        return z.NEVER;
      }
      return cislo;
    }),
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
      const chyby = vysledok.error.flatten().fieldErrors;
      const prva = chyby.telefon?.[0] ?? chyby.email?.[0] ?? chyby.web?.[0] ?? null;
      return NextResponse.json(
        { error: prva ?? "Skontrolujte, prosím, vyplnené údaje.", details: vysledok.error.flatten() },
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

    // CRM počíta limit „3 previerky na IP za deň“. Požiadavku posiela tento
    // server, takže bez týchto hlavičiek by všetci návštevníci zdieľali jednu
    // adresu a celý web by zvládol len 3 previerky denne. CRM hlavičke verí
    // len pri zhode zdieľaného tajomstva (PREVIERKA_ZDIELANE_TAJOMSTVO).
    const hlavickyCrm: Record<string, string> = { "Content-Type": "application/json" };
    const tajomstvo = process.env.PREVIERKA_ZDIELANE_TAJOMSTVO;
    const ipNavstevnika = ip.split(",")[0]?.trim();
    if (tajomstvo && ipNavstevnika && ipNavstevnika !== "anonymous") {
      hlavickyCrm["x-previerka-klient-ip"] = ipNavstevnika;
      hlavickyCrm["x-previerka-tajomstvo"] = tajomstvo;
    }

    const odpoved = await fetch(cielovaUrl, {
      method: "POST",
      headers: hlavickyCrm,
      body: JSON.stringify({
        url: d.web,
        email: d.email,
        telefon: d.telefon,
        meno: d.meno,
        zariadenie: d.zariadenie ?? null,
        suhlas: true,
        zdroj: "mediconect.sk",
      }),
    });

    if (!odpoved.ok) {
      console.error("Previerka: CRM vratilo stav", odpoved.status);
      // CRM vracia zrozumiteľnú vetu pre lekára (napr. „Tento web sme už za
      // posledných 24 hodín preverovali…“). Pri odmietnutí (4xx) ju ukážeme,
      // inak by návštevník videl len všeobecnú chybu a nevedel, čo urobiť.
      let sprava: string | null = null;
      try {
        const telo = (await odpoved.json()) as { sprava?: unknown };
        if (typeof telo?.sprava === "string" && telo.sprava.length <= 300) sprava = telo.sprava;
      } catch {
        sprava = null;
      }
      const odmietnute = odpoved.status >= 400 && odpoved.status < 500;
      return NextResponse.json(
        { error: odmietnute && sprava ? sprava : "Previerku sa nepodarilo spustiť. Skúste to prosím neskôr." },
        { status: odmietnute ? odpoved.status : 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (chyba) {
    console.error("Previerka: neocakavana chyba", chyba);
    return NextResponse.json({ error: "Niečo sa pokazilo. Skúste to prosím neskôr." }, { status: 500 });
  }
}
