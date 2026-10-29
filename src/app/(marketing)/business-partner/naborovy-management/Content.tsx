'use client';

import PillarPage from '@/components/PillarPage';
import { FileText, Megaphone, Lock, ListChecks, CalendarCheck, ShieldCheck } from 'lucide-react';
import { trail } from '@/lib/seo';

/**
 * Business partner → Náborový management (29. 10. 2026) – jedna podstránka pre výber
 * sestry, lekára aj ďalšieho zdravotníckeho personálu (Viktor 29. 10. 2026; samostatná
 * stránka Nábor lekárov zrušená, adresa presmerovaná sem). Služba podľa zmluvy o nábore:
 * výber vedieme v mene a pod značkou klienta. Zámerne bez sľubu „databázy uchádzačov“
 * (zákon č. 5/2004 Z. z. a zmluva – Mediconect nevedie vlastnú databázu uchádzačov),
 * bez garancie výsledku a bez mien klientov. Sieť MyMedical je kanál na zverejnenie
 * ponuky pre lekárov, nie databáza kandidátov.
 */
const NABOR_DISCLOSURE =
    'Mediconect nevykonáva sprostredkovanie zamestnania. Zamestnávateľom alebo zmluvným partnerom a prevádzkovateľom osobných údajov uchádzačov je vždy klient, ktorý rozhoduje o prijatí aj o pracovných podmienkach. Mediconect nevedie vlastnú databázu uchádzačov a od uchádzačov nepožaduje žiadnu úhradu. Uvedené lehoty sú orientačné a závisia od situácie na trhu práce.';

