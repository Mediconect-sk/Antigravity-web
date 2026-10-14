'use client';

import PillarPage from '@/components/PillarPage';
import { Search, ShieldCheck, HeartPulse, Wrench, LockKeyhole, Gavel, Droplets, Handshake } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Business partner → Správa podnikateľských rizík.
 * Obsah z brožúry MyMedical („Poistenie a ochrana majetku", str. 16–17) a
 * architektúry značky (poistenie zodpovednosti, právna ochrana, GDPR).
 * Poistenie sprostredkúva licencovaný partner – FINANCE_DISCLOSURE.
 */
export default function RizikaContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/sprava-podnikatelskych-rizik')}
            badge="Business partner · Správa podnikateľských rizík"
            title="Váš majetok je výsledkom vašej driny. Nedovoľte náhode, aby vám ho vzala."
            subtitle="Zodpovednosť, výpadok príjmu, prerušenie prevádzky aj únik údajov. Nájdeme skryté riziká ambulancie a nastavíme ochranu, ktorá v kritickej chvíli naozaj zafunguje."
            image={{ src: '/images/business-partner/sprava-podnikatelskych-rizik.webp', alt: 'Lekárka pri počítači, vedľa leží stetoskop' }}
            intro={{
                heading: <>Výsledkom nie je poistka. <span className="text-gradient">Výsledkom je istota.</span></>,
                text: 'V ambulancii vzniká zisk, ale aj riziko – nároky pacientov, spory, pokuty, porucha prístroja či vaša vlastná práceneschopnosť. Najprv identifikujeme skryté riziká a medzery, ktoré nie sú na prvý pohľad viditeľné, ale v kritickej situácii rozhodujú o výsledku. Potom nastavíme ochranu a likviditu tak, aby vás žiadna kríza nedonútila siahnuť na dlhodobý majetok – a v kľúčových momentoch ste sa mohli rozhodovať pokojne.',
            }}
            audience={[
                ['Majiteľ ambulancie', 'Nesie zodpovednosť za pacientov, personál aj prístroje.'],
                ['Lekár, ktorý práve otvára prax', 'Chce mať ochranu nastavenú od prvého dňa.'],
                ['Ambulancia s drahým vybavením', 'Porucha alebo škoda by zastavila príjem.'],
            ]}
            steps={[
                { title: 'Mapa rizík', detail: 'Zodpovednosť, príjem, prevádzka, údaje.', output: 'Prehľad rizík a medzier', who: 'Osobný partner' },
                { title: 'Návrh ochrany', detail: 'Čo poistiť, čo ošetriť zmluvou či procesom.', output: 'Plán ochrany', who: '+ licencovaný partner' },
                { title: 'Nastavenie', detail: 'Poistenie, zmluvy, likvidita.', output: 'Nastavená ochrana', who: '+ advokát podľa potreby' },
                { title: 'Zastupovanie', detail: 'Pri poistnej udalosti a ročne.', output: 'Ročná revízia', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Search size={22} />, title: 'Identifikácia skrytých rizík', text: 'Medzery, ktoré nie sú na prvý pohľad viditeľné, ale v kríze rozhodujú.' },
                { icon: <ShieldCheck size={22} />, title: 'Zodpovednosť za škodu', text: 'Profesijná zodpovednosť lekára aj zodpovednosť prevádzky.' },
                { icon: <HeartPulse size={22} />, title: 'Výpadok vášho príjmu', text: 'Práceneschopnosť alebo úraz lekára – keď ambulancia stojí bez vás.' },
                { icon: <Wrench size={22} />, title: 'Majetok a prerušenie prevádzky', text: 'Prístroje, priestory a príjem pri poruche, požiari či vytopení.' },
                { icon: <LockKeyhole size={22} />, title: 'Údaje pacientov a GDPR', text: 'Ochrana dokumentácie, prístupov a postup pri úniku údajov.' },
                { icon: <Gavel size={22} />, title: 'Právna ochrana', text: 'Prevencia sporov s pacientmi, zamestnancami či dodávateľmi.' },
                { icon: <Droplets size={22} />, title: 'Likvidita', text: 'Kapitál dostupný presne vtedy, keď ho potrebujete, bez predaja investícií.' },
                { icon: <Handshake size={22} />, title: 'Zastupovanie pri poistnej udalosti', text: 'V režime plnej diskrétnosti, bez osobného vyjednávania.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Majiteľka ambulancie má prístroje na lízing, dvoch zamestnancov a poistenie z čias otvorenia. Pri revízii zistíme, že nekryje prerušenie prevádzky ani jej vlastný výpadok príjmu. Ochranu doplníme, nastavíme finančnú rezervu a pri prvej poistnej udalosti ju zastúpime my.',
            }}
            outputs={[
                'Mapa rizík a medzier v ochrane',
                'Plán ochrany zladený s majetkom',
                'Nastavená likvidita na krízové situácie',
                'Zastupovanie pri poistných udalostiach',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Oddelenie rizika praxe od rodinného majetku.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Právne služby', text: 'Zmluvy a prevencia sporov s advokátom.', href: '/sprava-a-ochrana-majetku/pravne-sluzby' },
                { label: 'Financovanie podnikania', text: 'Poistenie financovaných prístrojov.', href: '/business-partner/financovanie-podnikania' },
            ]}
            legal={`Poistenie sprostredkúva licencovaný partner. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Viete, čo by vašu ambulanciu zastavilo?',
                description: 'Prejdeme riziká vašej praxe a ukážeme, kde máte medzery – bez záväzku a bez predaja poistky na prvom stretnutí.',
            }}
        />
    );
}
