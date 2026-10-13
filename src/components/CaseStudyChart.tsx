import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Graf prípadovej štúdie „Strategická reaktivácia pacientskej databázy"
 * (1 618 e-mailov, doručenosť 98,52 %, otvorenosť 70,89 %, +42,31 % rezervácií).
 * Kreslený v HTML/CSS – jedna farba (teal), hodnoty priamo pri stĺpcoch,
 * žiadna legenda (každý graf má jednu sériu). Čísla musia ostať zhodné
 * s content/blog/strategicka-reaktivacia-pacientskej-databazy.mdx.
 */

const RATES = [
    { label: 'Doručené e-maily', value: 98.52 },
    { label: 'Otvorené e-maily', value: 70.89 },
];

const fmt = (n: number) => n.toLocaleString('sk-SK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function CaseStudyChart() {
    return (
        <section className="py-16 relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3 font-kanit">Výsledok v číslach</span>
                    <h2 className="text-3xl lg:text-4xl font-bold font-kanit">
                        Jeden edukatívny e-mail. <span className="text-gradient">+42 % preventívnych prehliadok.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Lievik kampane */}
                    <figure className="glass rounded-3xl border border-white/10 p-7">
                        <figcaption className="mb-6">
                            <span className="block font-kanit font-semibold text-white text-lg">Kampaň: 1 618 odoslaných e-mailov</span>
                            <span className="block text-white/50 text-sm font-stolzl">Podiel z odoslaných (%)</span>
                        </figcaption>
                        <div className="space-y-5">
                            {RATES.map((r) => (
                                <div key={r.label} title={`${r.label}: ${fmt(r.value)} %`}>
                                    <div className="flex justify-between text-sm font-stolzl mb-1.5">
                                        <span className="text-white/70">{r.label}</span>
                                        <span className="text-white font-semibold">{fmt(r.value)} %</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/[0.06] overflow-hidden">
                                        <div className="h-full rounded-full bg-teal" style={{ width: `${r.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-white/45 text-xs font-stolzl">Bežná otvorenosť e-mailov v segmente je 15–25 %.</p>
                    </figure>

                    {/* Pred / po */}
                    <figure className="glass rounded-3xl border border-white/10 p-7">
                        <figcaption className="mb-6">
                            <span className="block font-kanit font-semibold text-white text-lg">Rezervácie preventívnych prehliadok</span>
                            <span className="block text-white/50 text-sm font-stolzl">Index, obdobie pred kampaňou = 100</span>
                        </figcaption>
                        <div className="flex items-end justify-center gap-10 h-48 border-b border-white/15">
                            {[
                                { label: 'Pred kampaňou', value: 100, cls: 'bg-white/25' },
                                { label: 'Po kampani', value: 142.31, cls: 'bg-teal' },
                            ].map((b) => (
                                <div key={b.label} className="flex flex-col items-center justify-end h-full w-24" title={`${b.label}: ${fmt(b.value)}`}>
                                    <span className="text-white font-semibold text-sm mb-2 font-stolzl">{b.value === 100 ? '100' : '142'}</span>
                                    <div className={`w-full rounded-t-md ${b.cls}`} style={{ height: `${(b.value / 150) * 100}%` }} />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-10 mt-3 text-white/60 text-xs font-stolzl">
                            <span className="w-24 text-center">Pred kampaňou</span>
                            <span className="w-24 text-center">Po kampani</span>
                        </div>
                        <p className="mt-5 text-teal font-kanit font-semibold text-center">+42,31 % rezervácií</p>
                    </figure>
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/blog/strategicka-reaktivacia-pacientskej-databazy"
                        className="inline-flex items-center gap-2 text-teal font-semibold font-kanit hover:gap-3 transition-all"
                    >
                        Celá prípadová štúdia <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
