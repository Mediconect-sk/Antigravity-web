'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { normalizujTelefon, SPRAVA_NEPLATNY_TELEFON } from '@/lib/telefon';
import { trackEvent } from '@/lib/track';
import { nacitajZdroj, zdrojAkoText } from '@/lib/zdroj';
import { SUHLAS_NEWSLETTER } from '@/lib/crm';

/**
 * Samoobslužná previerka webu – hlavný konverzný blok stránky Web a SEO.
 *
 * Sekcia je zámerne tmavá a vystupuje z inak svetlej stránky: je to jediné
 * miesto, kde od lekára niečo chceme. Vľavo ukážka toho, čo dostane
 * (ciferník a dva ukazovatele), vpravo formulár.
 *
 * 🔴 Čísla v ukážke správy nie sú ilustračné – sú namerané na skutočnom webe
 *    zubnej ambulancie 17. 11. 2026 (Lighthouse, mobil). Ak sa budú meniť,
 *    musia sa znova zmerať, nie odhadnúť.
 */

const CAKANIE_S = 6.5;      // namerané: hlavný obsah na mobile
const HRANICA_S = 2.5;      // odporúčanie Googlu
const STIAHNE_MB = 4.5;     // namerané: veľkosť úvodnej stránky

/** Polkruhový ciferník: koľko pacient čaká, voči odporúčanej hranici. */
function Cifernik() {
    const R = 86, SIRKA = 16, STRED = 100;
    const dlzka = Math.PI * R;
    const podiel = Math.min(CAKANIE_S / 10, 1);
    const oblúk = (s: number) => `M ${STRED - R} ${STRED} A ${R} ${R} 0 0 1 ${STRED + R} ${STRED}`;
    const uholHranice = Math.PI * (1 - HRANICA_S / 10);
    const hx = STRED + R * Math.cos(uholHranice);
    const hy = STRED - R * Math.sin(uholHranice);
    return (
        <svg viewBox="0 0 200 118" className="w-full max-w-[260px]">
            <path d={oblúk(1)} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth={SIRKA} strokeLinecap="round" />
            <path
                d={oblúk(podiel)}
                fill="none"
                stroke="#E06A5E"
                strokeWidth={SIRKA}
                strokeLinecap="round"
                strokeDasharray={`${dlzka * podiel} ${dlzka}`}
            />
            <line x1={STRED + (R - SIRKA / 2 - 6) * Math.cos(uholHranice)} y1={STRED - (R - SIRKA / 2 - 6) * Math.sin(uholHranice)}
                  x2={hx + 9 * Math.cos(uholHranice)} y2={hy - 9 * Math.sin(uholHranice)}
                  stroke="#88D5DB" strokeWidth="2.5" strokeLinecap="round" />
            <text x={STRED} y={88} textAnchor="middle" className="font-kanit" fontSize="40" fill="#fff">6,5 s</text>
            <text x={STRED} y={106} textAnchor="middle" fontSize="10.5" fill="#88D5DB">kým pacient niečo uvidí</text>
        </svg>
    );
}

/**
 * Formulár previerky webu – používa ho sekcia nižšie aj vyskakovacie okno
 * (PrevierkaWebuOkno). `idPrefix` drží id polí jedinečné, keď sú na stránke oba formuláre.
 */
