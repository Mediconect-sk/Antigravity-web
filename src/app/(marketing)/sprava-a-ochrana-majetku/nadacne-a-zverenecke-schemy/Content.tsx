'use client';

import PillarPage from '@/components/PillarPage';
import { Search, Globe2, ScrollText, Users, Network, HeartHandshake } from 'lucide-react';
import { FINANCE_DISCLOSURE, trail } from '@/lib/seo';

/**
 * Správa majetku → Nadačné a zverenecké schémy.
 * Bez tvrdení o konkrétnej právnej úprave – vhodnosť a prípustnosť formy posudzuje advokát.
 */
export default function NadacieContent() {
    return (
        <PillarPage
            breadcrumbs={trail('/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy')}
            badge="Správa a ochrana majetku · Nadačné a zverenecké schémy"
            title="Majetok, ktorý sa nedelí, ale prechádza ďalej."
            subtitle="Nadácie, zverenecké a nadačné fondy aj zahraničné alternatívy – pre ochranu rodinného majetku a jeho prenos na ďalšie generácie."
            image={{ src: '/images/sprava-majetku/nadacne-a-zverenecke-schemy.webp', alt: 'Rodina s deťmi v objatí pri západe slnka' }}
            intro={{
                heading: <>Pravidlá pre rodinný majetok <span className="text-gradient">na generácie dopredu.</span></>,
                text: 'Keď majetok presahuje jednu generáciu, nestačí závet. Nadačné a zverenecké schémy umožňujú určiť, kto a za akých pravidiel majetok spravuje a kto z neho má úžitok – aby sa nedelil, ale chránil. Ktorá forma je pre vás vhodná a prípustná, vždy posúdi advokát; my koordinujeme celý postup aj prepojenie s ostatným majetkom.',
            }}
            audience={[
                ['Lekár s rodinným majetkom', 'Chce ho udržať pohromade aj po sebe.'],
                ['Majiteľ ambulancie a nehnuteľností', 'Rieši, kto bude majetok spravovať.'],
                ['Lekár s filantropickým zámerom', 'Chce časť majetku venovať verejnoprospešnému účelu.'],
            ]}
            steps={[
                { title: 'Ciele rodiny', detail: 'Kto, čo, kedy a za akých pravidiel.', output: 'Zadanie', who: 'Osobný partner' },
                { title: 'Posúdenie foriem', detail: 'Domáce aj zahraničné možnosti.', output: 'Porovnanie riešení', who: '+ advokát, daňový poradca' },
                { title: 'Nastavenie', detail: 'Štatút, správa, oprávnené osoby.', output: 'Založená schéma', who: '+ advokát' },
                { title: 'Správa a revízia', detail: 'Majetok, pravidlá, zmeny v rodine.', output: 'Pravidelná kontrola', who: 'Osobný partner' },
            ]}
            services={[
                { icon: <Search size={22} />, title: 'Posúdenie vhodných foriem', text: 'Nadácia, zverenecký či nadačný fond – čo zodpovedá vašim cieľom.' },
                { icon: <Globe2 size={22} />, title: 'Zahraničné alternatívy', text: 'S overenými partnermi, ak domáce možnosti nestačia.' },
                { icon: <ScrollText size={22} />, title: 'Štatút a pravidlá', text: 'Kto majetok spravuje, kto z neho má úžitok a za akých podmienok.' },
                { icon: <Users size={22} />, title: 'Dedičské plánovanie', text: 'Prenos majetku bez fragmentácie a sporov.' },
                { icon: <Network size={22} />, title: 'Prepojenie s holdingom', text: 'Ako schéma vlastní podiely, nehnuteľnosti a investície.' },
                { icon: <HeartHandshake size={22} />, title: 'Verejnoprospešný účel', text: 'Ak chcete časť majetku venovať zmysluplnej veci.' },
            ]}
            example={{
                label: 'Modelová situácia',
                text: 'Lekár vlastní ambulanciu, priestory a investície a má tri deti s rôznymi plánmi. S advokátom porovnáme možné schémy a nastavíme pravidlá: kto majetok spravuje, kto z neho má úžitok a ako sa ambulancia odovzdá – aby sa majetok po ňom nerozdelil.',
            }}
            outputs={[
                'Porovnanie vhodných foriem',
                'Pravidlá správy a úžitku pre rodinu',
                'Založená schéma s advokátom',
                'Prepojenie s holdingom a dedičským plánom',
            ]}
            links={[
                { label: 'Holdingová štruktúra', text: 'Oddelenie rizika praxe od majetku.', href: '/sprava-a-ochrana-majetku/holdingova-struktura' },
                { label: 'Právne služby', text: 'Štatúty, zmluvy a dedičské plánovanie.', href: '/sprava-a-ochrana-majetku/pravne-sluzby' },
                { label: 'Efektívna správa daní', text: 'Daňové dopady prenosu majetku.', href: '/sprava-a-ochrana-majetku/danove-poradenstvo' },
            ]}
            legal={`Vhodnosť a prípustnosť konkrétnej schémy posudzuje advokát, daňové dopady daňový poradca. ${FINANCE_DISCLOSURE}`}
            cta={{
                title: 'Plánujete majetok na generácie?',
                description: 'Porozprávajme sa o vašej rodine a cieľoch – diskrétne a bez záväzku.',
            }}
        />
    );
}
