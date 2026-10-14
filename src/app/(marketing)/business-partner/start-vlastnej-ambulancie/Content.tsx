'use client';

import PillarPage from '@/components/PillarPage';
import FlowDiagram from '@/components/FlowDiagram';
import {
    MapPin, FileSpreadsheet, Building2, Landmark, HeartHandshake, Users,
    MessagesSquare, Wallet, DoorOpen,
} from 'lucide-react';
import { trail } from '@/lib/seo';

/** Business partner → Štart vlastnej ambulancie (architektúra značky v3, pilier 1). */
export default function StartContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/start-vlastnej-ambulancie')}
            badge="Business partner · Štart vlastnej ambulancie"
            title="Vlastná ambulancia od rozhodnutia po prvého pacienta."
            subtitle="Lokalita, biznis plán, povolenia, zmluvy s poisťovňami aj vybavenie. Koordináciu preberáme my, vy rozhodujete."
            image={{ src: '/images/business-partner/start-vlastnej-ambulancie.webp', alt: 'Kľúč vo dverách – otvárate vlastnú ambulanciu' }}
            intro={{
                heading: <>Desiatky krokov a úradov. <span className="text-gradient">Jeden harmonogram.</span></>,
                text: 'Otvorenie ambulancie väčšinou beží popri plnom úväzku. Zosúladíme termíny povolenia VÚC, zmlúv so zdravotnými poisťovňami, priestorov a vybavenia tak, aby bola ambulancia pripravená v deň otvorenia – a aby ju pacienti od prvého dňa našli a vedeli sa objednať.',
            }}
            audience={[
                ['Lekár po atestácii', 'Chce vlastnú prax a nevie, kde začať.'],
                ['Zamestnaný lekár', 'Zvažuje prechod z nemocnice do súkromnej praxe.'],
                ['Majiteľ ambulancie', 'Otvára ďalšie pracovisko alebo novú odbornosť.'],
            ]}
            steps={[
                { title: 'Úvodný rozhovor', detail: 'Odbornosť, región, termín a rozpočet.', output: 'Zadanie a rozpočet', who: 'Osobný partner' },
                { title: 'Lokalita a biznis plán', detail: 'Spádová oblasť, konkurencia, návratnosť.', output: 'Biznis plán s bodom zvratu', who: 'Partner, analytik' },
                { title: 'Povolenia a zmluvy', detail: 'Povolenie VÚC, priestory, zdravotné poisťovne.', output: 'Harmonogram termínov', who: '+ advokát' },
                { title: 'Otvorenie', detail: 'Financovanie vybavenia a priestorov, web, objednávanie pacientov.', output: 'Ambulancia pripravená na 1. deň', who: '+ marketing a prevádzka' },
            ]}
            services={[
                { icon: <MapPin size={22} />, title: 'Lokalita a spádová oblasť', text: 'Kde je dopyt po vašej odbornosti, aká je konkurencia a dostupnosť pre pacientov.' },
                { icon: <FileSpreadsheet size={22} />, title: 'Biznis plán', text: 'Rozpočet, náklady prevádzky, očakávané príjmy a bod zvratu.' },
                { icon: <Building2 size={22} />, title: 'Priestory a vybavenie', text: 'Požiadavky na priestory, povinné vybavenie, dodávatelia a porovnanie ponúk.' },
                { icon: <Landmark size={22} />, title: 'Povolenie VÚC', text: 'Posúdenie priestorov a príprava žiadosti o povolenie na prevádzkovanie ambulancie.' },
                { icon: <HeartHandshake size={22} />, title: 'Zmluvy so zdravotnými poisťovňami', text: 'Podklady a termíny tak, aby zmluvy platili od otvorenia.' },
                { icon: <Users size={22} />, title: 'Prví pacienti', text: 'Web, profil na Google a online objednávanie pripravené ešte pred otvorením. Nábor nových pacientov a rast kapitačného kmeňa od prvých mesiacov.' },
            ]}
            extra={
                <FlowDiagram
                    eyebrow="Cesta k otvoreniu"
                    title={<>Od rozhodnutia <span className="text-gradient">po prvého pacienta</span></>}
                    text="Termíny povolení, zmlúv a financovania zosúladíme tak, aby ambulancia bola pripravená v deň otvorenia – a vy ste popri úväzku nemuseli behať po úradoch."
                    steps={[
                        { icon: <MessagesSquare size={26} />, title: 'Úvodný rozhovor', text: 'Odbornosť, región, termín a rozpočet.' },
                        { icon: <FileSpreadsheet size={26} />, title: 'Biznis plán', text: 'Lokalita, spádová oblasť, bod zvratu.' },
                        { icon: <Landmark size={26} />, title: 'Povolenie VÚC', text: 'Posúdenie priestorov a žiadosť o povolenie.' },
                        { icon: <HeartHandshake size={26} />, title: 'Zmluvy so ZP', text: 'Zmluvy so zdravotnými poisťovňami.' },
                        { icon: <Wallet size={26} />, title: 'Financovanie', text: 'Úver, lízing alebo prenájom vybavenia.' },
                        { icon: <DoorOpen size={26} />, title: 'Otvorenie', text: 'Web, objednávanie a prví pacienti od prvého dňa.' },
                    ]}
                />
            }
            example={{
                label: 'Modelová situácia',
                text: 'Internistka po atestácii chce ambulanciu v okresnom meste, kde pracuje v nemocnici. Termíny povolení a zmlúv zosúladíme s jej výpovednou lehotou, financovanie prístrojov pripravíme vopred a od prvého dňa beží objednávanie aj lokálna viditeľnosť.',
            }}
            outputs={[
                'Biznis plán s rozpočtom a bodom zvratu',
                'Harmonogram povolení a zmlúv',
                'Vybavenie a overení dodávatelia',
                'Ambulancia pripravená na prvých pacientov',
            ]}
            links={[
                { label: 'Financovanie podnikania', text: 'Úver, lízing alebo prenájom prístrojov.', href: '/business-partner/financovanie-podnikania' },
                { label: 'Obchodné partnerstvo', text: 'Program Mediconect Štart a sieť ambulancií.', href: '/business-partner/obchodne-partnerstvo' },
                { label: 'Healthcare marketing', text: 'Prví pacienti od otvorenia – web, Google, kampane.', href: '/sluzby' },
                { label: 'Automatizácie a AI', text: 'Objednávanie a komunikácia s pacientmi od prvého dňa.', href: '/sluzby/crm-a-automatizacie' },
            ]}
            cta={{
                title: 'Prvý krok je rozhovor.',
                description: 'Bezplatne prejdeme vašu situáciu a priority. Potom dostanete konkrétny postup, rozpočet a harmonogram.',
            }}
        />
    );
}
