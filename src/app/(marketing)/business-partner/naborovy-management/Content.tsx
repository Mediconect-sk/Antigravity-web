'use client';

import PillarPage from '@/components/PillarPage';
import { FileText, Megaphone, ListChecks, CalendarCheck, BarChart3, ShieldCheck } from 'lucide-react';
import { trail } from '@/lib/seo';

/**
 * Business partner → Náborový management (29. 10. 2026).
 * Služba podľa Prílohy č. 4 zmluvy o nábore: Mediconect organizuje výberové konanie
 * v mene a pod značkou klienta. Zámerne bez sľubu „databázy sestier“ (zákon č. 5/2004 Z. z.
 * a zmluva – Mediconect nevedie vlastnú databázu uchádzačov), bez garancie výsledku
 * a bez mien klientov.
 */
const NABOR_DISCLOSURE =
    'Mediconect nevykonáva sprostredkovanie zamestnania. Zamestnávateľom a prevádzkovateľom osobných údajov uchádzačov je vždy klient, ktorý rozhoduje o prijatí aj o pracovných podmienkach. Mediconect nevedie vlastnú databázu uchádzačov a od uchádzačov nepožaduje žiadnu úhradu. Uvedené lehoty sú orientačné a závisia od situácie na trhu práce.';

export default function NaborovyManagementContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/naborovy-management')}
            badge="Business partner · Náborový management"
            title="Výberové konanie, ktoré nevedie lekár popri ordinovaní."
            subtitle="Pripravíme inzerát, oslovíme uchádzačky, vytriedime prihlášky, zorganizujeme pohovory a odporučíme finalistky. O prijatí rozhodujete vy – my prinesieme poriadok, tempo a prehľad."
            intro={{
                heading: <>Sestier je málo. <span className="text-gradient">Strácajú sa v pomalých výberových konaniach.</span></>,
                text: 'Dobrá sestra má dnes viac ponúk naraz. Náskok má ten, kto jej odpovie do dvoch dní, pozve ju na konkrétny termín a ukáže jasné podmienky. Celé výberové konanie vedieme v mene vašej ambulancie a pod vašou značkou – prihlášky, pohovory a štatistiky máte prehľadne v Ordevii, v prostredí, ktoré patrí vám.',
            }}
            audience={[
                ['Nová ambulancia', 'Potrebuje prvú sestru včas pred otvorením a nemá kto viesť výber.'],
                ['Zabehnutá prax', 'Hľadá náhradu za odchádzajúcu sestru bez výpadku ordinovania.'],
                ['Klinika a poliklinika', 'Obsadzuje viac pozícií naraz a chce mať nábor pod kontrolou v jednom systéme.'],
            ]}
            steps={[
                { title: 'Príprava', detail: 'Profil pozície, odporúčanie k mzde, text inzerátu a kariérna stránka s formulárom.', output: 'Schválený inzerát', who: 'Mediconect + vy' },
                { title: 'Oslovenie', detail: 'Pracovné portály a úrad práce, vaše sociálne siete, e-mailová kampaň pre vašich zamestnancov a klientov a absolventi ošetrovateľstva.', output: 'Prihlášky v Ordevii', who: 'Mediconect' },
                { title: 'Výber', detail: 'Predvýber, telefonický rozhovor, kontrola dokladov a pohovory s hodnotiacim hárkom. Odbornú časť pohovoru vedie váš lekár.', output: '1 – 2 finalistky so zdôvodnením', who: 'Mediconect + lekár' },
                { title: 'Nástup', detail: 'Návrh ponukového listu, plán zapracovania, zaškolenie do objednávania a CRM, kontroly po 30, 60 a 90 dňoch.', output: 'Zapracovaná sestra', who: 'Vy + Mediconect' },
            ]}
            services={[
                { icon: <FileText size={22} />, title: 'Inzerát a kariérna stránka', text: 'Profil pozície, text inzerátu a stránka s formulárom, ktorý uchádzačka vyplní na mobile za pár minút.' },
                { icon: <Megaphone size={22} />, title: 'Oslovenie uchádzačiek', text: 'Pracovné portály, úrad práce, vaše sociálne siete, e-mailová kampaň pre vašich zamestnancov a klientov a absolventi ošetrovateľstva. Na želanie aj platená kampaň na sociálnych sieťach s osobitným nacenením.' },
                { icon: <ListChecks size={22} />, title: 'Prehľad a triedenie prihlášok', text: 'Každá prihláška v jednom prehľade, rovnaké kritériá pre všetky uchádzačky a nič sa nestratí v e-mailoch.' },
                { icon: <CalendarCheck size={22} />, title: 'Rezervácia pohovorov', text: 'Uchádzačka si termín pohovoru vyberie sama cez odkaz, pripomienku dostane e-mailom aj SMS.' },
                { icon: <BarChart3 size={22} />, title: 'Štatistiky náboru', text: 'Koľko prihlášok priniesol ktorý kanál, kde sa uchádzačky strácajú a ako rýchlo reagujeme.' },
                { icon: <ShieldCheck size={22} />, title: 'Ochrana osobných údajov', text: 'Prihlášky ostávajú vo vašom prostredí a po skončení výberu sa údaje automaticky vymažú.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Nová ambulancia všeobecného lekára hľadá sestru na rannú zmenu s doplnkovým certifikátom. Pripravíme inzerát so mzdou, zverejníme ho na portáloch, rozošleme vašim zamestnancom a klientom a prihlášky triedime priebežne. Pohovory s lekárom naplánujeme do dvoch popoludní. Ak sa uchádzačka s certifikátom nenájde, navrhneme záložný postup so zaškolením.',
            }}
            outputs={[
                'Inzerát a kariérna stránka pod vašou značkou',
                'Prihlášky, pipeline a pohovory v Ordevii',
                'Odporúčanie 1 – 2 finalistiek so zdôvodnením',
                'Plán zapracovania a kontroly po 30, 60 a 90 dňoch',
                'Jedno opakovanie výberu bez odmeny, ak pracovný pomer skončí v skúšobnej dobe (za podmienok zmluvy)',
            ]}
            links={[
                { label: 'Zamestnanecké benefity', text: 'Dôvod, prečo dobrí ľudia zostávajú.', href: '/business-partner/zamestnanecke-benefity' },
                { label: 'Štart vlastnej ambulancie', text: 'Od rozhodnutia po prvého pacienta.', href: '/business-partner/start-vlastnej-ambulancie' },
                { label: 'Efektívna a zisková ambulancia', text: 'Procesy, tím a stabilná ekonomika praxe.', href: '/business-partner/efektivna-a-ziskova-ambulancia' },
            ]}
            legal={NABOR_DISCLOSURE}
            cta={{
                title: 'Koho potrebujete do tímu?',
                description: 'Povedzte nám pozíciu, pracovný čas a termín nástupu. Pripravíme cenovú ponuku a harmonogram výberového konania.',
            }}
        />
    );
}
