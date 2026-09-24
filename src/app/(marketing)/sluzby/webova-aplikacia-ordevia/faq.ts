import type { FaqItem } from "@/lib/seo";

/**
 * Otázky a odpovede o Ordevia Connect. Rovnaké dáta používa vizuálna sekcia
 * v Content.tsx aj FAQPage schema v page.tsx, takže sa nemôžu rozísť.
 *
 * Samostatný súbor (nie export z Content.tsx) je nutný: export z modulu
 * označeného 'use client' je v server componente len klientska referencia,
 * nie reálne pole – page.tsx by ho nevedel prejsť.
 *
 * Každé tvrdenie musí platiť pre nasadenú verziu – pravidlá v ORDEVIA.md.
 */
export const ORDEVIA_FAQ: FaqItem[] = [
    {
        question: "Čo je Ordevia Connect?",
        answer:
            "Ordevia Connect je digitálny systém pre kliniky a ambulancie od spoločnosti Mediconect. Spája online objednávanie, aplikáciu pre pacientov a CRM pre tím kliniky. Pacient má termíny, prípravu na vyšetrenie a komunikáciu s klinikou na jednom bezpečnom mieste, tím vidí rezervácie a požiadavky pacientov v jednom prehľade.",
    },
    {
        question: "Musí si pacient pred objednaním založiť účet?",
        answer:
            "Nie. Pacient si vyberie dôvod návštevy alebo službu, termín a vyplní len údaje potrebné na rezerváciu. Potvrdenie dostane e-mailom spolu s odkazom na zmenu či zrušenie termínu a pozvánkou do kalendára. Aplikáciu Ordevia Connect si môže aktivovať až potom, keď vie, načo mu bude.",
    },
    {
        question: "Musí si pacient niečo inštalovať?",
        answer:
            "Nie. Ordevia Connect funguje v prehliadači na mobile aj v počítači na adrese moja.ordevia.sk. Na mobile si ju pacient môže pridať na plochu a otvárať ako bežnú aplikáciu.",
    },
    {
        question: "Ako sa pacient do aplikácie prihlási?",
        answer:
            "Cez Google účet, e-mailom a heslom alebo jednorazovým kódom, ktorý mu príde e-mailom. Pacient, ktorého pozvala klinika, môže použiť aj aktivačný kód od kliniky. Prihlasovanie zabezpečuje Supabase Auth.",
    },
    {
        question: "Kde sú uložené údaje?",
        answer:
            "Databáza aj aplikácia bežia v dátovom centre vo Frankfurte v Európskej únii. Súhlasy s marketingovou komunikáciou má pacient vo svojom profile a môže ich kedykoľvek odvolať.",
    },
    {
        question: "Môže pacient cez aplikáciu riešiť akútne zdravotné problémy?",
        answer:
            "Nie. Správy v aplikácii slúžia na organizačné veci – termíny, prípravu a požiadavky na kliniku. Nie sú určené na akútne stavy; v naliehavých prípadoch treba volať 155 alebo 112. Klinické rozhodnutia zostávajú vždy na lekárovi.",
    },
    {
        question: "Dá sa Ordevia vyskúšať pred rozhodnutím?",
        answer:
            "Áno. Na demo.ordevia.sk si môžete vyžiadať prístup do ukážky s fiktívnou klinikou a vymyslenými údajmi. Pri zavádzaní potom začíname jedným pracoviskom alebo službou, dohodnuté ukazovatele spolu odmeriame a rozsah rozširujeme podľa výsledku.",
    },
    {
        question: "Čo pre nás Mediconect pri nasadení urobí?",
        answer:
            "Nastavíme Ordeviu podľa toho, ako vaša klinika funguje – služby, termíny a pokyny pre pacientov. Pripravíme pozvanie pacientov a komunikáciu, vďaka ktorej aplikáciu naozaj začnú používať. Keďže sme marketingová agentúra pre zdravotníctvo, vieme s Ordeviou prepojiť aj kampane a ich výsledky vyhodnocovať v reportoch CRM.",
    },
];
