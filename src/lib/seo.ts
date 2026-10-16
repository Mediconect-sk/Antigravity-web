import type { Metadata } from "next";
import { OG_SECTIONS, OG_SIZE, ogImagePath, ogSectionFor } from "./og";

export const BASE_URL = "https://www.mediconect.sk";

export const ORG = {
    name: "Mediconect",
    legalName: "MediConect s.r.o.",
    email: "info@mediconect.sk",
    phone: "+421948220845",
    phoneDisplay: "+421 948 220 845",
    ico: "57016615",
    icDph: "SK2122534216",
    street: "Lounská 629/2",
    city: "Liptovský Mikuláš",
    postalCode: "031 04",
    country: "SK",
    latitude: 49.0834,
    longitude: 19.6108,
    foundingDate: "2024",
} as const;

/**
 * Profily na sociálnych sieťach a v katalógoch.
 * Doplňte reálne URL – Google aj AI vyhľadávače cez ne prepájajú entitu firmy.
 * Napr.: "https://www.linkedin.com/company/mediconect",
 *        "https://www.facebook.com/mediconect",
 *        "https://www.instagram.com/mediconect",
 *        odkaz na Google Business Profile.
 */
export const SOCIAL_PROFILES: string[] = [];

/**
 * Ordevia Connect – náš produkt pre kliniky a ich pacientov (objednávanie,
 * aplikácia pre pacientov, CRM pre tím). Odkazy sa používajú v menu, vo footeri,
 * na homepage aj v llms.txt – pri zmene adresy stačí upraviť tu.
 *
 * Čo o Ordevii smie web tvrdiť, je v ORDEVIA.md – len to, čo je v nasadenej verzii.
 */
export const ORDEVIA = {
    name: "Ordevia Connect",
    /** Aplikácia pre pacientov. */
    appUrl: "https://moja.ordevia.sk",
    loginUrl: "https://moja.ordevia.sk/prihlasenie",
    /** Formulár „Vyžiadať prístup" do ukážky CRM (fiktívna klinika). */
    demoUrl: "https://demo.ordevia.sk/login/vyziadat-pristup",
    /** Ukážka CRM – úvodná stránka testovacieho prostredia (cez „Prihlásiť sa" sa dá vyžiadať prístup). */
    crmDemoUrl: "https://demo.ordevia.sk",
    /** Ukážka aplikácie pre pacientov – otvorená, bez prihlásenia, fiktívne údaje. */
    connectDemoUrl: "https://connect-demo.ordevia.sk",
    servicePath: "/sluzby/webova-aplikacia-ordevia",
} as const;

/**
 * MyMedical – komunita lekárov od Mediconectu. Beží na vlastnej doméne
 * mymedical.sk; mediconect.sk na ňu len odkazuje (menu, footer) a adresa
 * `path` presmeruje cez `redirects()` v next.config.mjs.
 *
 * Preto MyMedical nie je v ROUTES – nemá tu vlastnú stránku, a teda ani
 * záznam v sitemap.xml. Pri zmene adresy upraviť tu aj v next.config.mjs.
 */
export const MYMEDICAL = {
    name: "MyMedical",
    tagline: "komunita lekárov",
    url: "https://www.mymedical.sk",
    /** Krátka adresa na mediconect.sk, ktorá presmeruje na `url`. */
    path: "/mymedical",
    /** Prieskum „Čo vám v ambulancii berie najviac času?" – vkladá sa na stránku AI. */
    aiSurveyUrl: "https://www.mymedical.sk/dotazniky/AI",
    /** Sebahodnotenie „Ekonomická imunita ambulancie" – beží na mymedical.sk (Supabase, súhlas, potvrdenie), vstup je zo Správy majetku. */
    economicImmunityUrl: "https://www.mymedical.sk/dotazniky/financna_imunita",
} as const;

/**
 * Povinná informácia o finančnom sprostredkovaní (znenie od Viktora, 13. 10. 2026).
 * Zobrazuje sa na stránke Správa a ochrana majetku (nie na domovskej stránke).
 * Text meniť len podľa platnej registrácie v NBS.
 */
export const FINANCE_DISCLOSURE =
    "Mediconect je podriadený finančný agent s reg. č. NBS 287404. Spolupracuje pri správe klientskeho majetku a sprostredkovaní finančných služieb so spoločnosťou MyLife Slovensko a.s., pod garantom UNIVERSAL maklérsky dom a.s., reg. č. NBS 3389.";

