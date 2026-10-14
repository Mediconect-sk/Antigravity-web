'use client';

import PillarPage from '@/components/PillarPage';
import { Home, Landmark, Umbrella, PiggyBank, GraduationCap, LifeBuoy } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Business partner → Zamestnanecké benefity (koncepcia schválená Viktorom 14. 10. 2026).
 * Len rámcové oblasti – žiadne konkrétne zľavy, úspory ani sadzby (tie patria na leták
 * pri osobnom stretnutí). Menovaní sú len partneri myLife a TUreality; banky
 * a poisťovne všeobecne, kým nie je súhlas s použitím ich značky.
 */
export default function ZamestnaneckeBenefityContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/zamestnanecke-benefity')}
            badge="Business partner · Zamestnanecké benefity"
            title="Benefity, pre ktoré váš tím zostáva."
            subtitle="Program výhod, ktorý vedenie kliniky alebo ambulancie ponúkne svojim zamestnancom. Výhody, ktoré by si sami nevybavili – a vy s nimi nemáte žiadnu administratívu."
            image={{ src: '/images/business-partner/zamestnanecke-benefity.webp', alt: 'Kľúče od nového bývania medzi modelmi domov' }}
            intro={{
                heading: <>Dobrých ľudí je málo. <span className="text-gradient">Mzdou sa nedá súperiť donekonečna.</span></>,
                text: 'Sestry, lekári aj recepcia sa rozhodujú aj podľa toho, čo im zamestnávateľ dáva navyše. Spolu s partnermi myLife a TUreality a so zmluvnými bankami a poisťovňami pripravíme pre váš tím program výhod pri bývaní, financiách, poistení aj dôchodku. Program predstavíme priamo na pracovisku a zamestnancom sa venujeme individuálne.',
            }}
            audience={[
                ['Majiteľ kliniky', 'Chce udržať skúsený tím a mať argument pri nábore.'],
                ['Vedenie ambulancie', 'Hľadá benefit, ktorý nezaťaží jeho administratívu.'],
                ['Zamestnanci', 'Získajú výhody a osobnú starostlivosť, ku ktorým by sa sami nedostali.'],
            ]}
            steps={[
                { title: 'Konzultácia s vedením', detail: 'Veľkosť tímu, potreby a čo už ponúkate.', output: 'Rámec programu', who: 'Osobný partner' },
                { title: 'Výber oblastí', detail: 'Ktoré benefity dávajú vášmu tímu zmysel.', output: 'Program na mieru', who: 'Partner + vedenie' },
                { title: 'Predstavenie tímu', detail: 'Krátka prezentácia priamo na pracovisku.', output: 'Informovaný tím', who: '+ myLife, TUreality' },
                { title: 'Konzultácie a servis', detail: 'Individuálne stretnutia a priebežná pomoc.', output: 'Benefity v praxi', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Home size={22} />, title: 'Bývanie a nehnuteľnosti', text: 'Kúpa, predaj a prenájom nehnuteľnosti a financovanie bývania s partnerom TUreality – vrátane sledovania úrokových sadzieb počas splácania.' },
                { icon: <Landmark size={22} />, title: 'Bankové produkty', text: 'Účty a úvery za zvýhodnených podmienok u zmluvných bánk.' },
                { icon: <Umbrella size={22} />, title: 'Poistenie majetku a osôb', text: 'Domácnosť a nehnuteľnosť, zodpovednosť, úraz a cestovanie – u zmluvných poisťovní.' },
                { icon: <PiggyBank size={22} />, title: 'Dôchodok a sporenie', text: 'Zvýhodnené podmienky dôchodkového sporenia a možnosť príspevku zamestnávateľa.' },
                { icon: <GraduationCap size={22} />, title: 'Finančné vzdelávanie', text: 'Workshop pre tím priamo na pracovisku – rozpočet, sporenie a rozumné rozhodnutia o peniazoch.' },
                { icon: <LifeBuoy size={22} />, title: 'Pomoc, keď sa niečo stane', text: 'Podpora pri poistnej udalosti a revízia existujúcich zmlúv zamestnancov.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Poliklinika s dvadsiatimi zamestnancami hľadá spôsob, ako udržať sestry. S vedením vyberieme bývanie, dôchodok a poistenie, program predstavíme na porade a zamestnancom, ktorí majú záujem, sa venujeme individuálne. Vedenie nič nezariaďuje.',
            }}
            outputs={[
                'Program benefitov na mieru vášho tímu',
                'Prezentácia pre zamestnancov na pracovisku',
                'Individuálne konzultácie pre každého zamestnanca',
                'Jeden kontakt pre vedenie aj tím',
            ]}
            links={[
                { label: 'Efektívna a zisková ambulancia', text: 'Procesy, tím a stabilná ekonomika praxe.', href: '/business-partner/efektivna-a-ziskova-ambulancia' },
                { label: 'Správa podnikateľských rizík', text: 'Ochrana ambulancie, ktorá zafunguje.', href: '/business-partner/sprava-podnikatelskych-rizik' },
                { label: 'Správa a ochrana majetku', text: 'Majetok majiteľa a jeho rodiny.', href: '/sprava-a-ochrana-majetku' },
            ]}
            legal={FINANCE_DISCLOSURE}
            cta={{
                title: 'Program pre váš tím začína rozhovorom.',
                description: 'Povedzte nám, koľko ľudí máte a čo im dnes ponúkate. Navrhneme oblasti benefitov a postup, ako ich tímu predstaviť.',
            }}
        />
    );
}
