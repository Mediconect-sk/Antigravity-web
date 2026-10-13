'use client';

import PillarPage from '@/components/PillarPage';
import { HoldingSection } from '../Sections';
import { PenTool, Building2, ArrowRightLeft, Coins, Home, RefreshCw } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/** Správa majetku → Holdingová štruktúra. Daňové a právne kroky vždy s advokátom a daňovým poradcom. */
export default function HoldingContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/holdingova-struktura')}
            badge="Správa a ochrana majetku · Holdingová štruktúra"
            title="Oddeľte to, čo tvorí váš zisk, od toho, čo tvorí vašu istotu."
            subtitle="Holding vlastní ambulanciu a stráži zarobené mimo dosahu prevádzkových rizík. Navrhneme ho, založíme a nastavíme s advokátom a daňovým poradcom."
            image={{ src: '/images/sprava-majetku/holdingova-struktura.webp', alt: 'Moderná sklenená administratívna budova' }}
            intro={{
                heading: <>Tichá poistka <span className="text-gradient">vašej práce.</span></>,
                text: 'V ambulancii vzniká zisk, ale aj riziko – spory, pokuty, nároky. Ak je v nej aj všetok majetok, jeden problém ho ohrozí celý. Holdingová spoločnosť oddelí prevádzku od majetku, uľahčí budúci predaj či odovzdanie praxe a dá štruktúru reinvestovaniu zisku. Vhodnosť a nastavenie posúdime individuálne.',
            }}
            audience={[
                ['Majiteľ ambulancie s rastúcim ziskom', 'Chce zisk ochrániť a ďalej rozvíjať.'],
                ['Lekár s viacerými aktivitami', 'Viac ambulancií, nehnuteľnosti či investície.'],
                ['Lekár pred predajom praxe', 'Pripravuje štruktúru na budúci prevod.'],
            ]}
            steps={[
                { title: 'Posúdenie', detail: 'Zisk, riziká, plány, rodina.', output: 'Odporúčanie áno / nie', who: 'Osobný partner' },
                { title: 'Návrh štruktúry', detail: 'Kto čo vlastní a prečo.', output: 'Schéma holdingu', who: '+ daňový poradca' },
                { title: 'Založenie a prevod', detail: 'Spoločnosť, podiely, zmluvy.', output: 'Fungujúci holding', who: '+ advokát' },
                { title: 'Riadenie', detail: 'Vyplácanie zisku, ročná revízia.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <PenTool size={22} />, title: 'Návrh štruktúry', text: 'Kto bude čo vlastniť a prečo – podľa vašich cieľov a rodiny.' },
                { icon: <Building2 size={22} />, title: 'Založenie holdingu', text: 'Spoločnosť, stanovy a zápis – s advokátom.' },
                { icon: <ArrowRightLeft size={22} />, title: 'Prevod podielov', text: 'Presun podielu v ambulancii pod holding vrátane zmlúv.' },
                { icon: <Coins size={22} />, title: 'Vyplácanie zisku', text: 'Dividendy a reinvestovanie s daňovým poradcom.' },
                { icon: <Home size={22} />, title: 'Nehnuteľnosti a investície', text: 'Kde majú byť priestory ambulancie a investície.' },
                { icon: <RefreshCw size={22} />, title: 'Ročná revízia', text: 'Štruktúra sa mení s praxou aj rodinou.' },
            ]}
            extra={<HoldingSection />}
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľ dvoch ambulancií má zisk na účtoch spoločností a priestory na svoje meno. S advokátom a daňovým poradcom navrhneme holding, ktorý vlastní obe ambulancie, priestory prenajíma prevádzke a zisk reinvestuje podľa plánu – pripravený aj na budúce odovzdanie praxe.',
            }}
            outputs={[
                'Posúdenie, či holding dáva zmysel',
                'Schéma štruktúry s advokátom a daňovým poradcom',
                'Založený holding a prevedené podiely',
                'Pravidlá vyplácania a reinvestovania zisku',
            ]}
            links={[
                { label: 'Architektúra majetku', text: 'Celý plán majetku v jednom celku.', href: '/sprava-a-ochrana-majetku/architektura-majetku' },
                { label: 'Právne služby', text: 'Založenie, zmluvy a prevody s advokátom.', href: '/sprava-a-ochrana-majetku/pravne-sluzby' },
                { label: 'Predaj kmeňa a prevádzky', text: 'Holding ako príprava na odovzdanie praxe.', href: '/business-partner/predaj-kmena-a-prevadzky' },
            ]}
            legal={`Štruktúru navrhujeme individuálne s advokátom a daňovým poradcom (člen SKDP). ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Dáva holding zmysel aj vo vašom prípade?',
                description: 'Prejdeme váš zisk, riziká a plány. Ak holding nepotrebujete, povieme vám to rovno.',
            }}
        />
    );
}
