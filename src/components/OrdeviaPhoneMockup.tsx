import React from 'react';
import { CalendarCheck, ClipboardList, MessageCircle } from 'lucide-react';

/**
 * Ilustračný náhľad aplikácie Ordevia Connect v rámčeku telefónu.
 * Čisté CSS, žiadne obrázky – používa ho homepage aj stránka služby.
 * Údaje v kartách sú len ilustračné.
 */
export default function OrdeviaPhoneMockup() {
    return (
        <div className="relative mx-auto w-[280px] max-w-full" aria-hidden="true">
            <div className="absolute -inset-10 bg-teal/15 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#081723] p-3 shadow-2xl shadow-black/50">
                <div className="rounded-[2rem] border border-white/5 bg-gradient-to-b from-[#0c2231] to-[#07131d] px-5 pt-4 pb-6">
                    {/* Výrez telefónu */}
                    <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />

                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-teal" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-teal font-kanit">Ordevia Connect</span>
                    </div>
                    <p className="text-lg font-bold font-kanit leading-tight mb-5">Vaša klinika vo vrecku.</p>

                    <div className="space-y-3">
                        <div className="rounded-2xl border border-teal/25 bg-teal/10 p-4">
                            <div className="flex items-center gap-2 text-teal mb-2">
                                <CalendarCheck size={15} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Najbližší termín</span>
                            </div>
                            <p className="text-sm font-semibold text-white/90">Preventívna prehliadka</p>
                            <p className="text-xs text-white/50 font-stolzl">Utorok · 14:30</p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                            <div className="flex items-center gap-2 text-white/60 mb-2">
                                <ClipboardList size={15} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Pokyny pred vyšetrením</span>
                            </div>
                            <p className="text-xs text-white/60 font-stolzl leading-relaxed">Príďte nalačno a vezmite si so sebou zoznam liekov.</p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                            <div className="flex items-center gap-2 text-white/60 mb-2">
                                <MessageCircle size={15} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Správa od kliniky</span>
                            </div>
                            <p className="text-xs text-white/60 font-stolzl leading-relaxed">Váš termín je potvrdený. Tešíme sa na vás.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
