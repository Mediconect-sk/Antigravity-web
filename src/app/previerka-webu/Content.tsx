'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import PrevierkaWebu from '@/components/PrevierkaWebu';
import { trackEvent } from '@/lib/track';

type Variant = 'meta' | 'linkedin' | 'zaklad';

/** Nadpisy podľa kanála (stratégia kampane, bod 3). Formulár je všade rovnaký. */
const NADPISY: Record<Variant, { nadpis: React.ReactNode; uvod: string }> = {
    meta: {
        nadpis: (
            <>
                Pacient si vás vygoogli skôr, než zavolá.{' '}
                <span className="text-[#88D5DB]">Čo uvidí?</span>
            </>
        ),
        uvod: 'Bezplatná previerka webu ambulancie: rýchlosť na mobile, Google a prvý dojem pacienta. Správa príde e-mailom.',
    },
    linkedin: {
        nadpis: (
            <>
                Pôsobí váš web rovnako profesionálne{' '}
                <span className="text-[#88D5DB]">ako vaša ambulancia?</span>
            </>
        ),
        uvod: 'Bezplatne preveríme web vašej ambulancie alebo kliniky a ukážeme, čo ovplyvňuje prvý dojem a dôveru pacientov.',
    },
    zaklad: {
        nadpis: (
            <>
                Pôsobí váš web rovnako profesionálne{' '}
                <span className="text-[#88D5DB]">ako vaša ambulancia?</span>
            </>
        ),
        uvod: 'Bezplatne preveríme váš web a ukážeme, čo ovplyvňuje prvý dojem a dôveru vašich pacientov.',
    },
};

/** Strany zo skutočnej správy (aurel → anonymizované „Klient A", snímky webu rozmazané). */
const UKAZKY = [
    {
        src: '/images/previerka/ukazka-sprava-skore.webp',
        alt: 'Strana správy previerky: skóre webu na mobile a kľúčové čísla',
        nazov: 'Výsledok na jednej strane',
        text: 'Skóre webu na mobile a čísla, ktoré pacient zažije: kedy uvidí obsah, kedy sa dá klikať, koľko dát stiahne.',
    },
    {
        src: '/images/previerka/ukazka-sprava-rychlost.webp',
        alt: 'Strana správy previerky: čo pacient vidí na mobile sekundu po sekunde',
        nazov: 'Čo pacient vidí, sekundu po sekunde',
        text: 'Skutočné snímky z merania a vysvetlenie, prečo na tom záleží pre poradie v Google aj pre pacienta.',
    },
];

const OTAZKY = [
    {
        q: 'Naozaj je to zadarmo?',
        a: 'Áno. Previerka aj správa sú bezplatné a k ničomu vás nezaväzujú.',
    },
    {
        q: 'Načo je telefón?',
        a: 'Na otázky k výsledku. Správa príde e-mailom. Ak zaškrtnete konzultáciu výsledkov, ozveme sa do jedného pracovného dňa.',
    },
    {
        q: 'Čo ak web robila iná agentúra?',
        a: 'Nevadí. Správu môžete poslať svojej agentúre – opravy sú v nej popísané tak, aby ich vedel urobiť ktokoľvek.',
    },
];

export default function Content({ variant }: { variant: Variant }) {
    const t = NADPISY[variant];
    return (
        <>
            {/* Hlavička bez menu: logo vedie na úvod webu, vpravo telefón a e-mail (Viktor, 24. 11. 2026) */}
            <header className="mc-dark relative z-20" style={{ background: '#0A2B40' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                    <a href="/" aria-label="Mediconect – úvodná stránka" className="shrink-0">
                    <Image
                        src="/logo/mediconect_medical-business-partner_negat.svg"
                        alt="Mediconect – logo, medical business partner"
                        width={200}
                        height={54}
                        priority
                        className="h-11 w-auto"
                    />
                    </a>
                    <div className="flex items-center gap-5 sm:gap-7">
                    <a
                        href="tel:+421948220845"
                        onClick={() => trackEvent('klik_telefon', { stranka: 'previerka-webu' })}
                        className="inline-flex items-center gap-2 text-sm font-stolzl text-white/70 hover:text-[#88D5DB] transition-colors"
                    >
                        <Phone size={15} className="text-[#4CADB6]" />
                        <span className="hidden sm:inline">+421 948 220 845</span>
                    </a>
                    <a
                        href="mailto:info@mediconect.sk"
                        onClick={() => trackEvent('klik_email', { stranka: 'previerka-webu' })}
                        className="inline-flex items-center gap-2 text-sm font-stolzl text-white/70 hover:text-[#88D5DB] transition-colors"
                        aria-label="E-mail info@mediconect.sk"
                    >
                        <Mail size={15} className="text-[#4CADB6]" />
                        <span className="hidden sm:inline">info@mediconect.sk</span>
                    </a>
                    </div>
                </div>
            </header>

            <main id="obsah" className="flex-grow">
                <PrevierkaWebu nadpis={t.nadpis} uvod={t.uvod} miesto={`lp-${variant}`} hore />

                {/* UKÁŽKA SPRÁVY – skutočná správa, klient anonymizovaný (Viktor, 24. 11. 2026) */}
                <section className="relative z-10 py-14 lg:py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Ukážka výstupu</span>
                        <h2 className="text-3xl lg:text-4xl font-kanit font-medium mb-4 max-w-2xl">
                            Takto vyzerá správa, ktorú dostanete
                        </h2>
                        <p className="font-stolzl text-gray-light leading-relaxed mb-10 max-w-2xl">
                            Dve strany zo skutočnej správy pre súkromnú kliniku. Názov kliniky a snímky jej webu sme skryli.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {UKAZKY.map((u) => (
                                <figure key={u.src}>
                                    <div className="rounded-2xl overflow-hidden bg-[#fff] shadow-[0_24px_60px_-28px_rgba(10,43,64,.55)] ring-1 ring-black/5">
                                        <Image src={u.src} alt={u.alt} width={900} height={1273} sizes="(min-width: 768px) 560px, 92vw" className="w-full h-auto" />
                                    </div>
                                    <figcaption className="mt-5">
                                        <h3 className="font-kanit text-lg font-medium mb-1">{u.nazov}</h3>
                                        <p className="font-stolzl text-sm text-gray-light leading-relaxed">{u.text}</p>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OTÁZKY + návrat k formuláru */}
                <section className="relative z-10 pb-20">
                    <div className="max-w-3xl mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-kanit font-medium mb-8 text-center">Časté otázky</h2>
                        <div className="space-y-4">
                            {OTAZKY.map((o) => (
                                <div key={o.q} className="rounded-2xl bg-[#fff] p-6 shadow-[0_10px_30px_-18px_rgba(10,43,64,.45)]">
                                    <h3 className="font-kanit text-lg font-medium mb-2">{o.q}</h3>
                                    <p className="font-stolzl text-gray-light leading-relaxed">{o.a}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <a
                                href="#previerka-webu"
                                className="inline-flex items-center justify-center gap-3 bg-[#4CADB6] text-[#041D2C] font-kanit text-base rounded-xl px-8 py-4 hover:bg-[#88D5DB] transition-all"
                            >
                                Chcem previerku webu
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mc-dark relative z-10 py-8" style={{ background: '#0A2B40' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-between text-xs font-stolzl text-white/50">
                    <span>MediConect s.r.o., Lounská 629/2, 031 04 Liptovský Mikuláš · info@mediconect.sk</span>
                    <a href="/ochrana-osobnych-udajov" className="hover:text-[#88D5DB]">Ochrana osobných údajov</a>
                </div>
            </footer>
        </>
    );
}
