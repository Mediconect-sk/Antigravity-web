'use client';

import PillarPage from '@/components/PillarPage';
import { CreditCard, Stethoscope, ClipboardCheck, Wallet } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Business partner → Financovanie liečby pre pacientov.
 * Koncepcia a texty schválené Viktorom 29. 10. 2026. Partner MyLife / UNIVERSAL potvrdil krytie
 * financovania liečby pre zdravotnícke zariadenia; online vybavenie do 24 hodín potvrdené.
 * Systém nerozhoduje o schválení – rozhodnutie patrí finančnému partnerovi s licenciou.
 */
export default function FinancovanieLiecbyContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/financovanie-liecby')}
            badge="Business partner · Financovanie liečby"
            title="Financovanie liečby, ktorú si pacient nemôže hneď zaplatiť."
            subtitle="Pacient dostane riešenie. Klinika dostane pacienta. Celý proces zabezpečíme my – vrátane online vybavenia do 24 hodín."
            image={{ src: '/images/business-partner/financovanie-podnikania.webp', alt: 'Riešenie financovania na pracovisku' }}
            intro={{
                heading: <>Pacient chce liečbu. <span className="text-gradient">Nemá celú sumu naraz.</span></>,
                text: 'Mnohí pacienti by si nákladnú liečbu radi dopriali, ale nemajú k dispozícii celú sumu. Ak sa im nepomôže, odídu ku konkurencii, alebo liečbu neurobia vôbec. Pomôžeme vašej klinike tomuto pacientovi dostať riešenie, ktoré mu umožní začať liečbu hneď. Vaša klinika sa o nič nemusí starať.',
            }}
            audience={[
                ['Zubné a implantologické ambulancie', 'Drahé výkony, ktoré pacient rieši až po čiastkach.'],
                ['Estetické a plastické kliniky', 'Liečba, ktorú pacient plánuje, ale financuje ju postupne.'],
                ['Prevádzky s drahými prístrojmi', 'Potrebujú technológiu, ale nechcú ju kupovať z vlastných zdrojov.'],
            ]}
            steps={[
                { title: 'Ponuku predstavíte pacientovi', detail: 'Ako súčasť konzultácie alebo plánu liečby.', output: 'Informovaný pacient', who: 'Klinika' },
                { title: 'Žiadosť online', detail: 'Pacient vyplní žiadosť sám alebo s pomocou poradcu.', output: 'Kompletná žiadosť', who: 'Pacient + poradca' },
                { title: 'Posúdenie partnerom', detail: 'Rozhodnutie o schválení prislúcha finančnému partnerovi s licenciou.', output: 'Rozhodnutie partnera', who: 'MyLife / UNIVERSAL' },
                { title: 'Vybavenie a platba', detail: 'Podpisy, dokumenty a výplata sumy klinike. Online do 24 hodín.', output: 'Liečba môže začať', who: 'My + klinika' },
            ]}
            services={[
                { icon: <Stethoscope size={22} />, title: 'Financovanie liečby pre pacienta', text: 'Riešenie na celú sumu liečby. Klinika dostane platbu po schválení a pacient ju splácava partnerovi podľa zmluvy.' },
                { icon: <CreditCard size={22} />, title: 'Financovanie prístrojov', text: 'Nákup technológie pre prax. Prístroj pracuje pre vašu ambulanciu a splácate ho z jeho výnosov.' },
                { icon: <ClipboardCheck size={22} />, title: 'Kompletný proces', text: 'Administratívu, dokumenty a komunikáciu s partnerom vybavíme my. Vaša klinika má jedného kontaktného človeka.' },
                { icon: <Wallet size={22} />, title: 'Vybavenie do 24 hodín', text: 'Online riešenie žiadostí do 24 hodín od ich prijatia.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Zubná ambulancia navrhne pacientovi implantáty za sumu, ktorú naraz nezaplatí. Pacient dostane žiadosť, partner ju posúdi a do 24 hodín je riešenie vybavené. Klinika dostane platbu a liečba môže začať. O administratívu sa klinika nestará.',
            }}
            outputs={[
                'Riešenie financovania pre pacienta alebo prístroj',
                'Jeden kontaktný človek pre celý proces',
                'Online vybavenie žiadosti do 24 hodín',
                'Bez vlastného financovacieho oddelenia',
            ]}
            links={[
                { label: 'Financovanie podnikania', text: 'Financovanie investícií a rozvoja praxe.', href: '/business-partner/financovanie-podnikania' },
                { label: 'Efektívna a zisková ambulancia', text: 'Procesy, tím a stabilná ekonomika praxe.', href: '/business-partner/efektivna-a-ziskova-ambulancia' },
                { label: 'Správa podnikateľských rizík', text: 'Ochrana ambulancie, ktorá zafunguje.', href: '/business-partner/sprava-podnikatelskych-rizik' },
            ]}
            legal={`Financovanie nie je zaručené. Schválenie závisí od posúdenia finančného partnera a jeho podmienok. Údaje o zdravotnom stave spracúvame len v rozsahu nevyhnutnom na vybavenie žiadosti. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Ukážeme vám, ako by to fungovalo vo vašej ambulancii.',
                description: 'Ozvite sa nám na konzultáciu. Prejdeme vaše výkony, prístroje a pacientov, ktorým dnes liečbu nemôžete ponúknuť.',
            }}
        />
    );
}
