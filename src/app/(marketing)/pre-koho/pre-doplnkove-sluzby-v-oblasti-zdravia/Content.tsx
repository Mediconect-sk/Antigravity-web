'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { trail } from '@/lib/seo';
import CTABanner from '@/components/CTABanner';
import { Accessibility, Hourglass, Sparkles, Check, ShieldCheck } from 'lucide-react';

/**
 * Segment „Doplnkové služby v oblasti zdravia" – zdravotnícke pomôcky,
 * longevity a kozmetické salóny (pridané 13. 10. 2026).
 * Pozor na tvrdenia: pri pomôckach a longevity žiadne sľuby liečebného
 * účinku, len to, čo je overené a v súlade s pravidlami reklamy.
 */

const segments = [
    {
        title: 'Zdravotnícke pomôcky',
        desc: 'Výdajne a predajne pomôcok, ortopedické a protetické služby. Zrozumiteľné informácie pre pacientov aj spolupráca s lekármi, ktorí pomôcky predpisujú.',
        icon: <Accessibility size={22} />,
    },
    {
        title: 'Longevity',
        desc: 'Centrá zdravého starnutia a preventívnych programov. Komunikácia postavená na odbornosti a dôkazoch, nie na sľuboch.',
        icon: <Hourglass size={22} />,
    },
    {
        title: 'Kozmetické salóny',
        desc: 'Salóny a štúdiá starostlivosti o pleť a telo. Dôveryhodná značka, recenzie a pravidelní klienti namiesto jednorazových zliav.',
        icon: <Sparkles size={22} />,
    },
];

export default function ForHealthServicesPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail('/pre-koho/pre-doplnkove-sluzby-v-oblasti-zdravia')}
                title="Doplnkové služby v oblasti zdravia"
                subtitle="Zdravotnícke pomôcky, longevity a kozmetické salóny. Pomáhame službám, ktoré dopĺňajú zdravotnú starostlivosť, získať dôveru a stálych klientov."
                badge="Zdravie a starostlivosť"
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {segments.map((seg) => (
                            <div key={seg.title} className="glass p-8 rounded-2xl border border-white/5 hover:border-teal/20 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                                    {seg.icon}
                                </div>
                                <h2 className="text-xl font-bold mb-3 font-kanit">{seg.title}</h2>
                                <p className="text-white/60 font-stolzl leading-relaxed text-sm">{seg.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold font-kanit mb-8 leading-tight">
                                Bližšie k medicíne — <br /><span className="text-gradient">s rovnakou dôverou</span>
                            </h2>
                            <p className="text-lg text-white/60 mb-8 font-stolzl leading-relaxed">
                                Klient si pri službách okolo zdravia vyberá rovnako ako pri lekárovi: podľa odbornosti, recenzií a toho, či mu niekto vysvetlí, čo dostane. Pripravíme komunikáciu, ktorá je profesionálna, pravdivá a priláka ľudí, ktorí sa vracajú.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Web a lokálna viditeľnosť na Google a v mapách',
                                    'Recenzie a reputácia, ktoré rastú dlhodobo',
                                    'Edukatívny obsah a e-mail pre stálych klientov',
                                    'Online objednávanie a pripomienky termínov',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-white/80 font-stolzl">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/5 blur-[100px] rounded-full" />
                            <div className="glass rounded-3xl p-10 border border-white/10 relative z-10">
                                <ShieldCheck size={64} className="text-teal mb-6" />
                                <h3 className="text-2xl font-bold mb-4 font-kanit">Bez prázdnych sľubov</h3>
                                <p className="text-white/60 font-stolzl leading-relaxed">
                                    Pri zdravotníckych pomôckach, longevity aj kozmetike platia pravidlá reklamy a ochrany spotrebiteľa. Neprisľubujeme účinky, ktoré sa nedajú doložiť – stavíme na odbornosti, transparentnosti a spokojných klientoch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Chcete stálych klientov namiesto jednorazových zliav?"
                description="Pozrieme sa na vašu značku, web a recenzie a navrhneme konkrétne kroky, ktoré prinesú dôveru a opakované návštevy."
            />
        </div>
    );
}
