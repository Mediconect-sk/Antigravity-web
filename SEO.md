# SEO a GEO – audit, riešenie a čo doplniť

Tento dokument popisuje, ako je na webe riešené **SEO** (klasické vyhľadávače)
a **GEO** (Generative Engine Optimization – ChatGPT, Perplexity, Gemini,
Google AI Overviews), čo bolo opravené a čo je potrebné doplniť ručne mimo kódu.

- [1. Stav pred úpravou](#1-stav-pred-úpravou)
- [2. Čo bolo opravené](#2-čo-bolo-opravené)
- [3. Ako to funguje](#3-ako-to-funguje)
- [4. Čo treba doplniť ručne](#4-čo-treba-doplniť-ručne)
- [5. Čo zostáva do budúcna](#5-čo-zostáva-do-budúcna)
- [6. Ako overiť, že všetko funguje](#6-ako-overiť-že-všetko-funguje)

---

## 1. Stav pred úpravou

### Čo už bolo v poriadku

- Root metadata s title template, Open Graph, Twitter card a robots direktívami.
- JSON-LD `@graph` s `Organization`, `WebSite`, `WebPage` a `LocalBusiness`.
- `robots.ts` explicitne povoľoval štyroch AI crawlerov.
- Existoval statický `llms.txt`.
- Blogové stránky boli server components s vlastnou metadatou a canonicalom.
- `lang="sk"`, `next/image`, OG obrázok.

### Kritické chyby

| # | Problém | Dopad |
|---|---|---|
| 1 | `alternates.canonical` bol v root layoute | Next.js dedí root metadata do podstránok. Každá zo 16 stránok tak hlásila Googlu, že jej kanonickou verziou je **domovská stránka** – čiže si web aktívne de-indexoval. |
| 2 | 16 z 18 stránok nemalo vlastnú metadatu | Všetky stránky boli `'use client'`, a z klientskeho komponentu **nie je možné exportovať `metadata`**. Vo výsledkoch vyhľadávania mali identický titulok aj popis. |
| 3 | Sitemapa obsahovala 4 URL z 19 | Chýbali všetky služby, segmenty, o-nás, kontakt, výsledky aj blog. |
| 4 | Žiadna analytika ani Search Console | Nedalo sa merať nič a nebolo ako odoslať sitemapu. |
| 5 | FAQ odpovede neboli v HTML | `AnimatePresence` ich odmontoval, kým bol accordion zbalený. Nevidel ich Google ani AI crawlery. Navyše bola v DOM vždy len jedna z troch kategórií. |
| 6 | 404 obrázok na `/o-nas` | `/images/about/team-collaboration.png` v `public/` neexistoval. |
| 7 | Kanit sa načítaval 3× | `next/font/google` + `@import` v `globals.css` + natvrdo zapísaný `<link rel="preload">` na URL s číslom verzie, ktorá by časom začala vracať 404. |
| 8 | Poppins sa načítaval, ale nikde nepoužíval | Zbytočná záťaž pri načítaní. |

### Ďalšie medzery

- Žiadne drobčeky (ani vizuálne, ani `BreadcrumbList`).
- Žiadna `Service`, `FAQPage`, `BlogPosting` ani `Person` schéma.
- Footer linkoval len na blog a právne stránky – slabý interný linking.
- `sameAs` v `Organization` bolo prázdne – firma bola pre Google aj AI „neznáma entita".
- `llms.txt` uvádzal 3 stránky z 19 a nemal formát podľa špecifikácie.
- Nesediaci `alt` pri fotke v sekcii tímu (uvedené meno inej osoby).

---

## 2. Čo bolo opravené

### Fáza 1 – kritické

1. **Canonical.** `alternates.canonical` odstránený z root layoutu. Každá stránka
   má vlastný správny canonical cez `pageMetadata()`.
2. **Per-page metadata pre všetkých 22 stránok.** Každá stránka rozdelená na
   server `page.tsx` (metadata + structured data) a `Content.tsx` (animácie).
   Každá má teraz vlastný titulok, popis, OG aj Twitter card.
3. **Sitemapa má 22 URL**, generuje sa automaticky zo `ROUTES`.
4. **Analytika a verifikácia.** `Analytics.tsx` – GA4 s Consent Mode v2 napojený
   na existujúcu cookie lištu. Pripravené meta tagy pre Search Console a Bing.
5. **Opravený 404 obrázok** na `/o-nas` (nahradený existujúcim
   `/images/proces/03_strategy.png`) a nesediaci `alt` pri fotke tímu.

### Fáza 2 – structured data a štruktúra

6. **Drobčeky** – vizuálne v `PageHero` + `BreadcrumbList` schema na každej stránke.
7. **`Service` schema** na 7 servisných stránkach + `OfferCatalog` v `LocalBusiness`.
8. **`BlogPosting`** s `datePublished` / `dateModified`, **`Blog`** na výpise,
   **`Person`** pre kontaktnú osobu.
9. **Rozšírená `Organization` / `LocalBusiness`** – typ `ProfessionalService`,
   IČO, IČ DPH, `foundingDate`, `identifier`, `currenciesAccepted`, `sameAs`.
10. **`FAQPage` z 11 otázok** a hlavne oprava toho, že odpovede vôbec neboli
    v HTML. Teraz sú v DOM vždy, vrátane všetkých troch kategórií.
11. **Footer má 21 interných odkazov** namiesto 4 – všetky služby a segmenty.
12. **`llms.txt` prepísaný** podľa [llmstxt.org](https://llmstxt.org/) a generovaný
    dynamicky zo `ROUTES`.
13. **`robots.txt`** – 16 AI crawlerov, `/dakujeme` dostalo `noindex`.
14. **Fonty** – Kanit sa načítava raz, Poppins odstránený.

---

## 3. Ako to funguje

### `src/lib/seo.ts` – jediný zdroj pravdy

Obsahuje mapu `ROUTES`, kde má každá stránka:

| Pole | Význam |
|---|---|
| `label` | popisok v drobčekovej navigácii a vo footeri |
| `title` | `<title>` bez sufixu `\| Mediconect` (ten dopĺňa template) |
| `description` | meta description, OG description, popis v `llms.txt` |
| `parent` | nadradená stránka – z toho sa odvodzujú drobčeky |
| `serviceName` | ak je vyplnené, stránka dostane `Service` structured data |
| `priority`, `changeFrequency` | hodnoty do `sitemap.xml` |

**Pri pridaní novej stránky stačí pridať jeden záznam do `ROUTES`.** Automaticky
sa z neho vygeneruje:

- `<title>`, meta description, Open Graph aj Twitter card,
- **vlastný `<link rel="canonical">`**,
- záznam v `sitemap.xml`,
- položka v `llms.txt`,
- drobčeková navigácia + `BreadcrumbList` schema,
- odkaz vo footeri (ak má `parent` `/sluzby` alebo `/pre-koho`).

### Náhľadový obrázok pri zdieľaní (Open Graph)

Obrázok, ktorý ukáže WhatsApp, Facebook, LinkedIn či Messenger pri zdieľaní
odkazu, sa **generuje pri builde podľa sekcie webu** – nie je to jeden statický
súbor pre celý web.

- **`src/lib/og.ts`** – zoznam sekcií (`OG_SECTIONS`: názov sekcie pod logom
  a alt text) a prefixy ciest (`OG_PREFIXES`), ktoré k nim patria.
- **`src/app/og/[sekcia]/route.tsx`** – vykreslí PNG 1200 × 630 (`next/og`):
  tmavé pozadie, logo z hlavičky webu (`public/Logo final.png`), pod ním názov
  sekcie a sieť v pravej časti. Výstup: `/og/<sekcia>.png`, staticky.
- **`ogImageFor(path)`** v `src/lib/seo.ts` – vráti obrázok pre danú cestu;
  používa ho `metadataFor()`, root layout aj blog (článok bez `cover`).

| Sekcia | Cesty | Text pod logom |
|---|---|---|
| `medical-business-partner` | všetko ostatné (domov, O nás, kontakt, blog…) | – (len logo) |
| `healthcare-marketing` | `/sluzby/*`, `/pre-koho/*` | Healthcare marketing |
| `business-partner` | `/business-partner/*` | Business partner pre ambulancie |
| `sprava-a-ochrana-majetku` | `/sprava-a-ochrana-majetku/*` | Správa a ochrana majetku lekára |

Nový pilier = záznam v `OG_SECTIONS` + prefix v `OG_PREFIXES`.

> ⚠️ WhatsApp, Facebook aj LinkedIn si náhľad **ukladajú do cache** (aj na
> týždne). Po nasadení ho obnovíte cez
> [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
> (tlačidlo „Scrape Again" – platí aj pre WhatsApp) a
> [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
> Starý `public/og-image.png` (pôvodné logo, „Strategický partner pre
> zdravotníctvo") web už nepoužíva; súbor ostáva len pre staré odkazy.

### Štruktúra stránok

Každá stránka je rozdelená na dva súbory:

- **`page.tsx`** – server component. Exportuje `metadata` a vykresľuje structured data.
- **`Content.tsx`** – client component s animáciami (`framer-motion`).

Toto rozdelenie je nutné: Next.js **neumožňuje exportovať `metadata` z komponentu
označeného `'use client'`**.

> ⚠️ **Nikdy nepridávajte `alternates.canonical` do `src/app/layout.tsx`.**
> Root metadata sa dedia do všetkých podstránok. Canonical nastavený v layoute
> každej podstránke oznámi, že jej kanonickou verziou je domovská stránka –
> a Google ju prestane indexovať. Canonical rieši `pageMetadata()` pre každú
> stránku zvlášť.

### Structured data (schema.org)

| Kde | Čo |
|---|---|
| `src/app/layout.tsx` | `Organization`, `WebSite`, `ProfessionalService`/`LocalBusiness` s adresou, GPS, otváracími hodinami, IČO/IČ DPH a katalógom služieb |
| každá `page.tsx` | `WebPage` + `BreadcrumbList` (+ `Service` pri servisných stránkach) |
| domovská stránka | `FAQPage` zo `src/app/(marketing)/faq.ts` + `Person` (kontaktná osoba) |
| `/blog` | `Blog` so zoznamom `blogPost` (generuje sa zo všetkých článkov) |
| `/blog/[slug]` | `BlogPosting` s `datePublished` / `dateModified`, `wordCount`, `timeRequired`, `author` = `Person` (rovnaké `@id` ako kontaktná osoba na homepage) + `FAQPage`, ak má článok `faq` vo frontmatter |
| `/sluzby/webova-aplikacia-ordevia` | navyše `WebApplication` (Ordevia Connect, `url` na moja.ordevia.sk, predajca aj tvorca = Mediconect, `featureList` len s overenými funkciami) a `FAQPage` zo súboru `faq.ts` v priečinku stránky |

### Blog

Články **nie sú v `ROUTES`**. Sú to súbory `content/blog/*.mdx` s hlavičkou
(frontmatter), ktoré načítava `src/lib/blog.ts`. Z hlavičky sa odvodí
`<title>`, meta description, canonical, Open Graph typu `article`, drobčeky,
`BlogPosting` schema, položka v `sitemap.xml` aj v `llms.txt`.

- **Nový článok = nový `.mdx` súbor.** Nič iné netreba upravovať.
- `src/lib/blog.ts` číta zo súborového systému – smie sa importovať len
  v server komponentoch, `sitemap.ts` a route handleroch, nikdy v `'use client'`.
  Preto je oddelený od `seo.ts`, ktorý používa hlavička aj footer.
- Autori sú v `content/authors.ts`; `id` autora musí sedieť s `Person` schémou
  na domovskej stránke, aby Google chápal, že ide o tú istú osobu.
- Otázky v poli `faq` sa vykreslia na konci článku (natívny `<details>`, obsah
  vždy v DOM) a zároveň vygenerujú `FAQPage` schema.
- Pravidlá pre obsah článkov a zoznam tém sú v [BLOG.md](BLOG.md).

### Ordevia Connect

Adresy (aplikácia pre pacientov, prihlásenie, žiadosť o prístup do ukážky)
sú v konštante `ORDEVIA` v `src/lib/seo.ts`. Odkazuje na ňu menu (mobilné menu), footer, sekcia na homepage, stránka produktu aj `llms.txt` –
pri zmene adresy stačí upraviť konštantu.

Čo smie web o Ordevii tvrdiť a čo nie, je v [ORDEVIA.md](ORDEVIA.md).

Externé odkazy majú `rel="noopener"` bez `noreferrer`, aby Ordevia vo svojej
analytike videla, že návštevník prišiel z mediconect.sk.

### MyMedical – komunita lekárov

MyMedical beží na **vlastnej doméne** `mymedical.sk` a na mediconect.sk nemá
vlastnú stránku – preto **nie je v `ROUTES`** ani v `sitemap.xml`. Adresy sú
v konštante `MYMEDICAL` v `src/lib/seo.ts`:

| Kde | Čo |
|---|---|
| Menu (desktop aj mobil), footer (spodný riadok) | odkaz „MyMedical" priamo na `mymedical.sk` |
| Domovská stránka, pod „Pre koho pracujeme" | pás `MyMedicalStrip` – odkaz na komunitu aj na prieskum |
| `mediconect.sk/mymedical` | krátka adresa, ktorá presmeruje na `mymedical.sk` (`redirects()` v `next.config.mjs`, 307) |
| `/sluzby/umela-inteligencia-pre-ambulanciu#prieskum` | pozvánka na prieskum, tlačidlo vedie na `mymedical.sk/dotazniky/AI` |
| `llms.txt` | sekcia MyMedical s odkazom na komunitu aj prieskum |

Odkazy sa otvárajú v rovnakej karte (presmerovanie, nie „odbočka"). Adresa
presmerovania je zámerne zapísaná dvakrát – v `MYMEDICAL` aj v
`next.config.mjs`, ktorý TypeScript konštanty neimportuje; pri zmene upraviť obe.

### FAQ

Otázky a odpovede sú v `src/app/(marketing)/faq.ts`. Rovnaké dáta používa
vizuálny accordion aj `FAQPage` schema, takže sa nemôžu rozísť.

Accordion drží odpovede **vždy v DOM** (len ich vizuálne zbalí cez `max-height`).
Rovnako sú v DOM všetky tri kategórie otázok, nielen aktívna. Prechod rieši
čisté CSS, nie `framer-motion` – animácie v tejto sekcii sú gatované variantmi
rodičovského komponentu a panel by zostal zabalený.

### GEO – AI vyhľadávače

- `src/app/robots.ts` – explicitne povoľuje 16 AI crawlerov (GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot,
  Google-Extended, Applebot-Extended a ďalšie).
- `src/app/llms.txt/route.ts` – generuje `/llms.txt` podľa špecifikácie zo `ROUTES`,
  vrátane firemných údajov a overiteľných výsledkov.

### Meranie návštevnosti a konverzií

Meranie má dve vrstvy (`src/components/Analytics.tsx`):

| Vrstva | Nástroj | Cookies / súhlas | Na čo |
|---|---|---|---|
| Primárna | Vercel Web Analytics + Speed Insights | bez cookies, súhlas netreba | návštevy, zdroje, stránky, konverzie, rýchlosť (Core Web Vitals) |
| Voliteľná | Google Analytics 4 (Consent Mode v2) | až po súhlase | zapnúť až pri platených kampaniach (Google Ads) |

Prečo primárne Vercel: cookie lištu časť návštevníkov odmietne, GA4 by potom
videl len zlomok návštev. Vercel meria všetky návštevy anonymne a nič
neukladá do zariadenia. Web Analytics sa musí zapnúť vo Verceli
(projekt `antigravity-web` → Analytics → Enable), inak skript nič neodosiela.

GA4: bez premennej `NEXT_PUBLIC_GA_ID` sa nenačíta žiadny skript. Súhlas sa
preberá z `localStorage` kľúča `cookie_consent`, ktorý zapisuje `CookieConsent.tsx`.

**Konverzné udalosti** – jediný zoznam je v `src/lib/track.ts` (`trackEvent`),
posielajú sa do Vercelu aj GA4:

| Udalosť | Kde vzniká |
|---|---|
| `dopyt_odoslany` | `MediconectForm` s endpointom `/api/dopyt` (FAQ / služby) |
| `kontakt_odoslany` | `MediconectForm` na /kontakt, `ContactModal` |
| `konzultacia_odoslana` | `KonzultaciaFormular` na /konzultacia (vlastnosť `potreba`) |
| `newsletter_prihlaseny` | newsletter na domovskej stránke |
| `klik_telefon`, `klik_email`, `klik_mymedical` | jeden poslucháč klikov v `Analytics.tsx` |

Pravidlá: do vlastností udalostí nikdy neposielať osobné údaje (meno, e-mail,
telefón, text správy). Nový formulár = zavolať `trackEvent` po úspešnom
odoslaní a doplniť riadok do tejto tabuľky.

> Pozor: vlastné udalosti (custom events) vo Vercel Web Analytics sa
> zaznamenávajú len na plánoch Pro a vyššie. Na pláne Hobby sa merajú len
> návštevy; udalosti potom vidno iba v GA4.

**Cookie lišta** – voliteľné kategórie (analytické, marketingové) sú
predvolene vypnuté. Predzaškrtnutý súhlas nie je podľa GDPR platný
(rozsudok SDEÚ C-673/17 Planet49).

---

## 4. Čo treba doplniť ručne

Bez týchto štyroch krokov nebude efekt úplný.

### 1. Premenné prostredia

Skopírujte `.env.example` do `.env.local` (a doplňte aj v hostingu, napr. vo Verceli):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_BING_SITE_VERIFICATION=...
```

### 2. Google Search Console

1. Pridajte doménu na [search.google.com/search-console](https://search.google.com/search-console).
2. Overte ju (DNS záznam, alebo HTML tag cez premennú vyššie).
3. Odošlite sitemapu: `https://www.mediconect.sk/sitemap.xml`.
4. Cez „Kontrola URL adresy" požiadajte o indexáciu kľúčových stránok.

To isté zopakujte v [Bing Webmaster Tools](https://www.bing.com/webmasters) –
Bing je zdrojom dát pre ChatGPT Search a Copilot.

### 3. Google Business Profile

Pre lokálnu viditeľnosť je to najsilnejší jediný faktor, silnejší než celý web.
Založte profil na adrese `Lounská 629/2, 031 04 Liptovský Mikuláš`, overte ho
a doplňte kategórie, otváracie hodiny a fotky. **Názov, adresa a telefón musia
byť znak po znaku zhodné** s footerom webu a so schémou v `layout.tsx`.

Po založení pridajte odkaz na profil do `SOCIAL_PROFILES`.

### 4. Profily na sociálnych sieťach

V `src/lib/seo.ts` je `SOCIAL_PROFILES` zatiaľ prázdne pole. Doplňte reálne URL:

```ts
export const SOCIAL_PROFILES: string[] = [
    "https://www.linkedin.com/company/mediconect",
    "https://www.facebook.com/mediconect",
    "https://www.instagram.com/mediconect",
];
```

Prepojí sa tým `sameAs` v `Organization` aj `LocalBusiness` schéme. Google
aj AI vyhľadávače cez tieto odkazy prepájajú entitu firmy – bez nich je firma
pre ne „neznáma".

---

## 5. Čo zostáva do budúcna

Tieto body si vyžadujú nový obsah, preto neboli súčasťou technickej opravy.

### Obsah

- **Servisné stránky sú tenké** – majú približne 200–300 slov reálneho textu.
  Na konkurenčné komerčné frázy treba 800–1500 slov.
- **Štatistiky bez zdroja.** Tvrdenia ako „71 % pacientov si pred výberom lekára
  skontrolovalo recenzie" alebo „viac než 80 % dospelých vyhľadáva informácie
  o zdraví" nemajú uvedený zdroj. Google aj AI vyhľadávače citujú prednostne
  čísla s menovaným zdrojom a rokom.
- **Blog má dva články** (stav k 12. 9. 2026). AI vyhľadávače citujú zdroje
  s tematickou hĺbkou; realisticky treba 15–25 článkov. Zoznam tém je v `BLOG.md`.
- **Chýba obsah v štruktúre otázka → odpoveď.** Ľudia sa AI pýtajú
  *„Koľko stojí marketing pre ambulanciu?"*, *„Ako získať viac pacientov
  do súkromnej kliniky?"*, *„Oplatí sa lekárovi Instagram?"* – na tieto otázky
  zatiaľ nemá web samostatnú stránku.
- **Lokálne landing pages**, ak chcete cieliť konkrétne mestá
  (Bratislava, Košice, Žilina, Banská Bystrica).
- **Autorské profily.** Články majú od 12. 9. 2026 autora s `Person` schémou
  a boxom pod textom; chýba ešte samostatná bio stránka autora a odkazy na
  jeho profily (`sameAs` v `content/authors.ts`).

### Technické

- **Stolzl fonty sú OTF, nie WOFF2.** Šesť súborov po ~55 kB; vo WOFF2 by to bolo
  približne 40 % veľkosti. Dva z nich sa navyše preloadujú, čím blokujú LCP.
- **Ťažký `framer-motion` na každej stránke** + `blur` efekty – riziko slabého INP.
- **Favicon je PNG s medzerou v názve** (`Favikona web.png`). Chýba `favicon.ico`
  a `apple-touch-icon`.
- `next.config.mjs` je prázdny – žiadna konfigurácia obrázkov ani kompresie.

---

## 6. Ako overiť, že všetko funguje

```bash
npm run build
npm run dev
```

Potom skontrolujte:

| Čo | Kde |
|---|---|
| Unikátne titulky a canonicaly | zdrojový kód stránky, `<title>` a `<link rel="canonical">` |
| Structured data | [Rich Results Test](https://search.google.com/test/rich-results), [Schema Validator](https://validator.schema.org/) |
| Sitemapa | `http://localhost:3000/sitemap.xml` – 22 stránok z `ROUTES` + všetky články z `content/blog` (k 12. 9. 2026 spolu 24 URL) |
| robots | `http://localhost:3000/robots.txt` |
| llms.txt | `http://localhost:3000/llms.txt` |
| Rýchlosť a Core Web Vitals | [PageSpeed Insights](https://pagespeed.web.dev/) na produkčnej doméne |

### Prevádzkové odporúčania

- Po každom väčšom obsahovom update požiadajte v Search Console o preindexovanie.
- Nové články pridávajte do `ROUTES` – sitemapa aj `llms.txt` sa aktualizujú samy.
- Meta description držte v rozsahu 140–160 znakov, `title` do 60 znakov
  **vrátane** sufixu ` | Mediconect` (13 znakov).
