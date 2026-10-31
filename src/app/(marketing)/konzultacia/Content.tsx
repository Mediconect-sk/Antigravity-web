'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import KonzultaciaFormular from '@/components/KonzultaciaFormular';

const kroky = [
    { title: 'Bezplatný 30-minútový rozhovor', desc: 'Prejdeme vašu situáciu a priority.' },
    { title: 'Detailný audit', desc: 'Podrobne preberieme vašu prax: čísla, procesy a marketing.' },
    { title: 'Návrh implementácie', desc: 'Navrhneme konkrétne kroky a ich poradie.' },
    { title: 'Dohoda o spolupráci', desc: 'Dohodneme rozsah a podmienky spolupráce.' },
    { title: 'Strategická realizácia', desc: 'Plán realizujeme a pravidelne ho vyhodnocujeme.' },
];

export default function KonzultaciaContent() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail('/konzultacia')}
                title="Bezplatná 30-minútová konzultácia"
                subtitle="Vyberte, čo dnes najviac riešite, a dostanete návrh ďalšieho kroku."
                badge="Konzultácia"
            />
            <section className="py-24 relative z-10">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl font-bold font-kanit mb-8">Čo sa stane po rozhovore</h2>
                    <ol className="space-y-4 mb-16">
                        {kroky.map((krok, i) => (
                            <li key={krok.title} className="glass rounded-2xl p-5 flex gap-4">
                                <span className="text-teal font-kanit font-bold">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <div className="font-kanit font-semibold">{krok.title}</div>
                                    <div className="text-white/60 text-sm font-stolzl">{krok.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <KonzultaciaFormular />
                </div>
            </section>
        </div>
    );
}
