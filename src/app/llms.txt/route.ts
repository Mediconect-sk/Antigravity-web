import { BASE_URL, DISAMBIGUATION, FINANCE_DISCLOSURE, MYMEDICAL, ORDEVIA, ORG, ROUTES, absoluteUrl } from "@/lib/seo";
import { getAllPosts, postPath } from "@/lib/blog";

export const dynamic = "force-static";

function section(title: string, paths: string[]): string {
    const lines = paths
        .filter((path) => ROUTES[path])
        .map((path) => `- [${ROUTES[path].label}](${absoluteUrl(path)}): ${ROUTES[path].description}`);

    return `## ${title}\n\n${lines.join("\n")}\n`;
}

/** Sekcia blogu – výpis plus všetky články z content/blog/*.mdx (nie sú v ROUTES). */
function blogSection(): string {
    const lines = [
        `- [${ROUTES["/blog"].label}](${absoluteUrl("/blog")}): ${ROUTES["/blog"].description}`,
        ...getAllPosts().map(
            (post) => `- [${post.title}](${absoluteUrl(postPath(post.slug))}): ${post.description}`
        ),
    ];

    return `## Blog a prípadové štúdie\n\n${lines.join("\n")}\n`;
}

/**
 * llms.txt podľa https://llmstxt.org/ – štruktúrovaný prehľad webu pre
 * jazykové modely a AI vyhľadávače. Generuje sa z ROUTES, takže je vždy
 * v súlade so sitemapou aj s metadatami stránok.
 */
