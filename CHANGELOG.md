# Changelog

Chronologický záznam zmien v projekte, najnovšie hore.

Pravidlá zápisu sú v [CLAUDE.md](CLAUDE.md). Každý zásah do kódu musí mať
záznam – uvádzajte vždy aj **prečo**, nielen čo sa zmenilo.

---

## 2026-10-13 – Business partner: úprava textov v diagrame

**Čo sa zmenilo**

- V diagrame „Ako to do seba zapadá" (`PartnerDiagram.tsx`) odstránený text
  „MyMedical · osobný partner" (desktop aj mobil); stred „Lekár a jeho
  rodina" už nie je odkaz na MyMedical.
- Spojnica „Štart · Benefit · Sieť" → „Štart vlastnej ambulancie".
- Spojnica „Rodina · nástupca" → „Generačný prenos / predaj praxe", vedie
  na `/business-partner#co-robime` (generačná výmena je služba piliera 1).

**Prečo**

Rozhodnutie Viktora – diagram na stránke Business partner hovorí jazykom
majiteľa ambulancie, bez odkazu na členský program.

**Dotknuté súbory**

`src/components/PartnerDiagram.tsx`.

---

## 2026-10-13 – Informácia o NBS: nové znenie, len na Správe majetku

**Čo sa zmenilo**

- `FINANCE_DISCLOSURE` v `src/lib/seo.ts` má nové znenie: „Mediconect je
  podriadený finančný agent s reg. č. NBS 287404. Spolupracuje pri správe
  klientskeho majetku a sprostredkovaní finančných služieb so spoločnosťou
  MyLife Slovensko a.s., pod garantom UNIVERSAL maklérsky dom a.s., reg. č.
  NBS 3389." Zobrazuje sa na `/sprava-a-ochrana-majetku`.
- Text je odstránený z portfólia na domovskej stránke (`ServicesNebula`,
  `ServicesCarousel`). Pravidlo v `CLAUDE.md` upravené.

**Prečo**

Rozhodnutie Viktora – presné znenie spolupráce s MyLife Slovensko patrí na
stránku Správa a ochrana majetku, nie na domovskú stránku.

**Dotknuté súbory**

`src/lib/seo.ts`, `src/components/ServicesNebula.tsx`,
`src/components/ServicesCarousel.tsx`, `CLAUDE.md`.

**Pozor na**

- `FINANCING_DISCLOSURE` (financovanie vybavenia na `/business-partner`)
  ostáva v pôvodnom znení.

---

## 2026-10-13 – Business partner: diagram „Ako to do seba zapadá"

**Čo sa zmenilo**

- Na `/business-partner` hneď pod hero nová sekcia `#ako-to-zapada`
  (`src/components/PartnerDiagram.tsx`) podľa str. 4 brožúry v5 (Canva
  DAHXUQFH9BU): lekár a jeho rodina v strede, MyMedical ako osobný partner,
  štyri piliere so 4 položkami, spojnice (Štart · Benefit · Sieť, Ordevia
  Connect, Rodina · nástupca, Partneri a licencie) a tri princípy (Jeden
  kontakt, Diagnóza pred odporúčaním, Jasné pravidlá).
- **Každá položka je odkaz** na podstránku alebo sekciu webu (napr. Značka
  a web → Web a SEO, Osobný brand → Osobné značky lekárov, Procesy a rast
  príjmov → Databáza pacientov, Majetok → Správa a ochrana majetku, stred →
  MyMedical).
- Diagram nie je obrázok: desktop = SVG čiary + HTML odkazy, mobil = karty.
  Obe verzie sú v DOM (čitateľné pre vyhľadávače).
- `PillarPage` má nový voliteľný slot `lead` (sekcia pod hero); sekcia
  „Čo konkrétne robíme" má kotvu `#co-robime`.
- Oproti brožúre: „Ordevia CRM" je v diagrame ako „CRM a automatizácie"
  (Ordevia vystupuje len vo vlastnej sekcii, spojnica „Ordevia Connect"
  vedie na jej stránku).

**Prečo**

Stránka Business partner potrebovala na prvý pohľad ukázať, ako do seba
piliere zapadajú – a z diagramu sa dá rovno preklikať na konkrétnu službu.

**Dotknuté súbory**

`src/components/PartnerDiagram.tsx`, `src/components/PillarPage.tsx`,
`src/app/(marketing)/business-partner/Content.tsx`.

**Pozor na**

- Položky piliera 1 a 4 zatiaľ vedú na sekcie stránok pilierov (samostatné
  podstránky neexistujú). Keď vzniknú, stačí zmeniť `href` v `PILLARS`.

---

## 2026-10-13 – Segment „Doplnkové služby v oblasti zdravia"

**Čo sa zmenilo**

