'use client';

import PillarPage from '@/components/PillarPage';
import { Calculator, UserSearch, FileSignature, Landmark, MessagesSquare, PiggyBank } from 'lucide-react';
import { trail } from '@/lib/seo';

/** Business partner → Predaj kmeňa a praxe (generačná výmena praxe). */
export default function PredajContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/business-partner/predaj-kmena-a-praxe')}
            badge="Business partner · Predaj kmeňa a praxe"
            title="Odovzdanie praxe s rešpektom k pacientom aj k vašej práci."
            subtitle="Ocenenie ambulancie, nájdenie nástupcu, prevod zmlúv a prevádzky – aby pacienti zostali v dobrých rukách a vy ste dostali férovú hodnotu."
            image={{ src: '/images/business-partner/predaj-kmena-a-praxe.webp', alt: 'Skúsený lekár v pracovni svojej ambulancie' }}
            intro={{
                heading: <>Kmeň pacientov je výsledok <span className="text-gradient">rokov práce.</span></>,
                text: 'Hodnotu praxe tvoria pacienti, zmluvy so zdravotnými poisťovňami, personál, prístroje aj reputácia. Pomôžeme ju oceniť, nájsť nástupcu – aj spomedzi lekárov v sieti Mediconect – a s advokátom zvoliť formu prevodu: predaj prevádzky alebo podielu v spoločnosti. Pacienti si lekára vyberajú sami, preto odovzdanie pripravíme tak, aby k nástupcovi prechádzali s dôverou.',
            }}
            audience={[
                ['Lekár pred dôchodkom', 'Hľadá nástupcu a férovú cenu za svoju prax.'],
                ['Lekár, ktorý mení smer', 'Odchádza do inej odbornosti, nemocnice alebo zahraničia.'],
                ['Rodina lekára', 'Rieši pokračovanie praxe pri odchode z prevádzky.'],
            ]}
            steps={[
                { title: 'Ocenenie', detail: 'Pacienti, zmluvy, prístroje, reputácia.', output: 'Odhad hodnoty praxe', who: 'Partner, analytik' },
                { title: 'Nástupca', detail: 'Vyhľadanie a výber, aj zo siete.', output: 'Vhodný kandidát', who: 'Osobný partner' },
                { title: 'Prevod', detail: 'Prevádzka alebo podiel, zmluvy, povolenie.', output: 'Zmluva o prevode', who: '+ advokát, daňový poradca' },
                { title: 'Odovzdanie pacientom', detail: 'Komunikácia a zaúčanie nástupcu.', output: 'Pacienti pokračujú u nástupcu', who: '+ marketing' },
            ]}
            services={[
                { icon: <Calculator size={22} />, title: 'Ocenenie ambulancie', text: 'Kmeň pacientov, zmluvy, vybavenie a reputácia v jednom prehľade.' },
                { icon: <UserSearch size={22} />, title: 'Hľadanie nástupcu', text: 'Diskrétne oslovenie vhodných lekárov, aj zo siete Mediconect.' },
                { icon: <FileSignature size={22} />, title: 'Forma prevodu a zmluvy', text: 'Predaj prevádzky alebo podielu – vždy s advokátom.' },
                { icon: <Landmark size={22} />, title: 'Povolenie a zdravotné poisťovne', text: 'Termíny tak, aby ambulancia fungovala bez prerušenia.' },
                { icon: <MessagesSquare size={22} />, title: 'Komunikácia s pacientmi', text: 'Včasné a citlivé vysvetlenie zmeny, predstavenie nástupcu.' },
                { icon: <PiggyBank size={22} />, title: 'Daňové a majetkové dopady', text: 'Výnos z predaja v pláne renty, s daňovým poradcom.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Všeobecná lekárka plánuje o dva roky odísť do dôchodku. Pripravíme ocenenie praxe, nájdeme nástupcu, ktorý s ňou istý čas spolupracuje, a pacientom zmenu včas a citlivo vysvetlíme. Výnos z predaja zapadne do jej plánu renty.',
            }}
            outputs={[
                'Odhad hodnoty praxe',
                'Overený nástupca',
                'Zmluva o prevode pripravená s advokátom',
                'Pacienti informovaní a odovzdaní nástupcovi',
            ]}
            links={[
                { label: 'Správa a ochrana majetku', text: 'Renta, holding a plán odchodu z praxe.', href: '/sprava-a-ochrana-majetku' },
                { label: 'Obchodné partnerstvo', text: 'Nástupcovia zo siete ambulancií Mediconect.', href: '/business-partner/obchodne-partnerstvo' },
                { label: 'Financovanie podnikania', text: 'Financovanie prevzatia pre nástupcu.', href: '/business-partner/financovanie-podnikania' },
            ]}
            cta={{
                title: 'Odovzdanie praxe sa oplatí plánovať včas.',
                description: 'Prejdeme váš časový horizont, hodnotu praxe a možnosti nástupníctva – diskrétne a bez záväzku.',
            }}
        />
    );
}
