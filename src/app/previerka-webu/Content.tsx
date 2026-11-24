'use client';

import React from 'react';
import Image from 'next/image';
import { Gauge, Search, ShieldCheck, Smartphone, Phone, Mail } from 'lucide-react';
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

/** Len to, čo previerka naozaj meria (pozri ukážku správy vo formulári). */
const CO_MERIAME = [
    { ikona: Gauge, nazov: 'Prvý dojem', text: 'Koľko sekúnd pacient čaká, kým váš web niečo ukáže. Pomalý web pôsobí zanedbane, aj keď je ambulancia špičková.' },
    { ikona: Smartphone, nazov: 'Pohodlie na mobile', text: 'Pacienti vás často hľadajú v telefóne. Zistíme, koľko dát web zbytočne sťahuje a čo ho brzdí.' },
    { ikona: Search, nazov: 'Nájdu vás pacienti?', text: 'Či Google vie, že ste zdravotnícke zariadenie, a či vás ukáže tým, ktorí lekára vo vašom okolí hľadajú.' },
    { ikona: ShieldCheck, nazov: 'Bez technického žargónu', text: 'Správa je napísaná pre lekára: čo je zle, prečo na tom záleží a čo opraviť ako prvé. Môžete ju poslať aj svojej agentúre.' },
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

                {/* ČO MERIAME */}
                <section className="relative z-10 py-14 lg:py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Čo previerka meria</span>
                        <h2 className="text-3xl lg:text-4xl font-kanit font-medium mb-10 max-w-2xl">
                            Štyri veci, o ktorých pacient rozhodne skôr, než vám zavolá
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {CO_MERIAME.map(({ ikona: Ikona, nazov, text }) => (
                                <div key={nazov} className="rounded-2xl bg-[#fff] border-t-[3px] border-[#4CADB6] shadow-[0_10px_30px_-18px_rgba(10,43,64,.45)] p-6">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#0A2B40' }}>
                                        <Ikona className="w-6 h-6 text-[#88D5DB]" />
                                    </div>
                                    <h3 className="font-kanit text-lg font-medium mb-2">{nazov}</h3>
                                    <p className="font-stolzl text-sm text-gray-light leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KTO MERIA */}
                <section className="relative z-10 pb-14 lg:pb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[320px_1fr] gap-10 items-center">
                        <figure className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/tim/viktor-struhar-v3.webp"
                                alt="PhDr. Víťazoslav Struhár, Mediconect"
                                fill
                                sizes="320px"
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0A2B40]/95 via-[#0A2B40]/60 to-transparent" />
                            <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-[#fff] font-semibold text-lg leading-tight">PhDr. Víťazoslav Struhár</p>
                                <p className="text-[#88D5DB] text-sm font-medium">CEO, Mediconect</p>
                            </figcaption>
                        </figure>
                        <div>
                            <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Kto za previerkou stojí</span>
                            <h2 className="text-3xl lg:text-4xl font-kanit font-medium mb-5">
                                Marketing pre lekárov, ktorý sme ukázali lekárom z celej Európy
                            </h2>
                            <p className="font-stolzl text-gray-light leading-relaxed mb-8 max-w-2xl">
                                Mediconect je partner súkromných lekárov a ambulancií. Náš prístup k zdravotníckemu
                                marketingu sme v roku 2026 prezentovali na odborných fórach EUROPREV v Madride
                                a EURIPA v Cartagene.
                            </p>
                            <div className="grid grid-cols-2 gap-4 max-w-2xl">
                                {[
                                    { src: '/images/blog/europrev-2026/fakulta-mediciny-uam-v2.webp', alt: 'PhDr. Víťazoslav Struhár na Lekárskej fakulte UAM v Madride', miesto: 'Madrid · EUROPREV' },
                                    { src: '/images/blog/euripa-2026/poster-personalizovany-marketing.webp', alt: 'Poster Mediconect o personalizovanom zdravotníckom marketingu', miesto: 'Cartagena · EURIPA' },
                                ].map((f) => (
                                    <div key={f.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                        <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 330px, 45vw" className="object-cover object-top" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B40]/85 via-transparent to-transparent" />
                                        <span className="absolute bottom-3 left-4 text-xs font-semibold text-[#fff] font-kanit">{f.miesto}</span>
                                    </div>
                                ))}
                            </div>
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
