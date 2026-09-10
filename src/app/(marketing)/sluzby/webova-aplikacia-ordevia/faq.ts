import type { FaqItem } from "@/lib/seo";

/**
 * Otázky a odpovede o aplikácii Ordevia. Rovnaké dáta používa vizuálna sekcia
 * v Content.tsx aj FAQPage schema v page.tsx, takže sa nemôžu rozísť.
 *
 * Samostatný súbor (nie export z Content.tsx) je nutný: export z modulu
 * označeného 'use client' je v server componente len klientska referencia,
 * nie reálne pole – page.tsx by ho nevedel prejsť.
 */
export const ORDEVIA_FAQ: FaqItem[] = [
    {
        question: "Čo je Ordevia Connect?",
        answer:
            "Ordevia Connect je webová aplikácia pre pacientov kliník a ambulancií. Pacient v nej má na jednom bezpečnom mieste svoje termíny, pokyny pred vyšetrením a komunikáciu s klinikou. Beží v prehliadači na adrese moja.ordevia.sk, nič sa neinštaluje.",
    },
    {
        question: "Ako sa pacient do aplikácie prihlási?",
        answer:
            "Na stránke moja.ordevia.sk/prihlasenie cez Google účet alebo e-mail. Pacient, ktorého pozvala klinika, použije aktivačný kód, ktorý od nej dostal.",
    },
    {
        question: "Potrebuje pacient aktivačný kód?",
        answer:
            "Pacient pozvaný klinikou dostane aktivačný kód. Po sprístupnení registrácie si nový pacient môže vytvoriť účet aj cez Google a objednať sa bez kódu.",
    },
    {
        question: "Ako je to s bezpečnosťou prihlasovacích údajov?",
        answer:
            "Prihlásenie bezpečne spracúva Supabase Auth. Ordevia prihlasovacie údaje pacientov neukladá ani nezobrazuje.",
    },
    {
        question: "Čo pre nás Mediconect pri nasadení urobí?",
        answer:
            "Aplikáciu nastavíme pre vašu prax, pripravíme pozvánky pre pacientov a pomôžeme s komunikáciou, vďaka ktorej ju pacienti začnú reálne používať. Postup aj cenu prejdeme na bezplatnej konzultácii.",
    },
];
