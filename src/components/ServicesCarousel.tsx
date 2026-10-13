"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PILLARS } from "@/components/ServicesNebula";
import { FINANCE_DISCLOSURE } from "@/lib/seo";

/**
 * Mobilná verzia portfólia – tie isté štyri piliere ako ServicesNebula.
 * Všetky karty sú v DOM vždy (vidia ich aj vyhľadávače pri desktopovej verzii).
 */
export default function ServicesCarousel() {
    return (
        <div className="py-20 relative">
            <div className="px-6 mb-8 text-center">
                <span className="text-teal text-xs font-bold uppercase tracking-widest block mb-2 font-kanit">Portfólio služieb</span>
                <h2 className="text-3xl font-bold leading-tight">Štyri oblasti. <br /> <span className="text-white/50">Jeden partner.</span></h2>
            </div>

            <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory flex gap-4 px-6">
                {PILLARS.map((service, i) => (
                    <div key={service.id} className="snap-center shrink-0 w-[85vw] max-w-[320px] first:pl-2 last:pr-6">
                        <div className="h-full glass-strong rounded-3xl p-8 flex flex-col relative overflow-hidden group min-h-[460px] border border-white/5">
                            <div className="absolute -right-4 -top-6 text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none font-kanit">
                                {String(i + 1).padStart(2, "0")}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6 shadow-inner shadow-teal/20">
                                    {service.icon}
                                </div>
                                <span className="text-teal/80 text-xs font-bold uppercase tracking-widest font-kanit mb-2">{service.label}</span>
                                <h3 className="text-2xl font-bold mb-2 leading-snug">{service.title}</h3>
                                <p className="text-teal font-kanit text-sm mb-4">{service.claim}</p>
                                <p className="text-white/75 leading-relaxed text-sm mb-4">{service.desc}</p>
                                <Link href={service.href} className="mt-auto inline-flex items-center gap-2 text-teal text-sm font-semibold font-kanit border-t border-white/10 pt-4">
                                    Viac o oblasti <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4 opacity-50">
                <div className="text-white/40 text-xs flex items-center gap-2">
                    <ChevronLeft size={14} /> Potiahnite pre viac <ChevronRight size={14} />
                </div>
            </div>
            <p className="mt-8 px-6 text-center text-[11px] text-white/35 font-stolzl leading-relaxed">{FINANCE_DISCLOSURE}</p>
        </div>
    );
}
