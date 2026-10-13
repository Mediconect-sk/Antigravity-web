'use client';

import PillarPage from '@/components/PillarPage';
import { Rocket, GraduationCap, MapPinned, PieChart, Megaphone, Scale } from 'lucide-react';
import { FINANCING_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';

/**
 * Business partner → Obchodné partnerstvo: sieť ambulancií Mediconect a program
 * Mediconect Štart (architektúra značky v3, časť 5). Parametre podielu a opcie
 * sa nastavujú individuálne s advokátom – na webe ich neuvádzame.
 */
export default function PartnerstvoContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/obchodne-partnerstvo')}
            badge="Business partner · Obchodné partnerstvo"
            title="Sieť ambulancií Mediconect. Partnerstvo, nie len služba."
            subtitle="Mentor zo siete, regionálna exkluzivita a v programe Mediconect Štart aj kapitálový vstup – vlastná ambulancia bez vlastného kapitálu na začiatku."
            image={{ src: '/images/business-partner/obchodne-partnerstvo.webp', alt: 'Dvaja zdravotníci konzultujú postup nad dokumentmi' }}
            intro={{
                heading: <>Spoločný záujem <span className="text-gradient">na úspechu ambulancie.</span></>,
                text: 'V programe Mediconect Štart vstupuje Mediconect alebo holding siete menšinovým podielom do ambulancie a lekár má opciu podiel neskôr odkúpiť. Ambulancia od začiatku čerpá marketing, prevádzku aj správu majetku a skúsený lekár zo siete jej je mentorom. Podmienky podielu a opcie sa dohodnú individuálne v zmluve s advokátom.',
            }}
            audience={[
                ['Lekár po atestácii', 'Chce vlastnú prax, no nemá kapitál na rozbeh.'],
                ['Skúsený lekár', 'Chce odovzdávať skúsenosti ako mentor ďalším lekárom.'],
                ['Majiteľ ambulancie', 'Hľadá partnera pre rast a regionálnu exkluzivitu.'],
            ]}
            steps={[
                { title: 'Úvodný rozhovor', detail: 'Odbornosť, región a vaše ambície.', output: 'Posúdenie vhodnosti', who: 'Osobný partner' },
                { title: 'Biznis plán a štruktúra', detail: 'Lokalita, rozpočet, podiel a opcia.', output: 'Návrh partnerstva', who: 'Partner, analytik' },
                { title: 'Zmluva', detail: 'Práva, povinnosti a podmienky opcie.', output: 'Podpísaná zmluva', who: '+ advokát, daňový poradca' },
                { title: 'Rozbeh a mentoring', detail: 'Marketing, prevádzka, komunita.', output: 'Ambulancia v sieti Mediconect', who: '+ mentor zo siete' },
            ]}
            services={[
                { icon: <Rocket size={22} />, title: 'Program Mediconect Štart', text: 'Biznis plán, lokalita a financovanie vybavenia pre lekárov po atestácii.' },
                { icon: <PieChart size={22} />, title: 'Kapitálový podiel s opciou', text: 'Menšinový vstup do ambulancie, lekár môže podiel neskôr odkúpiť.' },
                { icon: <GraduationCap size={22} />, title: 'Mentor zo siete', text: 'Skúsený lekár, ktorý vlastnú prax už vybudoval.' },
                { icon: <MapPinned size={22} />, title: 'Regionálna exkluzivita', text: 'V sieti si ambulancie v rovnakej odbornosti a regióne nekonkurujú.' },
                { icon: <Megaphone size={22} />, title: 'Marketing a prevádzka od prvého dňa', text: 'Web, viditeľnosť, objednávanie a procesy zo siete.' },
                { icon: <Scale size={22} />, title: 'Partneri pre dane a zmluvy', text: 'Advokáti a daňoví poradcovia pre holding, zmluvy a štruktúru.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Kardiologička po atestácii chce vlastnú ambulanciu v regióne, kde v sieti ešte nikto s jej odbornosťou nepôsobí. V programe Mediconect Štart pripravíme biznis plán a financovanie vybavenia, Mediconect vstúpi menšinovým podielom a skúsený lekár zo siete je jej mentorom. Podiel môže neskôr odkúpiť.',
            }}
            outputs={[
                'Návrh partnerstva s podielom a opciou',
                'Zmluva pripravená s advokátom',
                'Mentor zo siete Mediconect',
                'Regionálna exkluzivita v odbornosti',
            ]}
            links={[
                { label: 'Štart vlastnej ambulancie', text: 'Povolenia, zmluvy a otvorenie ambulancie.', href: '/business-partner/start-vlastnej-ambulancie' },
                { label: 'Financovanie podnikania', text: 'Úver, lízing alebo prenájom prístrojov.', href: '/business-partner/financovanie-podnikania' },
                { label: 'MyMedical', text: 'Členský program a komunita lekárov.', href: MYMEDICAL.url, external: true },
            ]}
            legal={`Podmienky kapitálového podielu a opcie sa dohodnú individuálne v zmluve. ${FINANCING_DISCLOSURE}`}
            cta={{
                title: 'Hľadáte partnera, nie dodávateľa?',
                description: 'Porozprávajme sa o vašej odbornosti, regióne a o tom, či je pre vás program Mediconect Štart vhodný.',
            }}
        />
    );
}
