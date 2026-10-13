'use client';

import PillarPage from '@/components/PillarPage';
import { Building2, FileSignature, ArrowRightLeft, ScrollText, ShieldAlert, Lock } from 'lucide-react';
import { trail } from '@/lib/seo';

/** Správa majetku → Právne služby. Poskytuje advokát, Mediconect koordinuje. */
export default function PravneContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/pravne-sluzby')}
            badge="Správa a ochrana majetku · Právne služby"
            title="Zmluvy a štruktúry, ktoré obstoja."
            subtitle="Holding, zmluvy, prevody praxe a dedičské plánovanie s overenými advokátmi. Koordináciu s ostatnými oblasťami preberáme my."
            image={{ src: '/images/sprava-majetku/pravne-sluzby.webp', alt: 'Stretnutie pri podpise zmluvy' }}
            intro={{
                heading: <>Advokát, ktorý vidí <span className="text-gradient">celý obraz.</span></>,
                text: 'Právne kroky lekára sa zriedka týkajú len jednej zmluvy – holding, nájom priestorov, prevod praxe aj dedičstvo spolu súvisia. Právne služby poskytujú overení advokáti; my im pripravíme podklady a zabezpečíme, aby ich práca zapadla do vášho plánu majetku aj praxe.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Zakladá spoločnosti, uzatvára nájmy a zmluvy.'],
                ['Lekár pred prevodom praxe', 'Potrebuje bezpečný prevod prevádzky alebo podielu.'],
                ['Lekár, ktorý plánuje dedenie', 'Chce jasné pravidlá pre rodinu.'],
            ]}
            steps={[
                { title: 'Zadanie', detail: 'Čo treba vyriešiť a prečo.', output: 'Podklady pre advokáta', who: 'Osobný partner' },
                { title: 'Posúdenie', detail: 'Riziká a možnosti.', output: 'Právny názor', who: '+ advokát' },
                { title: 'Zmluvy a úkony', detail: 'Príprava, rokovanie, podpis.', output: 'Podpísané zmluvy', who: '+ advokát' },
                { title: 'Kontinuita', detail: 'Termíny, zmeny, revízia.', output: 'Prehľad záväzkov', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Building2 size={22} />, title: 'Spoločnosti a holding', text: 'Založenie, stanovy, zmeny a prevody podielov.' },
                { icon: <FileSignature size={22} />, title: 'Zmluvy ambulancie', text: 'Nájom priestorov, dodávatelia, spolupráce a zamestnanci.' },
                { icon: <ArrowRightLeft size={22} />, title: 'Prevod praxe', text: 'Predaj prevádzky alebo podielu, zmluvy s nástupcom.' },
                { icon: <ScrollText size={22} />, title: 'Dedičské plánovanie', text: 'Závet, nadačné a zverenecké schémy, pravidlá pre rodinu.' },
                { icon: <ShieldAlert size={22} />, title: 'Zodpovednosť a nároky', text: 'Prevencia sporov a zastúpenie, keď nastanú.' },
                { icon: <Lock size={22} />, title: 'GDPR v ambulancii', text: 'Ochrana osobných údajov pacientov a dokumentácia.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Lekárka preberá ambulanciu po kolegovi a zároveň zakladá holding. Advokát pripraví zmluvu o prevode, nájom priestorov aj stanovy holdingu; my zladíme termíny so zmluvami so zdravotnými poisťovňami a financovaním, aby všetko platilo naraz.',
            }}
            outputs={[
                'Podklady a zadanie pre advokáta',
                'Právny názor na riziká',
                'Pripravené a podpísané zmluvy',
                'Prehľad záväzkov a termínov',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Návrh a založenie holdingu.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Nadačné a zverenecké schémy', text: 'Pravidlá pre rodinný majetok.', href: '/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy' },
                { label: 'Predaj kmeňa a prevádzky', text: 'Prevod praxe na nástupcu.', href: '/business-partner/predaj-kmena-a-prevadzky' },
            ]}
            legal="Právne služby poskytujú advokáti zapísaní v Slovenskej advokátskej komore. Mediconect koordinuje, právne služby neposkytuje."
            cta={{
                title: 'Potrebujete advokáta, ktorý rozumie lekárom?',
                description: 'Opíšte nám situáciu – pripravíme podklady a prepojíme vás s overeným advokátom.',
            }}
        />
    );
}
