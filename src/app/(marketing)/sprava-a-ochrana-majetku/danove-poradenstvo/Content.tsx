'use client';

import PillarPage from '@/components/PillarPage';
import { Coins, Network, FileText, KeyRound, TrendingUp, RefreshCw } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/** Správa majetku → Daňové poradenstvo. Poskytuje daňový poradca (člen SKDP), Mediconect koordinuje. */
export default function DaneContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/danove-poradenstvo')}
            badge="Správa a ochrana majetku · Daňové poradenstvo"
            title="Daňová efektivita v súlade so zákonom."
            subtitle="Vyplácanie zisku, štruktúra a plánovanie s daňovým poradcom – členom Slovenskej komory daňových poradcov. Koordináciu s ostatným majetkom preberáme my."
            image={{ src: '/images/sprava-majetku/danove-poradenstvo.webp', alt: 'Ruky pri kalkulačke a klávesnici na pracovnom stole' }}
            intro={{
                heading: <>Dane ako súčasť plánu, <span className="text-gradient">nie až v marci.</span></>,
                text: 'Daňové rozhodnutia majú zmysel vtedy, keď sú súčasťou celého plánu – štruktúry, investícií, renty aj odovzdania praxe. Daňové poradenstvo poskytuje daňový poradca, člen Slovenskej komory daňových poradcov. My zabezpečíme, aby jeho odporúčania zapadli do vašej architektúry majetku a nikto nepracoval naslepo.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Rieši vyplácanie zisku a odmeny.'],
                ['Lekár so živnosťou popri úväzku', 'Konziliárna činnosť, prednášky, viac príjmov.'],
                ['Lekár pred predajom praxe', 'Chce poznať daňové dopady vopred.'],
            ]}
            steps={[
                { title: 'Prehľad', detail: 'Príjmy, štruktúra, plány.', output: 'Zadanie pre poradcu', who: 'Osobný partner' },
                { title: 'Analýza', detail: 'Súčasný stav a možnosti.', output: 'Odporúčania', who: '+ daňový poradca' },
                { title: 'Nastavenie', detail: 'Štruktúra, vyplácanie, zmluvy.', output: 'Nastavené riešenie', who: '+ advokát podľa potreby' },
                { title: 'Ročná revízia', detail: 'Zmeny zákonov aj vášho života.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Coins size={22} />, title: 'Vyplácanie zisku a odmeny', text: 'Mzda, dividenda či kombinácia – podľa vašej situácie.' },
                { icon: <Network size={22} />, title: 'Daňová efektivita štruktúry', text: 'Holding a vlastníctvo nastavené aj s ohľadom na dane.' },
                { icon: <FileText size={22} />, title: 'Daňové priznania', text: 'Priznania a komunikácia so správcom dane cez daňového poradcu.' },
                { icon: <KeyRound size={22} />, title: 'Predaj a odovzdanie praxe', text: 'Daňové dopady prevodu vopred, nie po podpise.' },
                { icon: <TrendingUp size={22} />, title: 'Investície a renta', text: 'Daňový pohľad na investovanie a príjem po skončení praxe.' },
                { icon: <RefreshCw size={22} />, title: 'Ročná revízia', text: 'Zmeny zákonov a vašej situácie v jednom prehľade.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľ ambulancie si roky vypláca zisk rovnakým spôsobom a popri tom prednáša. S daňovým poradcom prejdeme celý obraz – odmenu, dividendy, živnosť aj investície – a nastavíme vyplácanie tak, aby zapadlo do jeho plánu renty.',
            }}
            outputs={[
                'Odporúčania daňového poradcu',
                'Nastavené vyplácanie zisku',
                'Daňové dopady predaja praxe vopred',
                'Ročná daňová revízia',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Štruktúra vlastníctva a vyplácanie zisku.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Architektúra majetku', text: 'Dane ako súčasť celého plánu.', href: '/sprava-a-ochrana-majetku/architektura-majetku' },
                { label: 'Predaj kmeňa a praxe', text: 'Daňové dopady odovzdania praxe.', href: '/business-partner/predaj-kmena-a-praxe' },
            ]}
            legal={`Daňové poradenstvo poskytuje daňový poradca – člen Slovenskej komory daňových poradcov. Mediconect koordinuje, daňové služby neposkytuje. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Dane riešte s plánom.',
                description: 'Prejdeme vaše príjmy a štruktúru a prepojíme vás s daňovým poradcom, ktorý pozná situáciu lekárov.',
            }}
        />
    );
}
