import { ArrowRight, Users } from 'lucide-react';
import { MYMEDICAL } from '@/lib/seo';

/**
 * Nenápadný pás na homepage – odkaz na MyMedical (komunita lekárov na vlastnej
 * doméne). Zámerne bez framer-motion:
 * je to statický odkaz, ktorý musí byť viditeľný vždy.
 */
export default function MyMedicalStrip() {
    return (
        <section aria-label={`${MYMEDICAL.name} – ${MYMEDICAL.tagline}`} className="relative z-10 pb-8">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col gap-4 rounded-2xl border border-[#88D5DB]/20 bg-[#041D2C] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <a href={MYMEDICAL.url} className="group flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4CADB6]/20 text-[#88D5DB]">
                            <Users size={18} />
                        </span>
                        <span className="flex flex-col">
                            <span className="text-sm font-semibold text-[#FFFFFF]/90 font-kanit transition-colors group-hover:text-[#88D5DB]">
                                {MYMEDICAL.name} – {MYMEDICAL.tagline}
                            </span>
                            <span className="text-xs text-[#9FB3BC] font-stolzl">
                                Diskrétne prostredie pre lekárov, ktorí chcú mať veci pod kontrolou.
                            </span>
                        </span>
                    </a>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pl-12 text-xs font-stolzl sm:pl-0">
                        <a
                            href={MYMEDICAL.url}
                            className="inline-flex items-center gap-1.5 font-semibold text-[#88D5DB] transition-colors hover:text-[#FFFFFF]"
                        >
                            Vstúpiť
                            <ArrowRight size={13} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
