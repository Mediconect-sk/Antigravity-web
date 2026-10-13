'use client';

import PillarPage from '@/components/PillarPage';
import PartnerDiagram from '@/components/PartnerDiagram';
import FlowDiagram from '@/components/FlowDiagram';
import { MessagesSquare, FileSpreadsheet, Landmark, HeartHandshake, Wallet, DoorOpen } from 'lucide-react';
import { FINANCING_DISCLOSURE, MYMEDICAL, trail } from '@/lib/seo';

/**
 * Business partner – pilier 01 Založenie a rast (brožúra v5, strana 6).
 * Pre lekárov, ktorí zakladajú, rozvíjajú alebo odovzdávajú vlastnú prax.
 */
export default function BusinessPartnerContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner')}
            lead={<PartnerDiagram />}
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
            badge="Pilier 01 · Založenie a rast"
            title="Vaša ambulancia od prvého dňa na pevných základoch."
            subtitle="Business partner pre lekárov, ktorí zakladajú, rozvíjajú alebo odovzdávajú vlastnú prax. Koordináciu preberáme my, vy rozhodujete."
            intro={{
                heading: <>Desiatky krokov, úradov a lehôt. <span className="text-gradient">Jeden partner.</span></>,
                text: 'Otvorenie ambulancie má desiatky krokov, úradov a lehôt – a väčšinou beží popri plnom úväzku. Prevezmeme koordináciu od biznis plánu cez povolenia a zmluvy s poisťovňami až po financovanie vybavenia, aby ste sa mohli sústrediť na medicínu a na rozhodnutia, ktoré patria vám.',
            }}
            audience={[
                ['Lekár po atestácii', 'Chce vlastnú prax a nevie, kde začať.'],
                ['Zamestnaný lekár', 'Zvažuje prechod z nemocnice do súkromnej praxe.'],
                ['Lekár pred dôchodkom', 'Hľadá nástupcu a férovú cenu za svoju prax.'],
            ]}
            steps={[
                { title: 'Úvodný rozhovor', detail: 'Odbornosť, región, termín.', output: 'Zadanie a rozpočet', who: 'Osobný partner' },
                { title: 'Biznis plán', detail: 'Lokalita, rozpočet, návratnosť.', output: 'Plán s bodom zvratu', who: 'Partner, analytik' },
                { title: 'Harmonogram', detail: 'Povolenia, zdravotné poisťovne, financie.', output: 'Plán termínov', who: '+ banka, lízing, advokát' },
                { title: 'Otvorenie', detail: 'Web, objednávanie pacientov.', output: 'Ambulancia pripravená na 1. deň', who: '+ marketing a prevádzka' },
            ]}
            services={[
                { title: 'Lokalita a biznis plán', text: 'Spádová oblasť, konkurencia, rozpočet a bod zvratu.' },
                { title: 'Povolenia a zmluvy', text: 'Povolenie VÚC, posúdenie priestorov, zmluvy so zdravotnými poisťovňami.' },
                { title: 'Priestory a vybavenie', text: 'Povinné vybavenie, dodávatelia, porovnanie ponúk.' },
                { title: 'Financovanie vybavenia', text: 'Úver, lízing alebo prenájom – porovnanie a sprostredkovanie.' },
                { title: 'Generačná výmena', text: 'Ocenenie praxe, nástupca, prevod zmlúv a pacientov.' },
                { title: 'Sieť a program Štart', text: 'Mentor zo siete, regionálna exkluzivita, podiel s opciou.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Internistka po atestácii chce ambulanciu v okresnom meste, kde pracuje v nemocnici. Termíny povolení a zmlúv zosúladíme s jej výpovednou lehotou, financovanie prístrojov pripravíme vopred a od prvého dňa beží objednávanie aj lokálna viditeľnosť. V programe Štart má mentora zo siete.',
            }}
            outputs={[
                'Biznis plán s rozpočtom a návratnosťou',
                'Harmonogram povolení a zmlúv',
                'Porovnané a sprostredkované financovanie',
                'Ambulancia pripravená na prvých pacientov',
            ]}
            links={[
                { label: 'Healthcare marketing', text: 'Prví pacienti od otvorenia – web, Google, kampane.', href: '/sluzby' },
                { label: 'Automatizácie a AI', text: 'Objednávanie, pripomienky a komunikácia s pacientmi od prvého dňa.', href: '/sluzby/crm-a-automatizacie' },
                { label: 'Správa a ochrana majetku', text: 'Holding a ochrana rodinného majetku od začiatku.', href: '/sprava-a-ochrana-majetku' },
                { label: 'MyMedical', text: 'Osobný partner a komunita lekárov.', href: MYMEDICAL.url, external: true },
            ]}
            legal={FINANCING_DISCLOSURE}
            cta={{
                title: 'Prvý krok je rozhovor.',
                description: 'Bezplatne prejdeme vašu situáciu a priority. Potom dostanete konkrétny postup, rozpočet a harmonogram.',
            }}
        />
    );
}
