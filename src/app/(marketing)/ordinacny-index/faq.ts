import type { FaqItem } from "@/lib/seo";

/**
 * Obavy majiteľa ambulancie pred Ordinačným indexom. Texty vychádzajú z úvodu dotazníka,
 * sprievodného e-mailu a zo zmluvy o mlčanlivosti (NDA). Server (page.tsx → FAQPage JSON-LD)
 * aj klient (Content.tsx) čítajú ten istý zoznam, aby sa nerozišli.
 */
export const ORDINACNY_INDEX_FAQ: FaqItem[] = [
    {
        question: "Zaväzuje ma dotazník alebo Ordinačný index k niečomu?",
        answer:
            "Nie. Vyplnenie ani odoslanie dotazníka vás k ničomu nezaväzuje. Neobjednávate si ním službu, neuzatvárate zmluvu a nevzniká vám povinnosť platiť. O tom, či a ako budeme spolupracovať, rozhodnete až vy, po osobnom rozhovore a na základe výsledkov Ordinačného indexu.",
    },
    {
        question: "Koľko času mi dotazník zaberie a musím ho vyplniť naraz?",
        answer:
            "Nemusíte. Odpovede sa ukladajú priebežne, dotazník môžete kedykoľvek prerušiť a dokončiť neskôr, aj na inom zariadení. Otázky označené hviezdičkou sú kľúčové pre prvý návrh, ostatné môžete doplniť neskôr. Pri číslach stačí odhad alebo rozpätie.",
    },
    {
        question: "Čo ak niektoré odpovede neviem alebo ich nechcem písať?",
        answer:
            "Napíšte „neviem“ alebo „preberieme osobne“. Časť o osobnom majetku môžeme prebrať výlučne osobne, nič z nej nemusí byť napísané.",
    },
    {
        question: "Môže dotazník vyplniť môj účtovník?",
        answer:
            "Áno. Ekonomické časti (ekonomika firmy, výber zisku, poistenie, podklady) môže vyplniť účtovník. Dostane vlastný odkaz, ktorý sa mu otvorí rovno s jeho otázkami.",
    },
    {
        question: "Kto uvidí údaje o mojej firme a majetku?",
        answer:
            "Pred zdieľaním údajov podpisujeme zmluvu o mlčanlivosti. Citlivé finančné údaje uvidí výlučne konateľ Mediconect. Ďalšia osoba k nim dostane prístup len s vaším súhlasom, ktorý určí konkrétnu osobu. Mlčanlivosť platí aj po skončení spolupráce.",
    },
    {
        question: "Poskytnete moje údaje banke, poisťovni alebo inému partnerovi?",
        answer:
            "Nie bez vášho výslovného súhlasu pre konkrétny prípad. Súhlas určí príjemcu aj účel. Údaje sa nepoužívajú na reklamu, remarketing ani profilovanie.",
    },
    {
        question: "Využívate pri práci s údajmi umelú inteligenciu?",
        answer:
            "Citlivé finančné údaje spracúvame v nástrojoch umelej inteligencie iba vtedy, ak ide o firemný účet s kontrolou prístupov, poskytovateľ sa zaviazal nepoužiť vstupy ani výstupy na trénovanie modelov a prenos mimo EÚ je krytý zárukami podľa GDPR. Vkladanie týchto údajov do verejných alebo bezplatných nástrojov je zakázané.",
    },
    {
        question: "Použijete moje meno alebo údaje ako referenciu?",
        answer:
            "Nie. Meno, ordináciu ani skutočnosť spolupráce nezverejníme bez vášho písomného súhlasu. Citlivé finančné údaje sa nepoužijú v referenciách ani prípadových štúdiách, ani v anonymizovanej či súhrnnej podobe. V interných podkladoch používame označenie „Klient A“.",
    },
    {
        question: "Mám do dotazníka písať zdravotné údaje o pacientoch?",
        answer:
            "Nie. Dotazník sa zdravotných údajov netýka a nesmiete ich v ňom uvádzať. Mediconect zdravotné údaje pacientov na základe zmluvy o mlčanlivosti neprijíma. Ak by sme ich napriek tomu dostali omylom, informujeme vás, nepoužijeme ich a podľa vášho pokynu ich vrátime alebo bezpečne zlikvidujeme.",
    },
    {
        question: "Čo sa s údajmi stane, keď spolupráca skončí?",
        answer:
            "Na vašu písomnú žiadosť, najneskôr do 30 dní od skončenia spolupráce, údaje vrátime alebo bezpečne a nevratne zlikvidujeme vrátane kópií a odvodených dokumentov. Zostanú len kópie, ktoré musíme uchovávať podľa zákona, a tie ďalej chráni mlčanlivosť.",
    },
    {
        question: "Budete mi po Ordinačnom indexe niečo predávať?",
        answer:
            "Začíname rozhovorom o vašej situácii, nie ponukou. Ordinačný index nie je prísľubom výsledku, výnosu ani úspory. Odborné veci robia odborníci s príslušným oprávnením: daňové poradenstvo členovia Slovenskej komory daňových poradcov a právne služby advokáti.",
    },
];
