/**
 * Zdroj pravdy pre často kladené otázky na domovskej stránke.
 *
 * Rovnaké dáta používa vizuálny accordion (HomeContent) aj FAQPage structured
 * data v page.tsx – vďaka tomu sa schéma nikdy nerozíde s tým, čo vidí návštevník.
 * V texte odrážok označuje **hviezdičkový** zápis zvýraznenie.
 */

export type FaqItemData = {
    question: string;
    answer?: string;
    bullets?: string[];
};

export const FAQ_CATEGORIES = ["spolupráca", "výsledky", "bezpečnosť"] as const;
export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQ_GROUPS: Record<FaqCategory, FaqItemData[]> = {
    "spolupráca": [
        {
            question: "Koľko môjho času si bude vyžadovať správa marketingu?",
            answer:
                "Po úvodnom nastavení stratégie preberáme operatívu (kampane, obsah, reporting aj optimalizáciu). Od vás potrebujeme len občasné schválenie kľúčových materiálov a spätnú väzbu na kvalitu dopytov. Marketing beží na pozadí, kým vy sa venujete pacientom.",
        },
        {
            question: "Je vaša stratégia vhodná aj pre menšiu špecializovanú ambulanciu?",
            answer:
                "Áno. Riešenia sú modulárne a škálovateľné – od základnej stratégie a lokálneho SEO až po výkonnostné kampane, email marketing a automatizácie. Stratégiu prispôsobíme rozpočtu aj cieľom ambulancie.",
        },
        {
            question: "Čo ak už máme marketingovú agentúru alebo interný tím?",
            answer:
                "Môžeme doplniť to, čo chýba: audit, výkonové kampane, práca s databázou a email marketing, CRM a automatizácie alebo strategické vedenie pre zdravotnícky segment. Spolupráca je možná aj popri existujúcom dodávateľovi.",
        },
        {
            question: "Koľko stojí marketing pre ambulanciu a kliniku?",
            answer:
                "Cena závisí od rozsahu (web/SEO, kampane, email marketing, CRM, obsah) a cieľov. Po konzultácii pripravíme návrh stratégie a odporúčaný rozpočet tak, aby dával ekonomický zmysel. Na rozdiel od veľkých agentúr ideme cestou ekonomicky prívetivých balíkov, ktoré dokážeme flexibilne prispôsobiť vašim potrebám.",
        },
        {
            question: "Ako začať spoluprácu?",
            answer:
                "Začneme krátkou nezáväznou konzultáciou, kde zhodnotíme aktuálny stav, ciele a najrýchlejšie príležitosti rastu. Následne pripravíme návrh stratégie a implementačný plán.",
        },
    ],
    "výsledky": [
        {
            question: "Ako rýchlo uvidím prvé výsledky marketingu?",
            answer:
                "Pri výkonnostných kampaniach sa prvé merateľné výsledky (návštevnosť a dopyty) zvyčajne objavia do 4–8 týždňov. Email marketing a práca s databázou môžu priniesť výsledky aj po prvej kampani. Budovanie autority je dlhodobý proces na niekoľko mesiacov. Spravidla si nechávame prvé 3 mesiace na optimálne nastavenie a testovanie všetkých systémov a databázy.",
        },
        {
            question: "Garantujete konkrétne výsledky (počet pacientov, dopytov)?",
            answer:
                "Negarantujeme nereálne čísla. Garantujeme transparentný reporting, jasne definované KPI a priebežnú optimalizáciu. Cieľom je stabilný a merateľný rast pri zachovaní reputácie ambulancie.",
        },
        {
            question: "Ako meriate úspešnosť marketingu v ambulancii?",
            answer:
                "Sledujeme najmä počet a kvalitu dopytov, cenu za dopyt/pacienta, konverzné pomery, návratnosť investície (ROI) a výkonnosť kanálov. Reporting je zrozumiteľný a orientovaný na rozhodovanie.",
        },
    ],
    "bezpečnosť": [
        {
            question: "Ako komunikujete citlivé zdravotnícke alebo estetické témy?",
            answer:
                "Obsah a kampane pripravujeme v súlade s etickými normami, legislatívou a pravidlami reklamných platforiem. Používame profesionálny, edukatívny tón bez zavádzajúcich sľubov. Prioritou je dôvera a reputačná bezpečnosť.",
        },
        {
            question: "Neriskujem pri online reklame zablokovanie účtu alebo problémy s predpismi?",
            answer:
                "Nie. Pri regulovanom zdravotníckom segmente poznáme pravidlá platforiem (napr. Meta/Google) aj legislatívne hranice. Kampane nastavujeme tak, aby boli v súlade s predpismi a minimalizovali riziko zamietnutia alebo blokácie.",
        },
        {
            question: "Ako sú chránené kontakty a databázy pacientov, s ktorými pracujete?",
            bullets: [
                "Spracúvame výlučne v súlade s **GDPR** — ambulancia zostáva výhradným vlastníkom databázy.",
                "**SSL/TLS šifrovanie**, cloudové riešenia v rámci EÚ, viacfaktorové overovanie prístupu.",
                "Databázy **nikdy nepredávame** ani nepoužívame na vlastné aktivity.",
                "Bezpečnosť údajov je súčasť profesionálnej zodpovednosti voči pacientom.",
            ],
        },
    ],
};

/** Odpoveď ako čistý text – pre schema.org FAQPage. */
export function faqPlainAnswer(item: FaqItemData): string {
    const parts = [item.answer, ...(item.bullets ?? [])].filter(Boolean) as string[];
    return parts.join(" ").replace(/\*\*/g, "");
}

/** Všetky otázky naprieč kategóriami vo formáte pre faqJsonLd(). */
export const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap((category) =>
    FAQ_GROUPS[category].map((item) => ({
        question: item.question,
        answer: faqPlainAnswer(item),
    }))
);