export const FINANCING_DISCLOSURE =
    "Financovanie sprostredkúva MediConect s.r.o. ako podriadený finančný agent (NBS 287404) na zodpovednosť UNIVERSAL maklérsky dom a.s. (NBS 3389).";

export type RouteMeta = {
    /** Breadcrumb popisok. */
    label: string;
    /** <title> bez sufixu " | Mediconect" – ten dopĺňa template v root layoute. */
    title: string;
    description: string;
    /** Cesta k nadradenej stránke, "/" je domov. */
    parent?: string;
    /** Ak je stránka službou, názov pre Service schema. */
    serviceName?: string;
    /** Vylúčiť zo sitemap.xml. */
    noSitemap?: boolean;
    priority?: number;
    changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const ROUTES: Record<string, RouteMeta> = {
    "/": {
        label: "Domov",
        title: "Mediconect | Biznis partner pre lekárov",
        description:
            "Strategický partner pre lekárov a kliniky. Budujeme dôveru a autoritu vašej praxe – od brandu a vizuálnej identity až po akvizíciu pacientov.",
        priority: 1,
        changeFrequency: "monthly",
    },

    /* ───────────── Služby ───────────── */
    "/sluzby": {
        label: "Healthcare marketing",
        title: "Healthcare marketing pre lekárov a kliniky",
        description:
            "Správni pacienti, dôstojná komunikácia: akvizícia pacientov, web a SEO, sociálne siete, e-mail a databáza pacientov – v súlade s etikou povolania.",
        parent: "/",
        priority: 0.9,
        changeFrequency: "monthly",
    },
    "/sluzby/akvizicia-a-vykonnostny-marketing": {
        label: "Akvizícia a výkonnostný marketing",
        title: "Akvizícia pacientov a výkonnostný marketing",
        description:
            "Precízne cielené Google a Meta kampane pre ambulancie a kliniky. Prinášame nových pacientov a merateľnú návratnosť – nie prázdne impresie.",
        parent: "/sluzby",
        serviceName: "Akvizícia pacientov a výkonnostný marketing",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/crm-a-automatizacie": {
        label: "CRM a automatizácie",
        title: "CRM a automatizácie pre ambulancie",
        description:
            "Prepojíme vašu pacientsku databázu s inteligentným CRM systémom, ktorý pracuje za vás. Menej administratívy, viac času na pacienta.",
        parent: "/sluzby",
        serviceName: "CRM a marketingové automatizácie pre zdravotníctvo",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/databaza-pacientov-a-jej-aktivacia": {
        label: "Databáza pacientov a jej aktivácia",
        title: "Databáza pacientov a jej aktivácia",
        description:
            "Vaša kartotéka je zákonná povinnosť. Informovaná databáza je majetok. Ukážeme vám, ako z nej v súlade s GDPR vyťažiť reálny rast praxe.",
        parent: "/sluzby",
        serviceName: "Aktivácia databázy pacientov",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/email-marketing-a-praca-s-datami": {
        label: "Email marketing a práca s dátami",
        title: "Email marketing pre lekárov a kliniky",
        description:
            "E-mail je najsilnejší nástroj na budovanie dlhodobého vzťahu s pacientom. Kampane s open rate nad 70 % a merateľným dopadom na rezervácie.",
        parent: "/sluzby",
        serviceName: "E-mail marketing pre zdravotníctvo",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/socialne-siete-pre-lekarov-a-kliniky": {
        label: "Sociálne siete pre lekárov a kliniky",
        title: "Sociálne siete pre lekárov a kliniky",
        description:
            "Facebook, Instagram a YouTube pre zdravotníctvo. Budujeme autoritu a komunitu tam, kde vaši pacienti trávia čas – eticky a bez nátlaku.",
        parent: "/sluzby",
        serviceName: "Správa sociálnych sietí pre lekárov a kliniky",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/umela-inteligencia-pre-ambulanciu": {
        label: "Umelá inteligencia pre ambulanciu",
        title: "Umelá inteligencia pre ambulanciu",
        description:
            "Implementujeme AI nástroje, ktoré šetria čas vášmu personálu a zvyšujú komfort pacienta – od objednávania po odpovede na časté otázky.",
        parent: "/sluzby",
        serviceName: "Umelá inteligencia pre ambulancie a kliniky",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/web-a-seo-pre-zdravotnictvo": {
        label: "Web a SEO pre zdravotníctvo",
        title: "Web a SEO pre zdravotníctvo",
        description:
            "Moderný, rýchly a bezpečný web pre ambulancie a kliniky. Lokálne SEO, technická optimalizácia a obsah, vďaka ktorému vás pacienti nájdu.",
        parent: "/sluzby",
        serviceName: "Tvorba webu a SEO pre zdravotníctvo",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sluzby/webova-aplikacia-ordevia": {
        label: "Ordevia Connect",
        title: "Ordevia Connect – objednávanie a aplikácia pre pacientov",
        description:
            "Pacient sa objedná online bez registrácie, aplikáciu si aktivuje až potom. Termíny, príprava a správy na jednom mieste a pre váš tím jeden prehľad v CRM.",
        parent: "/sluzby",
        serviceName: "Ordevia Connect – online objednávanie, aplikácia pre pacientov a CRM pre kliniky",
        priority: 0.8,
        changeFrequency: "monthly",
    },

    /* ───────────── Pre koho ───────────── */
    "/pre-koho": {
        label: "Pre koho",
        title: "Pre koho pracujeme – segmenty zdravotníctva",
        description:
            "Ambulancie, kliniky a polikliniky, diagnostické centrá, kúpele a osobné značky lekárov. Každý segment má iné potreby – a my vieme, ako na ne.",
        // Od 13. 10. 2026 je prehľad súčasťou /o-nas – /pre-koho presmeruje na /o-nas#pre-koho
        // (next.config.mjs). Záznam ostáva kvôli drobčekom a footeru podstránok.
        parent: "/o-nas",
        noSitemap: true,
        priority: 0.9,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-ambulancie": {
        label: "Pre ambulancie",
        title: "Marketing pre ambulancie",
        description:
            "Pomáhame samostatným lekárom a malým ambulanciám vybudovať stabilný kmeň pacientov a profesionálny imidž, ktorý vzbudzuje dôveru.",
        parent: "/pre-koho",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-kliniky-a-polikliniky": {
        label: "Pre kliniky a polikliniky",
        title: "Marketing pre kliniky a polikliniky",
        description:
            "Škálovateľné riešenia pre veľké zdravotnícke zariadenia, ktoré potrebujú systém, dáta a efektívnu správu viacerých špecializácií.",
        parent: "/pre-koho",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-diagnosticke-centra-a-laboratoria": {
        label: "Pre diagnostické centrá a laboratóriá",
        title: "Marketing pre diagnostické centrá a laboratóriá",
        description:
            "Marketing postavený na presnosti, rýchlosti a dôvere. Zvyšujeme povedomie o dôležitosti včasnej diagnostiky a prevencie.",
        parent: "/pre-koho",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-kupele-a-wellness": {
        label: "Pre kúpele a wellness",
        title: "Marketing pre kúpele a wellness",
        description:
            "Budujeme prémiovú značku, ktorá priťahuje hostí hľadajúcich kvalitu a oddych. Predávame zážitok z regenerácie a zdravia.",
        parent: "/pre-koho",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-doplnkove-sluzby-v-oblasti-zdravia": {
        label: "Pre doplnkové služby v oblasti zdravia",
        title: "Marketing pre zdravotnícke pomôcky, longevity a kozmetické salóny",
        description:
            "Pomáhame službám, ktoré dopĺňajú zdravotnú starostlivosť – zdravotníckym pomôckam, longevity centrám a kozmetickým salónom – získať dôveru a stálych klientov.",
        parent: "/pre-koho",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/pre-koho/pre-osobne-znacky-lekarov": {
        label: "Pre osobné značky lekárov",
        title: "Osobná značka lekára – personal branding",
        description:
            "Budujeme meno odborníka. Pacienti sa v prvom rade zverujú do rúk konkrétneho lekára, až potom klinike. Pomôžeme vám stať sa tvárou svojho odboru.",
        parent: "/pre-koho",
        priority: 0.8,
        changeFrequency: "monthly",
    },

    /* ───────────── Ostatné ───────────── */
    /* ───────────── Piliere Medical Business Partner ───────────── */
    "/business-partner": {
        label: "Business partner",
        title: "Business partner pre majiteľov ambulancií a kliník",
        description:
            "Založenie a rast ambulancie: lokalita a biznis plán, povolenia VÚC, zmluvy so ZP, financovanie vybavenia a generačná výmena praxe. Koordináciu preberáme my.",
        parent: "/",
        serviceName: "Založenie a rast ambulancie – business partner pre lekárov",
        priority: 0.9,
        changeFrequency: "monthly",
    },
    "/business-partner/start-vlastnej-ambulancie": {
        label: "Štart vlastnej ambulancie",
        title: "Štart vlastnej ambulancie – od rozhodnutia po prvého pacienta",
        description:
            "Lokalita a biznis plán, povolenie VÚC, zmluvy so zdravotnými poisťovňami, priestory a vybavenie. Koordinujeme otvorenie ambulancie, vy rozhodujete.",
        parent: "/business-partner",
        serviceName: "Otvorenie vlastnej ambulancie – koordinácia pre lekárov",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/business-partner/financovanie-podnikania": {
        label: "Financovanie podnikania",
        title: "Financovanie ambulancie – úver, lízing a prenájom vybavenia",
        description:
            "Porovnanie úveru, lízingu a prenájmu prístrojov, podklady pre banku a sprostredkovanie financovania ambulancie aj prevzatia praxe.",
        parent: "/business-partner",
        serviceName: "Sprostredkovanie financovania ambulancie",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/business-partner/obchodne-partnerstvo": {
        label: "Obchodné partnerstvo",
        title: "Obchodné partnerstvo a program Mediconect Štart",
        description:
            "Sieť ambulancií Mediconect: mentor zo siete, regionálna exkluzivita a kapitálový vstup s opciou na odkúpenie podielu – vlastná ambulancia bez vlastného kapitálu na začiatku.",
        parent: "/business-partner",
        serviceName: "Sieť ambulancií Mediconect a program Mediconect Štart",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/business-partner/predaj-kmena-a-praxe": {
        label: "Predaj kmeňa a praxe",
        title: "Predaj kmeňa pacientov a lekárskej praxe",
        description:
            "Ocenenie ambulancie, nájdenie nástupcu, forma prevodu s advokátom a citlivé odovzdanie pacientov. Generačná výmena praxe s jedným partnerom.",
        parent: "/business-partner",
        serviceName: "Predaj a odovzdanie lekárskej praxe",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/business-partner/zamestnanecke-benefity": {
        label: "Zamestnanecké benefity",
        title: "Zamestnanecké benefity pre tím kliniky a ambulancie",
        description:
            "Program výhod, ktorý vedenie kliniky alebo ambulancie ponúkne svojim zamestnancom: bývanie a nehnuteľnosti, bankové produkty, poistenie, dôchodok a finančné vzdelávanie.",
        parent: "/business-partner",
        serviceName: "Program zamestnaneckých benefitov pre zdravotnícke zariadenia",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/business-partner/efektivna-a-ziskova-ambulancia": {
        label: "Efektívna a zisková ambulancia",
        title: "Efektívna a zisková ambulancia – procesy, tím a čísla",
        description:
            "Audit prevádzky, procesy a role, vyťaženie ordinačných hodín a prístrojov, cenník a doplnkové služby a mesačný prehľad kľúčových čísel ambulancie.",
        parent: "/business-partner",
        serviceName: "Manažment a ekonomika ambulancie",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/business-partner/sprava-podnikatelskych-rizik": {
        label: "Správa podnikateľských rizík",
        title: "Správa podnikateľských rizík ambulancie",
        description:
            "Zodpovednosť, výpadok príjmu, prerušenie prevádzky a údaje pacientov. Identifikujeme skryté riziká ambulancie a nastavíme ochranu a likviditu s licencovaným partnerom.",
        parent: "/business-partner",
        serviceName: "Správa podnikateľských rizík ambulancie",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku": {
        label: "Správa a ochrana majetku",
        title: "Správa a ochrana majetku lekára",
        description:
            "Finančná diagnóza, oddelenie rizika praxe od rodiny, investičný plán, renta, poistenie a daňová efektivita – s advokátom a SKDP, s jedným osobným partnerom.",
        parent: "/",
        serviceName: "Správa a ochrana majetku lekára",
        priority: 0.9,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/architektura-majetku": {
        label: "Architektúra majetku",
        title: "Architektúra majetku lekára – diagnóza, plán a štruktúra",
        description:
            "Finančná diagnóza, plán, ochrana, rast a renta v jednej architektúre majetku lekára – s jedným osobným partnerom a ročnou revíziou.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Architektúra a plánovanie majetku lekára",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/holdingova-struktura": {
        label: "Holdingová štruktúra",
        title: "Holdingová štruktúra pre majiteľov ambulancií",
        description:
            "Oddelenie rizika ambulancie od rodinného majetku cez holdingovú spoločnosť – návrh, založenie a riadenie s advokátom a daňovým poradcom.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Holdingová štruktúra pre lekárov",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy": {
        label: "Nadačné a zverenecké schémy",
        title: "Nadačné a zverenecké schémy – prenos majetku na ďalšie generácie",
        description:
            "Nadácie, zverenecké a nadačné fondy aj zahraničné alternatívy pre ochranu a prenos rodinného majetku – posúdenie a nastavenie s advokátom.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Nadačné a zverenecké schémy pre rodinný majetok",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/danove-poradenstvo": {
        label: "Daňové poradenstvo",
        title: "Daňové poradenstvo pre lekárov a ambulancie",
        description:
            "Vyplácanie zisku, daňová efektivita štruktúry a daňové dopady predaja praxe – s daňovým poradcom, členom Slovenskej komory daňových poradcov.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Daňové poradenstvo pre lekárov (v spolupráci s daňovým poradcom)",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/pravne-sluzby": {
        label: "Právne služby",
        title: "Právne služby pre lekárov a ambulancie",
        description:
            "Holding, zmluvy, prevody praxe a dedičské plánovanie s overenými advokátmi. Mediconect koordinuje, právne služby poskytuje advokát.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Právne služby pre lekárov (v spolupráci s advokátmi)",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/sprava-a-ochrana-majetku/lifestyle-property": {
        label: "Lifestyle Property",
        title: "Lifestyle Property a nehnuteľnosti v zahraničí pre lekárov",
        description:
            "Prémiová nehnuteľnosť na Costa del Sol ako duálne aktívum: diverzifikácia majetku mimo Slovenska a miesto na regeneráciu. Výber, financovanie, vlastníctvo a prenájom.",
        parent: "/sprava-a-ochrana-majetku",
        serviceName: "Lifestyle Property – nehnuteľnosti v zahraničí",
        priority: 0.7,
        changeFrequency: "monthly",
    },
    "/o-nas": {
        label: "O nás",
        title: "O nás – Medical Business Partner pre lekárov",
        description:
            "Mediconect je partner lekára od prvého pacienta po posledný deň v praxi. Spoznajte náš príbeh, filozofiu a hodnoty 5I.",
        parent: "/",
        priority: 0.7,
        changeFrequency: "yearly",
    },
    "/vysledky": {
        label: "Výsledky",
        title: "Výsledky a prípadové štúdie",
        description:
            "Nerobíme marketing pre dojmy, ale pre čísla. Pozrite si reálne dáta z projektov pre ambulancie, kliniky a diagnostické centrá.",
        parent: "/",
        priority: 0.8,
        changeFrequency: "monthly",
    },
    "/kontakt": {
        label: "Kontakt",
        title: "Kontakt – bezplatná konzultácia",
        description:
            "Máte otázky alebo chcete prekonzultovať rast vašej ambulancie? Napíšte na info@mediconect.sk, zavolajte na +421 948 220 845 alebo vyplňte formulár.",
        parent: "/",
        priority: 0.8,
        changeFrequency: "yearly",
    },
    "/blog": {
        label: "Blog",
        title: "Blog",
        description:
            "Overené marketingové postupy a dáta z reálnych projektov pre lekárov, ambulancie a kliniky. Pozrite si, ako Mediconect dosahuje merateľné výsledky.",
        parent: "/",
        priority: 0.7,
        changeFrequency: "weekly",
    },
    // Články blogu nie sú v ROUTES – načítavajú sa z content/blog/*.mdx
    // cez src/lib/blog.ts a do sitemapy aj llms.txt sa pridávajú automaticky.
    "/ochrana-osobnych-udajov": {
        label: "Ochrana osobných údajov",
        title: "Ochrana osobných údajov",
        description:
            "Zásady spracúvania osobných údajov spoločnosti MediConect s.r.o. v súlade s GDPR a zákonom č. 18/2018 Z. z.",
        parent: "/",
        priority: 0.3,
        changeFrequency: "yearly",
    },
    "/zasady-cookies": {
        label: "Zásady cookies",
        title: "Zásady používania cookies",
        description:
            "Informácie o tom, aké cookies používame na webe mediconect.sk, na aký účel a ako môžete svoj súhlas kedykoľvek zmeniť.",
        parent: "/",
        priority: 0.3,
        changeFrequency: "yearly",
    },
};

export function absoluteUrl(path: string): string {
    return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

/** Náhľadový obrázok (Open Graph) sekcie, do ktorej cesta patrí – pozri src/lib/og.ts. */
export function ogImageFor(path: string) {
    const section = ogSectionFor(path);
    return {
        url: `${BASE_URL}${ogImagePath(section)}`,
        ...OG_SIZE,
        alt: OG_SECTIONS[section].alt,
    };
}

/**
 * Metadata pre stránku odvodená z ROUTES – vrátane canonicalu,
 * ktorý MUSÍ byť na každej stránke vlastný (inak sa dedí z root layoutu).
 */
export function pageMetadata(path: string, overrides: Metadata = {}): Metadata {
    const route = ROUTES[path];
    if (!route) {
        throw new Error(`[seo] Chýbajúci záznam v ROUTES pre cestu "${path}"`);
    }
    return metadataFor(path, route, overrides);
}

/**
 * Metadata pre stránku, ktorá nie je v ROUTES (napr. článok blogu načítaný
 * zo súboru) – rovnaký výstup ako pageMetadata(), len s explicitným RouteMeta.
 */
export function metadataFor(path: string, route: RouteMeta, overrides: Metadata = {}): Metadata {
    const url = absoluteUrl(path);
    // Domovská stránka už má názov značky v titulku – obísť template "%s | Mediconect".
    const title = path === "/" ? { absolute: route.title } : route.title;
    // Náhľad pri zdieľaní nesie podtitul sekcie (src/lib/og.ts), nie všade „zdravotníctvo".
    const ogImage = ogImageFor(path);

    return {
        title,
        description: route.description,
        alternates: { canonical: url },
        openGraph: {
            title: path === "/" ? route.title : `${route.title} | ${ORG.name}`,
            description: route.description,
            url,
            siteName: ORG.name,
            locale: "sk_SK",
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: path === "/" ? route.title : `${route.title} | ${ORG.name}`,
            description: route.description,
            images: [ogImage],
        },
        ...overrides,
    };
}

export type Crumb = { name: string; path: string };

/** Cesta od domovskej stránky po danú stránku (vrátane). */
export function trail(path: string): Crumb[] {
    const crumbs: Crumb[] = [];
    let current: string | undefined = path;

    while (current) {
        const route: RouteMeta | undefined = ROUTES[current];
        if (!route) break;
        crumbs.unshift({ name: route.label, path: current });
        current = route.parent;
    }

    return crumbs;
}

export function breadcrumbJsonLd(path: string) {
    return breadcrumbJsonLdFor(path, trail(path));
}

/** BreadcrumbList z explicitných drobčekov – pre stránky mimo ROUTES (blog). */
export function breadcrumbJsonLdFor(path: string, crumbs: Crumb[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(path)}#breadcrumb`,
        itemListElement: crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.path),
        })),
    };
}