- Nová podstránka `/pre-koho/pre-doplnkove-sluzby-v-oblasti-zdravia` –
  zdravotnícke pomôcky, longevity a kozmetické salóny (karty segmentov,
  čo pre nich robíme, blok „Bez prázdnych sľubov", CTA).
- Na `/o-nas#pre-koho` šiesta karta segmentu; mriežka 3 × 2 namiesto 5 v rade.
- Záznam v `ROUTES` → metadata, sitemap, llms.txt, drobčeky a odkaz vo
  footeri (stĺpec Pre koho) vznikajú automaticky.

**Prečo**

Mediconect pracuje aj pre služby, ktoré dopĺňajú zdravotnú starostlivosť –
web ich doteraz nemal medzi cieľovými skupinami.

**Dotknuté súbory**

`src/app/(marketing)/pre-koho/pre-doplnkove-sluzby-v-oblasti-zdravia/*`,
`src/app/(marketing)/o-nas/Content.tsx`, `src/lib/seo.ts`.

**Pozor na**

- Pri zdravotníckych pomôckach a longevity nesľubovať liečebné účinky –
  platia pravidlá reklamy a ochrany spotrebiteľa.

---

## 2026-10-13 – Úvodná stránka podľa architektúry značky + Healthcare marketing

**Čo sa zmenilo**

- **Portfólio služieb** na úvodnej stránke (`ServicesNebula` desktop,
  `ServicesCarousel` mobil) = **štyri piliere** z architektúry značky,
  pomenované a prelinkované ako v menu: Business partner, Healthcare
  marketing, Automatizácie a AI, Správa a ochrana majetku. Nadpis „Štyri
  oblasti. Jeden partner." Pod portfóliom `FINANCE_DISCLOSURE` (pilier 4).
- **Presunuté na `/sluzby` (Healthcare marketing):** „Naša filozofia"
  (`MarketingPhilosophy`), „Čo získate v praxi" (`PracticalBenefits`)
  marketingový proces „Ako prebieha spolupráca" (`MarketingProcess`)
  a „Máte obavy z marketingu?" (`DoctorConcerns`).
  Stránka `/sluzby` je teraz Healthcare marketing (titulok, drobčeky, popis
  v `ROUTES`), CRM a AI sú na nej v bloku „Súvisí: Automatizácie a AI".
  V menu Healthcare marketing pribudla položka „Prehľad".
- **Úvodná stránka – „Ako spolupracujeme"**: štyri kroky z architektúry
  značky (Úvodný rozhovor → Diagnóza → Liečebný plán → Dlhodobá starostlivosť).
- **Prípadová štúdia** „Strategická reaktivácia pacientskej databázy"
  (`CaseStudyDashboard`) presunutá z úvodnej stránky na
  `/sluzby/databaza-pacientov-a-jej-aktivacia#pripadova-studia`.
- **Odstránené z úvodnej stránky:** sekcia Hodnoty 5I (vrátane karty
  Inovácie), štatistiky „Prečo Mediconect" a „Odlíšenie: Čo pre vás
  nerobíme".
- **Ordevia len v sekcii Ordevia:** zmizla zo zoznamu na `/sluzby`, zo
  stĺpca Služby vo footeri, z Cesty lekára (krok Stabilná prevádzka →
  Automatizácie a AI) a z prepojení na `/business-partner`.
- **Ilustračný lekár** „MUDr. Ján Kováč" (`public/Doktor 1.png`) odstránený
  aj so súborom (so súhlasom). Latinský claim, ktorý ho dočasne nahradil,
  sa nepoužil – latinské claimy patria podľa architektúry značky len
  MyMedicalu.

**Prečo**

Architektúra značky v2 (27. 9. 2026): Mediconect je Medical Business
Partner, marketing je jeden zo štyroch pilierov, nie identita značky. Úvodná
stránka preto predstavuje piliere, marketingové texty patria na stránku
Healthcare marketing. Ordevia vystupuje ako produkt s vlastnou sekciou.

**Dotknuté súbory**

`src/app/(marketing)/HomeContent.tsx`, `src/app/(marketing)/sluzby/Content.tsx`,
`src/app/(marketing)/sluzby/databaza-pacientov-a-jej-aktivacia/Content.tsx`,
`src/components/ServicesNebula.tsx`, `src/components/ServicesCarousel.tsx`,
`src/components/MarketingPhilosophy.tsx`, `src/components/MarketingProcess.tsx`,
`src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`,
`src/components/CestaLekara.tsx`, `src/app/(marketing)/business-partner/Content.tsx`,
`src/lib/seo.ts`.

**Pozor na**

- `ValuesStackingCards.tsx` a `WhatWeDoNot.tsx` sú zmazané (so súhlasom) –
  nikde inde sa nepoužívali. Hodnoty 5I ostávajú na `/o-nas`.
- Detail piliera na desktope sa mení pri prejdení myšou; texty všetkých
  pilierov sú v HTML vďaka mobilnej verzii (`ServicesCarousel`), ktorá je
  v DOM vždy.

---


## 2026-10-13 – Článok EURIPA Rural Health Forum 2026 (Cartagena) + úprava článku z Madridu

**Čo sa zmenilo**

- Nový článok `/blog/euripa-rural-health-forum-2026-cartagena` v kategórii
  `spolupraca`: 15. EURIPA Rural Health Forum (1. – 3. 10. 2026, Cartagena),
  poster *The importance of personalized healthcare marketing for prevention
  within the patient panel* (Čajka J., Struhár V., Molčan Ľ.) – digitálny
  priestor ako „prvá vyšetrovňa", údaje o správaní pacientov online
  (72 / 90 / 52 / 41 / 84 %, zdroj: vlastné údaje Mediconect), e-mail ako
  osobný kanál, prípadová štúdia +42 %, vidiecky kontext. 4 fotky, poster so
  zoomom, FAQ, odkaz na článok z Madridu.
- Článok z Madridu presne podľa posteru *A 21st Century Approach…*: odstránená
  prípadová štúdia (na madridskom posteri nebola, patrí k Cartagene – nahradil
  ju odkaz), citát zo štvrtého piliera doslovne, doplnený vernostný program,
  pod fotkou s roll-upom menovaný MUDr. J. Čajka.
- Zmazané 4 nepoužívané fotky z Madridu v nízkom rozlíšení (so súhlasom).

**Prečo**

V Madride bol jeden poster (koncept preventívneho ekosystému), poster
o personalizovanom marketingu s prípadovou štúdiou bol v Cartagene. Každý
článok teraz zodpovedá svojmu posteru. Druhé medzinárodné vystúpenie v roku
2026 posilňuje sekciu `/o-nas#spolupraca`.

**Dotknuté súbory**

`content/blog/euripa-rural-health-forum-2026-cartagena.mdx`,
`content/blog/europrev-forum-2026-madrid.mdx`, `public/images/blog/euripa-2026/*`,
`public/images/blog/europrev-2026/*`.

**Pozor na**

- `<MetricGrid items={[…]}>` v MDX zlyhá pri builde (JS výrazy v atribútoch
  sa nevyhodnocujú) – metriky dať do hlavičky `metrics:` alebo ako zoznam.
- Na skupinovej fotke z Cartageny je menovaný len MUDr. Ľ. Molčan (spoluautor).

---

## 2026-10-13 – Stránky „Business partner" a „Správa a ochrana majetku"

**Čo sa zmenilo**

- **`/business-partner`** – pilier 01 Založenie a rast (brožúra v5, str. 6):
  komu pomáhame, postup v 4 krokoch (výstup + kto sa zapojí), 6 služieb
  (lokalita a biznis plán, povolenia, vybavenie, financovanie, generačná
  výmena, program Štart), modelová situácia, prepojenie na ďalšie piliere.
- **`/sprava-a-ochrana-majetku`** – pilier 04 Majetok a štruktúra (str. 9–10):
  to isté rozloženie, 8 služieb, navyše ilustračná schéma štruktúry majetku
  (lekár a rodina → holding → ambulancia / investície / nehnuteľnosť / renta)
  a princípy Ochrana – Rast – Kontinuita.
- Obe stránky majú **povinnú informáciu o finančnom sprostredkovaní (NBS)**:
  konštanty `FINANCE_DISCLOSURE` a `FINANCING_DISCLOSURE` v `src/lib/seo.ts`.
- Spoločná šablóna `src/components/PillarPage.tsx` – texty sú v `Content.tsx`
  danej stránky.
- Menu: „Business partner" a „Správa a ochrana majetku" vedú na nové stránky
  (predtým `/#cesta-lekara`). Footer: obe stránky prvé v stĺpci Služby.
- „Cesta lekára" na domovskej stránke: kroky Atestácia, Založenie ambulancie,
  Odovzdanie praxe → `/business-partner`; Budovanie majetku, Dôchodok a renta
  → `/sprava-a-ochrana-majetku` (predtým otvárali kontaktný formulár).
- Záznamy v `ROUTES` → metadata, canonical, sitemap, llms.txt, drobčeky
  a `Service` schema vznikajú automaticky.

**Prečo**

Dve hlavné položky menu viedli len na sekciu domovskej stránky. Majiteľ
ambulancie ani lekár, ktorý rieši majetok, nemal kde zistiť, čo konkrétne
dostane, v akých krokoch a s kým. Texty sú prevzaté z brožúry v5, aby web
a obchodný materiál hovorili rovnako.

**Dotknuté súbory**

`src/app/(marketing)/business-partner/*`, `src/app/(marketing)/sprava-a-ochrana-majetku/*`,
`src/components/PillarPage.tsx`, `src/components/SiteHeader.tsx`,
`src/components/SiteFooter.tsx`, `src/components/CestaLekara.tsx`, `src/lib/seo.ts`.

**Pozor na**

- Informácia o NBS sa nesmie zo stránok o financiách, investíciách, poistení
  a rente odstrániť. Pri zmene registrácie upraviť len konštanty v `seo.ts`.
- Odkaz na online audit (`mediconect.sk/audit` z brožúry) zatiaľ nie je –
  stránka auditu na webe neexistuje.

---

## 2026-10-13 – Prvý článok v sekcii „Medzinárodná a odborná spolupráca": EUROPREV Forum 2026

**Čo sa zmenilo**

- Nový článok `/blog/europrev-forum-2026-madrid` – „EUROPREV Forum 2026
  v Madride: ako vyzerá prevencia v ambulancii 21. storočia". Vychádza
  z príspevku na LinkedIne (15. 6. 2026), z textu Viktora Struhára pred
  konferenciou a zo skutočného posteru *A 21st Century Approach to
  Comprehensive Preventive Care* (preventívny ekosystém: jadro – ambulancia
  VLD 2 + 2, regeneratívna klinika, bistro s indikovanou výživou, zdravotnícky
  marketing). Prípadová štúdia o +42 % je uvedená ako overenie v praxi, nie
  ako obsah posteru. 5 fotiek vo vysokom rozlíšení, FAQ.
- Nový autor `viktor-struhar` (PhDr. Víťazoslav Struhár, Director) v
  `content/authors.ts`.
- Nový formát článku `podujatie` – „Z podujatia".
- Nové MDX bloky `<Figure>` (s voľbou `zoom` – klik otvorí obrázok v plnom
  rozlíšení, použité pri posteri) a `<FigureRow>`. Postup v
  [BLOG.md](BLOG.md#ako-pridať-článok).
- Pole `cover` v hlavičke článku sa reálne používa: obrázok na karte v sekcii
  `/o-nas#spolupraca`, OG obrázok pri zdieľaní a obrázok v `BlogPosting`
  schéme. Bez `cover` ostáva všeobecný `og-image.png`.
- Karty v sekcii spolupráce sú vycentrované, aby 1–2 články neostali zarovnané vľavo.

**Prečo**

Sekcia spolupráce sa bez článku nezobrazuje. Účasť na európskom fóre, kam
Mediconect delegovala SSVPL, je najsilnejší dôkaz odbornej autority – článok
s fotkami z miesta ho robí viditeľným pre klientov, Google aj AI vyhľadávače.
Prvá verzia článku opisovala poster podľa LinkedInu nepresne; po dodaní
originálu je obsah prepísaný podľa skutočného posteru.

**Dotknuté súbory**

`content/blog/europrev-forum-2026-madrid.mdx`, `public/images/blog/europrev-2026/*`,
`content/authors.ts`, `src/lib/blog.ts`, `src/components/blog/MdxComponents.tsx`,
`src/app/(marketing)/blog/[slug]/page.tsx`, `src/app/(marketing)/o-nas/*`, `BLOG.md`.

**Čo treba doplniť ručne**

- Odkaz na LinkedIn profil autora (`sameAs` v `content/authors.ts`) – zatiaľ
  prázdny, presná adresa profilu nebola overená.

**Pozor na**

- Osoby na fotkách s roll-upom a z recepcie nie sú v popisoch menované –
  mená doplniť len so súhlasom.
- V priečinku `europrev-2026` ostali aj prvé verzie fotiek v nízkom rozlíšení
  (`fakulta-mediciny-uam.webp`, `sala-forum.webp`, `poster-mediconect.webp`,
  `roll-up-europrev.webp`) – článok ich nepoužíva, bez súhlasu sa nemažú.

---

## 2026-10-13 – „Pre koho" zlúčené s O nás + sekcia „Medzinárodná a odborná spolupráca"

**Čo sa zmenilo**

- **„Pre koho" je súčasťou stránky O nás** – sekcia „Pre koho pracujeme"
  (`/o-nas#pre-koho`) s piatimi segmentmi a odkazmi na podstránky
  `/pre-koho/*`, ktoré ostávajú.
- `/pre-koho` **trvalo presmeruje (308)** na `/o-nas#pre-koho`
  (`next.config.mjs`), je mimo `sitemap.xml` a `llms.txt`. Drobčeky
  podstránok: Domov › O nás › Pre koho › …
- **Menu bez „Pre koho":** O nás | Business partner | Healthcare marketing ▾ |
  Automatizácie a AI ▾ | Správa a ochrana majetku | MyMedical | Ordevia |
  Blog | [Konzultácia]. S 9 položkami sa desktopové menu zobrazuje už od
  **1360 px** (predtým 1440 px).
- **Footer:** stĺpec „Pre koho" odkazuje na `/o-nas#pre-koho`.
- **Nová kategória blogu `spolupraca` – „Medzinárodná a odborná
  spolupráca"** (konferencie, odborné podujatia doma aj v zahraničí).
  Posledných 6 článkov z nej sa zobrazuje na O nás v sekcii
  `/o-nas#spolupraca`. Kým nie je žiadny článok, sekcia sa nezobrazuje.

**Prečo**

- Rozhodnutie Viktora Struhára: „Pre koho" a „O nás" hovoria o tom istom
  (kto sme a pre koho pracujeme); spolupráca a účasť na odborných
  podujatiach buduje dôveryhodnosť a patrí k predstaveniu firmy.

**Dotknuté súbory**

- `src/app/(marketing)/o-nas/Content.tsx`, `src/app/(marketing)/o-nas/page.tsx`
- `src/lib/blog.ts` (kategória `spolupraca`), `BLOG.md`
- `src/lib/seo.ts` (`/pre-koho` – `parent: "/o-nas"`, `noSitemap`)
- `next.config.mjs` (presmerovanie), `src/app/llms.txt/route.ts`
- `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`

**Čo treba doplniť ručne**

- Prvý článok o konferencii / odbornom podujatí – podklady: názov podujatia,
  dátum, miesto, kto sa zúčastnil, téma vystúpenia alebo prínos, fotky.

**Pozor na**

- Súbor `src/app/(marketing)/pre-koho/page.tsx` ostal, ale vďaka
  presmerovaniu sa nezobrazí. Pri ďalšej úprave ho možno odstrániť.

---

## 2026-10-13 – O nás: odstránené čísla „10+ klientov / 10+ špecializácií"

**Čo sa zmenilo:** z bloku príbehu na `/o-nas` odstránený pás s číslami
„10+ klientov z medicíny" a „10+ špecializácií".

**Prečo:** rozhodnutie Viktora Struhára – čísla zatiaľ nebudú na webe.

**Dotknuté súbory:** `src/app/(marketing)/o-nas/Content.tsx`

**Pozor na:** na domovskej stránke (pás „Prečo my") je „10+ klientov
z medicíny" stále.

---

## 2026-10-13 – Nové hlavné menu: Business partner, Healthcare marketing, Automatizácie a AI, Správa a ochrana majetku

**Čo sa zmenilo**

- Hlavné menu (desktop): **O nás | Pre koho | Business partner |
  Healthcare marketing ▾ | Automatizácie a AI ▾ | Správa a ochrana
  majetku | MyMedical | Ordevia | Blog | [Konzultácia]**. Všetko sú hlavné
  sekcie na rovnakej úrovni.
- **Healthcare marketing ▾:** Akvizícia pacientov, Web a SEO, Sociálne
  siete, Výkonnostný marketing, Email marketing, Databáza pacientov + na
  konci tlačidlo **Dopyt** (formulár `/#dopyt`).
- **Automatizácie a AI ▾:** CRM a automatizácie, Umelá inteligencia.
- **Business partner** (sekcia pre majiteľov kliník a ambulancií)
  a **Správa a ochrana majetku** – kým nemajú vlastné stránky, vedú na
  Cestu lekára na domovskej stránke (`/#cesta-lekara`).
- Z menu odstránené: rozbaľovacie „Služby" (vrátane „Všetky služby"),
  **Výsledky** a samostatné tlačidlo **Dopyt**. Stránky `/sluzby`
  a `/vysledky` ostávajú (odkazy vo footeri).
- Mobilné menu má rovnaké poradie; hlavné sekcie s podpoložkami
  (Healthcare marketing, Automatizácie a AI) majú rovnaký štýl ako ostatné
  hlavné položky, podpoložky sú odsadené – aby nevyzerali ako podsekcia
  predchádzajúcej položky.
- Desktopové menu sa zobrazuje od šírky **1440 px** (predtým 1024 px) – pri
  10 položkách sa na menšiu šírku nezmestí; pod 1440 px je hamburger menu.
  Hlavička je širšia (max. 1440 px) ako obsah stránky a do 1535 px má menšie
  písmo (13 px).
- Kód: jednotný komponent `NavDropdown` a dátové konštanty `leadLinks`,
  `marketingGroup`, `automationGroup` – položky sa menia na jednom mieste.

**Prečo**

- Rozhodnutie Viktora Struhára: menu má odrážať tri oblasti Mediconectu
  (business partner pre majiteľov, marketing, automatizácie a AI), nie
  zoznam marketingových služieb.

**Dotknuté súbory**

- `src/components/SiteHeader.tsx`
- `SEO.md` (zmienka o menu)

**Čo treba doplniť ručne**

- Stránky **Business partner** (majitelia kliník a ambulancií)
  a **Správa a ochrana majetku** – obsah z brožúry v5 (piliere Založenie
  a rast, Majetok a štruktúra).

**Pozor na**

- „Akvizícia pacientov" aj „Výkonnostný marketing" vedú zatiaľ na tú istú
  stránku `/sluzby/akvizicia-a-vykonnostny-marketing`.

---

## 2026-10-13 – O nás podľa brožúry pre lekára v5 + pätička

**Čo sa zmenilo**

- **Hero `/o-nas`:** „Sme strategickým partnerom vašej ambulancie" →
  **„Priestor na medicínu."** s podnadpisom „Váš partner od prvého pacienta
  po posledný deň v praxi." (titulná strana brožúry).
- **Nová sekcia „Naša filozofia – Posol medzi dvoma svetmi"** (text
  z brožúry, vysvetľuje symbol vtáka v logu).
- **Hodnoty 5I** (Integrita, Inteligencia, Individualizácia, Interaktivita,
  Inovácie) s textami z brožúry namiesto štyroch starých hodnôt.
- **„Prečo Mediconect?"** (5 agentúrnych bodov) → „Vy ovládate medicínu.
  O všetko ostatné sa postaráme my." s tromi princípmi z brožúry: Jeden
  kontakt, Diagnóza pred odporúčaním, Transparentné pravidlá.
- **Záverečná výzva:** „Prvý krok je rozhovor." + tlačidlo „Dohodnúť
  úvodný rozhovor".
- **SEO `/o-nas`:** titulok „O nás – marketingová agentúra pre
  zdravotníctvo" → „O nás – Medical Business Partner pre lekárov", nový popis.
- **Pätička (celý web):** „Inteligentný marketing pre ambulancie a kliniky
  21. storočia…" → „Medical Business Partner – partner lekára od prvého
  pacienta po posledný deň v praxi."

**Prečo**

- Stránka aj pätička stále predstavovali Mediconect ako marketingovú
  agentúru. Brožúra v5 má schválené texty novej koncepcie; reštrukturalizácia
  v2 presúva hodnoty 5I na O nás. Požiadavka Viktora Struhára.

**Dotknuté súbory**

- `src/app/(marketing)/o-nas/Content.tsx`
- `src/lib/seo.ts` (záznam `/o-nas`)
- `src/components/SiteFooter.tsx`

**Čo treba doplniť ručne**

- Sekcia **Tím** s menami a fotkami a sekcia **Partneri** (UNIVERSAL
  maklérsky dom, Ordevia, daňoví poradcovia) – chýbajú podklady.
- Hodnoty 5I sú zatiaľ aj na domovskej stránke (`ValuesStackingCards`);
  podľa reštrukturalizácie v2 ich odtiaľ odstrániť.

**Pozor na**

- Princíp „Transparentné pravidlá" uvádza NBS a SKDP – pri zmene partnerov
  ho treba aktualizovať spolu s právnym textom.

---

## 2026-10-13 – O nás: text „Vašu odbornosť meníme na dôveru" z brožúry

**Čo sa zmenilo:** na `/o-nas` je v bloku príbehu namiesto všeobecného
textu („V roku 2026 už nestačí len byť na internete…", „Mediconect spája
svet marketingu a medicíny…") text zo strany „O nás" brožúry pre lekára v5:
nadpis „Vašu odbornosť meníme na dôveru.", citát „Málokto sa pritom pýta,
kto sa stará o vaše zázemie." a dva odseky o vzniku a platforme. Upravený
aj alt text obrázka.

**Prečo:** text na webe nikdy nebol (v kóde bola len prvá veta v pätičke).
Starý text predstavoval Mediconect ako marketingovú agentúru; text
z brožúry zodpovedá koncepcii Medical Business Partner a je schválený
v brožúre. Požiadavka Viktora Struhára.

**Dotknuté súbory:** `src/app/(marketing)/o-nas/Content.tsx`

**Čo treba doplniť ručne:** Hero stránky `/o-nas` („Sme strategickým
partnerom vašej ambulancie") a hodnoty (4 karty namiesto 5I z brožúry)
ešte zodpovedajú starej koncepcii – na ďalšiu úpravu.

---

## 2026-10-13 – Domovská stránka: sekcia „Cesta lekára" namiesto „Pre koho pracujeme"

**Čo sa zmenilo**

- Pod Hero je nová sekcia **„Cesta lekára – V ktorej fáze ste vy?"**
  (`CestaLekara`) podľa reštrukturalizácie webu v2, bod 2.
- Prepínač dvoch vetiev:
  - **Som majiteľ / zakladám prax:** Atestácia → Založenie ambulancie →
    Prví pacienti → Stabilná prevádzka → Budovanie majetku → Odovzdanie praxe.
  - **Som zamestnaný lekár:** Rezidentúra → Špecialista → Vedúci lekár /
    primár → Budovanie majetku → Dôchodok a renta.
- Spojnica **„Prechod do vlastnej praxe"** prepne na vetvu majiteľa
  a zvýrazní krok Založenie ambulancie.
- Každý krok má krátky text a odkaz: Prví pacienti → akvizícia a marketing,
  Stabilná prevádzka → Ordevia Connect, kroky zamestnaného lekára →
  MyMedical, ostatné (kým neexistujú stránky pilierov) → kontaktný formulár.
- Pás „Pre koho pracujeme" (5 typov zariadení) z domovskej stránky
  odstránený. Komponent `ForWhomStrip` a stránky `/pre-koho/*` ostávajú.

**Prečo**

- Lekár sa na webe hľadá podľa svojej situácie, nie podľa typu zariadenia.
  Sekcia ukazuje, že Mediconect je partner v každej fáze kariéry – vrátane
  zamestnaných lekárov, ktorých web doteraz neoslovoval.

**Dotknuté súbory**

- `src/components/CestaLekara.tsx` (nový)
- `src/app/(marketing)/HomeContent.tsx`

**Čo treba doplniť ručne**

- Krátke texty krokov napísal Claude v duchu koncepcie – na schválenie
  Viktorom Struhárom.
- Keď vzniknú stránky pilierov a programu Štart (Fáza 2–3), prepojiť na ne
  kroky, ktoré dnes otvárajú kontaktný formulár (v `CestaLekara.tsx` zmeniť
  `action` na `{ href: "..." }`).

**Pozor na**

- Obe vetvy sú v HTML vždy, neaktívna je len skrytá (`hidden`) – kvôli
  vyhľadávačom a AI crawlerom. Nemeniť na podmienené vykresľovanie.
- Texty krokov o majetku sú zámerne bez sľubov výnosov (pravidlá obsahu,
  reštrukturalizácia v2, časť 7).

---

## 2026-10-13 – Hero: stlmené fotky v koláži

**Čo sa zmenilo:** fotky v `HeroCollage` majú priehľadnosť 80 %, mierne nižšiu
sýtosť farieb a tmavú vrstvu (navy, 20 %).

**Prečo:** svetlé fotobankové fotky (biele pozadia) na tmavom webe príliš
„bili do očí" a odťahovali pozornosť od nadpisu. Požiadavka Viktora
Struhára.

**Dotknuté súbory:** `src/components/HeroCollage.tsx`

**Pozor na:** priehľadnosť je na samotnej fotke, nie na karte – tieň
a orámovanie kariet ostávajú výrazné. Mieru stlmenia meniť cez triedy
`opacity-80`, `saturate-[0.85]` a `bg-navy-dark/20`.

---

## 2026-10-13 – Hero: koláž lekár – pracovný stôl – lekárka (namiesto AI záberov)

**Čo sa zmenilo**

- Komponent `HeroDayStrips` (tri pruhy s AI fotkami) nahradil nový
  **`HeroCollage`**: v strede štvorcová fotka pracovného stola lekárov
  (pevná, dominantná), po stranách na výšku lekár (vľavo hore) a lekárka
  (vpravo dole), ktoré čiastočne prekrývajú stred.
- Bočné fotky sú **dynamické**: jemne sa vznášajú a pri pohybe myši (na
  mobile pri scrollovaní) sa posúvajú proti sebe. Pri
  `prefers-reduced-motion` sú statické.
- Fotky dodal Viktor Struhár (bezplatná fotobanka); orezané (bez bielych
  okrajov) a uložené ako WebP.

**Prečo**

- AI-generované fotky aj video pôsobili umelo – rozhodnutie Viktora
  Struhára nepoužívať ich. Koláž s reálnymi ľuďmi a pracovným stolom nesie
  odkaz „vy medicína, my všetko okolo".

**Dotknuté súbory**

- `src/components/HeroCollage.tsx` (nový, premenovaný z `HeroDayStrips.tsx`)
- `src/app/(marketing)/HomeContent.tsx`
- `public/images/hero/hero-{lekar,lekarka,pracovny-stol}.webp` (nové)

**Čo treba doplniť ručne**

- Licencia: fotky sú z bezplatnej fotobanky, potvrdil Viktor Struhár
  13. 10. 2026.
- Neskôr nahradiť vlastnými fotkami – stačí prepísať tri `.webp` súbory
  (pri výmene na produkcii použiť **nové názvy súborov**, inak môže
  optimalizátor obrázkov / CDN ukazovať starú verziu).

---

## 2026-10-13 – Funkcia pod fotkou: „Director"

**Čo sa zmenilo:** v kontaktnom okne a na `/dakujeme` je pod menom
PhDr. Víťazoslava Struhára funkcia „Director" namiesto „Marketing Director".

**Prečo:** titul „Marketing Director" zužoval Mediconect na marketingovú
agentúru, čo nesedí s koncepciou Medical Business Partner. Rozhodnutie
Viktora Struhára.

**Dotknuté súbory:** `src/components/ContactModal.tsx`,
`src/app/dakujeme/Content.tsx`

---

## 2026-10-13 – Kontaktný formulár: portrét a text podľa novej koncepcie

**Čo sa zmenilo**

- **Kontaktné okno (`ContactModal`)** – malé kruhové foto nahradené veľkým
  portrétom (3 : 4, meno a funkcia priamo na fotke). Na mobile je portrét
  užší, aby formulár nebol príliš nízko.
- Nadpis „Získajte 30 minútovú analýzu potenciálu vašej ambulancie" →
  **„Úvodný rozhovor o vás a vašej praxi"**. Podnadpis: „30 minút o tom,
  v akej fáze kariéry ste a čo vás okolo medicíny najviac zaťažuje. Odídete
  s konkrétnym ďalším krokom." Poznámka: „Prvý rozhovor je bezplatný
  a k ničomu vás nezaväzuje."
- Tlačidlo formulára „Chcem bezplatnú konzultáciu" → **„Dohodnúť úvodný
  rozhovor"**.
- Stránka **`/dakujeme`** používa rovnakú novú fotografiu (zostáva kruhová).

**Prečo**

- Pôvodný text predával „analýzu ambulancie" – jazyk marketingovej
  agentúry. Nová koncepcia (Medical Business Partner, partner lekára
  v každej fáze kariéry) stavia na osobnom vzťahu; veľký reálny portrét
  človeka, ktorý sa ozve, buduje dôveru viac ako malá ikonka.

**Dotknuté súbory**

- `src/components/ContactModal.tsx`
- `src/app/dakujeme/Content.tsx`
- `public/images/tim/viktor-struhar.webp` (nový, 900 × 1200)

**Pozor na**

- Starý `public/reditel.png` sa už nikde nepoužíva; zostal v repozitári,
  nemazal sa.

---

## 2026-10-13 – Iba doložiteľné čísla: preč súhrnné odhady a protirečenia

**Čo sa zmenilo**

- **`/vysledky`** – štvorica „+140 % dopytov / 98 % spokojnosť / 50k+
  pacientov / ROI x4.2" nahradená číslami z prípadovej štúdie na tej istej
  stránke: +42 % rezervácií na preventívne prehliadky, 1 618 oslovených
  pacientov, 99 % doručených a 71 % otvorených e-mailov. Nad číslami je
  vysvetlivka, že ide o jednu meranú kampaň.
- **E-mail marketing** – karta „ROI v zdravotníctve 42 : 1+" nahradená
  nárastom rezervácií (+42 %); doručiteľnosť a otvorenosť zjednotené
  s prípadovou štúdiou (99 %, 71 %). Odrážky so všeobecnými štatistikami bez
  zdroja („99 % ľudí…", „30 % efektívnejšia…", „7–10 % na FB") prepísané na
  tvrdenia bez nedoložených čísel.
- **Domovská stránka** – z pásu „Prečo my" odstránené „98 % spokojných
  klientov" (zostávajú tri položky). V Hero odstránený riadok s vymyslenými
  iniciálami (MU, PK, DL, SK) a starým textom „navýšime príjmy vašej
  klinickej praxe".
- **`/o-nas`** – „100+ spokojných lekárov" zmenené na „10+ klientov
  z medicíny", aby sa zhodovalo s domovskou stránkou.

**Prečo**

- Web uvádzal protichodné čísla (ROI +247 % vs. x4.2, 10+ vs. 100+
  klientov) a čísla, ktoré sa nedali doložiť. Lekár ako cieľová skupina je
  voči nepodloženým tvrdeniam citlivý – jediné protirečenie zhodí
  dôveryhodnosť celého webu.
- Pravidlo odteraz: **číslo o našich výsledkoch smie byť na webe len vtedy,
  ak za ním stojí meranie** (dnes jediný zdroj: prípadová štúdia
  v `CaseStudyDashboard`). Pri stránkach `/vysledky` a e-mail marketingu je
  to poznačené aj komentárom v kóde.

**Dotknuté súbory**

- `src/app/(marketing)/vysledky/Content.tsx`
- `src/app/(marketing)/sluzby/email-marketing-a-praca-s-datami/Content.tsx`
- `src/app/(marketing)/HomeContent.tsx`
- `src/app/(marketing)/o-nas/Content.tsx`

**Čo treba doplniť ručne**

- Overiť skutočný počet klientov – web teraz konzervatívne uvádza „10+".
- Ďalšie prípadové štúdie s meraním = jediný spôsob, ako pridať nové čísla.

**Pozor na**

- Všeobecné trhové štatistiky bez zdroja zostávajú na stránkach Web a SEO
  („71 % pacientov…", „80 % dospelých…"), Sociálne siete („71 %…") a AI
  („80 % bežných otázok"). Pri ďalšej úprave doplniť zdroj alebo prepísať.

---

## 2026-10-13 – Hero: Medical Business Partner, bez nedoložiteľných metrík

**Čo sa zmenilo**

- Hero domovskej stránky má schválené texty novej koncepcie:
  nadtitul **„Medical Business Partner"**, nadpis **„Partner lekára v každej
  fáze kariéry."**, podnadpis **„Vy sa venujete medicíne. My všetkému, čo ju
  obklopuje."**
- Odstránený pravý blok plávajúcich kariet s metrikami (ROI +247 %,
  spokojnosť 98,2 %, +127 nových pacientov / mes.).
- Namiesto nich nový komponent `HeroDayStrips` – „Jeden deň lekára, tri fázy":
  fotka rozdelená na tri zvislé pruhy (ráno / deň / večer), ktoré sa pri
  pohybe myši (na mobile pri scrollovaní) posúvajú rôznou rýchlosťou a smerom.
  Na rozdiel od starých kariet sa zobrazuje aj na mobile (pod textom).
- Rozloženie Hero zmenené z 8 + 4 stĺpcov na 7 + 5.

**Prečo**

- Čísla v Hero sa nedali doložiť a protirečili číslam na iných stránkach
  (napr. `/vysledky` uvádza ROI x4,2) – riziko pre dôveryhodnosť, ktoré je
  v zdravotníctve vážnejšie ako chýbajúci efekt.
- Nová koncepcia značky: Mediconect ako partner lekára naprieč kariérou, nie
  len agentúra na akvizíciu pacientov. Tri fázy dňa sú vizuálna metafora fáz
  kariéry.

**Dotknuté súbory**

- `src/app/(marketing)/HomeContent.tsx`
- `src/components/HeroDayStrips.tsx` (nový)
- `public/images/hero/den-lekara-{rano,den,vecer}.webp` (nové)

**Čo treba doplniť ručne**

- Fotky sú dočasne **AI-generované** (Higgsfield). Pre finálnu verziu
  odporúčame reálne fotenie lekára podľa rovnakého scenára (ráno – príchod,
  deň – konzultácia s pacientom, večer – administratíva). Výmena = nahradiť
  tri `.webp` súbory v `public/images/hero/` (formát na výšku, cca 3 : 5).

**Pozor na**

- Pohyb pruhov rešpektuje `prefers-reduced-motion` – vtedy sú statické.
- Ostatné nedoložené čísla na webe (`/vysledky`, stránka e-mail marketingu
  „42 : 1") zatiaľ zostávajú – riešia sa v ďalších sekciách.

---

## 2026-10-13 – MyMedical v menu a prieskum AI na stránke umelej inteligencie

**Čo sa zmenilo**

- **MyMedical – komunita lekárov** je v hlavnom menu (desktop za „Blog",
  v mobilnom menu s podnadpisom „komunita lekárov") a v spodnom riadku
  footera. Klik vedie priamo na `https://www.mymedical.sk` – web zostáva na
  svojej doméne, mediconect.sk naň len presmeruje.
- **Domovská stránka:** pod sekciou „Pre koho pracujeme" je nenápadný pás
  `MyMedicalStrip` – „MyMedical – komunita lekárov" s odkazom „Vstúpiť"
  a menším odkazom „Prieskum o administratíve". Bez framer-motion, aby bol
  viditeľný vždy.
- Nová krátka adresa **`mediconect.sk/mymedical`** → presmerovanie 307 na
  `mymedical.sk` (`redirects()` v `next.config.mjs`). Hodí sa do e-mailov,
  prezentácií a na vizitky.
- Na stránke **Umelá inteligencia pre ambulanciu** pribudla pred záverečnou
  výzvou sekcia **„Čo vám v ambulancii berie najviac času?"** (kotva
  `#prieskum`) – pozvánka na prieskum administratívnej záťaže lekárov
  s tlačidlom „Vyplniť prieskum", ktoré vedie na `mymedical.sk/dotazniky/AI`.
  Text je prevzatý z úvodu samotného prieskumu.
- Nová konštanta `MYMEDICAL` v `src/lib/seo.ts` (názov, adresa webu, krátka
  adresa, adresa prieskumu).
- `llms.txt` má sekciu MyMedical s odkazom na komunitu aj prieskum.
- Desktopové menu: medzi `lg` a `xl` (1024–1279 px) sú menšie rozostupy
  a texty sa nezalamujú, logo sa nezmenšuje. S novou položkou by sa inak
  „Pre koho" a „O nás" zalomili na dva riadky a logo by sa stlačilo.

**Prečo**

MyMedical je komunita lekárov od Mediconectu, ale z mediconect.sk na ňu
neviedol žiadny odkaz. Prieskum o administratívnej záťaži zbiera dáta pre
vývoj AI asistenta – stránka o AI pre ambulancie je presne miesto, kde ho
čítajú lekári, ktorých sa týka. Formulár zostáva na mymedical.sk, kde má
backend aj súhlasy GDPR; na mediconect.sk sa nekopíruje ani nevkladá cez
iframe (obsah by nevideli crawlery a výška iframe sa naprieč doménami
nedá spoľahlivo prispôsobiť).

**Dotknuté súbory**

- `src/lib/seo.ts` – konštanta `MYMEDICAL`
- `next.config.mjs` – presmerovanie `/mymedical`
- `src/components/SiteHeader.tsx` – položka v menu, rozostupy pri `lg`
- `src/components/SiteFooter.tsx`
- `src/components/MyMedicalStrip.tsx` – nový, `src/app/(marketing)/HomeContent.tsx`
- `src/app/(marketing)/sluzby/umela-inteligencia-pre-ambulanciu/Content.tsx`
- `src/app/llms.txt/route.ts`
- `SEO.md` – nová časť „MyMedical – komunita lekárov"

**Pozor na**

- Adresa `mymedical.sk` je v `MYMEDICAL` **aj** v `next.config.mjs` –
  konfigurácia Next.js TypeScript konštanty neimportuje. Pri zmene upraviť obe.
- Desktopové menu je pri 1024 px už takmer plné (rezerva ~40 px). Ďalšia
  položka sa tam bez zmeny rozloženia nezmestí.

---

## 2026-10-11 – Ukážka aplikácie pre pacientov a QR kódy na ukážky Ordevie

**Čo sa zmenilo**

- Na stránke Ordevie (`/sluzby/webova-aplikacia-ordevia`, kotva `#ukazka`)
  sú pod sebou **dva boxy, každý s QR kódom**:
  - **CRM – „Vyskúšajte si Ordeviu na vlastnej koži"**: text a tlačidlo
    „Vyžiadať prístup" (formulár `demoUrl`) zostali ako predtým, pribudol
    QR kód na koreň `https://demo.ordevia.sk` (ako v prezentácii).
  - **Nový box „Pozrite sa na Ordeviu očami pacienta"**: tlačidlo aj QR kód
    na `https://connect-demo.ordevia.sk` (otvorená ukážka bez prihlásenia).
  
  QR kód je len na počítači (od `md`). Na mobile je skrytý – telefónom sa
  nedá naskenovať sám seba, stačí tlačidlo.
- Nový komponent `OrdeviaQr` – server component, ktorý pri builde vygeneruje
  QR kód ako SVG (knižnica `qrcode`). Do klientskej stránky ide ako prop
  z `page.tsx`, do prehliadača nejde žiadny JavaScript navyše.
- V `ORDEVIA` (`src/lib/seo.ts`) pribudli `connectDemoUrl` a `crmDemoUrl`
  (zatiaľ len pre QR kód CRM). Všetky tlačidlá „Vyžiadať prístup" vedú ďalej
  na formulár `demoUrl`.
- Domovská stránka (sekcia Ordevia): pod tlačidlami odkaz „ukážka aplikácie"
  na `connect-demo`.
- FAQ „Dá sa Ordevia vyskúšať?" a `llms.txt` spomínajú aj ukážku aplikácie
  pre pacientov.

**Prečo**

Obchodný tím (prezentácia „Ordevia CRM + Conect", 10/2026) používa dve
ukážky s QR kódmi – aplikáciu pre pacientov na `connect-demo.ordevia.sk`
(strana 9) a testovacie CRM na `demo.ordevia.sk` (strana 20). Web mal doteraz
len žiadosť o prístup do CRM; aplikáciu pre pacientov si návštevník nemal ako
pozrieť. QR kód rieši bežný prípad – lekár číta web na počítači, ale aplikácia
pre pacientov je stavaná pre mobil. QR kód CRM vedie na koreň podľa
prezentácie, tlačidlo zostáva na formulári (rozhodnutie z 11. 10. 2026).

Z prezentácie sa na web **nepreberá nič iné** – partnerské služby,
čísla z prípadovej štúdie, AI Copilot ani správa webu nie sú medzi overenými
tvrdeniami (`ORDEVIA.md`, časť 5).

**Dotknuté súbory**

- `src/components/OrdeviaQr.tsx` – nový
- `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/page.tsx`, `Content.tsx`, `faq.ts`
- `src/components/OrdeviaShowcase.tsx`
- `src/app/llms.txt/route.ts`
- `src/lib/seo.ts`
- `package.json` – závislosť `qrcode` (+ `@types/qrcode`)
- `ORDEVIA.md` – adresy, overenie `connect-demo`

**Pozor na**

- QR kód sa generuje z adresy v `ORDEVIA` – pri zmene adresy stačí upraviť
  `seo.ts`, nový QR vznikne pri ďalšom builde.
- QR kód je tmavý na bielom podklade úmyselne. Inverzný (svetlý na tmavom)
  niektoré čítačky neprečítajú. Okraj okolo kódu (quiet zone) nezmenšovať.
- `connect-demo` je statická ukážka, neposiela žiadne údaje (overené v sieťovej
  komunikácii 11. 10. 2026) – preto sa zásady ochrany osobných údajov
  nemenili. Ak by ukážka začala zbierať údaje (napr. skúšobné objednanie
  s e-mailom), treba doplniť bod 3.5 zásad.

---

## 2026-10-08 – Popis vo výsledkoch Google: „Strategický partner pre lekárov a kliniky"

**Čo sa zmenilo**

- Meta popis domovskej stránky (`description`, Open Graph aj Twitter karta)
  začína vetou **„Strategický partner pre lekárov a kliniky."**:
  „Strategický partner pre lekárov a kliniky. Budujeme dôveru a autoritu vašej
  praxe – od brandu a vizuálnej identity až po akvizíciu pacientov."
  (predtým „Strategický partner pre lekárov a ambulancie, ktoré hľadajú…" –
  záznam z 2026-09-28).
- Text pod H1 na domovskej stránke: „Strategický partner pre lekárov a kliniky.
  Komplexné riešenia v oblasti brandu, vizuálnej identity aj akvizície
  pacientov." (predtým „…pre lekárov a ambulancie, ktoré hľadajú komplexné
  riešenia…").

**Prečo**

Google pod titulkom nezobrazoval náš meta popis, ale vetu z úvodného textu
stránky („Strategický partner pre lekárov a ambulancie, ktoré hľadajú…").
To bolo zámerné (záznam z 2026-09-28), ale požadované znenie je teraz
„Strategický partner pre lekárov a kliniky". Preto je
rovnaká veta na začiatku meta popisu **aj** v texte stránky – nech si Google
vyberie ktorýkoľvek zdroj, popis začne správne. Rozdelenie na dve vety zároveň
odstraňuje gramatickú nezhodu „lekárov … , ktoré hľadajú".

**Dotknuté súbory**

- `src/lib/seo.ts` – `ROUTES["/"].description` (odtiaľ ho preberá OG a Twitter
  v `layout.tsx`)
- `src/app/(marketing)/HomeContent.tsx` – text pod H1

**Pozor na**

- Popis vo výsledkoch si vyberá Google sám a môže ho prispôsobiť dopytu –
  presné znenie sa zaručiť nedá. Ak sa text pod H1 a meta popis rozídu, Google
  často zoberie text zo stránky.
- Zmena sa prejaví až po opätovnom prehľadaní (Search Console → Kontrola
  webovej adresy → Požiadať o indexovanie).

---

## 2026-10-02 – Titulok domovskej stránky: „Biznis partner pre lekárov"

**Čo sa zmenilo**

- Titulok domovskej stránky (`<title>`, Open Graph aj Twitter karta) je
  **„Mediconect | Biznis partner pre lekárov"** namiesto
  „Mediconect | Strategický partner pre zdravotníctvo".
- Alt text OG obrázka: „Mediconect – Biznis partner pre lekárov".

**Prečo**

Zosúladenie s novým podnadpisom loga („medical business partner") – značka sa
vo výsledkoch vyhľadávania prezentuje ako obchodný partner lekárov. Kratší
titulok sa zároveň zmestí do výsledku Google na mobile (predošlý sa orezával
za slovom „pre").

**Dotknuté súbory**

- `src/lib/seo.ts` – `ROUTES["/"].title` (odtiaľ ho preberá aj OG a Twitter
  v `layout.tsx`)
- `src/app/layout.tsx` – alt text OG obrázka

**Pozor na**

Google zobrazí nový titulok až po opätovnom prehľadaní stránky. Urýchliť sa to
dá cez Search Console → Kontrola webovej adresy → Požiadať o indexovanie.

---

## 2026-09-28 – Podtext domovskej stránky: „lekárov a ambulancie"

**Čo sa zmenilo**

- Úvodný odsek v hero sekcii domovskej stránky: „Strategický partner pre
  lekárov **a ambulancie**, ktoré hľadajú…" (predtým „lekárov, kliniky
  a ambulancie").
- Meta description domovskej stránky (`ROUTES["/"]` v `src/lib/seo.ts`) je
  teraz rovnaká veta ako hero odsek (predtým „Budujeme dôveru a autoritu
  vašej praxe…"). Z nej sa berie aj Open Graph popis a popis v `llms.txt`.

**Prečo**

Google vo výsledkoch vyhľadávania nezobrazoval našu meta description, ale
vytiahol si text z hero odseku – s formuláciou „lekárov, kliniky
a ambulancie". Podtext má znieť „Strategický partner pre lekárov
a ambulancie". Upravil sa preto hero odsek a meta description sa s ním
zjednotila, aby Google ponúkal rovnaký text bez ohľadu na to, ktorý zdroj
si vyberie.

**Dotknuté súbory**

- `src/app/(marketing)/HomeContent.tsx`
- `src/lib/seo.ts`

**Čo treba doplniť ručne**

- Po nasadení požiadať o opätovné indexovanie domovskej stránky v Google
  Search Console (Kontrola webovej adresy → Požiadať o indexovanie).
  Inak sa nový podtext vo výsledkoch objaví až pri ďalšom prechode crawlera.

**Pozor na**

- Snippet vo výsledkoch si vyberá Google sám – meta description je len
  návrh. Preto je dôležité, aby rovnakú formuláciu mal aj viditeľný text.
- Popis `WebSite` v structured data (`src/app/layout.tsx`) a popisy
  ostatných stránok stále spomínajú aj kliniky – zámerne sa nemenili.

---

## 2026-09-27 – Logo: podnadpis „medical business partner"

**Čo sa zmenilo**

- V logu `public/Logo final.png` je pod slovom „mediconect" nový podnadpis
  **„medical business partner"** namiesto „healthcare marketing".
- Alt text loga v hlavičke: „Mediconect – logo, medical business partner"
  (predtým „…, healthcare marketing agentúra").

**Prečo**

Značka sa má prezentovať ako obchodný partner pre medicínu, nie len ako
marketingová agentúra. Podnadpis je súčasťou obrázka, preto sa upravil
priamo PNG – vtáčik aj nápis „mediconect" zostali nedotknuté (pixel po pixeli).

**Ako sa to robilo**

1. Zistilo sa, že pôvodný podnadpis je **Stolzl Regular** – vykreslený text
   z `public/fonts/stolzl_regular.otf` sa s originálom prekrýva na pixel
   (Medium je už hrubší).
2. V PNG sa zmazalo všetko od y = 290 px (wordmark končí na y = 282).
3. Nový text sa previedol na krivky (`opentype.js`) a vykreslil cez `sharp`:
   veľkosť 56,89 px, baseline y = 347,1, farba `#87D4DA`, pravý okraj na
   x = 1200 – rovnaké parametre ako pôvodný podnadpis.

**Dotknuté súbory**

- `public/Logo final.png`
- `src/components/SiteHeader.tsx` – alt text
- `brand_guidelines.md` – nová sekcia „Logo"

**Pozor na**

- Rozmer obrázka zostal 1200 × 362 px, takže `width`/`height` v `<Image>`
  sa meniť nemuseli. Nový text je dlhší (začína na x ≈ 451 namiesto 563),
  ale stále sa zmestí pod wordmark.
- Obrázok je v Google a sociálnych sieťach nakešovaný – nové logo sa tam
  prejaví s oneskorením.

---

## 2026-09-25 – Ordevia: vnútorný kruh symbolu v tlačidle v menu

**Čo sa zmenilo**

- Symbol Ordevie v tlačidle „ordevia" v hornej lište má **24 px** namiesto
  18 px (desktop) a 16 px (mobil).
- Tlačidlo má menší vertikálny padding (`py-[5px]` / `py-[3px]`) a o kúsok
  užší horizontálny, aby sa výška nezmenila (desktop ~36 px, mobil ~31 px).

**Prečo**

V tlačidle bol vidieť len vonkajší ťah symbolu, v strede bola tmavá diera.
`OrdeviaSymbol` pod 24 px vnútorný ťah nevykresľuje – je to pravidlo brand
kitu „Sweep Duo" (rovnako ho má aj aplikácia Ordevia, `jeBezVnutornehoTahu`).
Namiesto porušenia pravidla sa symbol zväčšil na hranicu, pri ktorej sa
vnútorný ťah kreslí.

**Dotknuté súbory**

- `src/components/SiteHeader.tsx` – `OrdeviaButton`
- `ORDEVIA.md` – sekcia „Tlačidlo v menu"

**Pozor na**

- Symbol v lište nezmenšovať pod 24 px, inak vnútorný kruh opäť zmizne.
- Desktopové tlačidlo je o ~2 px širšie. Pri 1024 px sa lišta stále zmestí
  do jedného riadku (overené), rezerva je však ešte menšia.

---

## 2026-09-24 – Ordevia: skutočné obrazovky namiesto náhľadu v CSS, tlačidlo v menu

**Čo sa zmenilo**

- **Stránka Ordevie:**
  - v úvode („Najprv termín. Potom aplikácia.") je namiesto vymysleného
    telefónu v CSS obrazovka **Prehľad dňa** („Dobré ráno, Mária"),
  - nová sekcia **„Tri obrazovky, ktoré tím otvára každý deň"** (kotva
    `#pre-tim`) – Prehľad dňa, Rezervácie a Tímový chat, každá zvlášť
    s nadpisom, popisom a štyrmi bodmi,
  - sekcia s troma telefónmi spolu „Celá klinika vo vašom mobile." zostala,
    presunula sa nižšie pred výzvu na ukážku (kotva `#v-mobile`).
- **Homepage:** dve časti Ordevie zlúčené do **jednej sekcie** – vľavo
  posolstvo, 4 body a tlačidlá, vpravo tri telefóny. Vymyslený telefón
  v CSS je preč.
- **Menu:** nové tlačidlo **„ordevia"** (symbol + wordmark) v hornej lište,
  na mobile vedľa hamburgera – Ordevia je vidieť na každej stránke.
  Aby sa lišta pri 1024 px zmestila do jedného riadku, zmizol z nej odkaz
  „Domov" (na úvod vedie logo) a odkazy majú do 1280 px menší rozostup.
- **Odstránený** `src/components/OrdeviaPhoneMockup.tsx` (už nikde nebol použitý).
- `OrdeviaCrmPhones.tsx` vie zobraziť aj jednu obrazovku (`OrdeviaCrmPhone`).

**Prečo**

Náhľad v CSS bol vymyslený, kým teraz máme skutočné obrazovky. Na homepage
boli dve samostatné časti o Ordevii za sebou, čo pôsobilo roztrieštene.
Ordevia je nový produkt a má byť vidieť stále, nielen v rozbaľovacom menu
Služby. Detaily menu a obrázkov sú v [ORDEVIA.md](ORDEVIA.md).

**Dotknuté súbory**

- `src/components/SiteHeader.tsx`, `OrdeviaShowcase.tsx`, `OrdeviaCrmPhones.tsx`
- `src/components/OrdeviaPhoneMockup.tsx` (odstránený)
- `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/Content.tsx`
- `ORDEVIA.md` – menu, obrázky, otvorené otázky

**Pozor na**

- Na webe teraz **nie je žiadny obrázok aplikácie pre pacientov**, len CRM.
  Popisky preto hovoria „Ukážka CRM s ilustračnými údajmi". Pri texte
  o pacientovi obrazovky CRM nepoužívať.
- Horná lišta je pri 1024 px takmer plná (~15 px voľného miesta). Ďalší
  odkaz sa do nej nezmestí bez úpravy.

---

## 2026-09-24 – Ordevia: obrazovky CRM na mobile

**Čo sa zmenilo**

- **Nová sekcia „Celá klinika vo vašom mobile."** na stránke
  `/sluzby/webova-aplikacia-ordevia` (kotva `#pre-tim`, hneď za „Pacient aj
  tím vidia to isté"). Vľavo text a tri body (prehľad dňa, rezervácie
  a potvrdenia, tímový chat), vpravo tri telefóny s obrazovkami CRM.
- **Homepage**: pod sekciou Ordevie menší blok s rovnakým nadpisom, troma
  telefónmi a odkazom „Čo uvidí váš tím" na `#pre-tim`.
- **Nový komponent `OrdeviaCrmPhones.tsx`** – tri PNG telefóny cez
  `next/image` (Rezervácie · Prehľad dňa · Tímový chat), poskladané cez
  seba ako na propagačnom banneri.
- **Obrázky** `public/images/ordevia/ordevia-crm-{rezervacie,prehlad,chat}.png`
  – prevzaté z repozitára Ordevia (`propagacia/ordevia-mobil/`).
- **SEO/GEO**: `featureList` v `WebApplication` schema a `llms.txt` doplnené
  o tímový chat a CRM v prehliadači na mobile.

**Prečo**

Stránka Ordevie mala len ilustračný náhľad aplikácie pre pacientov nakreslený
v CSS a kliniky nevideli, s čím bude pracovať ich tím. Prišli skutočné
obrazovky CRM (s vymyslenými údajmi) aj s bannerom. Banner sa nevložil ako
obrázok, ale jeho rozloženie je poskladané v HTML: text v obrázku nevidia
vyhľadávače ani AI crawlery a na mobile by bol nečitateľný. Obrázky zostali
PNG, nie SVG – ide o vykreslené obrazovky, SVG by bolo ťažšie a menej ostré.

Všetky tri obrazovky aj texty sekcie sú overené v kóde Ordevie (tímový chat,
prehľad dňa, potvrdenie rezervácie, mobilné menu CRM) a zapísané do tabuľky
v [ORDEVIA.md](ORDEVIA.md).

**Dotknuté súbory**

- `src/components/OrdeviaCrmPhones.tsx` (nový), `src/components/OrdeviaShowcase.tsx`
- `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/Content.tsx`, `page.tsx`
- `src/app/llms.txt/route.ts`
- `public/images/ordevia/*.png` (nové)
- `ORDEVIA.md` – nová časť „Obrázky", nové riadky v tabuľke overených tvrdení

**Pozor na**

- Obrazovky sú z **CRM pre tím kliniky**, nie z aplikácie pre pacientov.
  Nepoužívať ich pri texte o pacientovi.
- CRM nemá manifest, nie je to inštalovateľná aplikácia – na webe sa píše
  „v prehliadači na mobile", nikdy „stiahnite si aplikáciu".
- Nová verzia obrázkov musí mať rozmer 1040 × 1960 (inak upraviť `W`/`H`
  v `OrdeviaCrmPhones.tsx`). Postup je v `ORDEVIA.md`.

---

## 2026-09-24 – Ordevia Connect: nové posolstvo a stránka produktu

**Čo sa zmenilo**

- **Stránka `/sluzby/webova-aplikacia-ordevia` prepísaná** podľa klientskej
  brožúry Ordevia Connect (september 2026). Hlavné posolstvo
  „Najprv termín. Potom aplikácia.", sekcie: problém („Pacient nechce ďalší
  portál. Chce mať istotu."), objednanie bez účtu v 4 krokoch, pacient vs.
  tím (aplikácia Ordevia Connect a CRM Ordevia), ako začneme (pilot, poradie
  nasadenia, čo odmeriame), bezpečnosť a hranice, ukážka pre kliniky,
  prihlásenie pre pacientov, 8 nových FAQ.
- **Hlavná výzva je „Vyžiadať prístup do ukážky"** →
  `demo.ordevia.sk/login/vyziadat-pristup` (nová `ORDEVIA.demoUrl`).
  Kontaktný formulár zostáva ako druhá možnosť.
- **Logo Ordevie** – nový `src/components/OrdeviaLogo.tsx` (symbol Sweep Duo
  ako inline SVG prevzatý 1:1 z `ordevia-symbol.svg` + wordmark v Kanit 500).
  Použité na stránke, na homepage aj v náhľade telefónu.
- **Náhľad telefónu** zodpovedá reálnej aplikácii: obrazovka Domov, stav
  požiadavky „V riešení · na rade je klinika", spodná navigácia
  Domov · Termíny · Služby · Správy · Profil.
- **Homepage, menu, footer, `/sluzby`**: „Aplikácia Ordevia" → „Ordevia
  Connect", nové texty; na homepage namiesto prihlásenia pre pacientov odkaz
  na ukážku (homepage je pre kliniky, prihlásenie je v menu a footeri).
- **SEO/GEO**: nový titulok a popis v `ROUTES`, `WebApplication` schema má
  `featureList` (len overené funkcie) a `creator`, `llms.txt` má prepísanú
  sekciu Ordevia Connect vrátane odkazu na ukážku.
- **Dokumentácia**: nový [ORDEVIA.md](ORDEVIA.md) – kde je Ordevia na webe,
  adresy, posolstvo, tabuľka **čo web smie tvrdiť** (s dôkazom v kóde
  Ordevie) a čo nie. `SEO.md` a `CLAUDE.md` (nová konvencia) odkazujú naň.

**Prečo**

Ordevia nemá vlastný propagačný web, propaguje sa na mediconect.sk. Pôvodná
stránka hovorila o „klinike vo vrecku" a o aktivačnom kóde od kliniky, kým
nový produkt stojí na objednaní **bez účtu** a na spojení pacienta s tímom
(CRM) – stará stránka to protirečila. Web zároveň nesmie sľubovať viac, než
produkt vie: brožúry obsahujú aj produktový smer (diagnostika, Premium,
poistenie) a štandardy (HL7 FHIR, OWASP MASVS, WCAG 2.2 AA), ktoré v kóde
nie sú. Každé tvrdenie na stránke bolo preto overené v repozitári Ordevia.

**Dotknuté súbory**

- `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/Content.tsx`, `faq.ts`, `page.tsx`
- `src/components/OrdeviaLogo.tsx` (nový), `OrdeviaPhoneMockup.tsx`, `OrdeviaShowcase.tsx`,
  `SiteHeader.tsx`, `SiteFooter.tsx`
- `src/app/(marketing)/sluzby/Content.tsx`, `src/app/llms.txt/route.ts`, `src/lib/seo.ts`
- `ORDEVIA.md` (nový), `SEO.md`, `CLAUDE.md`

**Čo treba doplniť ručne**

- Po merge požiadať v Search Console o opätovnú indexáciu stránky Ordevie.
- **Obrázky mobilnej aplikácie** v PNG alebo SVG – sú vyžiadané, obrázky
  z PDF majú malé rozlíšenie. Dovtedy stránka používa ilustračný náhľad
  v CSS. Postup pri vložení je v `ORDEVIA.md`, sekcia 7.
- Rozhodnúť otvorené otázky v `ORDEVIA.md` (natívna mobilná aplikácia,
  nahrávanie dokumentov).

**Pozor na**

- Ukážka na demo.ordevia.sk je **CRM s fiktívnou klinikou**, nie aplikácia
  pre pacientov – texty pri výzve to tak aj hovoria.
- Formulár na deme funguje len na nasadení `demo-staging` (premenná
  `DEMO_VYZIADAT_PRISTUP=1`). Ak sa demo presunie, zmeniť `ORDEVIA.demoUrl`.
- URL stránky sa nemenila (je indexovaná), zmenil sa len popisok v menu
  a drobčekoch na „Ordevia Connect".

---

## 2026-09-24 – Zásady ochrany osobných údajov: ukážka softvéru Ordevia

**Čo sa zmenilo**

Do `/ochrana-osobnych-udajov` doplnené štyri bloky o ukážke (deme) Ordevie:

- sekcia 2 (rozsah údajov) – údaje pri žiadosti o prístup do ukážky,
- sekcia 3 – nový bod **3.5 Prístup do ukážky softvéru Ordevia a obchodný
  kontakt** (účel, súhlas podľa čl. 6 ods. 1 písm. a), odvolanie súhlasu,
  ukážka obsahuje len fiktívne údaje, hosť vystupuje pod pseudonymom),
- sekcia 4 (doba uchovávania) – ukážkový účet max. 12 mesiacov od
  posledného prihlásenia, kontakty max. 24 mesiacov od posledného kontaktu,
- sekcia 5 (príjemcovia) – sprostredkovatelia Supabase, Vercel a Resend
  a právny základ prenosu mimo EÚ (DPF alebo štandardné zmluvné doložky).

Pod zásady pridaný riadok s dátumom poslednej aktualizácie.

**Prečo**

Formulár „Vyžiadať prístup" na demo.ordevia.sk už zbiera osobné údaje
(meno, firma, e-mail, telefón) a automatický výmaz hostí beží od 21. 9. 2026.
Prevádzkovateľom je MediConect s.r.o., takže účel, lehoty a sprostredkovatelia
musia byť v zásadách na mediconect.sk – predtým tam o deme nebolo nič.
Zároveň je to predpoklad na to, aby web mohol na demo odkazovať.

Text vychádza z podkladu „Doplnenie zásad OU – Ordevia demo" (21. 9. 2026),
zmluvy so sprostredkovateľmi sú overené v zázname „DPA – Ordevia demo".

**Dotknuté súbory**

- `src/app/(marketing)/ochrana-osobnych-udajov/Content.tsx`

**Čo treba doplniť ručne**

- Stiahnuť DPA od Supabase, Vercel a Resend do firemnej dokumentácie GDPR
  a doplniť účel „Ukážka softvéru Ordevia a obchodný kontakt" do záznamu
  o spracovateľských činnostiach.
- 24-mesačná lehota pre kontakty platí aj pre e-maily s upozorneniami
  o záujemcoch v schránke – tie systém nemaže, treba ich raz ročne premazať
  ručne alebo nastaviť pravidlo v pošte.

**Pozor na**

- Lehoty 12/24 mesiacov musia sedieť s praxou v Ordevii (nočný výmaz hostí).
  Ak sa zmenia tam, treba ich zmeniť aj tu.
- Text nekontroloval advokát; pri väčšej kampani to podklad odporúča.

---

## 2026-09-23 – Skryté referencie (weby, ktoré sme robili)

**Čo sa zmenilo**

- Z homepage odstránená sekcia „Naše referencie" (`#referencie`) s kartami
  Aurel Clinic (`aurelclinic.sk`) a MUDr. Jozef Čajka (`drcajka.sk`)
  a tlačidlami „Navštíviť web".
- Komponent `src/components/ReferencesShowcase.tsx` zmazaný – nikde inde sa
  nepoužíval. Sekcia nie je len vizuálne skrytá: nie je v HTML, v JS bundli
  ani v structured data, takže ju nevidia ani vyhľadávače a AI crawlery.
- `BLOG.md`: referencie označené ako skryté, téma č. 20 (prípadová štúdia)
  zmenená na anonymizovanú.

**Prečo**

Na pokyn používateľa – referencie a odkazy na weby klientov sa nemajú na
webe zobrazovať vôbec.

**Dotknuté súbory**

- `src/app/(marketing)/HomeContent.tsx` – odstránený import a sekcia
- `src/components/ReferencesShowcase.tsx` – zmazaný
- `BLOG.md`

**Pozor na**

- Kotva `/#referencie` prestala existovať. V projekte na ňu nič neodkazovalo,
  externé odkazy by len skončili na vrchu homepage.
- Obnova: `git checkout 8e61d97 -- src/components/ReferencesShowcase.tsx`
  a vrátiť sekciu medzi „Case study" a „Proces" v `HomeContent.tsx`.

---

## 2026-09-12 – Blog na MDX + článok „Kde dnes pacienti hľadajú lekára?"

**Čo sa zmenilo**

- **Články sú teraz `.mdx` súbory** v `content/blog/`, načítava ich nový
  `src/lib/blog.ts` (frontmatter cez `gray-matter`, render cez
  `next-mdx-remote/rsc`, tabuľky cez `remark-gfm`). Jeden spoločný layout
  `src/app/(marketing)/blog/[slug]/page.tsx` pre všetky články
  (`generateStaticParams`, `generateMetadata`).
- **Nový výpis `/blog`**: `PageHero`, hlavný článok na celú šírku, mriežka
  kariet (`PostCard`), `CTABanner`. Vlastný footer výpisu aj článku zmazaný –
  stránky mali dva footre.
- **Autor článkov**: `content/authors.ts` (Tomáš Kuchta), box pod článkom
  (`AuthorBox`) a `Person` v `BlogPosting` schéme s rovnakým `@id` ako
  kontaktná osoba na homepage.
- **Komponenty pre články** (`src/components/blog/MdxComponents.tsx`):
  `Callout`, `MetricGrid`, `Quote`, `Steps`/`Step`, `FaqBlock`, `Source`;
  nadpisy dostávajú `id` pre obsah článku (`TableOfContents`). Zdieľanie
  (`ShareLinks`), súvisiace články, čas čítania.
- **Typografia článku** `.article-prose` v `globals.css` (bez pluginu
  `@tailwindcss/typography`).
- **SEO**: `seo.ts` má nové `metadataFor`, `webPageJsonLdFor`,
  `breadcrumbJsonLdFor` pre stránky mimo `ROUTES`; pôvodné funkcie na ne
  delegujú. Záznam starého článku z `ROUTES` odstránený. `sitemap.ts`
  a `llms.txt` pridávajú články automaticky. `FAQPage` z poľa `faq`.
- **Existujúca prípadová štúdia** prepísaná do MDX na rovnakej URL
  (`/blog/strategicka-reaktivacia-pacientskej-databazy`), opravený preklep
  „prevěnciu", dekoratívny SVG graf nahradený tabuľkou.
- **Nový článok** `content/blog/kde-dnes-pacienti-hladaju-lekara.mdx`
  (formát otázka, kategória Web a SEO). Všetky čísla majú zdroj: Eurostat
  `isoc_ci_ac_i` (SK 2025: 59,9 % hľadá zdravotné informácie online;
  2024: 28,6 % sa objednalo cez web), rater8 2025 report (USA, n = 1 008),
  Press Ganey 2023 (USA, n = 1 000). Americké dáta sú v texte označené.
- Dokumentácia: `BLOG.md` (stav realizácie, ako pridať článok, pravidlá
  obsahu), `SEO.md` (sekcia Blog, počet URL v sitemape), `CLAUDE.md`
  (konvencia pre články).

**Prečo**

Blog mal jeden článok ako 400-riadkový TSX a zoznam článkov natvrdo na troch
miestach. Pri cieli 15–25 článkov (`SEO.md`) to nebolo udržateľné. Teraz je
nový článok jeden súbor a všetko ostatné (metadata, canonical, sitemap,
llms.txt, drobčeky, schémy) vzniká samo. Téma prvého článku vybraná
používateľom z návrhov; autor Tomáš Kuchta, ceny sa nezverejňujú,
štatistiky len so zdrojom – všetko podľa pokynov používateľa.

**Dotknuté súbory**

- `content/blog/*.mdx`, `content/authors.ts` – nové
- `src/lib/blog.ts` – nový; `src/lib/seo.ts` – `*For` funkcie, zmazaný záznam článku
- `src/app/(marketing)/blog/page.tsx` – prepísaný; `blog/[slug]/page.tsx` – nový;
  `blog/strategicka-reaktivacia-pacientskej-databazy/page.tsx` – zmazaný
- `src/components/blog/` – `MdxComponents`, `PostCard`, `AuthorBox`,
  `TableOfContents`, `ShareLinks`
- `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`, `src/app/globals.css`
- `package.json` – `next-mdx-remote`, `gray-matter`, `remark-gfm`
- `BLOG.md`, `SEO.md`, `CLAUDE.md`

**Čo treba doplniť ručne**

- Prejsť text nového článku – najmä odsek „Z našej praxe" v sekcii
  o slovenských hodnotiacich portáloch, ktorý je jediné tvrdenie bez zdroja.
- Doplniť `sameAs` autora v `content/authors.ts` (LinkedIn), keď bude.
- Po merge požiadať v Search Console o indexáciu `/blog` a nového článku.

**Pozor na**

- `src/lib/blog.ts` používa `node:fs` – import v klientskom komponente
  rozbije build. Hlavička a footer preto berú `ROUTES` zo `seo.ts`, nie odtiaľ.
- `TableOfContents` má `variant="inline"` (mobil) a `variant="sidebar"`
  (desktop); prvá verzia renderovala oba naraz a obsah bol na desktope dvakrát.
- Kampaň v prípadovej štúdii prebehla vo februári 2025, článok je
  publikovaný marcom 2026 – používateľ zatiaľ nepotvrdil, ktorý dátum je správny.

---

## 2026-09-12 – Návrh nového blogu

**Čo sa zmenilo**

- Nový dokument [BLOG.md](BLOG.md) – návrh, ako má vyzerať blog: čo o firme
  a značke hovorí projekt, audit súčasného blogu, cieľ, obsahová stratégia
  (4 formáty, 6 kategórií, 20 tém), technické riešenie (MDX + register
  v TypeScripte napojený na `ROUTES`), dizajn, etapy realizácie a otvorené
  otázky.
- `CLAUDE.md` – `BLOG.md` pridaný do mapy dokumentácie.
- Žiadna zmena kódu.

**Prečo**

Blog má dnes jeden článok napísaný ako 400-riadkový TSX a zoznam článkov
natvrdo na troch miestach (výpis, `ROUTES`, `Blog` schema). `SEO.md` uvádza,
že pre citovanie v AI vyhľadávačoch treba 15–25 článkov – to sa v dnešnej
podobe nedá udržať. Návrh je zapísaný do repozitára, aby rozhodnutie o smere
(MDX vs. CMS, autor, témy) bolo dohľadateľné aj po realizácii.

**Dotknuté súbory**

`BLOG.md` (nový), `CLAUDE.md`, `CHANGELOG.md`

**Čo treba doplniť ručne**

Odpovede na otvorené otázky v sekcii 8 dokumentu – najmä kto je autor článkov
a či sa môžu zverejniť cenové rozpätia a reálne dáta z kampaní.

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
