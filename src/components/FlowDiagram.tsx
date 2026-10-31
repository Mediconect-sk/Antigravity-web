import { ArrowRight, ArrowDown } from 'lucide-react';

/**
 * Jednoduchá schéma procesu – kroky s ikonou spojené šípkami (desktop
 * vodorovne, mobil zvisle). Používa sa na časovú os založenia ambulancie
 * (/business-partner) a na schému automatizácie (/sluzby/crm-a-automatizacie).
 */
export type FlowStep = { icon: React.ReactNode; title: string; text: string };

export default function FlowDiagram({
    eyebrow,
    title,
    text,
    steps,
    loopNote,
    children,
}: {
    eyebrow: string;
    title: React.ReactNode;
    text?: string;
    steps: FlowStep[];
    /** Poznámka pod schémou, napr. že sa cyklus opakuje. */
    loopNote?: string;
    /** Voliteľný blok pod schémou, napr. tlačidlo s odkazom. */
    children?: React.ReactNode;
}) {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">{eyebrow}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-4">{title}</h2>
                    {text && <p className="text-white/55 max-w-3xl mx-auto font-stolzl leading-relaxed">{text}</p>}
                </div>

                <ol className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
                    {steps.map((s, i) => (
                        <li key={s.title} className="flex flex-col lg:flex-row items-center lg:flex-1">
                            <div className="w-full glass rounded-2xl border border-white/10 p-5 text-center h-full flex flex-col items-center">
                                <span className="w-14 h-14 rounded-2xl bg-teal/10 border border-teal/30 text-teal flex items-center justify-center mb-4">
                                    {s.icon}
                                </span>
                                <span className="text-teal/70 text-xs font-bold font-kanit mb-1">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="font-kanit font-semibold text-white leading-tight mb-2">{s.title}</h3>
                                <p className="text-white/50 text-xs font-stolzl leading-relaxed">{s.text}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <span className="text-teal/60 shrink-0 my-1 lg:my-0 lg:mx-1" aria-hidden>
                                    <ArrowRight size={18} className="hidden lg:block" />
                                    <ArrowDown size={18} className="lg:hidden" />
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
                {loopNote && <p className="text-center text-white/45 text-sm font-stolzl mt-6">{loopNote}</p>}
                {children}
            </div>
        </section>
    );
}
