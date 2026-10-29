'use client';

import PillarPage from '@/components/PillarPage';
import { FileText, Users, GraduationCap, Lock, ListChecks, ShieldCheck } from 'lucide-react';
import { trail } from '@/lib/seo';

/**
 * Business partner → Nábor lekárov (29. 10. 2026) – variant Náborového managementu
 * pre výberové konanie na lekára. Rovnaké pravidlá ako pri sestrách: výber vedieme
 * v mene a pod značkou klienta, Mediconect nevedie vlastnú databázu uchádzačov
 * (zákon č. 5/2004 Z. z.), bez garancie výsledku a bez mien klientov. Sieť MyMedical
 * je kanál na zverejnenie ponuky, nie databáza kandidátov.
 */
const NABOR_DISCLOSURE =
    'Mediconect nevykonáva sprostredkovanie zamestnania. Zamestnávateľom alebo zmluvným partnerom lekára a prevádzkovateľom osobných údajov uchádzačov je vždy klient, ktorý rozhoduje o výbere aj o podmienkach spolupráce. Mediconect nevedie vlastnú databázu uchádzačov a od uchádzačov nepožaduje žiadnu úhradu. Uvedené lehoty sú orientačné a závisia od situácie na trhu práce.';

export default function NaborLekarovContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/nabor-lekarov')}
            badge="Business partner · Nábor lekárov"
            title="Lekára do ambulancie nenájdete inzerátom. Nájdete ho cez dôveru."
            subtitle="Pripravíme ponuku, ktorá lekára zaujme, predstavíme ju tam, kde lekári sú – v komunite MyMedical, medzi rezidentmi a v odbornej sieti – a zorganizujeme dôverné rozhovory. O výbere a podmienkach spolupráce rozhodujete vy."
            intro={{
                heading: <>Lekárov je málo. <span className="text-gradient">Rozhoduje ponuka a dôvera, nie inzerát.</span></>,
                text: 'Lekár so špecializáciou si vyberá podľa náplne práce, ordinačných hodín, odmeny a ľudí, s ktorými bude pracovať. Pripravíme ponuku, ktorá na tieto otázky odpovie, a predstavíme ju lekárom priamo – diskrétne a v mene vášho zariadenia. Celý výber sledujete vo svojom CRM Ordevia.',
            }}
            audience={[
                ['Ambulancia pred generačnou výmenou', 'Hľadá nástupcu alebo spoločníka, ktorý postupne prevezme pacientov.'],
                ['Klinika a poliklinika', 'Obsadzuje ambulanciu alebo rozširuje ordinačné hodiny o ďalšieho špecialistu.'],
                ['Nová ambulancia', 'Potrebuje lekára so špecializáciou ešte pred podaním žiadosti o povolenie.'],
            ]}
            steps={[
                { title: 'Príprava', detail: 'Profil pozície: špecializácia, úväzok, ordinačné hodiny, forma spolupráce (pracovný pomer, živnosť, spoločník), odporúčanie k odmene, ponuka a kariérna stránka.', output: 'Schválená ponuka', who: 'Mediconect + vy' },
                { title: 'Oslovenie', detail: 'Komunita lekárov MyMedical, rezidenti a absolventi lekárskych fakúlt, pracovné portály, odborné siete a odporúčania.', output: 'Záujemcovia v Ordevii', who: 'Mediconect' },
                { title: 'Výber', detail: 'Dôverný úvodný rozhovor, kontrola dokladov (diplom, špecializácia, registrácia v Slovenskej lekárskej komore) a stretnutie s vami.', output: '1 – 2 kandidáti so zdôvodnením', who: 'Mediconect + vy' },
                { title: 'Nástup', detail: 'Návrh ponuky spolupráce, plán nástupu, zaškolenie do objednávania a CRM, kontroly po 30, 60 a 90 dňoch.', output: 'Lekár v ambulancii', who: 'Vy + Mediconect' },
            ]}
            services={[
                { icon: <FileText size={22} />, title: 'Ponuka, ktorá obstojí', text: 'Profil pozície, odporúčanie k odmene a forme spolupráce, text ponuky a kariérna stránka pod vašou značkou.' },
                { icon: <Users size={22} />, title: 'Komunita MyMedical', text: 'Ponuku predstavíme v sieti lekárov MyMedical a na odborných podujatiach, kde sa lekári stretávajú.' },
                { icon: <GraduationCap size={22} />, title: 'Rezidenti a mladí lekári', text: 'Oslovíme rezidentov a absolventov, ktorí hľadajú ambulantnú prax alebo prvé miesto po atestácii.' },
                { icon: <Lock size={22} />, title: 'Diskrétny prvý kontakt', text: 'Úvodný rozhovor vedieme dôverne – lekár, ktorý je dnes zamestnaný, nemusí nič riskovať.' },
                { icon: <ListChecks size={22} />, title: 'Prehľad v Ordevii', text: 'Každý záujemca, rozhovor a ďalší krok v jednom prehľade; termín stretnutia si kandidát vyberie sám cez odkaz.' },
                { icon: <ShieldCheck size={22} />, title: 'Ochrana osobných údajov', text: 'Údaje kandidátov ostávajú vo vašom prostredí a po skončení výberu sa automaticky vymažú.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Ambulancia všeobecného lekára hľadá lekára, ktorý postupne prevezme pacientov pred odchodom zakladateľa do dôchodku. Pripravíme ponuku s jasným plánom odovzdania, predstavíme ju v sieti MyMedical a rezidentom všeobecného lekárstva a s vhodnými kandidátmi zorganizujeme dôverné stretnutia. Pripravíme vám 1 – 2 najvhodnejších kandidátov, pričom celý proces sledujete vo svojom CRM.',
            }}
            outputs={[
                'Ponuka a kariérna stránka pod vašou značkou',
                'Záujemcovia a rozhovory prehľadne v Ordevii',
                'Odporúčanie 1 – 2 kandidátov so zdôvodnením',
                'Plán nástupu a kontroly po 30, 60 a 90 dňoch',
            ]}
            links={[
                { label: 'Náborový management', text: 'Výber sestry a ďalšieho personálu ambulancie.', href: '/business-partner/naborovy-management' },
                { label: 'Predaj kmeňa a praxe', text: 'Odovzdanie pacientov nástupcovi.', href: '/business-partner/predaj-kmena-a-praxe' },
                { label: 'Štart vlastnej ambulancie', text: 'Od rozhodnutia po prvého pacienta.', href: '/business-partner/start-vlastnej-ambulancie' },
            ]}
            legal={NABOR_DISCLOSURE}
            cta={{
                title: 'Hľadáte lekára do tímu?',
                description: 'Povedzte nám špecializáciu, rozsah ordinačných hodín a termín. Pripravíme cenovú ponuku a postup výberu.',
            }}
        />
    );
}
