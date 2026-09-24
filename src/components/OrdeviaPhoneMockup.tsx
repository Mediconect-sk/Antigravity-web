import React from 'react';
import { CalendarCheck, ClipboardList, MessageCircle, Home, CalendarDays, LayoutGrid, UserRound } from 'lucide-react';
import { OrdeviaSymbol } from './OrdeviaLogo';

/**
 * Ilustračný náhľad aplikácie Ordevia Connect (obrazovka Domov) v rámčeku telefónu.
 * Čisté CSS, žiadne obrázky – používa ho homepage aj stránka Ordevie.
 * Údaje v kartách sú len ilustračné, štruktúra zodpovedá reálnej aplikácii:
 * spodná navigácia Domov · Termíny · Služby · Správy · Profil, stavy požiadavky
 * Nová / V riešení / Vybavená a údaj, na koho strane je ďalší krok.
 */
const nav = [
    { label: 'Domov', icon: Home, active: true },
    { label: 'Termíny', icon: CalendarDays },
    { label: 'Služby', icon: LayoutGrid },
    { label: 'Správy', icon: MessageCircle },
    { label: 'Profil', icon: UserRound },
];

export default function OrdeviaPhoneMockup() {
    return (
        <div className="relative mx-auto w-[280px] max-w-full" aria-hidden="true">
            <div className="absolute -inset-10 bg-teal/15 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#081723] p-3 shadow-2xl shadow-black/50">
                <div className="rounded-[2rem] border border-white/5 bg-gradient-to-b from-[#0c2231] to-[#07131d] px-5 pt-4 pb-3">
                    {/* Výrez telefónu */}
                    <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />

                    <div className="flex items-center gap-2 mb-1">
                        <OrdeviaSymbol size={24} />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-teal font-kanit">Ordevia Connect</span>
                    </div>
                    <p className="text-lg font-bold font-kanit leading-tight mb-5">Čo treba teraz</p>

                    <div className="space-y-3">
                        <div className="rounded-2xl border border-teal/25 bg-teal/10 p-4">
                            <div className="flex items-center gap-2 text-teal mb-2">
                                <CalendarCheck size={15} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Najbližšia návšteva</span>
                            </div>
                            <p className="text-sm font-semibold text-white/90">Preventívna prehliadka</p>
                            <p className="text-xs text-white/50 font-stolzl">Utorok · 14:30</p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                            <div className="flex items-center gap-2 text-white/60 mb-2">
                                <ClipboardList size={15} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Príprava</span>
                            </div>
                            <p className="text-xs text-white/60 font-stolzl leading-relaxed">Príďte nalačno a vezmite si so sebou zoznam liekov.</p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="flex items-center gap-2 text-white/60">
                                    <MessageCircle size={15} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Vaša požiadavka</span>
                                </span>
                                <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal">
                                    V riešení
                                </span>
                            </div>
                            <p className="text-xs text-white/60 font-stolzl leading-relaxed">Zmena termínu · na rade je klinika</p>
                        </div>
                    </div>

                    {/* Spodná navigácia */}
                    <div className="mt-5 flex justify-between border-t border-white/5 pt-3">
                        {nav.map(({ label, icon: Icon, active }) => (
                            <span key={label} className={`flex flex-col items-center gap-1 ${active ? 'text-teal' : 'text-white/35'}`}>
                                <Icon size={15} />
                                <span className="text-[8px] font-stolzl">{label}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
