'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { trail } from '@/lib/seo';
import { Package, Microscope, ShoppingBag, UserCheck, ShieldCheck, Eye, Handshake } from 'lucide-react';

/**
 * Affiliate spolupráca (nová podstránka 12. 11. 2026, podľa brožúry Mediconect s. 16–17).
 * Zámerne bez prísľubov výnosu a bez slov „bez rizika“ a „bez námahy“ (pravidlo NBS a etika povolania);
 * odmena sa uvádza ako dohoda, nie ako zaručený príjem. Bez finančného sprostredkovania (Viktor 12. 11. 2026),
 * preto sa tu nezobrazuje FINANCE_DISCLOSURE; ak by sa finančné služby vrátili, treba ho doplniť.
 */

const PARTNERS = [
    { Icon: Package, t: 'Výrobca produktov', d: 'Doplnky výživy a dietetické potraviny, ktoré súvisia so starostlivosťou o zdravie.' },
    { Icon: Microscope, t: 'Poskytovateľ diagnostiky', d: 'Laboratóriá, CT, magnetická rezonancia a špeciálne vyšetrenia.' },
    { Icon: ShoppingBag, t: 'Predajca tovaru', d: 'Detské výrobky, hygienické potreby a zdravotnícke pomôcky.' },
];

const STEPS = [
    { t: 'Zmapujeme vašu situáciu', d: 'Zistíme, čo vaši pacienti hľadajú mimo ambulancie a čo je pre vás a vašu prax vhodné.' },
    { t: 'Vyberieme partnerov', d: 'Vyberáme len overených poskytovateľov, ktorí zodpovedajú vášmu zameraniu a etike povolania.' },
    { t: 'Dohodneme pravidlá', d: 'Podmienky spolupráce a odmenu dohodneme písomne a vopred. Nič nie je skryté.' },
    { t: 'Spustíme citlivú komunikáciu', d: 'Pacient sa dozvie o príležitosti len so svojím súhlasom a rozhoduje sa slobodne.' },
];

const RULES = [
    { Icon: UserCheck, t: 'Súhlas pacienta', d: 'Oslovujeme len pacientov, ktorí s komunikáciou súhlasili. Zdravotné údaje pacientov nepoužívame ani neprijímame.' },
    { Icon: Eye, t: 'Otvorenosť', d: 'Pacient vie, od koho ponuka prichádza a že ambulancia s partnerom spolupracuje.' },
    { Icon: ShieldCheck, t: 'Liečba je na prvom mieste', d: 'Spolupráca nikdy neovplyvňuje, aký postup lekár pacientovi odporučí.' },
    { Icon: Handshake, t: 'Žiadne sľuby výnosu', d: 'Výsledok závisí od vašej databázy, partnera aj záujmu pacientov. Výšku príjmu nezaručujeme.' },
];

export default function AffiliateSpolupracaPage() {
    return (
        <div className="min-h-screen">
            <PageHero
                breadcrumbs={trail('/sluzby/affiliate-spolupraca')}
                title="Affiliate spolupráca"
                subtitle="Pacienti hľadajú služby a produkty súvisiace so zdravím. Spojíme vás s partnermi tak, aby ste z dôvery, ktorú ste si vybudovali, mali aj ekonomický prínos."
                badge="Doplnkové zdroje príjmu"
            />

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold font-kanit leading-tight text-balance">
                            Pacienti si tieto služby nájdu aj bez vás
                        </h2>
                        <p className="text-lg text-white/60 mt-6 font-stolzl leading-relaxed">
                            V praxi stretávame lekárov, ktorí si neuvedomujú, aký potenciál je ukrytý v dôvere ich pacientov. Osloviť pacienta s ponukou im pripadá neetické a na komunikáciu nemajú čas.
                        </p>
                        <p className="text-lg text-white/60 mt-4 font-stolzl leading-relaxed">
                            Pacienti preto služby a tovar úzko súvisiaci so zdravotnou starostlivosťou kupujú inde. Profitujú najmä lekárne, drogérie, poskytovatelia diagnostiky a terapeutického poradenstva. Pacient tieto služby vyhľadáva a vy môžete byť jeho odborným poradcom.
                        </p>
                    </div>
                    <blockquote className="rounded-3xl bg-[#0A2B40] text-[#fff] p-10 text-2xl font-kanit font-light leading-snug text-balance">
                        Prepojíme vás s pacientmi tak, aby ste profitovali vďaka svojej autorite.
                    </blockquote>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit text-balance">Tri typy partnerov</h2>
                    <p className="text-white/60 mt-4 max-w-3xl font-stolzl leading-relaxed">
                        Naša stratégia stojí na prepojení lekárov, ich pacientov a dodávateľov, ktorí poskytujú služby v jednotlivých segmentoch zdravotnej starostlivosti. Využívame rôzne marketingové nástroje, ktoré tieto príležitosti sprostredkujú pacientom citlivo a elegantne.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        {PARTNERS.map(({ Icon, t, d }) => (
                            <div key={t} className="rounded-3xl border border-[#D3D9DE] bg-[#fff] text-[#0A2B40] p-6 flex flex-col gap-3">
                                <span className="w-12 h-12 rounded-2xl bg-[#0A2B40] text-[#fff] grid place-items-center"><Icon size={24} aria-hidden="true" /></span>
                                <h3 className="font-kanit text-lg font-normal leading-tight" style={{ color: '#0A2B40' }}>{t}</h3>
                                <p className="text-sm text-[#4B6272] leading-snug">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit text-balance">Ako spolupráca prebieha</h2>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {STEPS.map((s, i) => (
                            <li key={s.t} className="glass p-8 rounded-2xl border border-white/5">
                                <div className="text-2xl font-bold text-teal/60 mb-4 font-kanit">0{i + 1}</div>
                                <h3 className="text-lg font-bold mb-3 font-kanit">{s.t}</h3>
                                <p className="text-white/60 text-sm font-stolzl leading-relaxed">{s.d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-kanit text-balance">Pravidlá, ktoré platia vždy</h2>
                    <div className="grid md:grid-cols-2 gap-4 mt-10">
                        {RULES.map(({ Icon, t, d }) => (
                            <div key={t} className="rounded-3xl border border-[#D3D9DE] bg-[#fff] text-[#0A2B40] p-6 flex gap-4">
                                <span className="w-12 h-12 shrink-0 rounded-2xl bg-[#E6F3F4] text-[#25727C] grid place-items-center"><Icon size={24} aria-hidden="true" /></span>
                                <div>
                                    <h3 className="font-kanit text-lg font-normal leading-tight" style={{ color: '#0A2B40' }}>{t}</h3>
                                    <p className="text-sm text-[#4B6272] leading-snug mt-2">{d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Zistite, čo by dávalo zmysel práve vo vašej ambulancii"
                description="V nezáväznom rozhovore si povieme, čo vaši pacienti hľadajú a či je spolupráca s partnermi pre vás vhodná."
            />
        </div>
    );
}
