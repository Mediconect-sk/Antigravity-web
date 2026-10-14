'use client';

import PillarPage from '@/components/PillarPage';
import { BarChart3, Users, ClipboardList, CalendarClock, Receipt, Database, Workflow, LineChart } from 'lucide-react';
import { trail } from '@/lib/seo';

/**
 * Business partner → Efektívna a zisková ambulancia.
 * Obsah z architektúry značky (pilier Prevádzka a manažment: procesy, role,
 * personál, administratíva, mesačný prehľad čísel) a brožúry MyMedical
 * („Stabilná a predvídateľná ambulancia", „Databáza ako strategické aktívum").
 * Bez sľubov konkrétneho rastu tržieb.
 */
export default function EfektivnaContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/efektivna-a-ziskova-ambulancia')}
            badge="Business partner · Efektívna a zisková ambulancia"
            title="Ambulancia, ktorá funguje aj bez vás pri telefóne."
            subtitle="Procesy, tím, vyťaženie ordinačných hodín a čísla, ktorým rozumiete. Menej administratívy a výpadkov, viac času na pacientov – a stabilná ekonomika praxe."
            image={{ src: '/images/business-partner/efektivna-a-ziskova-ambulancia.webp', alt: 'Lekárky prechádzajú dokumentáciu pri recepcii ambulancie' }}
            intro={{
                heading: <>Stabilná a predvídateľná ambulancia <span className="text-gradient">namiesto hasenia požiarov.</span></>,
                text: 'Zisk ambulancie sa nerodí len z počtu pacientov, ale z toho, ako je prevádzka nastavená: kto čo robí, ako sa pacienti objednávajú, ako sú vyťažené ordinačné hodiny a prístroje a či viete, ktoré výkony a služby sa vám naozaj oplatia. Prevádzku zmapujeme, nastavíme procesy a role, odbremeníme tím od administratívy a raz mesačne spolu prejdeme kľúčové čísla.',
            }}
            audience={[
                ['Majiteľ zabehnutej ambulancie', 'Má plnú čakáreň, no výsledok tomu nezodpovedá.'],
                ['Lekár s rastúcim tímom', 'Potrebuje jasné role, náplne práce a zaškolenie.'],
                ['Ambulancia s drahými prístrojmi', 'Chce ich lepšie vyťažiť a poznať návratnosť.'],
            ]}
            steps={[
                { title: 'Audit prevádzky', detail: 'Procesy, tím, objednávanie, čísla.', output: 'Mapa prevádzky a slabých miest', who: 'Osobný partner, analytik' },
                { title: 'Plán zlepšení', detail: 'Čo hneď, čo neskôr, s akým dopadom.', output: 'Plán krokov', who: 'Osobný partner' },
                { title: 'Zavedenie', detail: 'Procesy, role, nástroje, zaškolenie.', output: 'Nastavená prevádzka', who: '+ tím ambulancie' },
                { title: 'Mesačný prehľad', detail: 'Kľúčové čísla a ďalšie kroky.', output: 'Pravidelná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <BarChart3 size={22} />, title: 'Ekonomika ambulancie', text: 'Náklady, príjmy, kapitácia, výkony a doplnkové služby v jednom prehľade.' },
                { icon: <Receipt size={22} />, title: 'Cenník a doplnkové služby', text: 'Ktoré výkony a služby sa oplatia a ako ich pacientom ponúknuť eticky.' },
                { icon: <CalendarClock size={22} />, title: 'Vyťaženie hodín a prístrojov', text: 'Riadenie toku pacientov namiesto pasívneho čakania.' },
                { icon: <Workflow size={22} />, title: 'Procesy a role', text: 'Kto čo robí – od recepcie po lekára, s jasnými náplňami práce.' },
                { icon: <Users size={22} />, title: 'Nábor a zaškolenie', text: 'Sestra a recepcia, ktoré vedia, čo majú robiť, aj keď nie ste pri nich.' },
                { icon: <ClipboardList size={22} />, title: 'Administratíva a GDPR', text: 'Menej papierovania a poriadok v dokumentácii a ochrane údajov.' },
                { icon: <Database size={22} />, title: 'Databáza pacientov ako aktívum', text: 'Z kartotéky aktívna databáza – aj vyššia hodnota praxe pri predaji.' },
                { icon: <LineChart size={22} />, title: 'Mesačný prehľad čísel', text: 'Kľúčové ukazovatele ambulancie zrozumiteľne, raz za mesiac.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Všeobecný lekár má plnú čakáreň, sestra trávi pol dňa pri telefóne a na konci mesiaca nevie, prečo výsledok nerastie. Zmapujeme prevádzku, presunieme objednávanie a pripomienky do online systému, nastavíme role a doplnkové služby a raz mesačne spolu prejdeme čísla.',
            }}
            outputs={[
                'Mapa prevádzky a slabých miest',
                'Jasné procesy, role a náplne práce',
                'Lepšie vyťaženie hodín a prístrojov',
                'Mesačný prehľad kľúčových čísel',
            ]}
            links={[
                { label: 'Automatizácie a AI', text: 'Objednávanie, pripomienky a komunikácia s pacientmi.', href: '/sluzby/crm-a-automatizacie' },
                { label: 'Healthcare marketing', text: 'Správni pacienti a práca s databázou.', href: '/sluzby' },
                { label: 'Správa podnikateľských rizík', text: 'Ochrana prevádzky, príjmu a údajov.', href: '/business-partner/sprava-podnikatelskych-rizik' },
            ]}
            cta={{
                title: 'Kde vaša ambulancia stráca čas a peniaze?',
                description: 'Prejdeme vašu prevádzku a čísla. Dostanete konkrétny plán, čo zmeniť ako prvé.',
            }}
        />
    );
}
