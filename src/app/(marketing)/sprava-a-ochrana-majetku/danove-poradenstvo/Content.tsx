'use client';

import PillarPage from '@/components/PillarPage';
import { Coins, Network, FileText, KeyRound, TrendingUp, RefreshCw, Receipt, Users, Briefcase, BookOpen } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Správa majetku → Efektívna správa daní. Daňové a účtovné služby poskytuje partnerská spoločnosť
 * BILVAO s. r. o.; Mediconect koordinuje.
 *
 * Stránka dočasne nesľubuje „daňového poradcu – člena SKDP" (pripomienky partnera, 14. 11. 2026):
 * interne ho zatiaľ nemáme, zápis do SKDP je možný najskôr od januára 2027. Po zápise sa dá pôvodné
 * znenie vrátiť – je v histórii gitu a v CHANGELOG.md.
 */
export default function DaneContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/danove-poradenstvo')}
            badge="Správa a ochrana majetku · Efektívna správa daní"
            title="Daňová efektivita v súlade so zákonom."
            subtitle="Vyplácanie zisku, štruktúra a plánovanie s partnerskou účtovnou a daňovou kanceláriou. Koordináciu s ostatným majetkom preberáme my."
            image={{ src: '/images/sprava-majetku/danove-poradenstvo.webp', alt: 'Ruky pri kalkulačke a klávesnici na pracovnom stole' }}
            intro={{
                heading: <>Dane ako súčasť plánu, <span className="text-gradient">nie až v marci.</span></>,
                text: 'Daňové rozhodnutia majú zmysel vtedy, keď sú súčasťou celého plánu – štruktúry, investícií, renty aj odovzdania praxe. Daňové a účtovné služby poskytuje partnerská účtovná a daňová kancelária. My zabezpečíme, aby jej odporúčania zapadli do vašej architektúry majetku a nikto nepracoval naslepo.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Rieši vyplácanie zisku a odmeny.'],
                ['Lekár so živnosťou popri úväzku', 'Konziliárna činnosť, prednášky, viac príjmov.'],
                ['Lekár pred predajom praxe', 'Chce poznať daňové dopady vopred.'],
            ]}
            steps={[
                { title: 'Prehľad', detail: 'Príjmy, štruktúra, plány.', output: 'Zadanie pre partnera', who: 'Osobný partner' },
                { title: 'Analýza', detail: 'Súčasný stav a možnosti.', output: 'Odporúčania', who: '+ daňový a účtovný partner' },
                { title: 'Nastavenie', detail: 'Štruktúra, vyplácanie, zmluvy.', output: 'Nastavené riešenie', who: '+ advokát podľa potreby' },
                { title: 'Ročná revízia', detail: 'Zmeny zákonov aj vášho života.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Coins size={22} />, title: 'Vyplácanie zisku a odmeny', text: 'Mzda, dividenda či kombinácia – podľa vašej situácie.' },
                { icon: <Network size={22} />, title: 'Daňová efektivita štruktúry', text: 'Holding a vlastníctvo nastavené aj s ohľadom na dane, vrátane posúdenia, či sa oplatí.' },
                { icon: <FileText size={22} />, title: 'Daňové priznania', text: 'Priznania a komunikácia so správcom dane na základe plnomocenstva.' },
                { icon: <KeyRound size={22} />, title: 'Predaj a odovzdanie praxe', text: 'Prevod podniku alebo podielu, DPH a zdanenie predaja – vopred, nie po podpise.' },
                { icon: <TrendingUp size={22} />, title: 'Investície a renta', text: 'Daňový pohľad na investovanie a príjem po skončení praxe.' },
                { icon: <Receipt size={22} />, title: 'DPH pri doplnkových službách', text: 'Estetika, posudky, kurzy a predaj produktov, registrácia pre DPH pri online reklame, e‑faktúry od roku 2027.' },
                { icon: <Users size={22} />, title: 'Zamestnanie rodiny a odmeny', text: 'Manželka, deti na brigádnickej dohode, pracovná zmluva odborného zástupcu.' },
                { icon: <Briefcase size={22} />, title: 'Odvody pri živnosti popri úväzku', text: 'Od roku 2026 vzniká sociálne poistenie od 6. mesiaca po začatí podnikania – týka sa aj prednášok a konzílií.' },
                { icon: <BookOpen size={22} />, title: 'Licenčné odmeny', text: 'Publikácie, blogy a kurzové materiály.' },
                { icon: <RefreshCw size={22} />, title: 'Ročná revízia', text: 'Zmeny zákonov a vašej situácie v jednom prehľade.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľ ambulancie si roky vypláca zisk rovnakým spôsobom a popri tom prednáša. S daňovým a účtovným partnerom prejdeme celý obraz – odmenu, dividendy, živnosť aj investície – a nastavíme vyplácanie tak, aby zapadlo do jeho plánu renty.',
            }}
            outputs={[
                'Daňová analýza a odporúčania',
                'Nastavené vyplácanie zisku',
                'Daňové dopady predaja praxe vopred',
                'Ročná daňová revízia',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Štruktúra vlastníctva a vyplácanie zisku.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Architektúra majetku', text: 'Dane ako súčasť celého plánu.', href: '/sprava-a-ochrana-majetku/architektura-majetku' },
                { label: 'Predaj kmeňa a praxe', text: 'Daňové dopady odovzdania praxe.', href: '/business-partner/predaj-kmena-a-praxe' },
            ]}
            legal={`Daňové a účtovné služby poskytuje partnerská spoločnosť BILVAO s. r. o. Daňové poradenstvo v rozsahu zákona o daňových poradcoch poskytuje daňový poradca zapísaný v SKDP. Mediconect koordinuje, daňové služby neposkytuje. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Dane riešte s plánom.',
                description: 'Prejdeme vaše príjmy a štruktúru a prepojíme vás s daňovým a účtovným partnerom, ktorý pozná situáciu lekárov.',
            }}
        />
    );
}
