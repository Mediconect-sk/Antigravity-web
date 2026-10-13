'use client';

import PillarPage from '@/components/PillarPage';
import { Banknote, Microscope, Repeat, KeyRound, Scale, ShieldCheck } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/** Business partner → Financovanie podnikania. Bez sadzieb a sľubov – rozhoduje financujúca inštitúcia. */
export default function FinancovanieContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/financovanie-podnikania')}
            badge="Business partner · Financovanie podnikania"
            title="Financovanie, ktoré sedí na vašu ambulanciu."
            subtitle="Úver, lízing alebo prenájom prístrojov – porovnáme možnosti a financovanie sprostredkujeme. Podpisujete až zrozumiteľný návrh."
            image={{ src: '/images/business-partner/financovanie-podnikania.webp', alt: 'Podanie rúk nad podpísanými dokumentmi' }}
            intro={{
                heading: <>Prístroje, priestory, prevzatie praxe. <span className="text-gradient">Zladené s plánom.</span></>,
                text: 'Financovanie má zmysel posudzovať spolu s biznis plánom a termínmi otvorenia. Pripravíme podklady pre banku či lízingovú spoločnosť, porovnáme ponuky a dohliadneme, aby splátky zodpovedali reálnemu rozbehu ambulancie. O schválení vždy rozhoduje financujúca inštitúcia.',
            }}
            audience={[
                ['Zakladateľ ambulancie', 'Potrebuje vybavenie skôr, než príde prvý príjem.'],
                ['Lekár, ktorý rozširuje prax', 'Nový prístroj, ďalšie pracovisko alebo rekonštrukcia.'],
                ['Nástupca do praxe', 'Financuje prevzatie existujúcej ambulancie.'],
            ]}
            steps={[
                { title: 'Potreba a rozpočet', detail: 'Čo, kedy a v akej sume.', output: 'Zoznam investícií', who: 'Osobný partner' },
                { title: 'Podklady', detail: 'Biznis plán, výkazy, ponuky dodávateľov.', output: 'Kompletná žiadosť', who: 'Partner, analytik' },
                { title: 'Porovnanie ponúk', detail: 'Úver, lízing alebo prenájom.', output: 'Prehľad možností', who: '+ banky a lízingové spoločnosti' },
                { title: 'Podpis a čerpanie', detail: 'Zosúladenie s harmonogramom otvorenia.', output: 'Financované vybavenie', who: '+ dodávatelia' },
            ]}
            services={[
                { icon: <Banknote size={22} />, title: 'Úver na podnikanie', text: 'Na zariadenie, rekonštrukciu priestorov alebo prevádzkový kapitál pri rozbehu.' },
                { icon: <Microscope size={22} />, title: 'Lízing prístrojov', text: 'Diagnostika a prístrojové vybavenie bez jednorazovej veľkej platby.' },
                { icon: <Repeat size={22} />, title: 'Prenájom vybavenia', text: 'Keď je výhodnejšie vybavenie používať a obnovovať než vlastniť.' },
                { icon: <KeyRound size={22} />, title: 'Financovanie prevzatia praxe', text: 'Pre nástupcu, ktorý preberá existujúcu ambulanciu.' },
                { icon: <Scale size={22} />, title: 'Porovnanie ponúk', text: 'Celkové náklady, podmienky a riziká vedľa seba, zrozumiteľne.' },
                { icon: <ShieldCheck size={22} />, title: 'Poistenie financovaného majetku', text: 'Ochrana prístrojov a prevádzky v spolupráci s licencovaným partnerom.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Gynekológ chce popri existujúcej praxi kúpiť nový ultrazvuk. Porovnáme úver, lízing a prenájom, splátky zladíme s očakávaným využitím prístroja a podklady pre financujúcu inštitúciu pripravíme za neho.',
            }}
            outputs={[
                'Prehľad možností financovania',
                'Kompletné podklady pre banku alebo lízing',
                'Sprostredkované financovanie',
                'Splátky zladené s rozbehom ambulancie',
            ]}
            links={[
                { label: 'Štart vlastnej ambulancie', text: 'Biznis plán, povolenia a zmluvy s poisťovňami.', href: '/business-partner/start-vlastnej-ambulancie' },
                { label: 'Predaj kmeňa a prevádzky', text: 'Ocenenie praxe a prevod na nástupcu.', href: '/business-partner/predaj-kmena-a-prevadzky' },
                { label: 'Správa a ochrana majetku', text: 'Holding a ochrana rodinného majetku.', href: '/sprava-a-ochrana-majetku' },
            ]}
            legal={FINANCE_DISCLOSURE}
            cta={{
                title: 'Financovanie začína rozhovorom.',
                description: 'Prejdeme, čo potrebujete financovať a kedy. Potom dostanete prehľad možností a ďalší postup.',
            }}
        />
    );
}
