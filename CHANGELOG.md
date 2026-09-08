# Changelog

Chronologický záznam zmien v projekte, najnovšie hore.

Pravidlá zápisu sú v [CLAUDE.md](CLAUDE.md). Každý zásah do kódu musí mať
záznam – uvádzajte vždy aj **prečo**, nielen čo sa zmenilo.

---

## 2026-09-08 – Zavedenie povinnej dokumentácie zmien

**Čo sa zmenilo**

- Pridaný `CLAUDE.md` s konvenciami projektu a pravidlom, že každý zásah
  do kódu sa zapisuje do dokumentácie.
- Založený tento `CHANGELOG.md`.

**Prečo**

Doteraz sa dôvody zmien nikde nezaznamenávali. Z kódu sa spätne nedá vyčítať,
prečo je niečo riešené práve tak – napríklad prečo je každá stránka rozdelená
na `page.tsx` a `Content.tsx`, alebo prečo accordion nepoužíva `framer-motion`.
Bez toho sa dá pri ďalšej úprave omylom vrátiť späť oprava, ktorá niečo riešila.

**Dotknuté súbory**

`CLAUDE.md`, `CHANGELOG.md`

---

## 2026-09-08 – Kompletná oprava SEO a GEO základov

Commit `d932da0`. Podrobný audit a popis fungovania je v [SEO.md](SEO.md).

**Čo sa zmenilo**

Kritické opravy:

- Odstránený `alternates.canonical` z root layoutu.
- Všetkých 22 stránok dostalo vlastnú metadatu; klientske stránky rozdelené
  na server `page.tsx` + client `Content.tsx`.
- `sitemap.xml` má 22 URL namiesto 4.
- Pridaná GA4 analytika s Consent Mode v2 napojená na existujúcu cookie lištu.
- Pripravené meta tagy pre Search Console a Bing Webmaster Tools.
- Opravený 404 obrázok na `/o-nas` a nesediaci `alt` pri fotke tímu.

Structured data:

- `BreadcrumbList` + vizuálne drobčeky na každej stránke.
- `Service` schema na 7 servisných stránkach + `OfferCatalog`.
- `BlogPosting` s `datePublished`/`dateModified`, `Blog`, `Person`.
- `Organization`/`LocalBusiness` rozšírené o typ `ProfessionalService`,
  IČO, IČ DPH, `foundingDate` a `sameAs`.
- `FAQPage` z 11 otázok.

GEO:

- FAQ odpovede sú v DOM vždy, vrátane všetkých troch kategórií.
- `llms.txt` prepísaný podľa špecifikácie a generovaný dynamicky zo `ROUTES`.
- `robots.txt` povoľuje 16 AI crawlerov, `/dakujeme` dostalo `noindex`.

Ostatné:

- Footer má 21 interných odkazov namiesto 4.
- Kanit sa načítaval 3×, teraz raz. Poppins odstránený.

**Prečo**

- **Canonical v root layoute** sa dedil do všetkých podstránok a oznamoval
  Googlu, že kanonickou verziou každej stránky je domovská stránka. Web si tým
  aktívne de-indexoval vlastné podstránky.
- **Chýbajúca metadata** – všetky stránky boli `'use client'` a z takého
  komponentu sa `metadata` exportovať nedá. 16 stránok malo vo výsledkoch
  vyhľadávania identický titulok aj popis, čo Google vyhodnocuje ako duplicitu.
- **FAQ odpovede** boli odmontované cez `AnimatePresence`, kým bol accordion
  zbalený, takže vôbec neexistovali v HTML. Nevideli ich vyhľadávače ani AI
  crawlery, ktoré nespúšťajú JavaScript.
- **Trojité načítanie Kanitu** obsahovalo natvrdo zapísanú Google URL s číslom
  verzie, ktorá by po rotácii na strane Googlu začala vracať 404.

**Dotknuté súbory**

Nové: `src/lib/seo.ts`, `src/components/JsonLd.tsx`, `src/components/Analytics.tsx`,
`src/app/(marketing)/faq.ts`, `src/app/llms.txt/route.ts`, `SEO.md`, `.env.example`,
21× `page.tsx` a 21× `Content.tsx`.

Upravené: `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`,
`src/app/globals.css`, `src/components/PageHero.tsx`, `src/components/SiteFooter.tsx`,
blogové stránky.

Zmazané: `public/llms.txt` (nahradené dynamickou routou).

**Čo treba doplniť ručne**

1. `NEXT_PUBLIC_GA_ID` a overovacie reťazce – v `.env.local` **aj v hostingu**.
2. Overiť doménu v Google Search Console a odoslať sitemapu.
3. Založiť Google Business Profile s NAP zhodným s footerom.
4. Doplniť `SOCIAL_PROFILES` v `src/lib/seo.ts` – zatiaľ prázdne pole.

Detaily v [SEO.md, časť 4](SEO.md#4-čo-treba-doplniť-ručne).

**Pozor na**

- Nikdy nepridávať `alternates.canonical` do `src/app/layout.tsx`.
- Nové stránky pridávať do `ROUTES` v `src/lib/seo.ts`, inak nebudú mať
  metadatu ani sa nedostanú do sitemapy.
- Rozbaľovací obsah musí zostať v DOM.

**Neoverené**

Rozbaľovacia animácia FAQ accordionu nebola overená v reálnom prehliadači –
náhľadový panel vo vývojovom prostredí stránku nevykresľoval. Štruktúra
(11 otázok, `aria-expanded`, prepínanie kategórií) overená cez DOM.
