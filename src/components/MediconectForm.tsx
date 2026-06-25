"use client";

/**
 * ============================================================================
 * MediconectForm — dopytový formulár pre zdravotnícky marketing
 * ============================================================================
 * Next.js (App Router) client komponent. Zladený s Brand Guidelines mediconect.
 *  • Farby: 0C141A / 041D2C (tmavá), 4CADB6 + 88D5DB (tyrkysová), F2F2F2
 *  • Typografia: Kanit (nadpisy/čísla) + Stolzl s fallbackom Poppins (text)
 *  • Tón B2B: jasný, odborný, ľudský, férový, bez nátlaku
 *
 * POUŽITIE (napr. v sekcii #kontakt):
 *   import MediconectForm from "@/components/MediconectForm";
 *   <section id="kontakt">
 *     <MediconectForm endpoint="/api/dopyt" />
 *   </section>
 *
 * NAPOJENIE ODOSIELANIA:
 *   - Vlastné API:  <MediconectForm endpoint="/api/dopyt" />
 *   - Formspree:    <MediconectForm endpoint="https://formspree.io/f/XXXX" />
 *   Ak endpoint nezadáte, komponent beží v DEMO režime (iba console.log).
 *
 * FONTY:
 *   Komponent používa rodiny "Kanit" a "Stolzl"/"Poppins". Ak ich už načítavate
 *   cez next/font alebo globálne CSS, sú prevzaté automaticky. Inak odporúčam
 *   pridať Kanit + Poppins do layoutu (next/font/google).
 * ============================================================================
 */

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

interface MediconectFormProps {
  /** Cieľová adresa na odoslanie (POST JSON). Bez nej beží DEMO režim. */
  endpoint?: string;
  /** Voliteľný callback po úspešnom odoslaní (napr. analytika). */
  onSubmitted?: (data: Record<string, unknown>) => void;
}

const SERVICES = [
  "Webová stránka / mikrostránka",
  "SEO – vyhľadávanie",
  "Google Ads / PPC",
  "Sociálne siete",
  "Obsah a copywriting",
  "Branding / vizuálna identita",
  "Reputačný manažment a recenzie",
  "Zatiaľ neviem / poraďte",
];

