import type { Metadata } from "next";

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
 * Webová aplikácia Ordevia Connect, ktorú ponúkame klinikám a ich pacientom.
 * Odkazy sa používajú v menu, vo footeri, na homepage aj v llms.txt –
 * pri zmene adresy aplikácie stačí upraviť tu.
 */
export const ORDEVIA = {
    name: "Ordevia Connect",
    appUrl: "https://moja.ordevia.sk",
    loginUrl: "https://moja.ordevia.sk/prihlasenie",
    servicePath: "/sluzby/webova-aplikacia-ordevia",
} as const;

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
        title: "Mediconect | Strategický partner pre zdravotníctvo",
        description:
            "Budujeme dôveru a autoritu vašej praxe v očiach pacientov. Komplexné marketingové riešenia pre lekárov, kliniky a ambulancie na Slovensku.",
        priority: 1,
        changeFrequency: "monthly",
    },

    /* ───────────── Služby ───────────── */
    "/sluzby": {
        label: "Služby",
        title: "Marketing pre lekárov a kliniky – služby",
        description:
            "Akvizícia pacientov, web a SEO, sociálne siete, e-mail marketing, CRM aj AI. Komplexné marketingové služby navrhnuté pre svet modernej medicíny.",
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
        label: "Webová aplikácia Ordevia",
        title: "Ordevia – webová aplikácia pre pacientov",
        description:
            "Ordevia Connect – vaša klinika vo vrecku pacienta. Termíny, pokyny pred vyšetrením a komunikácia na jednom bezpečnom mieste. Nasadenie zabezpečíme my.",
        parent: "/sluzby",
        serviceName: "Webová aplikácia Ordevia pre kliniky a ich pacientov",
        priority: 0.8,
        changeFrequency: "monthly",
    },

    /* ───────────── Pre koho ───────────── */
    "/pre-koho": {
        label: "Pre koho",
        title: "Pre koho pracujeme – segmenty zdravotníctva",
        description:
            "Ambulancie, kliniky a polikliniky, diagnostické centrá, kúpele a osobné značky lekárov. Každý segment má iné potreby – a my vieme, ako na ne.",
        parent: "/",
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
    "/o-nas": {
        label: "O nás",
        title: "O nás – marketingová agentúra pre zdravotníctvo",
        description:
            "Mediconect spája svet marketingu a medicíny. Rozumieme legislatíve, etike aj psychológii pacienta. Spoznajte náš príbeh, hodnoty a tím.",
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
    "/blog/strategicka-reaktivacia-pacientskej-databazy": {
        label: "Strategická reaktivácia pacientskej databázy",
        title: "Ako sme zvýšili počet preventívnych prehliadok o 42 %",
        description:
            "Prípadová štúdia: ako sme jednou e-mailovou kampaňou postavenou na edukatívnom obsahu zvýšili počet preventívnych prehliadok o 42,31 %.",
        parent: "/blog",
        priority: 0.8,
        changeFrequency: "monthly",
    },
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

/**
 * Metadata pre stránku odvodená z ROUTES – vrátane canonicalu,
 * ktorý MUSÍ byť na každej stránke vlastný (inak sa dedí z root layoutu).
 */
export function pageMetadata(path: string, overrides: Metadata = {}): Metadata {
    const route = ROUTES[path];
    if (!route) {
        throw new Error(`[seo] Chýbajúci záznam v ROUTES pre cestu "${path}"`);
    }

    const url = absoluteUrl(path);
    // Domovská stránka už má názov značky v titulku – obísť template "%s | Mediconect".
    const title = path === "/" ? { absolute: route.title } : route.title;

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
            images: [`${BASE_URL}/og-image.png`],
        },
        twitter: {
            card: "summary_large_image",
            title: path === "/" ? route.title : `${route.title} | ${ORG.name}`,
            description: route.description,
            images: [`${BASE_URL}/og-image.png`],
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
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(path)}#breadcrumb`,
        itemListElement: trail(path).map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.path),
        })),
    };
}

export function webPageJsonLd(path: string) {
    const route = ROUTES[path];
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
