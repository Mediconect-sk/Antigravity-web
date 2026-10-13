'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { MYMEDICAL } from '@/lib/seo';

/**
 * Sekcia „Cesta lekára" na domovskej stránke (reštrukturalizácia v2, bod 2).
 *
 * Dve vetvy s prepínačom: majiteľ / zakladateľ praxe a zamestnaný lekár.
 * Každý krok vedie ďalej – na stránku piliera (/business-partner,
 * /sprava-a-ochrana-majetku), na podstránku služby alebo na MyMedical.
 * Typ `{ contact: true }` (otvorí kontaktný formulár) ostáva k dispozícii.
 * Spojnica „Prechod do vlastnej praxe" prepne zo zamestnanca na majiteľa.
 *
 * Obe vetvy sú v HTML vždy (pravidlo z CLAUDE.md) – neaktívna je len
 * vizuálne skrytá, aby ju videli vyhľadávače aj AI crawlery.
 *
 */

type Action = { href: string; external?: boolean } | { contact: true };

type Step = {
    title: string;
    text: string;
    cta: string;
    action: Action;
};

const OWNER: Step[] = [
    {
        title: "Atestácia",
        text: "Zvažujete vlastnú prax. Pomôžeme rozhodnúť, kedy a v akej forme.",
        cta: "Business partner",
        action: { href: "/business-partner" },
    },
    {
        title: "Založenie ambulancie",
        text: "Povolenia, zmluvy s poisťovňami, priestory a financovanie vybavenia.",
        cta: "Business partner",
        action: { href: "/business-partner" },
    },
    {
        title: "Prví pacienti",
        text: "Web, profil na Google a prvé kampane – dôstojne a v súlade s etikou.",
        cta: "Pacienti a marketing",
        action: { href: "/sluzby/akvizicia-a-vykonnostny-marketing" },
    },
    {
        title: "Stabilná prevádzka",
        text: "Objednávanie a komunikácia s pacientmi, ktoré fungujú aj bez vás pri telefóne.",
        cta: "Ordevia Connect",
        action: { href: "/sluzby/webova-aplikacia-ordevia" },
    },
    {
        title: "Budovanie majetku",
        text: "Čo zarobíte v ambulancii, má pracovať pre vás a vašu rodinu.",
        cta: "Správa majetku",
        action: { href: "/sprava-a-ochrana-majetku" },
    },
    {
        title: "Odovzdanie praxe",
        text: "Generačná výmena alebo predaj praxe – včas a s plánom.",
        cta: "Generačná výmena",
        action: { href: "/business-partner" },
    },
];

const EMPLOYEE: Step[] = [
    {
        title: "Rezidentúra",
        text: "Prvé roky v nemocnici. Základy, na ktorých budete stavať celú kariéru.",
        cta: "MyMedical",
        action: { href: MYMEDICAL.url, external: true },
    },
    {
        title: "Špecialista",
        text: "Atestácia, odborné meno a príjem, ktorý nestojí len na úväzku.",
        cta: "MyMedical",
        action: { href: MYMEDICAL.url, external: true },
    },
    {
        title: "Vedúci lekár / primár",
        text: "Viac zodpovednosti a rozhodnutí – a menej času na vlastné veci.",
        cta: "MyMedical",
        action: { href: MYMEDICAL.url, external: true },
    },
    {
        title: "Budovanie majetku",
        text: "Aby príjem z medicíny pracoval pre vás a vašu rodinu.",
        cta: "Správa majetku",
        action: { href: "/sprava-a-ochrana-majetku" },
    },
    {
        title: "Dôchodok a renta",
        text: "Aby ste si úroveň života udržali aj po odchode z nemocnice.",
        cta: "Správa majetku",
        action: { href: "/sprava-a-ochrana-majetku" },
    },
];

const openContact = () => window.dispatchEvent(new Event('open_contact_modal'));

function StepCta({ step }: { step: Step }) {
    const cls = "inline-flex items-center gap-1.5 whitespace-nowrap text-teal text-sm font-semibold font-kanit hover:gap-2.5 transition-all";
    if ('contact' in step.action) {
        return (
            <button type="button" onClick={openContact} className={`${cls} cursor-pointer`}>
                {step.cta} <ArrowRight size={14} />
            </button>
        );
    }
    if (step.action.external) {
        return (
            <a href={step.action.href} target="_blank" rel="noopener" className={cls}>
                {step.cta} <ArrowRight size={14} />
            </a>
        );
    }
    return (
        <Link href={step.action.href} className={cls}>
            {step.cta} <ArrowRight size={14} />
        </Link>
    );
}