export default function MediconectForm({ endpoint, onSubmitted }: MediconectFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [services, setServices] = useState<string[]>([]);

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  }

  function validEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // anti-spam honeypot
    if ((fd.get("company_website") as string)?.length) return;

    const next: Record<string, boolean> = {};
    const req = ["subjectType", "orgName", "contactName"];
    req.forEach((k) => {
      if (!(fd.get(k) as string)?.trim()) next[k] = true;
    });
    const email = (fd.get("email") as string) || "";
    if (!validEmail(email.trim())) next.email = true;
    const website = ((fd.get("website") as string) || "").trim();
    if (website && !/^https?:\/\/.+/i.test(website)) next.website = true;
    if (!fd.get("gdpr")) next.gdpr = true;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(".mc-field.invalid");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const data: Record<string, unknown> = {
      subjectType: fd.get("subjectType"),
      orgName: fd.get("orgName"),
      city: fd.get("city"),
      website,
      contactName: fd.get("contactName"),
      email,
      phone: fd.get("phone"),
      currentState: fd.get("currentState"),
      services,
      goals: fd.get("goals"),
      budget: fd.get("budget"),
      timeline: fd.get("timeline"),
      message: fd.get("message"),
    };

    setStatus("sending");
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // DEMO režim — kým nie je zadaný endpoint
        // eslint-disable-next-line no-console
        console.log("mediconect dopyt (demo, neodoslané):", data);
        await new Promise((r) => setTimeout(r, 600));
      }
      onSubmitted?.(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mc-card" suppressHydrationWarning>
        <div className="mc-success">
          <div className="mc-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CADB6"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2>Ďakujeme, dopyt sme prijali</h2>
          <p>
            Ozveme sa vám do 2 pracovných dní. Ak je vec urgentná, napíšte nám na{" "}
            <strong>info@mediconect.sk</strong>.
          </p>
        </div>
        <Styles />
      </div>
    );
  }

  const inv = (k: string) => (errors[k] ? "mc-field invalid" : "mc-field");

  return (
    <div className="mc-card" suppressHydrationWarning>
      {/* HLAVIČKA */}
      <div className="mc-header">
        <span className="mc-claim">Zdravotníctvu dávame hlas.</span>
        <h1>
          Spojenie, <span className="accent">ktoré má zmysel.</span>
        </h1>
        <p>
          Povedzte nám o vašom zariadení a o tom, čo chcete dosiahnuť. Pripravíme vám jasný
          a férový návrh — bez nátlaku a marketingového žargónu. Ozveme sa do 2 pracovných dní.
        </p>
      </div>

      {/* SOCIÁLNY DÔKAZ */}
      <div className="mc-proof">
        <div className="item">
          <div className="num">80+</div>
          <div className="lbl">lekárov a zariadení už využíva naše služby</div>
        </div>
        <div className="item">
          <div className="num">75 %</div>
          <div className="lbl">vyššia zapamätateľnosť značky u pacientov</div>
        </div>
        <div className="item">
          <div className="num">100 %</div>
          <div className="lbl">transparentné výsledky a pravidelné reporty</div>
        </div>
      </div>

      {/* FORMULÁR */}
      <form className="mc-body" onSubmit={handleSubmit} noValidate>
        <div className="mc-section-title">O vašom zariadení</div>

        <div className={inv("subjectType")}>
          <label className="mc-label" htmlFor="subjectType">
            Typ subjektu <span className="mc-req">*</span>
          </label>
          <select id="subjectType" name="subjectType" required defaultValue="">
            <option value="">— vyberte —</option>
            <option>Lekár / ambulancia</option>
            <option>Klinika / poliklinika</option>
            <option>Laboratórium</option>
            <option>Diagnostické centrum</option>
            <option>Kúpele / wellness</option>
            <option>Iné zdravotnícke zariadenie</option>
          </select>
          <div className="mc-error-msg">Vyberte prosím typ subjektu.</div>
        </div>

        <div className="mc-row">
          <div className={inv("orgName")}>
            <label className="mc-label" htmlFor="orgName">
              Názov zariadenia / praxe <span className="mc-req">*</span>
            </label>
            <input type="text" id="orgName" name="orgName" required autoComplete="organization" />
            <div className="mc-error-msg">Uveďte prosím názov.</div>
          </div>
          <div className="mc-field">
            <label className="mc-label" htmlFor="city">Mesto / región</label>
            <input type="text" id="city" name="city" autoComplete="address-level2" />
          </div>
        </div>

        <div className={inv("website")}>
          <label className="mc-label" htmlFor="website">
            Webová stránka <span className="mc-hint">(ak máte)</span>
          </label>
          <input type="url" id="website" name="website" placeholder="https://" autoComplete="url" />
          <div className="mc-error-msg">Zadajte platnú adresu vrátane https://</div>
        </div>

        <div className="mc-section-title">Kontaktná osoba</div>

        <div className="mc-row">
          <div className={inv("contactName")}>
            <label className="mc-label" htmlFor="contactName">
              Meno a priezvisko <span className="mc-req">*</span>
            </label>
            <input type="text" id="contactName" name="contactName" required autoComplete="name" />
            <div className="mc-error-msg">Uveďte prosím meno.</div>
          </div>
          <div className={inv("email")}>
            <label className="mc-label" htmlFor="email">
              E-mail <span className="mc-req">*</span>
            </label>
            <input type="email" id="email" name="email" required autoComplete="email" />
            <div className="mc-error-msg">Zadajte platnú e-mailovú adresu.</div>
          </div>
        </div>

        <div className="mc-field">
          <label className="mc-label" htmlFor="phone">
            Telefón <span className="mc-hint">(pre rýchlejší kontakt)</span>
          </label>
          <input type="tel" id="phone" name="phone" placeholder="+421" autoComplete="tel" />
        </div>

        <div className="mc-section-title">Súčasný stav a ciele</div>

        <div className="mc-field">
          <label className="mc-label" htmlFor="currentState">Ako momentálne riešite marketing?</label>
          <select id="currentState" name="currentState" defaultValue="">
            <option value="">— vyberte —</option>
            <option>Zatiaľ neriešime systematicky</option>
            <option>Robíme si to vlastnými silami</option>
            <option>Spolupracujeme s externou agentúrou / freelancerom</option>
            <option>Máme interný marketingový tím</option>
          </select>
        </div>

        <div className="mc-field">
          <label className="mc-label">
            O aké služby máte záujem? <span className="mc-hint">(vyberte ľubovoľný počet)</span>
          </label>
          <div className="mc-options">
            {SERVICES.map((s) => (
              <label key={s} className={services.includes(s) ? "mc-check checked" : "mc-check"}>
                <input
                  type="checkbox"
                  checked={services.includes(s)}
                  onChange={() => toggleService(s)}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mc-field">
          <label className="mc-label" htmlFor="goals">
            Čo chcete marketingom dosiahnuť? <span className="mc-hint">(stručne)</span>
          </label>
          <textarea
            id="goals"
            name="goals"
            placeholder="Napr. viac objednávok na samoplatcovské výkony, posilnenie značky v regióne, nábor pacientov pre novú ambulanciu…"
          />
        </div>

        <div className="mc-row">
          <div className="mc-field">
            <label className="mc-label" htmlFor="budget">Orientačný mesačný rozpočet</label>
            <select id="budget" name="budget" defaultValue="">
              <option value="">— vyberte —</option>
              <option>do 500 €</option>
              <option>500 – 1 500 €</option>
              <option>1 500 – 3 000 €</option>
              <option>3 000 – 6 000 €</option>
              <option>nad 6 000 €</option>
              <option>zatiaľ neurčené</option>
            </select>
          </div>
          <div className="mc-field">
            <label className="mc-label" htmlFor="timeline">Kedy chcete začať?</label>
            <select id="timeline" name="timeline" defaultValue="">
              <option value="">— vyberte —</option>
              <option>Čo najskôr</option>
              <option>Do 1 – 3 mesiacov</option>
              <option>Do 3 – 6 mesiacov</option>
              <option>Zatiaľ len zisťujem možnosti</option>
            </select>
          </div>
        </div>

        <div className="mc-field">
          <label className="mc-label" htmlFor="message">Doplňujúca správa</label>
          <textarea id="message" name="message" placeholder="Čokoľvek, čo nám pomôže lepšie pripraviť návrh." />
        </div>

        <div className={errors.gdpr ? "mc-field invalid" : "mc-field"}>
          <label className="mc-consent">
            <input type="checkbox" id="gdpr" name="gdpr" required />
            <span>
              Súhlasím so spracovaním osobných údajov za účelom spracovania tohto dopytu v zmysle{" "}
              <a href="https://www.mediconect.sk/ochrana-osobnych-udajov" target="_blank" rel="noopener noreferrer">
                zásad ochrany osobných údajov
              </a>
              . <span className="mc-req">*</span>
            </span>
          </label>
          <div className="mc-error-msg" style={{ marginLeft: 2 }}>
            Na spracovanie dopytu potrebujeme váš súhlas.
          </div>
        </div>

        {/* honeypot */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" suppressHydrationWarning>
          <label>
            Nevypĺňať: <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mc-footer">
          <button type="submit" className="mc-submit" disabled={status === "sending"}>
            {status === "sending" ? "Odosielam…" : "Odoslať nezáväzný dopyt"}
          </button>
          {status === "error" && (
            <p className="mc-note" style={{ color: "#c0392b" }}>
              Odoslanie sa nepodarilo. Skúste to znova alebo nám napíšte na info@mediconect.sk.
            </p>
          )}
          {status !== "error" && (
            <p className="mc-note">
              Nezáväzné. Vaše údaje nezdieľame s tretími stranami a komunikujeme férovo.
            </p>
          )}
        </div>
      </form>

      <Styles />
    </div>
  );
}

/** Scoped štýly komponentu (brand farby + typografia) - DARK THEME. */
function Styles() {
  return (
    <style>{`
      .mc-card {
        --mc-dark: #060f18; 
        --mc-teal: #4CADB6; 
        --mc-teal-light: #88D5DB;
        --mc-bg: rgba(6, 15, 24, 0.65);
        --mc-white: #ffffff;
        --mc-ink: rgba(255, 255, 255, 0.9);
        --mc-muted: rgba(255, 255, 255, 0.5);
        --mc-line: rgba(255, 255, 255, 0.1);
        --mc-error: #ff6b6b;
        --mc-input-bg: rgba(255, 255, 255, 0.05);
        --mc-input-hover: rgba(255, 255, 255, 0.08);
        --mc-input-checked: rgba(76, 173, 182, 0.1);

        --font-head: "Kanit", "Segoe UI", sans-serif;
        --font-body: "Stolzl", "Poppins", "Segoe UI", Roboto, sans-serif;
        
        max-width: 760px; margin: 0 auto; 
        background: var(--mc-bg);
        border: 1px solid var(--mc-line);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-radius: 24px; overflow: hidden; 
        font-family: var(--font-body);
        color: var(--mc-ink); line-height: 1.55;
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.4);
      }
      .mc-card *{ box-sizing:border-box; }

      .mc-header {
        position: relative; padding: 34px 40px 38px; color: var(--mc-ink);
        background: radial-gradient(600px 300px at 88% 0%, rgba(76,173,182,0.15), transparent 65%);
        border-bottom: 1px solid var(--mc-line);
      }
      .mc-claim { display: inline-block; font-family: var(--font-head); font-weight: 500;
        font-size: .85rem; letter-spacing: .4px; color: var(--mc-teal-light); margin-bottom: 12px; }
      .mc-header h1 { font-family: var(--font-head); font-weight: 600; margin: 0 0 12px;
        font-size: 1.7rem; line-height: 1.2; letter-spacing: -.4px; color: var(--mc-white); }
      .mc-header h1 .accent { color: var(--mc-teal-light); }
      .mc-header p { margin: 0; font-size: .98rem; color: var(--mc-muted); max-width: 58ch; }

      .mc-proof { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 22px 40px 24px;
        background: rgba(76, 173, 182, 0.05); border-bottom: 1px solid var(--mc-line); }
      .mc-proof .num { font-family: var(--font-head); font-weight: 700; font-size: 1.9rem; line-height: 1;
        color: var(--mc-teal); margin-bottom: 4px; }
      .mc-proof .lbl { font-size: .82rem; line-height: 1.35; color: var(--mc-muted); }
      .mc-proof .item + .item { border-left: 1px solid var(--mc-line); padding-left: 14px; }

      .mc-body { padding: 30px 40px 8px; background: transparent; }
      .mc-section-title { font-family: var(--font-head); font-size: 1rem; font-weight: 500; letter-spacing: .2px;
        color: var(--mc-white); margin: 30px 0 16px; padding-bottom: 9px; border-bottom: 1px solid var(--mc-line); }
      .mc-section-title:first-child { margin-top: 4px; }

      .mc-field { margin-bottom: 18px; }
      .mc-row { display: flex; gap: 18px; flex-wrap: wrap; }
      .mc-row .mc-field { flex: 1 1 220px; }

      .mc-label { display: block; font-size: .9rem; font-weight: 500; margin-bottom: 6px; color: var(--mc-ink); }
      .mc-req { color: var(--mc-teal); margin-left: 2px; font-weight: 700; }
      .mc-hint { font-weight: 400; color: var(--mc-muted); font-size: .82rem; }

      .mc-card input[type=text], .mc-card input[type=email], .mc-card input[type=tel],
      .mc-card input[type=url], .mc-card select, .mc-card textarea {
        width: 100%; font-family: inherit; font-size: .95rem; color: var(--mc-white);
        background: var(--mc-input-bg); border: 1px solid var(--mc-line); border-radius: 12px;
        padding: 14px 16px; transition: border-color .15s, box-shadow .15s, background .15s; }
      .mc-card input::placeholder, .mc-card textarea::placeholder { color: var(--mc-muted); }
      .mc-card input:focus, .mc-card select:focus, .mc-card textarea:focus {
        outline: none; background: rgba(255, 255, 255, 0.08); border-color: var(--mc-teal);
        box-shadow: 0 0 0 1px var(--mc-teal); }
      .mc-card textarea { resize: vertical; min-height: 96px; }
      .mc-card select option { background: var(--mc-dark); color: var(--mc-white); }

      .mc-options { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
      .mc-check { display: flex; align-items: flex-start; gap: 10px; border: 1px solid var(--mc-line);
        border-radius: 12px; padding: 12px 14px; cursor: pointer; font-size: .92rem; background: var(--mc-input-bg);
        transition: border-color .15s, background .15s; color: var(--mc-ink); }
      .mc-check:hover { border-color: rgba(255, 255, 255, 0.2); background: var(--mc-input-hover); }
      .mc-check input { margin-top: 3px; accent-color: var(--mc-teal); flex-shrink: 0; }
      .mc-check.checked { border-color: var(--mc-teal); background: var(--mc-input-checked); }

      .mc-consent { display: flex; align-items: flex-start; gap: 12px; background: var(--mc-input-bg);
        border: 1px solid var(--mc-line); border-radius: 12px; padding: 14px 16px; font-size: .86rem; color: var(--mc-muted); }
      .mc-consent input { margin-top: 3px; accent-color: var(--mc-teal); }
      .mc-consent a { color: var(--mc-teal); font-weight: 500; text-decoration: none; }
      .mc-consent a:hover { text-decoration: underline; }

      .mc-error-msg { color: var(--mc-error); font-size: .8rem; margin-top: 5px; display: none; }
      .mc-field.invalid .mc-error-msg { display: block; }
      .mc-field.invalid input, .mc-field.invalid select, .mc-field.invalid textarea { border-color: var(--mc-error); }

      .mc-footer { padding: 8px 40px 34px; background: transparent; }
      .mc-submit { width: 100%; font-family: var(--font-head); font-weight: 600; font-size: 1.05rem;
        letter-spacing: .2px; color: #000; border: none; border-radius: 12px; padding: 16px 20px;
        cursor: pointer; background: var(--mc-teal);
        box-shadow: 0 8px 22px rgba(76, 173, 182, 0.25); transition: background .15s, transform .05s; }
      .mc-submit:hover { background: var(--mc-teal-light); }
      .mc-submit:active { transform: translateY(1px); }
      .mc-submit:disabled { opacity: .6; cursor: not-allowed; box-shadow: none; }
      .mc-note { text-align: center; font-size: .78rem; color: var(--mc-muted); margin-top: 14px; }

      .mc-success { text-align: center; padding: 60px 40px; background: transparent; }
      .mc-success .mc-icon { width: 66px; height: 66px; margin: 0 auto 18px; border-radius: 50%;
        background: rgba(76, 173, 182, 0.1); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(76, 173, 182, 0.2); }
      .mc-success h2 { font-family: var(--font-head); font-weight: 600; color: var(--mc-white); margin: 0 0 8px; font-size: 1.4rem; }
      .mc-success p { color: var(--mc-muted); margin: 0; }
      .mc-success strong { color: var(--mc-teal-light); }

      @media (max-width: 560px) {
        .mc-header, .mc-body, .mc-footer, .mc-success, .mc-proof { padding-left: 24px; padding-right: 24px; }
        .mc-header h1 { font-size: 1.4rem; }
        .mc-proof { grid-template-columns: 1fr; gap: 12px; }
        .mc-proof .item + .item { border-left: none; padding-left: 0; border-top: 1px solid var(--mc-line); padding-top: 12px; }
      }
    `}</style>
  );
}
