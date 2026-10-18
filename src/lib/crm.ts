/**
 * Zápis formulárov www.mediconect.sk do CRM Ordevia (workspace Mediconect).
 *
 * Tok:  formulár → /api/* (táto funkcia) → Supabase tabuľka
 *       `web_mediconect_formular` → trigger v DB založí/doplní kontakt,
 *       skupinu, aktivitu, úlohu „Zavolať do 24 h“ a súhlas → nočná
 *       synchronizácia Ordevie pošle kontakty so súhlasom do SmartEmailingu.
 *
 * Kľúč je verejný „publishable“ kľúč (rovnaký, aký je v HTML na
 * mymedical.sk). Rola anon smie do tabuľky iba vkladať – nič čítať.
 * Migrácia: Ordevia `database/232_web_mediconect_do_crm.sql` (#2822).
 *
 * ⚠️ Volný text správy sem nikdy neposielať – zostáva v e-maile (Resend).
 */

const SUPABASE_URL =
  process.env.ORDEVIA_SUPABASE_URL || "https://nbgkgqnxbzobbgmcvcrk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  process.env.ORDEVIA_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_UoDz5eHhprch6Nbm5BFDKA_eSlOBhHN";

/** Znenia súhlasov presne tak, ako sú pri checkboxoch na webe. */
export const SUHLAS_NEWSLETTER =
  "Súhlasím so spracovaním osobných údajov na účely zasielania noviniek v súlade s dokumentom Ochrana osobných údajov.";
export const SUHLAS_MARKETING_KONTAKT =
  "Súhlasím so spracúvaním mojich osobných údajov na účely zasielania marketingových informácií, noviniek a ponúk služieb spoločnosti MediConect s.r.o. v súlade s čl. 6 ods. 1 písm. a) GDPR.";

export type WebFormular = {
  typ: "DOPYT" | "KONTAKT" | "NEWSLETTER";
  email: string;
  meno?: string | null;
  organizacia?: string | null;
  mesto?: string | null;
  telefon?: string | null;
  web?: string | null;
  typ_subjektu?: string | null;
  odbornost?: string | null;
  sluzby?: string[] | null;
  rozpocet?: string | null;
  termin?: string | null;
  stranka?: string | null;
  marketing_suhlas?: boolean;
  marketing_suhlas_text?: string | null;
  /** Ordevia migrácia 250: „Čo dnes najviac riešite?“ (iba formulár /konzultacia). */
  potreba?: string | null;
  potreba_detail?: Record<string, string> | null;
};

/** Skráti text na limit stĺpca v DB (CHECK by inak riadok odmietol). */
function orez(v: string | null | undefined, max: number): string | null {
  const t = (v ?? "").trim();
  return t ? t.slice(0, max) : null;
}

/**
 * Zapíše formulár do CRM. Nikdy nevyhodí výnimku – vráti `ok: false`
 * a chybu zaloguje (bez osobných údajov).
 */
export async function zapisDoCrm(f: WebFormular): Promise<{ ok: boolean }> {
  const riadok = {
    typ: f.typ,
    email: f.email.trim().slice(0, 254),
    meno: orez(f.meno, 200),
    organizacia: orez(f.organizacia, 200),
    mesto: orez(f.mesto, 120),
    telefon: orez(f.telefon, 40),
    web: orez(f.web, 300),
    typ_subjektu: orez(f.typ_subjektu, 120),
    odbornost: orez(f.odbornost, 120),
    sluzby: f.sluzby?.length ? f.sluzby.slice(0, 20).map((s) => s.slice(0, 120)) : null,
    rozpocet: orez(f.rozpocet, 120),
    termin: orez(f.termin, 120),
    stranka: orez(f.stranka, 300),
    marketing_suhlas: Boolean(f.marketing_suhlas),
    marketing_suhlas_text: f.marketing_suhlas ? orez(f.marketing_suhlas_text, 1000) : null,
    // Stĺpce z migrácie 250 posielame LEN ak sú vyplnené – ostatné formuláre sa tak nezmenia.
    ...(f.potreba ? { potreba: f.potreba, potreba_detail: f.potreba_detail ?? {} } : {}),
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/web_mediconect_formular`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(riadok),
    });
    if (!res.ok) {
      const telo = await res.text().catch(() => "");
      console.error(`CRM zapis zlyhal (${res.status}, typ ${f.typ}):`, telo.slice(0, 300));
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.error(`CRM zapis zlyhal (typ ${f.typ}):`, e instanceof Error ? e.message : e);
    return { ok: false };
  }
}