function Timeline({ steps, highlight }: { steps: Step[]; highlight?: number }) {
    return (
        <ol className={`relative grid gap-4 grid-cols-1 sm:grid-cols-2 ${steps.length === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-5'}`}>
            {/* spojovacia čiara (desktop) */}
            <div aria-hidden className="hidden lg:block absolute top-5 left-[6%] right-[6%] h-px bg-gradient-to-r from-teal/10 via-teal/40 to-teal/10" />
            {steps.map((step, i) => (
                <li
                    key={step.title}
                    className={`relative glass rounded-2xl p-5 pt-14 flex flex-col transition-all ${highlight === i ? 'ring-2 ring-teal shadow-[0_0_30px_rgba(76,173,182,0.25)]' : 'ring-1 ring-white/5 hover:ring-teal/30'}`}
                >
                    <span className="absolute top-3 left-5 w-8 h-8 rounded-full bg-navy-dark border border-teal/40 text-teal text-sm font-bold font-kanit flex items-center justify-center">
                        {i + 1}
                    </span>
                    <h3 className="text-white font-semibold font-kanit text-lg leading-tight mb-2">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{step.text}</p>
                    <div className="mt-auto"><StepCta step={step} /></div>
                </li>
            ))}
        </ol>
    );
}

export default function CestaLekara() {
    const [branch, setBranch] = useState<'owner' | 'employee'>('owner');
    const [highlight, setHighlight] = useState<number | undefined>(undefined);

    const tab = (active: boolean) =>
        `px-5 py-2.5 rounded-xl text-sm font-semibold font-kanit transition-all cursor-pointer ${
            active ? 'bg-teal text-navy-dark' : 'text-white/60 hover:text-white'
        }`;

    const toOwnPractice = () => {
        setBranch('owner');
        setHighlight(1); // Založenie ambulancie
        document.getElementById('cesta-lekara')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="cesta-lekara" className="py-20 relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Cesta lekára</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">V ktorej fáze ste vy?</h2>
                    <p className="text-white/55 max-w-2xl mx-auto">
                        Od rezidentúry po odovzdanie praxe. Vyberte si, čo je vám bližšie – a pozrite sa, s čím vám pomôžeme práve teraz.
                    </p>
                </div>

                <div role="tablist" aria-label="Vyberte svoju situáciu" className="flex justify-center mb-10">
                    <div className="inline-flex flex-col sm:flex-row gap-1 p-1 rounded-2xl glass border border-white/10">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={branch === 'owner'}
                            aria-controls="cesta-majitel"
                            onClick={() => { setBranch('owner'); setHighlight(undefined); }}
                            className={tab(branch === 'owner')}
                        >
                            Som majiteľ / zakladám prax
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={branch === 'employee'}
                            aria-controls="cesta-zamestnanec"
                            onClick={() => { setBranch('employee'); setHighlight(undefined); }}
                            className={tab(branch === 'employee')}
                        >
                            Som zamestnaný lekár
                        </button>
                    </div>
                </div>

                {/* Obe vetvy sú v DOM vždy, neaktívna je len skrytá */}
                <div id="cesta-majitel" role="tabpanel" className={branch === 'owner' ? 'block' : 'hidden'}>
                    <Timeline steps={OWNER} highlight={highlight} />
                </div>

                <div id="cesta-zamestnanec" role="tabpanel" className={branch === 'employee' ? 'block' : 'hidden'}>
                    <Timeline steps={EMPLOYEE} />

                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            onClick={toOwnPractice}
                            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-dashed border-teal/40 text-white/80 hover:text-white hover:border-teal hover:bg-teal/5 transition-all cursor-pointer"
                        >
                            <ArrowDownRight size={18} className="text-teal" />
                            <span className="font-kanit font-semibold">Prechod do vlastnej praxe</span>
                            <span className="text-white/45 text-sm hidden sm:inline">– keď sa rozhodnete, pokračujete krokom Založenie ambulancie</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