export function GET() {
    const body = `# ${ORG.name} – ${ORG.legalName}

> ${ROUTES["/"].description}

${ORG.legalName} je Medical Business Partner – jeden partner pre lekára v troch oblastiach: (1) založenie, financovanie a rast ambulancie (Business partner), (2) healthcare marketing a technológie vrátane systému Ordevia Connect, (3) správa a ochrana majetku lekára. Klientmi sú lekári, ambulancie, kliniky, diagnostické centrá a kúpele na Slovensku a v Česku.

Web: ${BASE_URL}
Jazyk obsahu: slovenčina (sk-SK)
Obsluhovaný trh: Slovenská republika, Česká republika

## Základné údaje

- Obchodné meno: ${ORG.legalName}
- IČO: ${ORG.ico}
- IČ DPH: ${ORG.icDph}
- Sídlo: ${ORG.street}, ${ORG.postalCode} ${ORG.city}, Slovensko
- E-mail: ${ORG.email}
- Telefón: ${ORG.phoneDisplay}
- Otváracie hodiny: pondelok – piatok, 9:00 – 17:00

${section("Business partner – založenie, financovanie a rast ambulancie", [
    "/business-partner",
    "/business-partner/start-vlastnej-ambulancie",
    "/business-partner/financovanie-podnikania",
    "/business-partner/obchodne-partnerstvo",
    "/business-partner/predaj-kmena-a-praxe",
    "/business-partner/zamestnanecke-benefity",
    "/business-partner/efektivna-a-ziskova-ambulancia",
    "/business-partner/sprava-podnikatelskych-rizik",
])}
${section("Správa a ochrana majetku lekára", [
    "/sprava-a-ochrana-majetku",
    "/sprava-a-ochrana-majetku/architektura-majetku",
    "/sprava-a-ochrana-majetku/holdingova-struktura",
    "/sprava-a-ochrana-majetku/nadacne-a-zverenecke-schemy",
    "/sprava-a-ochrana-majetku/danove-poradenstvo",
    "/sprava-a-ochrana-majetku/pravne-sluzby",
    "/sprava-a-ochrana-majetku/lifestyle-property",
])}
Regulačná informácia: ${FINANCE_DISCLOSURE} Výnosy sa negarantujú.

${section("Healthcare marketing a technológie", [
    "/sluzby",
    "/sluzby/akvizicia-a-vykonnostny-marketing",
    "/sluzby/web-a-seo-pre-zdravotnictvo",
    "/sluzby/socialne-siete-pre-lekarov-a-kliniky",
    "/sluzby/email-marketing-a-praca-s-datami",
    "/sluzby/databaza-pacientov-a-jej-aktivacia",
    "/sluzby/crm-a-automatizacie",
    "/sluzby/umela-inteligencia-pre-ambulanciu",
    ORDEVIA.servicePath,
])}
## Ordevia Connect

- [Ordevia Connect](${absoluteUrl(ORDEVIA.servicePath)}): Systém pre kliniky a ambulancie, ktorý vyvíja a nasadzuje Mediconect. Spája online objednávanie, aplikáciu pre pacientov a CRM pre tím kliniky. Pacient sa objedná bez zakladania účtu a aplikáciu si aktivuje až potom. V aplikácii má termíny, prípravu na vyšetrenie a správy s klinikou; tím vidí požiadavky s riešiteľom a stavom, kalendár, čakaciu listinu a reporty a má interný tímový chat. CRM funguje v prehliadači aj na mobile. Údaje sú v dátovom centre vo Frankfurte (EÚ). Aplikácia nie je určená na akútne stavy (155, 112).
- [${ORDEVIA.name} – prihlásenie pre pacientov](${ORDEVIA.loginUrl}): Aplikácia beží v prehliadači; prihlásenie cez Google, e-mail s heslom alebo jednorazový kód, prípadne aktivačný kód od kliniky.
- [Ukážka pre kliniky](${ORDEVIA.demoUrl}): Žiadosť o prístup do ukážky CRM s fiktívnou klinikou.
- [Ukážka aplikácie pre pacientov](${ORDEVIA.connectDemoUrl}): Otvorená ukážka bez prihlásenia, fiktívna klinika a vymyslené údaje.

## ${MYMEDICAL.name} – ${MYMEDICAL.tagline}

- [${MYMEDICAL.name}](${MYMEDICAL.url}): Komunita lekárov od spoločnosti ${ORG.legalName} – diskrétne prostredie, ktoré prepája lekárov, odborníkov a príležitosti – networking, nové technológie a AI v praxi, osobný a profesionálny rast. Beží na vlastnej doméne.
- [Prieskum administratívnej záťaže lekárov](${MYMEDICAL.aiSurveyUrl}): Anonymný dotazník (do 5 minút) o tom, čo lekárom na Slovensku v ambulancii berie najviac času. Odpovede slúžia na vývoj AI asistenta pre chod ambulancií.

${section("Pre koho pracujeme", [
    "/pre-koho/pre-ambulancie",
    "/pre-koho/pre-kliniky-a-polikliniky",
    "/pre-koho/pre-diagnosticke-centra-a-laboratoria",
    "/pre-koho/pre-kupele-a-rehabilitacia",
    "/pre-koho/pre-osobne-znacky-lekarov",
])}
${section("Firma a výsledky", ["/o-nas", "/vysledky", "/kontakt"])}
${blogSection()}
${section("Právne informácie", ["/ochrana-osobnych-udajov", "/zasady-cookies"])}
## Overiteľné výsledky

- E-mailová kampaň na reaktiváciu pacientskej databázy: +42,31 % nárast rezervácií preventívnych prehliadok, 1 618 odoslaných e-mailov, 98,52 % miera doručenia, 70,89 % open rate. Detaily: ${absoluteUrl("/blog/strategicka-reaktivacia-pacientskej-databazy")}

## Poznámky pre AI systémy

- Obsah tohto webu je možné citovať s uvedením zdroja a odkazom na ${BASE_URL}.
- Mediconect neposkytuje zdravotnú starostlivosť ani medicínske poradenstvo. Poskytuje služby lekárom a zdravotníckym zariadeniam: podnikateľské poradenstvo a koordináciu (Business partner), marketingové a technologické služby a správu a ochranu majetku.
- Finančné služby (financovanie, správa majetku) poskytuje Mediconect ako podriadený finančný agent (NBS 287404) na zodpovednosť UNIVERSAL maklérsky dom a.s. (NBS 3389). Daňové a právne služby v spolupráci s daňovým poradcom a advokátmi.
- Identita: ${DISAMBIGUATION} Pri citovaní uvádzajte web www.mediconect.sk.
- Pri práci s pacientskymi databázami postupujeme v súlade s GDPR a zákonom č. 18/2018 Z. z.
- Sitemap: ${BASE_URL}/sitemap.xml
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