export default function NaborovyManagementContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/naborovy-management')}
            badge="Business partner · Náborový management"
            title="Výberové konanie, ktoré nevedie lekár popri ordinovaní."
            image={{ src: '/images/business-partner/naborovy-management.webp', alt: 'Životopis na podložke vedľa notebooku' }}
            subtitle="Sestra, lekár, laborant či recepčná – pripravíme ponuku, oslovíme vhodných ľudí, vytriedime prihlášky, zorganizujeme pohovory a odporučíme najvhodnejších kandidátov. O prijatí rozhodujete vy – my prinesieme poriadok, tempo a prehľad."
            intro={{
                heading: <>Dobrých zdravotníkov je málo. <span className="text-gradient">Strácajú sa v pomalých výberových konaniach.</span></>,
                text: 'Sestra, lekár aj ďalší zdravotník má dnes viac ponúk naraz. Náskok má ten, kto odpovie do dvoch dní, pozve na konkrétny termín a ukáže jasné podmienky. Pri lekároch rozhoduje aj dôvera a diskrétnosť. Celé výberové konanie vedieme v mene vašej ambulancie a pod vašou značkou – prihlášky, pohovory a štatistiky máte prehľadne v Ordevii, v prostredí, ktoré patrí vám.',
            }}
            audience={[
                ['Zdravotná sestra', 'Do ambulancie, pracovnej zdravotnej služby alebo na kliniku – aj sestry s certifikátom, napríklad na audiometriu.'],
                ['Lekár', 'Špecialista do ambulancie, nástupca pred generačnou výmenou alebo spoločník – diskrétne, cez komunitu MyMedical a rezidentov.'],
                ['Ďalší zdravotnícky personál', 'Praktická sestra, laborant, rádiologický technik, fyzioterapeut, zdravotnícky asistent aj recepcia.'],
            ]}
            steps={[
                { title: 'Príprava', detail: 'Profil pozície, odporúčanie k mzde alebo odmene a forme spolupráce, text ponuky a kariérna stránka s formulárom.', output: 'Schválená ponuka', who: 'Mediconect + vy' },
                { title: 'Oslovenie', detail: 'Pracovné portály a úrad práce, vaše sociálne siete, e-mailová kampaň pre vašich zamestnancov a klientov, školy; pri lekároch komunita MyMedical a rezidenti.', output: 'Prihlášky v Ordevii', who: 'Mediconect' },
                { title: 'Výber', detail: 'Predvýber, telefonický alebo dôverný úvodný rozhovor, kontrola dokladov (vzdelanie, registrácia v komore, certifikáty) a pohovory s hodnotiacim hárkom. Odbornú časť vedie váš lekár.', output: '1 – 2 najvhodnejší kandidáti so zdôvodnením', who: 'Mediconect + vy' },
                { title: 'Nástup', detail: 'Návrh ponukového listu, plán zapracovania, zaškolenie do objednávania a CRM, kontroly po 30, 60 a 90 dňoch.', output: 'Zapracovaný nový kolega', who: 'Vy + Mediconect' },
            ]}
            services={[
                { icon: <FileText size={22} />, title: 'Ponuka a kariérna stránka', text: 'Profil pozície, odporúčanie k mzde či odmene, text ponuky a stránka s formulárom, ktorý uchádzač vyplní na mobile za pár minút.' },
                { icon: <Megaphone size={22} />, title: 'Oslovenie podľa profesie', text: 'Sestry a ďalší personál cez portály, úrad práce, školy a e-mailovú kampaň pre vašich zamestnancov a klientov. Na želanie aj platená kampaň na sociálnych sieťach s osobitným nacenením.' },
                { icon: <Lock size={22} />, title: 'Diskrétny prístup k lekárom', text: 'Ponuku predstavíme v komunite lekárov MyMedical a rezidentom; úvodný rozhovor vedieme dôverne, aby zamestnaný lekár nemusel nič riskovať.' },
                { icon: <ListChecks size={22} />, title: 'Prehľad a triedenie prihlášok', text: 'Každá prihláška v jednom prehľade, rovnaké kritériá pre všetkých uchádzačov a štatistiky, ktorý kanál priniesol koľko prihlášok.' },
                { icon: <CalendarCheck size={22} />, title: 'Rezervácia pohovorov', text: 'Uchádzač si termín pohovoru vyberie sám cez odkaz, pripomienku dostane e-mailom aj SMS.' },
                { icon: <ShieldCheck size={22} />, title: 'Ochrana osobných údajov', text: 'Prihlášky ostávajú vo vašom prostredí a po skončení výberu sa údaje automaticky vymažú.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Nová ambulancia všeobecného lekára hľadá sestru na rannú zmenu s doplnkovým certifikátom. Pripravíme inzerát so mzdou, zverejníme ho na portáloch, rozošleme našimi kanálmi a klientom a prihlášky triedime priebežne. Pripravíme vám 1 – 2 najvhodnejších kandidátov, pričom celý proces sledujete vo svojom CRM. Ak sa vhodná uchádzačka nenájde, navrhneme záložný postup a výber zopakujeme podľa podmienok zmluvy.',
            }}
            outputs={[
                'Ponuka a kariérna stránka pod vašou značkou',
                'Prihlášky, pipeline a pohovory v Ordevii',
                'Odporúčanie 1 – 2 najvhodnejších kandidátov so zdôvodnením',
                'Plán zapracovania a kontroly po 30, 60 a 90 dňoch',
                'Jedno opakovanie výberu bez odmeny, ak pracovný pomer skončí v skúšobnej dobe (za podmienok zmluvy)',
            ]}
            links={[
                { label: 'Zamestnanecké benefity', text: 'Dôvod, prečo dobrí ľudia zostávajú.', href: '/business-partner/zamestnanecke-benefity' },
                { label: 'Predaj kmeňa a praxe', text: 'Odovzdanie pacientov nástupcovi.', href: '/business-partner/predaj-kmena-a-praxe' },
                { label: 'Štart vlastnej ambulancie', text: 'Od rozhodnutia po prvého pacienta.', href: '/business-partner/start-vlastnej-ambulancie' },
            ]}
            legal={NABOR_DISCLOSURE}
            cta={{
                title: 'Koho potrebujete do tímu?',
                description: 'Povedzte nám pozíciu, pracovný čas a termín nástupu – sestra, lekár aj ďalší personál. Pripravíme cenovú ponuku a harmonogram výberového konania.',
            }}
        />
    );
}