export function PrevierkaFormular({ idPrefix = '', miesto = 'sluzby' }: { idPrefix?: string; miesto?: string }) {
    const [stav, setStav] = useState<'formular' | 'odosiela' | 'hotovo'>('formular');
    const [chyba, setChyba] = useState<string | null>(null);
    const [chceKonzultaciu, setChceKonzultaciu] = useState(false);
    const zacata = useRef(false);

    /** Meranie kampane (24. 11. 2026): prvý klik do formulára. */
    function prvyKlik() {
        if (zacata.current) return;
        zacata.current = true;
        trackEvent('previerka_zacata', { miesto });
    }

    async function odosli(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setChyba(null);
        const f = new FormData(e.currentTarget);
        // Telefón je povinný a musí mať platný tvar – skontrolujeme ho ešte pred odoslaním.
        if (!normalizujTelefon(String(f.get('telefon') ?? ''))) {
            setChyba(SPRAVA_NEPLATNY_TELEFON);
            return;
        }
        setStav('odosiela');
        try {
            const r = await fetch('/api/previerka', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    web: String(f.get('web') ?? ''),
                    email: String(f.get('email') ?? ''),
                    telefon: String(f.get('telefon') ?? ''),
                    meno: String(f.get('meno') ?? ''),
                    zariadenie: String(f.get('zariadenie') ?? ''),
                    suhlas: f.get('suhlas') === 'on',
                    konzultacia: f.get('konzultacia') === 'on',
                    newsletter: f.get('newsletter') === 'on',
                    zdroj: zdrojAkoText(),
                    web2: String(f.get('web2') ?? ''),
                }),
            });
            const data = await r.json().catch(() => ({}));
            if (!r.ok) {
                setChyba(data?.error ?? 'Previerku sa nepodarilo spustiť. Skúste to prosím neskôr.');
                setStav('formular');
                return;
            }
            const z = nacitajZdroj();
            const konz = f.get('konzultacia') === 'on';
            setChceKonzultaciu(konz);
            trackEvent('previerka_odoslana', { miesto, zdroj: z.utm_source ?? 'organicky', konzultacia: konz });
            if (konz) trackEvent('previerka_konzultacia', { miesto, zdroj: z.utm_source ?? 'organicky' });
            if (f.get('newsletter') === 'on') trackEvent('newsletter_prihlaseny', { miesto: `previerka-${miesto}` });
            setStav('hotovo');
        } catch {
            setChyba('Spojenie sa nepodarilo. Skúste to prosím neskôr.');
            setStav('formular');
        }
    }

    const pole =
        'w-full rounded-xl bg-white/[0.07] border border-white/15 px-4 py-3.5 font-stolzl text-sm text-white placeholder:text-white/30 focus:border-[#4CADB6] focus:bg-white/[0.09] focus:outline-none transition-all';

    return (
        <>
        {stav === 'hotovo' ? (
            <div className="py-8">
                <div className="w-14 h-14 rounded-2xl bg-[#4CADB6]/15 border border-[#4CADB6]/30 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7 text-[#88D5DB]" />
                </div>
                <h3 className="text-2xl font-kanit font-medium mb-3 text-white">Previerka beží</h3>
                <p className="text-white/60 font-stolzl leading-relaxed">
                    Správu vám pošleme na zadaný e-mail, zvyčajne do niekoľkých minút.
                    Ak nedorazí, pozrite sa prosím aj do nevyžiadanej pošty.
                </p>
                <p className="mt-4 text-white/60 font-stolzl leading-relaxed">
                    {chceKonzultaciu
                        ? 'Výsledky si prejdeme spolu: ozveme sa vám do jedného pracovného dňa a dohodneme 20 minút, ktoré vám vyhovujú.'
                        : 'Ak budete chcieť výsledky prejsť s nami, stačí odpovedať na e-mail so správou.'}
                </p>
            </div>
        ) : (
            <form onSubmit={odosli} onFocusCapture={prvyKlik} className="space-y-4">
                <input type="text" name="web2" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                {[
                    { name: 'web', label: 'Adresa vášho webu', placeholder: 'www.vasaambulancia.sk', type: 'text', required: true },
                    { name: 'meno', label: 'Meno', placeholder: 'MUDr. Jana Nováková', type: 'text', required: true },
                    { name: 'email', label: 'E-mail (sem príde správa)', placeholder: 'jana@vasaambulancia.sk', type: 'email', required: true, autoComplete: 'email' },
                    { name: 'telefon', label: 'Telefón', placeholder: '0905 123 456', type: 'tel', required: true, autoComplete: 'tel' },
                    { name: 'zariadenie', label: 'Názov ambulancie (nepovinné)', placeholder: 'Zubná ambulancia Nováková', type: 'text', required: false },
                ].map((p) => (
                    <div key={p.name}>
                        <label htmlFor={idPrefix + p.name} className="block text-[11px] font-stolzl tracking-wide uppercase text-white/45 mb-2">
                            {p.label}
                        </label>
                        <input id={idPrefix + p.name} name={p.name} type={p.type} required={p.required} placeholder={p.placeholder} autoComplete={'autoComplete' in p ? p.autoComplete : undefined} className={pole} />
                    </div>
                ))}

                <label className="flex items-start gap-3 text-xs font-stolzl text-white/55 leading-relaxed pt-1">
                    <input type="checkbox" name="suhlas" required className="mt-0.5 accent-[#4CADB6] w-4 h-4 shrink-0" />
                    <span>
                        Súhlasím, aby Mediconect previerku vykonal, výsledok mi poslal na uvedený e-mail
                        a kontaktoval ma e-mailom alebo telefonicky v súvislosti s výsledkom previerky.
                        Podrobnosti v{' '}
                        <a href="/ochrana-osobnych-udajov" className="text-[#88D5DB] hover:underline">
                            zásadách ochrany osobných údajov
                        </a>.
                    </span>
                </label>

                <label className="flex items-start gap-3 text-xs font-stolzl text-white/70 leading-relaxed rounded-xl border border-[#4CADB6]/30 bg-[#4CADB6]/[0.08] px-4 py-3">
                    <input type="checkbox" name="konzultacia" className="mt-0.5 accent-[#4CADB6] w-4 h-4 shrink-0" />
                    <span>
                        <strong className="font-medium text-white">Chcem výsledky prejsť na 20-minútovej konzultácii</strong>{' '}
                        (nepovinné, zadarmo). Ozveme sa vám do jedného pracovného dňa.
                    </span>
                </label>

                {/* Newsletter (Viktor, 24. 11. 2026): nepovinný, nezaškrtnutý; text súhlasu = SUHLAS_NEWSLETTER (ukladá sa do CRM doslovne). */}
                <label className="flex items-start gap-3 text-xs font-stolzl text-white/55 leading-relaxed">
                    <input type="checkbox" name="newsletter" className="mt-0.5 accent-[#4CADB6] w-4 h-4 shrink-0" />
                    <span>
                        <strong className="font-medium text-white/85">Pošlite mi aj newsletter Tajomstvo efektívnych ambulancií</strong>{' '}
                        (overené postupy a dáta pre vašu prax, bez spamu). {SUHLAS_NEWSLETTER}
                    </span>
                </label>

                {chyba && (
                    <p className="text-sm font-stolzl text-[#F0A79D] bg-[#E06A5E]/10 border border-[#E06A5E]/25 rounded-xl px-4 py-3">
                        {chyba}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={stav === 'odosiela'}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[#4CADB6] text-[#041D2C] font-kanit text-base rounded-xl px-8 py-4 hover:bg-[#88D5DB] hover:shadow-[0_12px_40px_-10px_rgba(76,173,182,.7)] transition-all disabled:opacity-60"
                >
                    {stav === 'odosiela' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Odosielam…</>
                    ) : (
                        <>Chcem previerku webu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>
                <p className="text-[11px] text-white/40 font-stolzl text-center pt-1">
                    Správu pošleme iba na zadaný e-mail. Telefón slúži na otázky k výsledku.
                </p>
            </form>
        )}
        </>
    );
}

type Props = {
    /** Nadpis sekcie; predvolene „Čo vidí pacient, keď otvorí váš web?" */
    nadpis?: React.ReactNode;
    /** Veta pod nadpisom pred ukážkou správy. */
    uvod?: string;
    /** Kde formulár je – ide do merania (napr. „sluzby", „lp-meta"). */
    miesto?: string;
    /** Vstupná stránka kampane: sekcia je prvý blok (H1), na mobile formulár pred ukážkou. */
    hore?: boolean;
};

export default function PrevierkaWebu({ nadpis, uvod, miesto = 'sluzby', hore = false }: Props) {
    return (
        <section id="previerka-webu" className={`mc-dark relative z-10 scroll-mt-24 overflow-hidden rounded-[2rem] mx-4 lg:mx-8 ${hore ? 'mt-4 mb-10' : 'my-10'}`}>
            {/* svetelné akcenty */}
            <div className="pointer-events-none absolute -top-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(76,173,182,.38),transparent_62%)]" />
            <div className="pointer-events-none absolute -bottom-52 -left-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(136,213,219,.16),transparent_65%)]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            <div className={`relative max-w-7xl mx-auto px-8 py-16 lg:px-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center ${hore ? 'max-lg:px-6 max-lg:py-10 max-lg:gap-8' : ''}`}>
                {/* ĽAVÁ STRANA – hook a ukážka správy.
                    Na vstupnej stránke (hore) sa na mobile rozpadne na dve časti (max-lg:contents):
                    nadpis → formulár → ukážka, aby lekár z reklamy hneď videl rovnakú vetu ako v reklame. */}
                <div className={hore ? 'max-lg:contents' : ''}>
                    <div className={hore ? 'max-lg:order-1' : ''}>
                    <span className="inline-flex items-center gap-2 text-[11px] font-stolzl tracking-[0.18em] uppercase text-[#88D5DB] border border-[#4CADB6]/40 rounded-full px-4 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CADB6] animate-pulse" />
                        Zadarmo a nezáväzne
                    </span>

                    {React.createElement(
                        hore ? 'h1' : 'h2',
                        { className: `mt-7 ${hore ? 'text-[1.85rem]' : 'text-[2.1rem]'} lg:text-[3.1rem] leading-[1.08] font-kanit font-medium text-white` },
                        nadpis ?? (
                            <>
                                Čo vidí pacient,<br />
                                keď otvorí{' '}
                                <span className="text-[#88D5DB]">váš web</span>?
                            </>
                        ),
                    )}

                    <p className="mt-5 text-white/70 font-stolzl leading-relaxed max-w-lg">
                        {uvod ?? 'Zmeriame ho rovnako ako weby našich klientov a správu vám pošleme e-mailom.'}{' '}
                        <span className={hore ? 'max-lg:hidden' : ''}>Takto vyzeral výsledok jednej zubnej ambulancie:</span>
                    </p>
                    </div>

                    <div className={hore ? 'max-lg:order-3' : ''}>
                    {hore && (
                        <p className="lg:hidden mb-5 text-white/70 font-stolzl leading-relaxed">Takto vyzeral výsledok jednej zubnej ambulancie:</p>
                    )}
                    {/* UKÁŽKA SPRÁVY */}
                    <div className={`${hore ? 'lg:mt-8' : 'mt-8'} rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur p-6 lg:p-8 max-w-xl`}>
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-9">
                            <Cifernik />
                            <div className="flex-1 w-full space-y-5">
                                <div>
                                    <div className="flex items-baseline justify-between font-stolzl">
                                        <span className="text-xs text-white/55">Čo stiahne telefón</span>
                                        <span className="font-kanit text-lg text-white">{String(STIAHNE_MB).replace('.', ',')} MB</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden flex">
                                        <span className="h-full bg-[#E06A5E]" style={{ width: '45%' }} />
                                        <span className="h-full bg-[#C8781C]" style={{ width: '9%' }} />
                                        <span className="h-full bg-white/25" style={{ width: '46%' }} />
                                    </div>
                                    <p className="mt-2 text-[11px] text-white/45 font-stolzl">
                                        z toho 2 MB zbytočne veľké obrázky
                                    </p>
                                </div>
                                <div className="flex items-center justify-between gap-3 font-stolzl border-t border-white/10 pt-4">
                                    <span className="text-xs text-white/55 leading-snug">
                                        Vie Google, že ste zdravotnícke zariadenie?
                                    </span>
                                    <span className="shrink-0 rounded-full bg-[#E06A5E]/15 text-[#F0A79D] text-xs px-3 py-1 border border-[#E06A5E]/30">
                                        Nevie
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 pt-4 border-t border-white/10 text-[11px] text-white/40 font-stolzl leading-relaxed">
                            Skutočné hodnoty namerané 17. 11. 2026 na webe súkromnej zubnej ambulancie. Meno neuvádzame.
                        </p>
                    </div>

                    <ul className="mt-8 grid sm:grid-cols-3 gap-x-6 gap-y-3 font-stolzl text-sm text-white/60 max-w-xl">
                        {['Namerané hodnoty, nie odhady', 'Napísané pre lekára', 'Správa e-mailom do pár minút'].map((t) => (
                            <li key={t} className="flex items-start gap-2 leading-snug">
                                <Check className="w-4 h-4 text-[#4CADB6] mt-0.5 shrink-0" />
                                {t}
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* PRAVÁ STRANA – formulár */}
                <div className={`rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur p-7 lg:p-9 ${hore ? 'max-lg:order-2 max-lg:p-5' : ''}`}>
                    <PrevierkaFormular miesto={miesto} />
                </div>
            </div>
        </section>
    );
}
