'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

/**
 * Samoobslužná previerka webu – formulár na stránke Web a SEO.
 *
 * Lekár zadá adresu svojho webu a e-mail; previerku vykoná CRM Ordevia
 * a výsledok pošle e-mailom. Odosiela sa na vlastnú trasu `/api/previerka`,
 * ktorá požiadavku preposiela do CRM.
 */
export default function PrevierkaWebu() {
    const [stav, setStav] = useState<'formular' | 'odosiela' | 'hotovo'>('formular');
    const [chyba, setChyba] = useState<string | null>(null);

    async function odosli(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setChyba(null);
        const f = new FormData(e.currentTarget);
        setStav('odosiela');
        try {
            const r = await fetch('/api/previerka', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    web: String(f.get('web') ?? ''),
                    email: String(f.get('email') ?? ''),
                    meno: String(f.get('meno') ?? ''),
                    zariadenie: String(f.get('zariadenie') ?? ''),
                    suhlas: f.get('suhlas') === 'on',
                    web2: String(f.get('web2') ?? ''),
                }),
            });
            const data = await r.json().catch(() => ({}));
            if (!r.ok) {
                setChyba(data?.error ?? 'Previerku sa nepodarilo spustiť. Skúste to prosím neskôr.');
                setStav('formular');
                return;
            }
            setStav('hotovo');
        } catch {
            setChyba('Spojenie sa nepodarilo. Skúste to prosím neskôr.');
            setStav('formular');
        }
    }

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="glass rounded-2xl border border-white/5 p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <span className="inline-block text-xs font-stolzl tracking-wide text-teal border border-teal/40 rounded-full px-4 py-1 mb-6">
                            Zadarmo a nezáväzne
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-5">
                            Čo vidí pacient, keď otvorí <span className="text-gradient">váš web</span>?
                        </h2>
                        <p className="text-white/60 font-stolzl leading-relaxed mb-6">
                            Zmeriame ho rovnako, ako meriame weby našich klientov, a správu vám pošleme e-mailom.
                            Uvidíte, ako dlho pacient čaká na mobile, čo o vás vie Google a kde sa cesta k objednaniu láme.
                        </p>
                        <ul className="space-y-3 font-stolzl text-sm text-white/60">
                            {[
                                'Namerané hodnoty, nie odhady',
                                'Napísané pre lekára, nie pre programátora',
                                'Bez telefonátu – správa príde na e-mail',
                            ].map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {stav === 'hotovo' ? (
                        <div className="flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                                <Check className="w-6 h-6 text-teal" />
                            </div>
                            <h3 className="text-2xl font-bold font-kanit mb-3">Previerka beží</h3>
                            <p className="text-white/60 font-stolzl leading-relaxed">
                                Správu vám pošleme na zadaný e-mail, zvyčajne do niekoľkých minút. Ak nedorazí,
                                pozrite sa prosím aj do priečinka s nevyžiadanou poštou.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={odosli} className="space-y-4">
                            <input type="text" name="web2" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                            {[
                                { name: 'web', label: 'Adresa vášho webu', placeholder: 'www.vasaambulancia.sk', type: 'text', required: true },
                                { name: 'meno', label: 'Meno', placeholder: 'MUDr. Jana Nováková', type: 'text', required: true },
                                { name: 'email', label: 'E-mail', placeholder: 'jana@vasaambulancia.sk', type: 'email', required: true },
                                { name: 'zariadenie', label: 'Názov ambulancie (nepovinné)', placeholder: 'Zubná ambulancia Nováková', type: 'text', required: false },
                            ].map((p) => (
                                <div key={p.name}>
                                    <label htmlFor={p.name} className="block text-xs font-stolzl text-white/50 mb-2">
                                        {p.label}
                                    </label>
                                    <input
                                        id={p.name}
                                        name={p.name}
                                        type={p.type}
                                        required={p.required}
                                        placeholder={p.placeholder}
                                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 font-stolzl text-sm text-white placeholder:text-white/25 focus:border-teal focus:outline-none transition-colors"
                                    />
                                </div>
                            ))}

                            <label className="flex items-start gap-3 text-xs font-stolzl text-white/50 leading-relaxed pt-1">
                                <input type="checkbox" name="suhlas" required className="mt-0.5 accent-teal w-4 h-4 shrink-0" />
                                <span>
                                    Súhlasím, aby Mediconect previerku vykonal a výsledok mi poslal na uvedený e-mail.
                                    Podrobnosti v{' '}
                                    <a href="/ochrana-osobnych-udajov" className="text-teal hover:underline">
                                        zásadách ochrany osobných údajov
                                    </a>
                                    .
                                </span>
                            </label>

                            {chyba && (
                                <p className="text-sm font-stolzl text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                    {chyba}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={stav === 'odosiela'}
                                className="w-full inline-flex items-center justify-center gap-3 bg-teal text-navy-dark font-stolzl font-bold rounded-xl px-8 py-4 hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 transition-all disabled:opacity-60"
                            >
                                {stav === 'odosiela' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Odosielam…
                                    </>
                                ) : (
                                    <>
                                        Chcem previerku webu <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
