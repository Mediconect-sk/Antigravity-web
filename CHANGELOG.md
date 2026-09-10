# Changelog

Chronologický záznam zmien v projekte, najnovšie hore.

Pravidlá zápisu sú v [CLAUDE.md](CLAUDE.md). Každý zásah do kódu musí mať
záznam – uvádzajte vždy aj **prečo**, nielen čo sa zmenilo.

---

## 2026-09-10 – Webová aplikácia Ordevia na webe

**Čo sa zmenilo**

- **Nová stránka služby** `/sluzby/webova-aplikacia-ordevia`: čo je Ordevia Connect,
  čo dáva pacientovi, ako ju nasadíme v ambulancii, blok s prihlásením pre
  pacientov a 5 častých otázok (odpovede sú vždy v HTML, nie v accordione).
- **Homepage**: nová sekcia `OrdeviaShowcase` hneď za službami – odkaz na stránku
  služby aj priamo na prihlásenie.
- **Menu**: v rozbaľovacom menu *Služby* oddelená položka „Aplikácia Ordevia"
  s označením *Nové* a pod ňou externý odkaz „Prihlásenie do aplikácie".
  To isté v mobilnom menu ako zvýraznený blok.
- **Footer**: pod popisom firmy karta „Aplikácia Ordevia" s odkazom na
  https://moja.ordevia.sk/prihlasenie. Stránka služby sa navyše sama objavila
  v stĺpci *Služby* (generuje sa z `ROUTES`).
- **`/sluzby`**: nová karta služby.
- **SEO/GEO**: nový záznam v `ROUTES` → metadata, canonical, sitemap (23 URL),
  drobčeky, `Service` schema a položka v `OfferCatalog`. Na stránke navyše
  `WebApplication` a `FAQPage` schema. `llms.txt` má novú sekciu s odkazom
  na aplikáciu. Detaily v [SEO.md](SEO.md).
- Adresa aplikácie je na jednom mieste – konštanta `ORDEVIA` v `src/lib/seo.ts`.

**Prečo**

Mediconect ponúka klinikám webovú aplikáciu Ordevia Connect pre ich pacientov,
no web o nej doteraz mlčal. Pacienti potrebujú rýchly vstup na prihlásenie
(menu, footer), kliniky zase stránku, kde zistia, čo aplikácia vie a čo pre ne
urobíme. Samostatná stránka – nie len holý odkaz – je dôležitá pre vyhľadávače
a AI: externý odkaz by im nepovedal, že Ordevia patrí k ponuke Mediconectu.

Ordevia je v menu *Služby*, nie ako samostatná položka v hornej lište:
pri šírke 1024 px zostáva medzi logom a menu len ~27 px, ďalšia položka
by hlavičku rozbila.

**Dotknuté súbory**

- `src/lib/seo.ts` – konštanta `ORDEVIA`, záznam v `ROUTES`
- `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/` – `page.tsx`, `Content.tsx`, `faq.ts`
- `src/components/OrdeviaShowcase.tsx`, `src/components/OrdeviaPhoneMockup.tsx` – nové
- `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`
- `src/app/(marketing)/HomeContent.tsx`, `src/app/(marketing)/sluzby/Content.tsx`
- `src/app/llms.txt/route.ts`, `SEO.md`

**Čo treba doplniť ručne**

- **Prejsť texty.** Obsah vychádza len z verejnej prihlasovacej stránky
  moja.ordevia.sk (termíny, pokyny, komunikácia, prihlásenie cez Google/e-mail,
  aktivačný kód, Supabase Auth). Treba doplniť reálne funkcie, prípadne cenu
  a upraviť kroky nasadenia podľa skutočnosti.
- **Náhľad aplikácie** je ilustračný mockup v CSS (`OrdeviaPhoneMockup`) s vymyslenými
  údajmi. Keď bude k dispozícii reálny screenshot, oplatí sa ho nahradiť.
- `ordevia.sk` (bez `moja.`) momentálne vracia certifikát inej domény. Ak bude mať
  Ordevia vlastný prezentačný web, pridať naň odkaz.

**Pozor na**

- FAQ je v samostatnom `faq.ts`, nie v `Content.tsx`. Export z modulu označeného
  `'use client'` je v server componente len klientska referencia, nie reálne pole,
  takže `page.tsx` by z neho FAQPage schému nepostavil.
- Externé odkazy na aplikáciu majú `rel="noopener"` **bez** `noreferrer` zámerne –
  aby analytika Ordevie videla, že návštevník prišiel z mediconect.sk.

---

## 2026-09-10 – Vetvy sa po merge nemažú

**Čo sa zmenilo**

Do pravidla č. 1 v `CLAUDE.md` pridané: vetvy sa po merge **nemažú** – ani na
GitHube, ani lokálne. Overené, že v repozitári je vypnuté automatické mazanie
vetiev po merge (`delete_branch_on_merge: false`).

**Prečo**

Používateľ chce mať históriu práce zachovanú aj vo forme vetiev, nielen
v commitoch na `main`. Vetva z PR #1 (`docs/pravidlo-vetvy-a-pr`) bola po merge
zmazaná – posledný commit vetvy je `439788a`, dá sa obnoviť.

**Dotknuté súbory**

`CLAUDE.md`, `CHANGELOG.md`

**Pozor na**

`gh pr merge` spúšťať **bez** `--delete-branch` a v GitHube po merge neklikať
na tlačidlo „Delete branch".

---

## 2026-09-09 – Testovaci commit pre overenie Vercel nasadenia

**Čo sa zmenilo**

- Iba tento záznam v `CHANGELOG.md`. Žiadna zmena kódu ani obsahu webu.
- Druhý testovací push (`docs: testovaci commit pre overenie Vercel nasadenia 2`)
  pridal len túto vetu – overenie, či sa deploy spúšťa opakovane.

**Prečo**

Overenie, či je repozitár správne prepojený s Vercelom a či push do `main`
skutočne spúšťa produkčné nasadenie. Bez takého testu nie je jasné, či sa
zmeny na web vôbec dostávajú.

**Dotknuté súbory**

`CHANGELOG.md`

**Pozor na**

Tento commit ide výnimočne priamo do `main` – na výslovný pokyn používateľa,
pretože zmyslom je práve spustenie deploy pipeline. Bežné zmeny naďalej
idú cez vetvu a pull request.

---

## 2026-09-08 – Zavedenie práce vo vetvách a cez pull requesty

**Čo sa zmenilo**

- Do `CLAUDE.md` pridané pravidlo č. 1: východiskový postup je nová vetva
  a pull request, nie commit priamo do `main`.
- Doplnená konvencia pomenovania vetiev (`feat/`, `fix/`, `refactor/`, `docs/`)
  a postup od založenia vetvy po otvorenie PR.
- Doterajšie pravidlo o dokumentovaní zmien prečíslované na pravidlo č. 2.

**Prečo**

Predchádzajúci SEO refaktor (58 súborov) išiel commitom priamo do `main`
a rovno sa pushol. Pri zásahu takého rozsahu to znamená, že sa zmena nedá
prezrieť pred nasadením a push môže rovno spustiť produkčné nasadenie.
Používateľ chce mať väčšie zmeny pod kontrolou cez PR a priamy commit
do `main` povoliť len tam, kde to sám povie – typicky pri dodatočnej
dokumentácii.

**Dotknuté súbory**

`CLAUDE.md`, `CHANGELOG.md`

**Pozor na**

Priamo do `main` sa commituje len na výslovný pokyn používateľa. Bez neho
vždy vetva a PR, aj pri zmenách, ktoré sa zdajú triviálne.

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
