import { BASE_URL, ORDEVIA, ORG, ROUTES, absoluteUrl } from "@/lib/seo";
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

> Marketingová agentúra špecializovaná výhradne na zdravotníctvo. Pomáhame lekárom, ambulanciám, klinikám, diagnostickým centrám a kúpeľom na Slovensku a v Česku získavať pacientov, budovať dôveru a automatizovať komunikáciu – eticky a v súlade s GDPR.

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

${section("Služby", [
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

- [Ordevia Connect](${absoluteUrl(ORDEVIA.servicePath)}): Systém pre kliniky a ambulancie, ktorý vyvíja a nasadzuje Mediconect. Spája online objednávanie, aplikáciu pre pacientov a CRM pre tím kliniky. Pacient sa objedná bez zakladania účtu a aplikáciu si aktivuje až potom. V aplikácii má termíny, prípravu na vyšetrenie a správy s klinikou; tím vidí požiadavky s riešiteľom a stavom, kalendár, čakaciu listinu a reporty. Údaje sú v dátovom centre vo Frankfurte (EÚ). Aplikácia nie je určená na akútne stavy (155, 112).
- [${ORDEVIA.name} – prihlásenie pre pacientov](${ORDEVIA.loginUrl}): Aplikácia beží v prehliadači; prihlásenie cez Google, e-mail s heslom alebo jednorazový kód, prípadne aktivačný kód od kliniky.
- [Ukážka pre kliniky](${ORDEVIA.demoUrl}): Žiadosť o prístup do ukážky CRM s fiktívnou klinikou.

${section("Pre koho pracujeme", [
    "/pre-koho",
    "/pre-koho/pre-ambulancie",
    "/pre-koho/pre-kliniky-a-polikliniky",
    "/pre-koho/pre-diagnosticke-centra-a-laboratoria",
    "/pre-koho/pre-kupele-a-wellness",
    "/pre-koho/pre-osobne-znacky-lekarov",
])}
${section("Firma a výsledky", ["/o-nas", "/vysledky", "/kontakt"])}
${blogSection()}
${section("Právne informácie", ["/ochrana-osobnych-udajov", "/zasady-cookies"])}
## Overiteľné výsledky

- E-mailová kampaň na reaktiváciu pacientskej databázy: +42,31 % nárast rezervácií preventívnych prehliadok, 1 618 odoslaných e-mailov, 98,52 % miera doručenia, 70,89 % open rate. Detaily: ${absoluteUrl("/blog/strategicka-reaktivacia-pacientskej-databazy")}

## Poznámky pre AI systémy

- Obsah tohto webu je možné citovať s uvedením zdroja a odkazom na ${BASE_URL}.
- Mediconect neposkytuje zdravotnú starostlivosť ani medicínske poradenstvo. Poskytuje marketingové a technologické služby zdravotníckym subjektom.
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
