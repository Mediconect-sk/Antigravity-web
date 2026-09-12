# Blog – návrh novej podoby

> Stav k **12. 9. 2026**. Návrh, nie implementácia. Vychádza z prejdenia
> celého projektu: `brand_guidelines.md`, `SEO.md`, `src/lib/seo.ts`,
> existujúceho blogu a obsahu ostatných stránok.

- [1. Z čoho návrh vychádza](#1-z-čoho-návrh-vychádza)
- [2. Stav blogu dnes](#2-stav-blogu-dnes)
- [3. Cieľ blogu](#3-cieľ-blogu)
- [4. Obsahová stratégia](#4-obsahová-stratégia)
- [5. Technické riešenie](#5-technické-riešenie)
- [6. Dizajn](#6-dizajn)
- [7. Etapy realizácie](#7-etapy-realizácie)
- [8. Otvorené otázky](#8-otvorené-otázky)

---

## 1. Z čoho návrh vychádza

### Čo Mediconect robí (podľa projektu)

Z `brand_guidelines.md`, `llms.txt`, `ROUTES` a stránky *O nás*:

- **Marketingová agentúra výhradne pre zdravotníctvo.** MediConect s.r.o.,
  Liptovský Mikuláš, založená 2024, trh Slovensko + Česko.
- **Osem služieb:** akvizícia a výkonnostný marketing, web a SEO, sociálne siete,
  e-mail marketing a práca s dátami, databáza pacientov a jej aktivácia,
  CRM a automatizácie, umelá inteligencia pre ambulanciu, webová aplikácia
  Ordevia Connect.
- **Päť segmentov:** ambulancie, kliniky a polikliniky, diagnostické centrá
  a laboratóriá, kúpele a wellness, osobné značky lekárov.
- **Hodnoty:** medicínska etika, dátová inteligencia, inovácia, partnerstvo.
  Sľub značky: *„Vy sa starajte o zdravie pacientov, my o zdravie vašej značky."*
- **Argumenty, ktoré web opakuje:** GDPR, žiadne nereálne sľuby, minimálna
  časová záťaž lekára, transparentný reporting, open rate nad 70 %.
- **Referencie:** Aurel Clinic, MUDr. Jozef Čajka. Kontaktná osoba
  Tomáš Kuchta (Sales & Operation Director).

### Brand manuál

`brand_guidelines.md` je stručný (5 sekcií, po česky), ale jednoznačný:

| Prvok | Pravidlo |
|---|---|
| Vibe | „digitálny chirurgický nástroj“ – futuristický minimalizmus, tmavá elegancia, klinická precíznosť, glassmorphism |
| Farby | len `#0D1B2A` navy, `#4ECDC4` teal, `#1F1F1F` dark, `#FFFFFF` – a ich varianty |
| Typografia | geometrický sans-serif; v kóde **Kanit** na nadpisy, **Stolzl** na text |
| Prvky | zaoblenie 15–20 px, jemné tiene („levitácia“), vysoký kontrast |
| Cieľovka | lekári, majitelia kliník, estetická medicína – prémiový partner, ktorý si váži ich čas |

V `globals.css` sú tokeny už hotové (`--color-navy*`, `--color-teal*`, `.glass`,
`.glass-strong`, `.glow-teal`, `.text-gradient`, `.bg-grid`). Blog ich má len
dôsledne používať, nič nové vymýšľať netreba.

---

## 2. Stav blogu dnes

Jeden výpis (`/blog`) a jeden článok (prípadová štúdia o reaktivácii databázy).
Technicky je to v poriadku (server komponenty, metadata, `Blog` + `BlogPosting`
schema, canonical), ale ako blog to nefunguje:

| Problém | Kde | Dopad |
|---|---|---|
| Článok je ručne napísaný TSX so 400 riadkami | `blog/strategicka-reaktivacia…/page.tsx` | každý nový článok = kopírovanie súboru, žiadny jednotný layout |
| Zoznam článkov je natvrdo v komponente výpisu | `blog/page.tsx`, pole `posts` | pri každom článku sa musí upravovať výpis, `ROUTES` **aj** `blogJsonLd` – tri miesta, rozídu sa |
| Dva footre | oba blogové súbory majú vlastný `<footer>`, marketing layout pridá druhý | vizuálna chyba, známa zo `SEO.md` |
| Chýba autor | `author` v schéme je organizácia | slabé E-E-A-T; Google aj AI uprednostňujú obsah s menovaným odborníkom |
| Chýba newsletter | `api/newsletter/route.ts` existuje (SmartEmailing), ale na blogu nie je formulár | článok nezachytí čitateľa, ktorý ešte nechce konzultáciu |
| Žiadne kategórie, súvisiace články, čas čítania | – | čitateľ po dočítaní odíde |
| Rovnaký OG obrázok pre všetko | `og-image.png` | zdieľanie na LinkedIn/Facebook vyzerá pri každom článku identicky |
| Drobčeky si článok kreslí sám | vlastný `<nav>` namiesto `PageHero` | nekonzistentné s ostatnými stránkami |
| Drobnosti v obsahu | preklep „prevěnciu“ vo výpise; dashboard hovorí „Február 2025“, schéma `datePublished: 2026-03-01` | pôsobí nedôveryhodne pri článku, ktorý má budovať dôveru |
| CTA vedie na `/#kontakt` | koniec článku | ostatné stránky otvárajú kontaktný modal cez `CTABanner` |

`SEO.md` k tomu hovorí jasne: *„Blog má jeden článok. AI vyhľadávače citujú
zdroje s tematickou hĺbkou; realisticky treba 15–25 článkov."* a *„Chýba obsah
v štruktúre otázka → odpoveď."*

---

## 3. Cieľ blogu

Blog nie je „novinky z firmy“. Má tri konkrétne úlohy, v tomto poradí:

1. **Byť citovaný.** Google AI Overviews, ChatGPT, Perplexity odpovedajú na
   otázky typu *„koľko stojí marketing pre ambulanciu“*. Blog má byť slovenský
   zdroj, z ktorého si odpoveď zoberú – a pri odpovedi uvedú Mediconect.
2. **Dokazovať, nie tvrdiť.** Servisné stránky sľubujú výsledky. Blog ich
   ukazuje na číslach (prípadové štúdie, vlastné dáta z kampaní).
3. **Zachytiť lekára, ktorý ešte nie je pripravený volať.** Newsletter
   a súvisiace články ho udržia v kontakte, kým dozrie na konzultáciu.

Metrika úspechu nie je návštevnosť, ale: počet článkov v prvej stránke výsledkov
na cieľové otázky, počet citácií v AI odpovediach (dá sa sledovať ručne) a počet
dopytov, ktoré prídu cez článok (GA4 udalosť z CTA v článku).

---

## 4. Obsahová stratégia

### Štyri formáty

| Formát | Čo to je | Čo mu dáva silu pre SEO/GEO |
|---|---|---|
| **Prípadová štúdia** | reálny klient, výzva → postup → čísla | jediný formát, ktorý konkurencia nevie skopírovať; `BlogPosting` + konkrétne metriky |
| **Otázka → odpoveď** | článok postavený na jednej otázke, ktorú sa lekár pýta; priama odpoveď v prvom odseku, potom rozbor | presne to, čo AI vyhľadávače citujú; `FAQPage` schema s podotázkami |
| **Návod** | krok za krokom, čo si lekár môže spraviť sám (a kde už potrebuje agentúru) | dlhý čas na stránke, prirodzené interné odkazy na služby |
| **Dáta a benchmarky** | „open rate e-mailov v slovenských ambulanciách 2026“ z vlastných kampaní | čísla so zdrojom a rokom – to, čo `SEO.md` vyčíta súčasným stránkam |

### Kategórie (= piliere)

Kategórie kopírujú služby, aby každý článok mal kam interne odkazovať:

1. Akvizícia pacientov (Google/Meta kampane)
2. Web a SEO pre zdravotníctvo
3. E-mail a databáza pacientov
4. Sociálne siete a osobná značka lekára
5. AI a automatizácia v ambulancii
6. Prípadové štúdie (prierezová)

### Prvých 20 tém

Zoradené tak, aby prvá pätica pokryla najčastejšie otázky a hneď ukázala
všetky formáty. Otázkové články majú v názve priamo otázku – zámerne.

| # | Názov | Formát | Kategória | Interný odkaz na |
|---|---|---|---|---|
| 1 | Ako sme zvýšili počet preventívnych prehliadok o 42 % *(existujúci, prepísať do nového systému)* | štúdia | E-mail | databáza pacientov |
| 2 | Koľko stojí marketing pre ambulanciu? Reálne rozpätia a z čoho sa cena skladá | otázka | Akvizícia | `/sluzby`, FAQ |
| 3 | Ako získať nových pacientov do súkromnej ambulancie: 7 kanálov zoradených podľa návratnosti | návod | Akvizícia | akvizícia |
| 4 | Môže lekár na Slovensku inzerovať? Čo dovoľuje zákon o reklame a etický kódex SLK | otázka | Akvizícia | akvizícia, o nás |
| 5 | Databáza pacientov a GDPR: čo smiete pacientom posielať a čo nie | otázka | E-mail | databáza pacientov |
| 6 | Open rate 70 %: prečo e-maily od lekára otvárajú 3× viac ľudí než komerčné | dáta | E-mail | e-mail marketing |
| 7 | Google Business Profile pre ambulanciu: nastavenie krok za krokom | návod | Web a SEO | web a SEO |
| 8 | Prečo pacienti nenájdu vašu ambulanciu na Google (a čo s tým) | otázka | Web a SEO | web a SEO |
| 9 | Čo má obsahovať web ambulancie v roku 2026: 12 vecí, ktoré pacient hľadá | návod | Web a SEO | web a SEO |
| 10 | Oplatí sa lekárovi Instagram? Kedy áno, kedy je to strata času | otázka | Sociálne siete | sociálne siete |
| 11 | Osobná značka lekára: ako sa stať tvárou svojho odboru bez samochvály | návod | Sociálne siete | osobné značky |
| 12 | Recenzie na Google: ako na ne eticky reagovať a ako získať viac pozitívnych | návod | Web a SEO | web a SEO |
| 13 | Pacienti, ktorí sa objednajú a neprídu: ako znížiť no-show o tretinu | otázka | AI a automatizácia | CRM, Ordevia |
| 14 | AI recepčná v ambulancii: čo dnes reálne funguje a čo je marketing | otázka | AI a automatizácia | AI pre ambulanciu |
| 15 | Čo je Ordevia Connect a ako mení komunikáciu kliniky s pacientom | návod | AI a automatizácia | Ordevia |
| 16 | Marketing pre estetickú kliniku: pravidlá Meta a Google pre citlivé témy | otázka | Akvizícia | kliniky |
| 17 | Ako meriať návratnosť marketingu v ambulancii: 5 čísel, ktoré stačia | návod | Akvizícia | výsledky |
| 18 | Kúpele a wellness online: ako predávať pobyt, nie procedúru | návod | Akvizícia | kúpele |
| 19 | Diagnostické centrum a prevencia: ako komunikovať „príďte, kým vás nič nebolí“ | otázka | E-mail | diagnostické centrá |
| 20 | Druhá prípadová štúdia z existujúceho klienta (Aurel Clinic alebo MUDr. Čajka) | štúdia | Prípadové štúdie | podľa obsahu |

### Tón

Podľa brand manuálu a FAQ: **odborný, vecný, bez nátlaku**. Konkrétne:

- Odpoveď na otázku v prvých dvoch odsekoch, nie na konci.
- Každé číslo má zdroj a rok. Vlastné dáta označiť ako vlastné.
- Žiadne „revolučný“, „garantujeme“, „zaručene“. Web to sám sľubuje vo FAQ.
- Lekár = partner s málo časom. Články 900–1500 slov, s obsahom (TOC) a zhrnutím hore.
- Slovenčina, oslovenie „vy“.

### Frekvencia

Dva články mesačne sú udržateľné a za rok dajú 24 článkov, teda cieľ zo
`SEO.md`. Na štart 5 článkov naraz (č. 1–5), aby blog nevyzeral prázdny.

---

## 5. Technické riešenie

### Odporúčanie: MDX súbory + registre v TypeScripte

Tri možnosti, ktoré prichádzajú do úvahy:

| | A. MDX v repozitári | B. TSX na článok (dnes) | C. Headless CMS |
|---|---|---|---|
| Nový článok | jeden `.mdx` súbor s hlavičkou | kópia 400-riadkového súboru | zápis v cudzom rozhraní |
| Kto píše | ktokoľvek s GitHubom, alebo Claude v PR | len vývojár | ktokoľvek |
| Náklad | žiadny | žiadny | mesačný poplatok alebo self-hosting |
| Verzie, review | git + PR (pravidlo č. 1) | git + PR | mimo repozitára |
| SEO, schema, sitemap | automaticky z registra | ručne na 3 miestach | cez API, treba integrovať |

**Odporúčam A.** Zapadá do existujúceho pravidla „nová stránka = jeden záznam
v `ROUTES`", články prechádzajú cez PR ako všetko ostatné a dajú sa písať
priamo v tejto relácii. CMS má zmysel až vtedy, keď bude písať niekto,
kto nechce vidieť GitHub.

### Štruktúra

```
content/
  blog/
    ako-sme-zvysili-pocet-preventivnych-prehliadok.mdx
    kolko-stoji-marketing-pre-ambulanciu.mdx
    ...
  authors.ts                      # autori (meno, pozícia, bio, foto, LinkedIn)

src/lib/blog.ts                   # načítanie MDX, typy, kategórie, pomocné funkcie
src/lib/seo.ts                    # ROUTES sa rozšíria o články automaticky z blog.ts

src/app/(marketing)/blog/
  page.tsx                        # výpis: hlavný článok + mriežka + filter kategórií
  [slug]/page.tsx                 # článok – jeden layout pre všetky
  [slug]/opengraph-image.tsx      # generovaný OG obrázok s názvom článku
  kategoria/[kategoria]/page.tsx  # výpis jednej kategórie
  autor/[slug]/page.tsx           # profil autora (E-E-A-T)

src/components/blog/
  PostCard.tsx, PostHeader.tsx, TableOfContents.tsx, AuthorBox.tsx,
  RelatedPosts.tsx, NewsletterBox.tsx, Callout.tsx, MetricGrid.tsx, ...
```

### Hlavička článku (frontmatter)

```yaml
---
title: "Koľko stojí marketing pre ambulanciu?"
description: "Reálne cenové rozpätia pre ambulanciu a kliniku na Slovensku …"   # 140–160 znakov
date: 2026-10-01
updated: 2026-10-01
author: tomas-kuchta
category: akvizicia
tags: [cena, rozpočet, ambulancia]
format: otazka           # studia | otazka | navod | data
cover: /images/blog/kolko-stoji-marketing.png   # voliteľné
faq:                     # voliteľné – vygeneruje FAQPage schema
  - q: "Aká je minimálna investícia?"
    a: "…"
metrics:                 # voliteľné – pre prípadové štúdie
  - { label: "Nárast rezervácií", value: "+42,31 %" }
draft: false
---
```

### Ako sa to napojí na existujúce SEO

- `src/lib/blog.ts` prečíta všetky `.mdx` (cez `gray-matter` alebo
  `next-mdx-remote/rsc` s frontmatter) a vráti pole článkov.
- `ROUTES` v `seo.ts` sa doplní o `/blog/<slug>` pre každý článok **pri builde**,
  takže sitemap, `llms.txt`, drobčeky aj canonical fungujú bez ďalšej práce.
  Sekcia „Blog a prípadové štúdie“ v `llms.txt` sa generuje zo zoznamu článkov.
- `generateStaticParams` + `generateMetadata` v `[slug]/page.tsx`. Všetko
  statické, žiadny runtime.
- Structured data na článku: `BlogPosting` s `author: Person` (odkaz na profil
  autora), `image` = generovaný OG obrázok, `articleSection` = kategória,
  `wordCount`, `timeRequired`. Pri formáte *otázka* navyše `FAQPage`.
- Výpis: `Blog` schema so zoznamom `blogPost` z registra – nie ručne.
- Obsah zostáva v HTML (accordiony vo FAQ bloku cez CSS, nie `AnimatePresence`),
  podľa konvencie v `CLAUDE.md`.

### Balíky

`next-mdx-remote` (RSC verzia) + `gray-matter` + `@tailwindcss/typography`
pre štýlovanie dlhého textu (`prose` s vlastnými farbami značky). Voliteľne
`reading-time` a `rehype-slug` + `rehype-autolink-headings` pre obsah článku.
Žiadny z nich nezvyšuje klientsky bundle – MDX sa renderuje na serveri.

### Čo sa tým opraví z dnešných problémov

Dva footre (článok už nebude mať vlastný), drobčeky cez `PageHero`, CTA cez
`CTABanner` (modal), jedno miesto pravdy pre zoznam článkov, autor v schéme,
OG obrázok na článok.

---

## 6. Dizajn

Držať sa toho, čo web už má. Nič nové, len dôsledne.

### Výpis `/blog`

- Hero cez `PageHero` (drobčeky, badge „Blog“, podtitul).
- **Filter kategórií** ako riadok „pilulkových“ odkazov – **odkazy, nie JS
  stav**, aby každá kategória mala vlastnú URL a bola indexovateľná.
- **Hlavný článok** na celú šírku (najnovší alebo označený `featured`),
  pod ním mriežka 3 stĺpce (2 na tablete, 1 na mobile).
- **Karta článku:** `.glass`, `rounded-2xl`, badge formátu (teal), názov Kanit,
  krátky popis, riadok meta: kategória · dátum · X min čítania. Prípadové štúdie
  majú navyše 3 metriky, ako dnes – to je najlepší prvok súčasného výpisu.
- Na konci výpisu **newsletter blok** (napojený na `/api/newsletter`) a `CTABanner`.
- Stránkovanie po 12 článkoch (`/blog?strana=2` alebo `/blog/strana/2`).

### Článok `/blog/[slug]`

- Šírka textu **max 720 px** (`max-w-3xl`), dnešných 896 px je na čítanie priveľa.
- Hlavička: badge formátu, H1 Kanit, podtitul, riadok „autor · dátum · čas čítania“
  s fotkou autora. Pri štúdii pod tým `MetricGrid` (ako dnes).
- **Obsah článku (TOC)** – na desktope prilepený vľavo alebo vpravo, na mobile
  zbalený nad textom. Pomáha lekárovi, ktorý má 3 minúty.
- Typografia tela: Stolzl 18 px, riadkovanie 1,7, `text-white/70`; H2 Kanit,
  odkazy teal. Pripraviť MDX komponenty:
  - `<Callout>` – rámček s tealovým okrajom (dnešný „💡 Problém“ blok),
  - `<MetricGrid>` – dlaždice s číslami,
  - `<Quote>` – citát s ľavým tealovým pruhom (dnešný blockquote),
  - `<Steps>` – číslované kroky pre návody,
  - `<FaqBlock>` – otázky a odpovede, vždy v DOM.
- Pod textom: **box autora** (foto, meno, pozícia, 2 vety bio, odkaz na profil),
  **3 súvisiace články** (rovnaká kategória), newsletter, `CTABanner`.
- Zdieľanie: LinkedIn, Facebook, kopírovať odkaz – malé ikony, nič nápadné.
- Žiadny vlastný footer – ten dá layout.

### OG obrázok

`opengraph-image.tsx` s `ImageResponse`: tmavé navy pozadie, mriežka `.bg-grid`,
názov článku v Kanit, logo, badge formátu. Jednotné, ale každý článok iný.

### Výkon

Článok je server komponent bez `framer-motion` – jediné animácie budú v `PageHero`
a `CTABanner`, ktoré už existujú. Toto je zároveň odpoveď na obavu z INP
v `SEO.md`.

---

## 7. Etapy realizácie

Každá etapa = jedna vetva a jeden PR podľa pravidla č. 1.

| Etapa | Obsah | Vetva |
|---|---|---|
| **1. Základ** | `content/blog`, `src/lib/blog.ts`, dynamická trasa `[slug]`, MDX komponenty, nový výpis, prepis existujúcej štúdie do MDX, napojenie na `ROUTES`/sitemap/`llms.txt`, oprava dvojitého footra a preklepov | `feat/blog-mdx` |
| **2. Autori a zachytenie** | `content/authors.ts`, profil autora s `Person` schémou, box autora, newsletter blok, OG obrázky | `feat/blog-autori-newsletter` |
| **3. Štart obsahu** | články č. 2–5 (koľko stojí, ako získať pacientov, môže lekár inzerovať, databáza a GDPR) | `feat/blog-clanky-1` |
| **4. Kategórie a súvisiace** | stránky kategórií, súvisiace články, stránkovanie, GA4 udalosť na CTA v článku | `feat/blog-kategorie` |
| **5. Priebežne** | 2 články mesačne, každý vlastná vetva `feat/blog-<slug>` | – |

Etapa 1 sa dá spraviť naraz v jednej relácii. Články v etape 3 viem
pripraviť ako návrhy, ale čísla a skúsenosti z praxe musia prísť od vás
(pozri otvorené otázky).

---

## 8. Otvorené otázky

Bez odpovedí sa dá začať etapa 1, ostatné čakajú:

1. **Kto je autor?** Tomáš Kuchta je kontaktná osoba na webe. Bude podpísaný
   pod článkami on, alebo aj niekto ďalší (napr. lekár ako odborný garant)?
   Potrebujem meno, pozíciu, 2–3 vety bio, fotku a odkaz na LinkedIn.
2. **Reálne dáta.** Prípadová štúdia č. 20 a článok č. 6 („Open rate 70 %“)
   potrebujú čísla z reálnych kampaní. Máte ich k dispozícii, prípadne súhlas
   klienta s uvedením názvu?
3. **Dátum existujúcej štúdie.** Dashboard hovorí „Február 2025“, schéma
   marec 2026. Ktorý je správny?
4. **MDX vs. CMS.** Odporúčam MDX (sekcia 5). Ak má články písať niekto bez
   prístupu do GitHubu, treba to vedieť pred etapou 1.
5. **Cenový článok (č. 2).** Ste ochotní zverejniť aspoň orientačné rozpätia?
   Bez nich článok neodpovie na otázku a AI ho citovať nebude.
6. **Fotky.** Máte fotografie z praxe alebo klinik, alebo ostávame pri
   generovaných OG obrázkoch a ilustráciách v štýle `/images/proces/`?

---

## Čo treba doplniť ručne (po realizácii)

- Newsletter: overiť `SMARTEMAILING_LIST_ID` na Verceli, dnes formulár na webe
  nie je nikde viditeľný, takže zoznam mohol zostať nenastavený.
- Po publikovaní každého článku požiadať v Search Console o indexáciu
  (odporúčanie zo `SEO.md`).
- Doplniť `SOCIAL_PROFILES` v `seo.ts` – profily autora v `Person` schéme
  nemajú na čo odkazovať, kým firma nemá LinkedIn.
