'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { PrevierkaFormular } from '@/components/PrevierkaWebu';

/**
 * Výzva na bezplatnú previerku webu priamo v texte článku.
 *
 * Tlačidlo otvorí vyskakovacie okno s rovnakým formulárom ako sekcia PrevierkaWebu,
 * takže lekár nemusí hľadať formulár na konci stránky. Okno sa vykresľuje cez portál
 * do <body>, aby naň nepôsobili štýly článku (prose). Zatvára sa krížikom, klávesom
 * Esc aj kliknutím mimo okna.
 */
export default function PrevierkaWebuOkno({
    title = 'Pozrieme sa na váš web zadarmo',
    children,
}: {
    title?: string;
    children?: React.ReactNode;
}) {
    const [otvorene, setOtvorene] = useState(false);
    const [pripravene, setPripravene] = useState(false);

    useEffect(() => setPripravene(true), []);

    useEffect(() => {
        if (!otvorene) return;
        const naEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOtvorene(false);
        const povodne = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', naEsc);
        return () => {
            document.body.style.overflow = povodne;
            window.removeEventListener('keydown', naEsc);
        };
    }, [otvorene]);

    return (
        <>
            <div className="not-prose mc-dark relative overflow-hidden my-10 rounded-[1.75rem] bg-[#041D2C] p-7 lg:p-9">
                <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(76,173,182,.35),transparent_62%)]" />
                <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 text-[11px] font-stolzl tracking-[0.18em] uppercase text-[#88D5DB]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4CADB6] animate-pulse" />
                            Zadarmo a nezáväzne
                        </span>
                        <p className="mt-3 text-2xl lg:text-[1.7rem] leading-tight font-kanit font-medium text-white">{title}</p>
                        {children && <div className="mt-3 text-white/70 font-stolzl leading-relaxed text-[15px]">{children}</div>}
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-stolzl text-sm text-white/55">
                            {['Namerané hodnoty', 'Napísané pre lekára', 'Správa e-mailom'].map((t) => (
                                <span key={t} className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-[#4CADB6]" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOtvorene(true)}
                        className="group inline-flex items-center justify-center gap-3 bg-[#4CADB6] text-[#041D2C] font-kanit text-base rounded-xl px-7 py-4 hover:bg-[#88D5DB] hover:shadow-[0_12px_40px_-10px_rgba(76,173,182,.7)] transition-all whitespace-nowrap"
                    >
                        Chcem posúdenie webu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {pripravene &&
                otvorene &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0C141A]/70 backdrop-blur-sm"
                        onClick={() => setOtvorene(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="previerka-okno-nadpis"
                    >
                        <div
                            className="mc-dark relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-[1.75rem] bg-[#041D2C] border border-white/10 p-7 lg:p-9 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setOtvorene(false)}
                                aria-label="Zavrieť"
                                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <p className="text-[11px] font-stolzl tracking-[0.18em] uppercase text-[#88D5DB]">Previerka webu zadarmo</p>
                            <h2 id="previerka-okno-nadpis" className="mt-3 mb-2 text-2xl font-kanit font-medium text-white pr-10">
                                Čo vidí pacient, keď otvorí váš web?
                            </h2>
                            <p className="mb-6 text-sm text-white/60 font-stolzl leading-relaxed">
                                Zmeriame ho rovnako ako weby našich klientov a správu vám pošleme e-mailom.
                            </p>
                            <PrevierkaFormular idPrefix="okno-" miesto="okno" />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
