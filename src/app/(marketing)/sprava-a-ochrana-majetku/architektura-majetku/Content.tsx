'use client';

import PillarPage from '@/components/PillarPage';
import { StructureSection } from '../Sections';
import { Stethoscope, TrendingUp, Hourglass, ShieldCheck, Banknote, Repeat } from 'lucide-react';
import { FINANCE_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';

/** Správa majetku → Architektúra majetku (obsahuje sekciu „Štruktúra majetku" presunutú z prehľadu). */
export default function ArchitekturaContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/architektura-majetku')}
            badge="Správa a ochrana majetku · Architektúra majetku"
            title="Jedna architektúra namiesto piatich riešení."
            subtitle="Finančná diagnóza, plán, ochrana, rast a renta poskladané do jedného celku – s jedným osobným partnerom a ročnou revíziou."
            image={{ src: '/images/sprava-majetku/architektura-majetku.webp', alt: 'Dvaja ľudia prechádzajú finančné dokumenty pri stole' }}
            intro={{
                heading: <>Najprv diagnóza, <span className="text-gradient">potom odporúčanie.</span></>,
                text: 'Nepredpíšete terapiu bez vyšetrenia – ani my neodporučíme riešenie bez analýzy. Začíname finančnou diagnózou: príjmy, záväzky, rodina, riziká povolania a ciele. Z nej vznikne architektúra majetku, v ktorej má každá časť svoju úlohu – ochrana, rast aj kontinuita.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Chce oddeliť riziko praxe od rodiny.'],
                ['Zamestnaný lekár', 'Buduje majetok a rentu popri službách.'],
                ['Lekár s viacerými zmluvami', 'Má produkty u viacerých inštitúcií a stratil prehľad.'],
            ]}
            steps={[
                { title: 'Diagnóza', detail: 'Príjmy, záväzky, riziká, ciele.', output: 'Finančná diagnóza', who: 'Osobný partner' },
                { title: 'Architektúra', detail: 'Ochrana, rast, kontinuita.', output: 'Písomný plán', who: 'Osobný partner' },
                { title: 'Realizácia', detail: 'Štruktúra a produkty.', output: 'Nastavené riešenia', who: '+ advokát, daňový poradca' },
                { title: 'Revízia', detail: 'Raz ročne a pri zmene života.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Stethoscope size={22} />, title: 'Finančná diagnóza', text: 'Príjmy, záväzky, rodina, riziká povolania a ciele na jednom mieste.' },
                { icon: <ShieldCheck size={22} />, title: 'Poistenie a ochrana', text: 'Zodpovednosť, príjem pri PN, rodina a majetok ambulancie.' },
                { icon: <TrendingUp size={22} />, title: 'Plán a investície', text: 'Dlhodobý plán podľa rizikového profilu, diverzifikácia a ročná revízia.' },
                { icon: <Hourglass size={22} />, title: 'Renta a dôchodok', text: 'Príjem po skončení praxe vrátane dôchodkového sporenia.' },
                { icon: <Banknote size={22} />, title: 'Úvery a financovanie', text: 'Hypotéky, súkromné aj podnikateľské financovanie v súlade s plánom.' },
                { icon: <Repeat size={22} />, title: 'Kontinuita a dedenie', text: 'Odovzdanie praxe a majetku bez fragmentácie.' },
            ]}
            extra={<StructureSection />}
            example={{
                label: 'Modelová situácia',
                text: 'Lekárka má životné poistenie z čias rezidentúry, dve sporenia v rôznych bankách a hypotéku. Po diagnóze z nich poskladáme jeden plán: čo ponechať, čo zjednodušiť, kde chýba ochrana príjmu a ako budovať rentu – s jedným partnerom a ročnou kontrolou.',
            }}
            outputs={[
                'Finančná diagnóza a písomný plán',
                'Prehľad všetkých zmlúv na jednom mieste',
                'Plán renty a dôchodku',
                'Ročná revízia s osobným partnerom',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Oddelenie rizika praxe od rodinného majetku.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Daňové poradenstvo', text: 'Daňová efektivita s daňovým poradcom.', href: '/sprava-a-ochrana-majetku/danove-poradenstvo' },
                { label: 'MyMedical', text: 'Osobný partner pre celý plán.', href: MYMEDICAL.url, external: true },
            ]}
            legal={FINANCE_DISCLOSURE}
            cta={{
                title: 'Začnime diagnózou.',
                description: 'Prejdeme vaše príjmy, záväzky a ciele. Potom dostanete písomný plán a jasný ďalší krok.',
            }}
        />
    );
}
