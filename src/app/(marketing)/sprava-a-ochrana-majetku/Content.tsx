'use client';

import PillarPage from '@/components/PillarPage';
import { WealthLevels, WealthPhases, TopicsSection, ApproachQuote, MyLifePartner, ImmunityCheck } from './Sections';
import WealthAreas from '@/components/WealthAreas';
import { Stethoscope, Building2, TrendingUp, Hourglass, ShieldCheck, Banknote, Calculator, Repeat } from 'lucide-react';
import { FINANCE_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';

/**
 * Správa a ochrana majetku – pilier 04 Majetok a štruktúra (brožúra v5, strany 9–10)
 * + texty z brožúry „MyMedical koncepcia" v ./Sections.tsx.
 * Obsahuje ilustračnú schému štruktúry majetku a povinnú informáciu
 * o finančnom sprostredkovaní (FINANCE_DISCLOSURE).
 */

export default function AssetContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku')}
            badge="Pilier 04 · Majetok a štruktúra"
            title="Čo zarobíte, má pracovať pre vás a vašu rodinu."
            subtitle="Plán, ochranu, štruktúru a daňovú efektivitu spojíme do jednej architektúry – s jedným osobným partnerom a ročnou revíziou."
            lead={<WealthAreas />}
            intro={{
                heading: <>Najprv diagnóza, <span className="text-gradient">potom odporúčanie.</span></>,
                text: 'Nepredpíšete terapiu bez vyšetrenia – ani my neodporučíme riešenie bez analýzy. Začíname finančnou diagnózou: príjmy, záväzky, rodina, riziká povolania a ciele. Až potom navrhneme plán, štruktúru a konkrétne riešenia, ktoré raz ročne spolu prejdeme.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Chce oddeliť riziko praxe od rodiny.'],
                ['Zamestnaný lekár', 'Buduje majetok a rentu popri službách.'],
                ['Pred odovzdaním praxe', 'Plánuje príjem po odchode a dedenie.'],
            ]}
            steps={[
                { title: 'Diagnóza', detail: 'Príjmy, záväzky, riziká.', output: 'Finančná diagnóza', who: 'Osobný partner' },
                { title: 'Plán', detail: 'Ochrana, rast, kontinuita.', output: 'Písomný plán', who: 'Osobný partner' },
                { title: 'Realizácia', detail: 'Štruktúra a produkty.', output: 'Štruktúra a produkty', who: '+ advokát, SKDP' },
                { title: 'Revízia', detail: 'Raz ročne.', output: 'Ročná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Stethoscope size={22} />, title: 'Finančná diagnóza', text: 'Príjmy, záväzky, rodina, riziká povolania a ciele.' },
                { icon: <Building2 size={22} />, title: 'Holdingová štruktúra', text: 'Oddelenie rizika praxe od majetku, s advokátom a SKDP.' },
                { icon: <TrendingUp size={22} />, title: 'Plán a investície', text: 'Dlhodobý plán podľa rizikového profilu, ročná revízia.' },
                { icon: <Hourglass size={22} />, title: 'Renta a dôchodok', text: 'Príjem po skončení praxe vrátane dôchodkového sporenia.' },
                { icon: <ShieldCheck size={22} />, title: 'Poistenie a ochrana', text: 'Zodpovednosť, príjem pri PN, rodina a majetok ambulancie.' },
                { icon: <Banknote size={22} />, title: 'Úvery a financovanie', text: 'Hypotéky, súkromné aj podnikateľské financovanie.' },
                { icon: <Calculator size={22} />, title: 'Daňová efektivita', text: 'Vyplácanie zisku a štruktúra v súlade so zákonom, so SKDP.' },
                { icon: <Repeat size={22} />, title: 'Kontinuita a dedenie', text: 'Odovzdanie praxe a majetku bez fragmentácie.' },
            ]}
            extra={
                <>
                    <WealthLevels />
                    <WealthPhases />
                    <TopicsSection />
                    <ImmunityCheck url={MYMEDICAL.economicImmunityUrl} />
                    <ApproachQuote />
                    <MyLifePartner />
                </>
            }
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľ ambulancie má úspory na bežnom účte, prístroje na úver a rodinný dom na svoje meno. Navrhneme oddelenie rizika praxe od rodinného majetku, poistenie zodpovednosti a príjmu, dlhodobý investičný plán a plán renty – s jedným osobným partnerom a ročnou revíziou.',
            }}
            outputs={[
                'Finančná diagnóza a písomný plán',
                'Oddelenie rizika praxe od rodiny',
                'Plán renty a dôchodku',
                'Jeden partner namiesto piatich',
            ]}
            links={[
                { label: 'MyMedical', text: 'Osobný partner pre celý plán.', href: MYMEDICAL.url, external: true },
                { label: 'Business partner', text: 'Založenie, rast a generačná výmena praxe.', href: '/business-partner' },
            ]}
            legal={FINANCE_DISCLOSURE}
            cta={{
                title: 'Prvý krok je rozhovor.',
                description: 'Bezplatne prejdeme vašu situáciu a priority. Potom dostanete písomný plán s konkrétnymi krokmi.',
            }}
        />
    );
}