export function webPageJsonLd(path: string) {
    return webPageJsonLdFor(path, ROUTES[path]);
}

/** WebPage schema z explicitného RouteMeta – pre stránky mimo ROUTES (blog). */
export function webPageJsonLdFor(path: string, route: RouteMeta) {
    const url = absoluteUrl(path);

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: route.title,
        description: route.description,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "sk-SK",
        breadcrumb: { "@id": `${url}#breadcrumb` },
    };
}

export function serviceJsonLd(path: string) {
    const route = ROUTES[path];
    if (!route.serviceName) {
        throw new Error(`[seo] Cesta "${path}" nemá nastavené serviceName`);
    }

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: route.serviceName,
        description: route.description,
        url: absoluteUrl(path),
        serviceType: route.serviceName,
        category: "Healthcare Marketing",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: [
            { "@type": "Country", name: "Slovakia" },
            { "@type": "Country", name: "Czech Republic" },
        ],
        audience: {
            "@type": "BusinessAudience",
            name: "Lekári, ambulancie, kliniky a zdravotnícke zariadenia",
        },
    };
}

/**
 * Kompletná sada structured data pre bežnú stránku:
 * WebPage + BreadcrumbList (+ Service, ak ide o servisnú stránku).
 */
export function pageJsonLd(path: string): object[] {
    const blocks: object[] = [webPageJsonLd(path), breadcrumbJsonLd(path)];
    if (ROUTES[path]?.serviceName) blocks.push(serviceJsonLd(path));
    return blocks;
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(items: FaqItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

/** Zoznam všetkých indexovateľných ciest pre sitemap.xml. */
export function indexableRoutes(): [string, RouteMeta][] {
    return Object.entries(ROUTES).filter(([, route]) => !route.noSitemap);
}
