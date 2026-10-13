import { ArrowRight, ClipboardList, Users } from 'lucide-react';
import { MYMEDICAL } from '@/lib/seo';

/**
 * Nenápadný pás na homepage – odkaz na MyMedical (komunita lekárov na vlastnej
 * doméne) a na prieskum o administratívnej záťaži. Zámerne bez framer-motion:
 * je to statický odkaz, ktorý musí byť viditeľný vždy.
 */
export default function MyMedicalStrip() {
    return (
        <section aria-label={`${MYMEDICAL.name} – ${MYMEDICAL.tagline}`} className="relative z-10 pb-8">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="glass flex flex-col gap-4 rounded-2xl border border-teal/15 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <a href={MYMEDICAL.url} className="group flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal">
                            <Users size={18} />
                        </span>
                        <span className="flex flex-col">
                            <span className="text-sm font-semibold text-white/85 font-kanit transition-colors group-hover:text-teal">
                                {MYMEDICAL.name} – {MYMEDICAL.tagline}
                            </span>
                            <span className="text-xs text-white/45 font-stolzl">
                                Diskrétne prostredie pre lekárov, ktorí chcú mať veci pod kontrolou.
                            </span>
                        </span>
                    </a>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pl-12 text-xs font-stolzl sm:pl-0">
                        <a
                            href={MYMEDICAL.aiSurveyUrl}
                            className="inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-teal"
                        >
                            <ClipboardList size={13} />
                            Prieskum o administratíve
                        </a>
                        <a
                            href={MYMEDICAL.url}
                            className="inline-flex items-center gap-1.5 font-semibold text-teal transition-colors hover:text-teal/80"
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
