# Ordevia Connect na webe Mediconect

Ordevia Connect je produkt spoločnosti MediConect s.r.o. („Ordevia Connect ·
by mediconect"). Vlastný propagačný web nemá – **celá propagácia je na
mediconect.sk**. Tento dokument hovorí, čo na webe o Ordevii je, **čo smie
web tvrdiť** a odkiaľ to vieme.

Posledné overenie: **24. 9. 2026** (proti zdrojovému kódu v repozitári
Ordevia, `C:\Users\omanc\Documents\Ordevia`).

---

## 1. Kde na webe Ordevia je

| Miesto | Súbor | Čo tam je |
|---|---|---|
| Stránka produktu | `src/app/(marketing)/sluzby/webova-aplikacia-ordevia/` | celý príbeh produktu, FAQ, `WebApplication` + `FAQPage` schema. Obrázky CRM: v úvode Prehľad dňa, sekcia „Tri obrazovky…" (kotva `#pre-tim`) s každou obrazovkou zvlášť a popisom, sekcia „Celá klinika vo vašom mobile." (kotva `#v-mobile`) s troma telefónmi spolu |
| Homepage | `src/components/OrdeviaShowcase.tsx` | jedna sekcia: posolstvo, 4 body, odkaz na stránku a na ukážku; vpravo tri telefóny s obrazovkami CRM |
| Menu | `src/components/SiteHeader.tsx` | **tlačidlo „ordevia" v hornej lište – vidno ho vždy** (desktop aj mobil vedľa hamburgera); „Ordevia Connect" aj v menu Služby + prihlásenie pre pacientov |
| Footer | `src/components/SiteFooter.tsx` | karta s prihlásením pre pacientov |
| Prehľad služieb | `src/app/(marketing)/sluzby/Content.tsx` | karta „Ordevia Connect" |
| `llms.txt` | `src/app/llms.txt/route.ts` | sekcia Ordevia Connect pre AI vyhľadávače |
| Zásady OU | `src/app/(marketing)/ochrana-osobnych-udajov/Content.tsx` | bod 3.5 – ukážka (demo) Ordevie |

Logo: `src/components/OrdeviaLogo.tsx` (symbol + wordmark), obrazovky CRM:
`src/components/OrdeviaCrmPhones.tsx`. Adresy sú v konštante `ORDEVIA`
v `src/lib/seo.ts`.

### Tlačidlo v menu

Ordevia je v hornej lište ako samostatné tlačidlo (symbol + wordmark
„ordevia"), aby bola vidieť na každej stránke. Na stránke Ordevie je
zvýraznené (`aria-current`). Aby sa pri šírke 1024 px zmestilo do jedného
riadku, **z lišty zmizol odkaz „Domov"** (na úvod vedie logo; v mobilnom
menu „Domov" zostal) a odkazy majú do 1280 px menší rozostup. Na mobile je
tlačidlo vedľa hamburgera; pod 360 px ukazuje len symbol.

Symbol v tlačidle má **24 px** na desktope aj na mobile – to je najmenšia
veľkosť, pri ktorej brand kit kreslí aj vnútorný ťah. Pri menšom symbole by
vnútorný kruh chýbal a znak by vyzeral ako otvorený kruh. Výšku tlačidla
drží menší vertikálny padding.

> ⚠️ Lišta je pri 1024 px takmer plná (medzi logom a odkazmi ~15 px).
> Nový odkaz do nej pridávať až po úprave – napríklad zlúčením tlačidiel
> „Konzultácia" a „Dopyt".

### Obrázky

| Čo | Kde na webe | Zdroj |
|---|---|---|
| CRM na mobile: Rezervácie · Prehľad dňa · Tímový chat | `OrdeviaCrmPhones.tsx` → `public/images/ordevia/ordevia-crm-{rezervacie,prehlad,chat}.png`. Tri spolu: `OrdeviaCrmPhones` (default export), jeden: `OrdeviaCrmPhone screen="…"`, alt texty v `CRM_SCREENS` | repozitár Ordevia, `propagacia/ordevia-mobil/telefon-*@2x.png` |

- CRM obrázky sú **PNG 1040 × 1960 s priehľadným pozadím** (telefón aj
  s rámčekom). Vznikli vykreslením HTML zo `propagacia/ordevia-mobil/zdroj/`
  (`render.mjs`, headless Chrome). **SVG sa nepoužíva** – ide o vykreslené
  obrazovky s tieňmi a písmom, SVG by bolo ťažšie a menej ostré.
- Údaje na obrázkoch sú vymyslené (Jana Vzorová, Peter Príkladný, …), preto
  popisok „Ukážka CRM s ilustračnými údajmi".
- Na webe **nie je žiadny obrázok aplikácie pre pacientov** – pôvodný
  náhľad nakreslený v CSS (`OrdeviaPhoneMockup.tsx`) bol 24. 9. 2026
  odstránený. Obrazovky CRM sa nesmú vydávať za aplikáciu pre pacientov.
- **Nová verzia obrázkov:** prepísať súbory v `public/images/ordevia/` pod
  rovnakým názvom. Rozmer musí zostať 1040 × 1960, inak treba upraviť
  `W`/`H` v `OrdeviaCrmPhones.tsx`.
- Propagačný banner (`ordevia-mobil-banner-1920x1080@2x.png`) sa na web
  **nevkladá ako obrázok** – text v obrázku nevidia vyhľadávače ani AI
  crawlery a na mobile by bol nečitateľný. Jeho rozloženie je poskladané
  v HTML (text vľavo, tri telefóny vpravo).

URL stránky zostala `/sluzby/webova-aplikacia-ordevia` (bola už indexovaná),
mení sa len obsah, titulok a popisok v menu.

## 2. Adresy

| Čo | URL | Pre koho |
|---|---|---|
| Aplikácia pre pacientov | `https://moja.ordevia.sk` (`/prihlasenie`) | pacienti |
| CRM pre kliniku | `https://app.ordevia.sk` (`/login`) | tím kliniky – na webe sa neodkazuje |
| Verejné objednávanie | `https://app.ordevia.sk/objednavka/{slug-kliniky}` | pacienti konkrétnej kliniky – na webe sa neodkazuje (nie je verejná ukážková klinika) |
| Žiadosť o prístup do ukážky | `https://demo.ordevia.sk/login/vyziadat-pristup` | kliniky – **hlavná výzva na webe** |

Formulár na deme rieši Ordevia (nie mediconect.sk). Beží len na nasadení
`demo-staging` s premennou `DEMO_VYZIADAT_PRISTUP=1`; na produkcii vracia 404.
Ukážka je **CRM s fiktívnou klinikou**, nie aplikácia pre pacientov.

## 3. Hlavné posolstvo

**„Najprv termín. Potom aplikácia."** Pacient sa objedná bez zakladania účtu
a aplikáciu si aktivuje až potom, keď už vie, načo mu je. Klinika získa jedno
miesto, kde vidí rezerváciu, komunikáciu aj ďalší krok pacienta.

Podtitul: „Celá cesta pacienta na jednom bezpečnom mieste." Tagline značky:
„Digitálna starostlivosť".

Zdroj: klientska brožúra Ordevia Connect (september 2026). Slogan v kóde
aplikácie nie je, princíp áno (`ordevia-app/src/app/objednavka/hotovo/page.tsx`).

## 4. Čo web smie tvrdiť (overené v kóde)

| Tvrdenie | Stav | Dôkaz v repozitári Ordevia |
|---|---|---|
| Objednanie bez registrácie (kto sa objednáva → pracovisko → dôvod/služba → termín → údaje → potvrdenie) | ✅ | `ordevia-app/src/app/objednavka/[slug]/…` |
| Objednať môže aj dieťa či blízkeho | ✅ | `KrokKtoSaObjednava.tsx` |
| Potvrdenie e-mailom, odkaz na zmenu/zrušenie, `.ics` do kalendára | ✅ | `patient-app/src/app/objednavka/kalendar/[token]/route.ts` |
| Čakacia listina, keď nie je voľný termín | ✅ | `ordevia-app/src/app/cakacia-listina/[token]` |
| Ponuka aktivácie Connect po rezervácii (jednorazový kód e-mailom) | ✅ | `ordevia-app/src/app/objednavka/hotovo/page.tsx` |
| Aplikácia: Domov · Termíny · Služby · Správy · Profil | ✅ | `patient-app/src/components/BottomNav.tsx` |
| Príprava pred vyšetrením (pokyny schválené klinikou) | ✅ | `patient-app/src/lib/cesta-pacienta/journey.ts` |
| Požiadavky v Správach: typický čas odpovede, stav Nová / V riešení / Vybavená, „na rade klinika / vy" | ✅ | `patient-app/src/lib/poziadavky/labels.ts` |
| Profil: súhlasy (e-mail, SMS), poisťovňa, prehľad prístupov | ✅ | `patient-app/src/app/profil/` |
| E-mailové pripomienky termínov | ✅ | `patient-app/src/lib/reminders/worker.ts` |
| Prihlásenie: Google, e-mail + heslo, jednorazový kód e-mailom, aktivačný kód od kliniky | ✅ | `patient-app/src/app/prihlasenie/LoginForm.tsx` |
| Supabase Auth; databáza aj aplikácia vo Frankfurte (EÚ) | ✅ | `docs/security/ORDEVIA_GDPR_SECURITY_AUDIT_2026-09-19.md`, `patient-app/vercel.json` |
| Beží v prehliadači, na mobile sa dá pridať na plochu (PWA) | ✅ | `patient-app/src/app/manifest.ts` |
| CRM: požiadavky s riešiteľom a termínom odpovede, kalendár a kapacita, databáza, súhlasy, kampane, reporty, návratnosť | ✅ | `ordevia-app/src/lib/crm-menu.ts` |
| Správy nie sú na akútne stavy (155 / 112) | ✅ | `patient-app/src/app/spravy/AkutnyDisclaimer.tsx` |
| CRM: interný tímový chat – kanály, skupiny, priame správy, prílohy | ✅ | `ordevia-app/src/app/(crm)/crm/chat/`, položka menu v `ordevia-app/src/lib/crm-menu.ts` |
| CRM: prehľad dňa – „Vyžaduje pozornosť", rezervácie a úlohy na dnes, vyťaženosť týždňa, program dňa | ✅ | `ordevia-app/src/app/(crm)/crm/NastenkaKlinika.tsx`, `DnesPrehlad.tsx` |
| CRM: zoznam rezervácií pre recepciu, potvrdenie novej rezervácie priamo zo zoznamu | ✅ | `ordevia-app/src/app/(crm)/crm/rezervacie/zoznam/ZoznamRezervaciiClient.tsx` |
| CRM funguje v prehliadači aj na mobile (mobilné menu) | ✅ | `ordevia-app/src/app/(crm)/CrmNavigacia.tsx` (`md:hidden` zásuvka). CRM **nemá** manifest – nie je inštalovateľná aplikácia, píše sa „v prehliadači". |
| Roly v CRM: recepcia, lekár, vedenie (majiteľ, koordinátor) | ✅ | `ordevia-app/src/lib/crm-menu.ts`, `lib/booking.ts` |

## 5. Čo web netvrdí (a prečo)

| Nepísať | Prečo |
|---|---|
| Diagnostika v partnerskej sieti (MR, CT, RTG, laboratóriá), Premium, zmena poisťovne, komerčné poistenie, overené produkty/marketplace | V aplikácii je len dlaždica, ktorá otvorí požiadavku. V predajnej brožúre označené ako **produktový smer**, nie spustená ponuka. |
| HL7 FHIR, OWASP MASVS, WCAG 2.2 AA | V kóde nenájdené. Existuje len automatický sken prístupnosti proti WCAG 2.1 AA, nie certifikácia. |
| Integrácie EHR/NIS, LIS, PACS, platby | Nenájdené (platby sú v backlogu). |
| Výsledky vyšetrení v aplikácii | Odložené za verziu 1. |
| SMS pripomienky, push notifikácie | SMS kód existuje, ale produkčne sa nepoužíva; push nie je. |
| Zastupovanie rodinným príslušníkom v aplikácii | Vyradené z rozsahu (okrem objednania dieťaťa/blízkeho). |
| Passkeys, step-up overenie | Len rozhodnutie (ADR), bez kódu. |
| Nahrávanie dokumentov | Kód existuje, ale v aplikácii je dlaždica „dokumenty nie sú dostupné" – nejednoznačné, preto zatiaľ nie. |
| Natívna aplikácia v App Store / Google Play | Nenájdená, je len inštalovateľná webová aplikácia (PWA). |
| „Ordevia nespracúva zdravotné údaje" | Bezpečnostný audit to zakazuje: nespracúva zdravotnú dokumentáciu, ale údaje o využití zdravotných služieb spadajú pod čl. 9 GDPR. |
| „Najbezpečnejšie / jediné / unikátne na trhu" | Bez porovnávacieho testu nikdy. Rezerváciu bez účtu má aj e-VÚC. |
| Mená konkurentov (Medevio, e-VÚC, eČakáreň, …) a porovnania s nimi | Predajná brožúra je **interný podklad, nešíriť klientom**. |
| Čísla typu „o X % menej telefonátov" | Nemáme namerané. Metriky sa uvádzajú len ako to, čo **v pilote odmeriame**. |
| Ceny | Na webe sa ceny nezverejňujú. |

Keď sa niečo z tabuľky 5 spustí, over to v kóde Ordevie, presuň do tabuľky 4
a až potom to daj na web.

## 6. Podklady

- Klientska brožúra „Ordevia Connect – Digitálna starostlivosť" (8 strán) –
  zdroj posolstva a štruktúry stránky.
- Predajná brožúra pre obchodný tím (16 strán, **interná**) – na web sa
  z nej berie len tón a pravidlá („predávame prvý merateľný krok", pilot).
- Brand kit „Sweep Duo" v2.0 – farby Ink `#0C141A`, Teal `#4CADB6`,
  Teal Light `#88D5DB`, Navy `#041D2C`; wordmark Kanit Medium 500, mínusky,
  −0,01 em, „via" v Teal Light. Na tmavom pozadí webu sa používa reverzná
  zelená verzia (Teal + Teal Light). Symbol sa nedeformuje, nezrkadlí,
  neotáča; vnútorný ťah sa vynecháva len pod 24 px.
- Symbol: `patient-app/public/ordevia-symbol.svg` v repozitári Ordevia –
  cesty sú v `OrdeviaLogo.tsx` prevzaté 1:1.

## 7. Otvorené otázky

- **Obrázky aplikácie pre pacientov:** na webe sú len obrazovky CRM
  (pozri „Obrázky" v časti 1). Keď prídu obrazovky aplikácie pre pacientov
  v rovnakom formáte (PNG 1040 × 1960 s priehľadným pozadím, fiktívne
  údaje), pridať ich do sekcie „Pacient aj tím vidia to isté".
- **Mobilná aplikácia:** v kóde je len PWA. Ak existuje natívna aplikácia
  v obchodoch, doplniť odkazy a upraviť FAQ „Musí si pacient niečo inštalovať?".
- **Uzavretý pilot:** aplikácia má prepínač, ktorý ju obmedzí na schválené
  kliniky. Web preto nehovorí, že je dostupná „pre každého pacienta".
- **Dokumenty:** rozhodnúť, či je nahrávanie dokumentov hotové – potom ho
  pridať do sekcie pre pacienta.
