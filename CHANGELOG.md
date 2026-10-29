# Changelog

Chronologický záznam zmien v projekte, najnovšie hore.

Pravidlá zápisu sú v [CLAUDE.md](CLAUDE.md). Každý zásah do kódu musí mať
záznam – uvádzajte vždy aj **prečo**, nielen čo sa zmenilo.

---

## 2026-10-29 – Ochrana osobných údajov: dotazníky s osobným odkazom

**Čo sa zmenilo**
- Na stránke /ochrana-osobnych-udajov pribudol bod 3.6 „Dotazníky s osobným odkazom a príprava spolupráce“ (účel, právny základ čl. 6 ods. 1 písm. b) GDPR, kto má prístup, zákaz zdravotných údajov).
- Doplnené v bode 2 (rozsah údajov), 4 (doba uchovávania – počas rokovaní a spolupráce + najviac 3 roky) a 5 (sprostredkovatelia Supabase, Vercel, Resend platia aj pre dotazníky).
- Dátum poslednej aktualizácie: 29. 10. 2026.

**Prečo**
Ordevia posiela klientom Mediconectu dotazníky s osobným odkazom (úvodný audit podnikania, firiem a majetku). Dotazník od 29. 10. 2026 zobrazuje poučenie a odkazuje na túto stránku (Ordevia #3524), no zásady dotazníky vôbec nespomínali – poučenie a zásady sa museli zhodovať.

**Dotknuté súbory**
- `src/app/(marketing)/ochrana-osobnych-udajov/Content.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Text bodu 3.6 sa musí zhodovať s poučením v Ordevii (`OCHRANA_UDAJOV_MEDICONECT` v šablóne Diagnostický audit). Pri zmene jedného upraviť aj druhé.

---

## 2026-10-29 – Nová podstránka Nábor lekárov, upravená modelová situácia Náborového managementu

**Čo sa zmenilo**
- Nová podstránka `/business-partner/nabor-lekarov` – variant Náborového managementu pre výberové konanie na lekára (šablóna `PillarPage`), záznam v `src/lib/seo.ts`, položka v menu Business partner za „Náborový management“.
- Náborový management: nový text modelovej situácie podľa Viktora a odkaz na Nábor lekárov v súvisiacich stránkach.

**Prečo**
Viktor chce ponúkať nábor aj na lekárov. Pri lekároch je hlavným kanálom komunita MyMedical a rezidenti, nie inzerát; text to zdôrazňuje a zároveň dodržiava rovnaké pravidlá ako pri sestrách (výber v mene klienta, žiadna vlastná databáza uchádzačov, MyMedical je kanál na zverejnenie ponuky).

**Dotknuté súbory**
- `src/app/(marketing)/business-partner/nabor-lekarov/Content.tsx`, `page.tsx` (nové)
- `src/app/(marketing)/business-partner/naborovy-management/Content.tsx`
- `src/lib/seo.ts`, `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič. Karta v mriežke `/business-partner` pre Nábor lekárov zatiaľ nie je (chýba fotografia).

**Pozor na**
- Opakovanie výberu je na webe naviazané na „podmienky zmluvy“ (Viktor 29. 10. 2026) – web nesmie sľubovať viac ako zmluva o nábore (jedno opakovanie pri skončení v skúšobnej dobe).

## 2026-10-29 – Náborový management: karta na /business-partner a fotografia

**Čo sa zmenilo**
- Nová karta „Náborový management“ v mriežke oblastí na `/business-partner` (`BusinessPartnerAreas.tsx`), pred Zamestnaneckými benefitmi. Mriežka má teraz 8 kariet, takže posledná karta už nie je roztiahnutá na celú šírku.
- Fotografia aj pod úvodným textom podstránky `/business-partner/naborovy-management`.

**Prečo**
Podstránka bola zverejnená bez karty v prehľade, lebo ostatné karty majú fotografiu. Viktor chcel vhodnejší motív, nie nutne zdravotnícky.

**Fotka** Unsplash 1586281380349-632531db7ed4 (životopis na podložke vedľa notebooku; licencia Unsplash – bezplatné komerčné použitie), `public/images/business-partner/naborovy-management.webp`, 1400 × 934, WebP.

**Dotknuté súbory**
- `src/components/BusinessPartnerAreas.tsx`
- `src/app/(marketing)/business-partner/naborovy-management/Content.tsx`
- `public/images/business-partner/naborovy-management.webp` (nový)
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Na fotografii je anglický nápis „My Resume“ – ak bude prekážať, vymeniť za iný motív bez textu.

## 2026-10-29 – Nová podstránka Business partner → Náborový management

**Čo sa zmenilo**
- Nová podstránka `/business-partner/naborovy-management` (šablóna `PillarPage`, rovnaká ako ostatné podstránky Business partner).
- Záznam v `src/lib/seo.ts` (titulok, popis, štruktúrované dáta, sitemap), položka v menu Business partner v `SiteHeader.tsx` (pred Zamestnanecké benefity).
- Úvodná stránka, karta piliera Business partner: doplnené „nábor sestier a personálu“.
- Kanály oslovenia bez siete MyMedical; namiesto nej e-mailová kampaň pre zamestnancov a klientov klienta, platená kampaň na sociálnych sieťach ako služba navyše s osobitným nacenením (rozhodnutie Viktora 29. 10. 2026).

**Prečo**
Mediconect predáva službu výberového konania na zdravotnícky personál (prvá pozícia: zdravotná sestra). Stránka opisuje službu tak, ako ju upravuje zmluva: zamestnávateľom a prevádzkovateľom údajov je klient, Mediconect nevedie vlastnú databázu uchádzačov (zákon č. 5/2004 Z. z.), žiadne garancie ani mená klientov.

**Dotknuté súbory**
- `src/app/(marketing)/business-partner/naborovy-management/Content.tsx`, `page.tsx` (nové)
- `src/lib/seo.ts`, `src/components/SiteHeader.tsx`, `src/components/ServicesNebula.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič. Karta v mriežke na `/business-partner` (`BusinessPartnerAreas.tsx`) príde s fotografiou v ďalšej zmene.

**Pozor na**
- Text nesmie sľubovať „databázu sestier“ ani výsledok – rozpor so zmluvou a so zákonom o službách zamestnanosti.
## 2026-10-29 – Formulár na /kontakt: zamestnaný lekár nevypĺňa názov praxe

**Čo sa zmenilo**
- Ak je zvolená etapa „Som zamestnaný lekár“, formulár skryje blok „O vašom zariadení“ (typ subjektu, názov praxe, mesto, web). Povinné je už len meno a e-mail.
- Server (`/api/dopyt`) prijme dopyt bez typu subjektu a názvu praxe. Ak chýbajú, uloží „Zamestnaný lekár“ a „—“.

**Prečo**
Audit (2026-10-29) zistil, že povinný názov praxe odrádza zamestnaných lekárov, ktorí žiadnu prax nemajú.

**Dotknuté súbory**
- `src/components/MediconectForm.tsx`
- `src/app/api/dopyt/route.ts`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Ostatné etapy (majiteľ, zakladateľ) majú polia povinné ako predtým.
- Overené zostavením. Odoslanie dopytu zamestnaným lekárom treba otestovať na živom webe a skontrolovať, či sa správne zapíše do CRM.

## 2026-10-29 – Jeden vstup pre konzultácie: /konzultacia

**Čo sa zmenilo**
- Všetky tlačidlá a odkazy na kontakt (hlavička, hero, pás „Cesta lekára“, výzva v CTA) vedú na `/konzultacia`. Nič sa neotvára v modálnom okne.
- Odkaz `?kontakt=true` presmeruje na `/konzultacia`.
- Z layoutu a domovskej stránky sa odstránil modálny formulár `ContactModal`. Súbor zostáva v repozitári, ale nikde sa nevolá.

**Prečo**
Audit (2026-10-29) zistil tri rôzne vstupy na konzultáciu. Modálny formulár vyžadoval názov kliniky a telefón, čo zamestnaných lekárov odradilo. Stránka `/konzultacia` takéto povinné polia nemá.

**Dotknuté súbory**
- `src/app/(marketing)/layout.tsx`
- `src/app/(marketing)/HomeContent.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Formulár na `/kontakt` (`MediconectForm.tsx`) zostáva nezmenený. Má vlastné povinné polia, ktoré audit tiež označil; je to samostatná úloha.
- Overené zostavením. Na živom webe treba skontrolovať, že všetky tlačidlá vedú na `/konzultacia`.

## 2026-10-29 – Hlavný nadpis na domovskej stránke je viditeľný hneď

**Čo sa zmenilo**
- Nadpis, podnadpis a hlavné tlačidlá v hero sekcii majú `initial={false}`. Pôvodné HTML ich obsahuje vo finálnom stave, takže nie sú skryté (`opacity:0`) až do načítania JavaScriptu.
- Úvodná animácia sa pri načítaní už nespúšťa. Ostatné animácie na stránke zostávajú.

**Prečo**
Audit (2026-10-29) odhalil, že mobilný LCP je 3,6 s, pretože hlavný nadpis sa zobrazí až po animácii. Overené v zdrojovom HTML: nadpis mal inline `opacity:0`.

**Dotknuté súbory**
- `src/app/(marketing)/HomeContent.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Pri ďalšom zásahu do hero sekcie nepoužívať `initial={{ opacity: 0 }}` na texty, ktoré majú byť pri LCP viditeľné.
- Overené zostavením a lokálnym serverom: HTML obsahuje nadpis s `opacity:1`. Meranie LCP na reálnom iPhone treba potvrdiť po nasadení.

## 2026-10-29 – Hlavička bez prednačítavania podstránok

**Čo sa zmenilo**
- Všetky odkazy v hlavičke (`SiteHeader.tsx`) majú `prefetch={false}`. Prehliadač si ich nesťahuje vopred.

**Prečo**
Pri otvorení domovskej stránky sa na pozadí sťahovali obsahy podstránok z menu (napríklad „Služby“ a „Ordevia“), aj keď ich používateľ nevidel. Na pomalom mobilnom pripojení to zaberalo prenos a čas procesora.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Odkazy v hlavičke sa sťahujú až po kliknutí, takže prvé prepnutie stránky môže byť o chvíľu pomalšie. Odkazy v obsahu stránok zostávajú bez zmeny.

## 2026-10-29 – Písma vo formáte WOFF2 (menšie načítanie)

**Čo sa zmenilo**
- Tri štýly písma Stolzl (tučné, stredné, pravidelné) sa sťahujú vo formáte WOFF2. Všetky štýly sú k dispozícii, pôvodné OTF súbory ostali ako záložný formát.
- V `globals.css` je pri každom `@font-face` WOFF2 ako prvá možnosť a OTF ako záloha.

**Prečo**
Stránka pri prvom načítaní sťahovala písma v OTF, spolu okolo 165 KB. WOFF2 je približne o polovicu menšie, úspora je zhruba 80 KB.

**Dotknuté súbory**
- `src/app/globals.css`
- `public/fonts/*.woff2` (6 nových súborov)

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Pôvodné OTF súbory sa nemažú, sú potrebné ako záloha pre prehliadače bez WOFF2.
- Overené zostavením a rozpoznaním všetkých šiestich súborov. Vzhľad písma na iPhone treba skontrolovať.

## 2026-10-29 – Mobilné menu: tlačidlo X je znova klikateľné

**Čo sa zmenilo**
- Panel mobilného menu je pod hlavičkou (`z-40`, hlavička `z-50`). Predtým panel prekrýval tlačidlo X a menu sa dalo zatvoriť len klepnutím na tmavé pozadie.

**Prečo**
Pri otvorenom menu sa tlačidlo X nedalo stlačiť. Na iPhone to vyzeralo ako pomalé zatváranie.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Overené zostavením a lokálnym testom v emulácii iPhone 13 Pro: zatvorenie cez X trvá približne 0,2 s. Na reálnom iPhone treba ešte overiť.

## 2026-10-29 – Mobilné menu sa zatvára okamžite

**Čo sa zmenilo**
- Pri zatváraní sa panel a prekryv skryjú okamžite, bez animácie. Otváranie zostáva animované (200 ms).

**Prečo**
Aj po skrátení na 150 ms sa zatváranie na iPhone zdalo pomalé. Animácia pri zatváraní je zbytočná, keďže menu sa zatvára z voľby používateľa.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Prechody sú viazané na stav „otvorené“ (`peer-checked:`). Pri zatváraní sa preto použije základný štýl bez prechodu. Overené len zostavením, na iPhone treba skontrolovať.

## 2026-10-29 – Rýchlejšie zatváranie mobilného menu

**Čo sa zmenilo**
- Zatváranie panela a prekryvu trvá 150 ms (predtým 200 ms).
- Viditeľnosť sa mení spolu s posunom, takže panel zmizne presne vtedy, keď dobehne animácia.

**Prečo**
Na iPhone sa panel po zatvorení skrýval pomaly.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Čas sa overil len zostavením (`npm run build`). Na iPhone treba skontrolovať, či je zatváranie dostatočne rýchle.

## 2026-10-29 – Mobilné menu sa otvára aj bez čakania na JavaScript

**Čo sa zmenilo**
- Mobilné menu je v HTML stránky od začiatku. Ovláda ho skrytý checkbox (`#mobile-menu-toggle`), hamburger je jeho `label`.
- Prekryv a panel menu sa zobrazujú cez CSS (`peer-checked:`), nie cez stav v Reacte. Animácia je jednoduchý posun a fade (200 ms), framer-motion sa v menu už nepoužíva.
- Odstránený samostatný handler na kliky mimo menu (prekryv ho nahrádza). Zatváranie pri scrollovaní a zámok scrollovania tela zostali.

**Prečo**
Na iPhone 13 Pro v Safari trvalo od načítania po otvorenie menu približne 4 sekundy. Menu sa nedalo otvoriť, kým sa nenačítal a nespustil JavaScript. Teraz funguje hamburger hneď po zobrazení stránky.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Overené je len zostavenie (`npm run build`). Vzhľad a animácia na reálnom iPhone sa ešte musia skontrolovať.
- Ak sa stav checkboxu po načítaní JavaScriptu nezhoduje s otvoreným menu, príčina je v kombinácii `checked` a natívneho prepínania. Riešenie je v komponente `SiteHeader`.

## 2026-10-28 – Rýchlejšie mobilné menu

**Čo sa zmenilo**
- Prekryv mobilného menu: `backdrop-blur-sm` nahradený plnou priehľadnosťou `bg-black/70`.
- Hlavička pri scrollovaní: rozmazanie pozadia (`blur 20px`) len od šírky 768 px (`md:`); na mobile vypnuté.
- Animácia panela menu: pružina (`spring`) nahradená krátkym posunom 0,25 s (`easeOut`).

**Prečo**
Na mobile sa menu otváralo pomaly kvôli rozmazaniu nad celou obrazovkou a pružinovej animácii na slabších telefónoch. Hlavička s rozmazaním pri scrollovaní zaťažovala každý pohyb stránky.

**Dotknuté súbory**
- `src/components/SiteHeader.tsx`

**Čo treba doplniť ručne**
- Nič.

**Pozor na**
- Veľkosť JS balíkov (okolo 570 KB) sa nezmenila. Ak treba ďalšie zrýchlenie, je to samostatná úloha (dynamické načítanie menu).
- Logo `logo 2.png` v sekciách služieb (186 KB) zostáva; zmenšenie je samostatná zmena.

## 2026-10-26 – Čitateľná pätička na mobile (kontrast a miesto pre tlačidlo cookies)

**Čo sa zmenilo** V pätičke sa zvýšil kontrast textu: odkazy, kontakty, adresa a popis značky z `text-white/40` na `text-white/75`, spodný pruh z `text-white/30` na `text-white/65`, nadpisy stĺpcov z `text-white/80` na `text-white`, ikony sociálnych sietí z `text-white/50` na `text-white/75` (rámik `white/10` → `white/20`). Pätička má na mobile väčší spodný odstup (`pb-28`, od `md` opäť `pb-16`).

**Prečo** Na mobile sa text pätičky strácal v tmavom pozadí. Pomer kontrastu bol 3,8 : 1 (white/40) a 2,7 : 1 (white/30), čo nespĺňa WCAG AA (min. 4,5 : 1) a nezodpovedá ani brand manuálu („na tmavých plochách biely alebo svetlý text“). Nové hodnoty majú 10,6 : 1 a 8,2 : 1. Okrúhle plávajúce tlačidlo cookies vľavo dole zároveň na mobile prekrývalo posledné riadky adresy (IČ DPH).

**Dotknuté súbory** `src/components/SiteFooter.tsx`, `CHANGELOG.md`

**Čo treba doplniť ručne** Nič.

**Pozor na** Pri ďalších úpravách pätičky nepoužívať pre text na tmavom pozadí priehľadnosť bielej pod 65 % – pod touto hranicou kontrast klesá pod WCAG AA. Spodný odstup `pb-28` nezmenšovať, kým je tlačidlo cookies plávajúce (`CookieConsent.tsx`, `fixed bottom-4 left-4`).

---

## 2026-10-25 – Kúpele a rehabilitácia namiesto wellness

**Čo sa zmenilo** Z ponuky „Pre koho“ a z výberu v prihlasovacom formulári zmizol segment „Kúpele a wellness“. Nahradil ho segment „Kúpele a rehabilitácia“ pre kúpele a rehabilitačné prevádzky. Stránka pre segment sa presunula z `/pre-koho/pre-kupele-a-wellness` na `/pre-koho/pre-kupele-a-rehabilitacia`; text stránky je prepísaný na liečbu, obnovu zdravia a pacientov (wellness a relax z textov odstránené). Starú adresu presmeruje 301 v `next.config.mjs`.

**Prečo** Vedenie sa rozhodlo zamerať na kúpele a rehabilitačné prevádzky. Wellness nie je zdravotnícky segment a text o relaxe nezodpovedal ponuke služieb, ktoré chceme predávať.

**Dotknuté súbory** `src/app/(marketing)/pre-koho/pre-kupele-a-rehabilitacia/` (premenovaný priečinok, obsah), `src/lib/seo.ts` (záznam ROUTES), `src/components/ForWhomStrip.tsx`, `src/components/MediconectForm.tsx` (možnosť „Kúpele / rehabilitácia“), `src/app/(marketing)/pre-koho/Content.tsx`, `src/app/(marketing)/o-nas/Content.tsx`, `src/app/llms.txt/route.ts`, `next.config.mjs` (redirect), `BLOG.md` (plán článku).

**Čo treba doplniť ručne** Nič. Obrázok `public/images/segmenty/kupele-a-wellness.webp` zostal pod pôvodným názvom, pretože iba mení názov súboru bez zmeny obsahu; názov súboru sa dá premenovať neskôr.

**Pozor na** Stará adresa `/pre-koho/pre-kupele-a-wellness` musí zostať v redirectoch, inak vypadnú odkazy z externých stránok a vyhľadávačov. Nový slug treba používať aj v ďalších odkazoch.

## 2026-10-27 – GEO: AI vyhľadávače poznajú všetky tri piliere Mediconectu

**Čo sa zmenilo** `/llms.txt` (podklad pre ChatGPT, Perplexity, Claude, Gemini) nanovo opisuje Mediconect podľa aktuálneho posolstva z `ROUTES["/"]` a obsahuje sekcie **Business partner** (8 stránok) a **Správa a ochrana majetku** (7 stránok) s informáciou o NBS. Poznámky pre AI uvádzajú všetky tri oblasti, regulačný rámec finančných služieb a jednoznačnú identitu firmy. Schéma `Organization` dostala `disambiguatingDescription`, `LocalBusiness` rozšírené `knowsAbout` a neutrálny názov katalógu služieb.

**Prečo** `llms.txt` stále opisoval Mediconect ako „marketingovú agentúru špecializovanú výhradne na zdravotníctvo“ a 15 stránok dvoch hlavných pilierov v ňom vôbec nebolo. AI vyhľadávače tak firmu opisovali neúplne a Google AI prehľad si ju 25. 10. 2026 zamieňal s iným subjektom s podobným názvom.

**Dotknuté súbory** `src/app/llms.txt/route.ts`, `src/lib/seo.ts`, `src/app/layout.tsx`, `SEO.md`, `CHANGELOG.md`

**Pozor na** Sekcie v `llms.txt` sú vymenované ručne – novú stránku piliera treba doplniť aj tam. Mená iných značiek do textov pre AI nepatria.

---

## 2026-10-25 – Odkazy na Facebook, Instagram a Google profil v pätičke webu

**Čo sa zmenilo** V pätičke (stĺpec Kontakt) pribudli tri ikony s odkazmi na oficiálne profily: Facebook, Instagram a Google profil firmy. Zdrojom je nové pole `SOCIAL_LINKS` v `src/lib/seo.ts`; `SOCIAL_PROFILES` (sameAs v štruktúrovaných dátach) sa z neho odvodzuje, takže viditeľné odkazy a `sameAs` sa nemôžu rozísť. Klik na ikonu sa meria ako udalosť `klik_socialna_siet` s vlastnosťou `siet`.

**Prečo** Profily boli doteraz prepojené len neviditeľne (sameAs). Návštevník webu ich nenašiel a prepojenie fungovalo iba jedným smerom pre Google. Viditeľný odkaz s `rel="me"` potvrdzuje vlastníctvo profilov obojsmerne (profily už odkazujú na www.mediconect.sk) a ikona Google profilu vedie lekárov tam, kde môžu nechať recenziu.

**Dotknuté súbory** `src/lib/seo.ts`, `src/components/SiteFooter.tsx`, `src/components/Analytics.tsx`, `src/lib/track.ts`, `SEO.md`, `CHANGELOG.md`

**Čo treba doplniť ručne** Firemný LinkedIn, keď vznikne – jeden záznam v `SOCIAL_LINKS` (ikonu doplniť do `SOCIAL_ICONS` v pätičke, inak sa zobrazí všeobecná).

**Pozor na** Odkazy na zdieľanie článkov (`facebook.com/sharer`) sa ako `klik_socialna_siet` nemerajú – udalosť sa viaže na atribút `data-socialne-profily`, nie na doménu.

---

## 2026-10-25 – Instagram a Google profil firmy v štruktúrovaných dátach (sameAs)

**Čo sa zmenilo** `SOCIAL_PROFILES` v `src/lib/seo.ts` doplnené o Instagram Mediconectu a Google profil firmy (odkaz na Mapy cez CID).

**Prečo** Nadväzuje na zápis s Facebookom nižšie. Google profil firmy a Instagram boli v ten istý deň zosúladené s webom (popis, kategória, kontakty, odkaz na web) – prepojenie zo strany webu potvrdzuje Googlu, že ide o tú istú firmu.

**Dotknuté súbory** `src/lib/seo.ts`, `CHANGELOG.md`

**Čo treba doplniť ručne** Firemný LinkedIn, keď vznikne.

---

## 2026-10-25 – Facebook stránka v štruktúrovaných dátach (sameAs)

**Čo sa zmenilo** `SOCIAL_PROFILES` v `src/lib/seo.ts` obsahuje Facebook stránku Mediconect. Pole sa vypisuje ako `sameAs` v schéme `Organization` aj `LocalBusiness` v `src/app/layout.tsx`.

**Prečo** Pole bolo prázdne, takže Google ani AI vyhľadávače nevedeli prepojiť web s profilmi firmy – Mediconect bol pre ne neznáma entita a pri hľadaní „Mediconect“ sa plietol so zahraničnou firmou Mediconecta. Facebook stránka bola v ten istý deň zosúladená s webom (popis, kategória, adresa, titulná fotka).

**Dotknuté súbory** `src/lib/seo.ts`, `CHANGELOG.md`

**Čo treba doplniť ručne** Po založení Google profilu firmy a firemného LinkedInu pridať ich adresy do toho istého poľa.

**Pozor na** Používa sa číselná adresa stránky (`profile.php?id=…`), ktorá platí trvalo aj po nastavení vlastného mena stránky.

---

## 2026-10-25 – Meranie návštevnosti a konverzií

**Čo sa zmenilo** Pribudli Vercel Web Analytics a Vercel Speed Insights (balíky `@vercel/analytics`, `@vercel/speed-insights`) ako primárne meranie bez cookies. Nová funkcia `trackEvent` v `src/lib/track.ts` posiela konverzné udalosti (odoslanie dopytu, kontaktu, konzultácie, prihlásenie na newsletter, klik na telefón, e-mail a prechod na MyMedical) do Vercelu aj do GA4. Cookie lišta má voliteľné kategórie predvolene vypnuté. Schéma `Organization` a `WebSite` už nepíše „marketingová agentúra“, ale preberá popis z `ROUTES["/"]`. Nový meta popis domovskej stránky (schválil Viktor 25. 10. 2026): „Partner lekára v každej fáze kariéry. Vy sa venujete medicíne, my všetkému okolo: štart a financovanie praxe, marketing, efektívna ambulancia aj ochrana majetku.“ – platí pre výsledky vyhľadávania, zdieľanie, štruktúrované dáta aj llms.txt. Zásady cookies dopĺňajú odsek o meraní bez cookies.

**Prečo** Web nemal zapnuté žiadne meranie – nebolo vidieť, koľko lekárov príde, odkiaľ a koľko z nich pošle dopyt. GA4 bol pripravený, ale bez ID sa nenačítal a po zapnutí by kvôli odmietnutým cookies videl len časť návštev. Predzaškrtnuté prepínače v nastaveniach cookies nie sú platný súhlas podľa GDPR. Popis „marketingová agentúra“ v štruktúrovaných dátach odporoval pozícii Medical Business Partner a Google aj AI vyhľadávače ho čítajú ako fakt o firme.

**Dotknuté súbory** `src/components/Analytics.tsx`, `src/lib/track.ts` (nový), `src/components/CookieConsent.tsx`, `src/components/MediconectForm.tsx`, `src/components/ContactModal.tsx`, `src/components/KonzultaciaFormular.tsx`, `src/app/(marketing)/HomeContent.tsx`, `src/app/layout.tsx`, `src/app/(marketing)/zasady-cookies/Content.tsx`, `SEO.md`, `package.json`

**Čo treba doplniť ručne** Vo Verceli zapnúť Web Analytics a Speed Insights pre projekt `antigravity-web`. Overiť doménu v Google Search Console a odoslať sitemapu (postup v `SEO.md`, kapitola 4).

**Pozor na** Vlastné udalosti vo Vercel Web Analytics vyžadujú plán Pro. Do vlastností udalostí nikdy neposielať osobné údaje. Popis v schéme sa teraz mení spolu s meta popisom domovskej stránky v `src/lib/seo.ts`.

---

## 2026-10-23 – Farby webu podľa brand manuálu, jeden zdroj tokenov

**Čo sa zmenilo** Celý web prešiel z neoficiálnych odtieňov na paletu z Brand manuálu 2026: navy #0D1B2A → #041D2C, najtmavšie pozadie #060F18 → Ink #0C141A, tyrkysová #4ECDC4 / #2DD4BF → #4CADB6, cyan #06B6D4 → svetlá tyrkysová #88D5DB, pomocné tmavé odtiene (#0A1628, #0F172A, #0B1622, #07131D, #0B1820) zjednotené na Navy/Ink, svetlejšia navy #1B2D45 → #12303A. Rovnako aj rgba varianty. Nový súbor `src/app/brand-tokens.css` (premenné `--mc-*`) je kópia `brand/tokens.css` z repozitára Mediconect-sk/Mediconect; `@theme` v `globals.css` z neho číta navy, ink, tyrkysovú a písmo nadpisov. Pribudla trieda `teal-light` (#88D5DB).

**Prečo** Web používal farby, ktoré v brand manuáli nie sú (žiarivejšia tyrkysová, iná navy). Mediconect, MyMedical, brožúra a Ordevia tak nemali rovnakú identitu. Tokeny na jednom mieste znamenajú, že zmena značky sa urobí raz.

**Dotknuté súbory** `src/app/globals.css`, `src/app/brand-tokens.css` (nový), 18 komponentov a stránok s pevne zapísanými farbami, OG obrázky (`src/app/og/[sekcia]/route.tsx`), interné notifikačné e-maily (`src/app/api/contact`, `src/app/api/dopyt`).

**Pozor na** `brand-tokens.css` sa needituje tu – zmena ide do `Mediconect/brand/tokens.css` a skopíruje sa skriptom `scripts/sync-brand-tokens.sh` v repozitári Mediconect. Nové farby v komponentoch píšte cez triedy `navy`, `navy-dark`, `teal`, `teal-light`, nie cez hex ani predvolené Tailwind odtiene (`cyan-*`, `teal-400`…).

---

## 2026-10-23 – Pás MyMedical na domovskej stránke v palete MyMedical

**Čo sa zmenilo** Pás s odkazom na MyMedical v `MyMedicalStrip` používa farby z brand manuálu pre MyMedical: tmavé navy pozadie #041D2C, tyrkysovú #4CADB6 pre ikonu a odkaz, svetlú tyrkysovú #88D5DB pre text tlačidla a hover, sivú #9FB3BC pre popis. Zmenili sa len triedy v tomto komponente, globálna farba `--color-teal` sa nemení.

**Prečo** MyMedical je spoločný projekt Mediconect a myLife a má vlastnú paletu. Pás bol doteraz v tyrkysovej Mediconectu a nevyzeral ako odkaz na inú značku. Zmena farby zároveň upozorní návštevníka, že ide o iný web.

**Dotknuté súbory** `src/components/MyMedicalStrip.tsx`, `CHANGELOG.md`

**Čo treba doplniť ručne** Nič. Mymedical.sk sa touto zmenou nemení, je mimo tohto repozitára.

**Pozor na** Farby sú zadané ako hodnoty v hranatých zátvorkách (napr. `bg-[#041D2C]`), aby sa nemenila globálna paleta Mediconectu. Ak sa palety zjednotia, treba komponent prepísať na tokeny.

## 2026-10-18 – Výraznejší odkaz na /konzultacia na domovskej stránke

**Čo sa zmenilo** Odkaz na /konzultacia pod hlavnými tlačidlami v úvode domovskej stránky je z obyčajného textu karta s rámikom, nadpisom „Neviete, od čoho začať?“ a šípkou. Pôvodný textový odkaz sa strácal pod dvoma tlačidlami vyššie.

**Prečo** Návštevník, ktorý nevie, ktorá cesta mu sedí, si odkaz na nezáväznú konzultáciu takmer nevšimol. Karta ho robí viditeľným bez toho, aby zmenila poradie alebo text hlavných tlačidiel.

**Dotknuté súbory** `src/app/(marketing)/HomeContent.tsx`

**Pozor na** Karta je `motion.a` s `w-full sm:w-auto`, takže na mobile zaberá celú šírku bez vodorovného posunu stránky.

## 2026-10-18 – Nová nezáväzná konzultácia na /konzultacia

**Čo sa zmenilo** Pridaná stránka /konzultacia s formulárom „Čo dnes najviac riešite?“ (päť volieb). Podľa voľby sa zobrazia 1–2 doplňujúce otázky a až na konci kontakt a súhlas. Nová API trasa /api/konzultacia pošle e-mail na info@ a zapíše žiadosť do CRM ako DOPYT s dvoma novými poliami. Na domovskej stránke pod hlavnými tlačidlami je odkaz na túto stránku. Pôvodný formulár na /kontakt zostáva nezmenený.

**Prečo** Lekár, ktorý nevie, čo presne potrebuje, sa pri dlhom formulári vzdá. Jedna otázka s voľbami ho zavedie k správnej téme a CRM dostane informáciu, čo riešil.

**Dotknuté súbory** src/app/(marketing)/konzultacia/ (page.tsx, Content.tsx), src/components/KonzultaciaFormular.tsx, src/lib/konzultacia.ts (voľby, zdieľané pre web a API), src/app/api/konzultacia/route.ts, src/lib/crm.ts (nové polia `potreba` a `potreba_detail`, posielajú sa len pri vyplnení), src/lib/seo.ts (záznam /konzultacia), src/app/(marketing)/HomeContent.tsx (odkaz).

**Čo treba doplniť ručne** Najprv musí byť aplikovaná Ordevia migrácia 250 (`potreba`, `potreba_detail`) na staging aj produkciu. Kým nie je, odoslanie formulára zapíše žiadosť do CRM bez nových polí zlyhá – treba to nasadiť až po migrácii.

**Pozor na** Polia sa posielajú do CRM len pri vyplnení novej voľby, takže pôvodné formuláre nie sú ovplyvnené aj keby migrácia meškala.

---

## 2026-10-18 – Dopytový formulár: najprv cesta lekára, kontakt na konci

**Čo sa zmenilo** Formulár na /kontakt sa začína otázkou „V ktorej etape sa nachádzate?“ (majiteľ / zamestnaný lekár) a potom „Čo najviac riešite?“ s voľbami podľa etapy. Kontaktná osoba je presunutá na koniec. API `/api/dopyt` prijíma nové polia `etapa` a `situacia`, posiela ich do e-mailu (riadok „Cesta lekára“) aj do Google Sheets.

**Prečo** Lekár v zamestnaní a majiteľ praxe majú iné problémy. Formulár mal pôvodne len marketingové otázky, takže nezamestnaný lekár a majiteľ, ktorý rieši financie, dostali nerelevantné polia. Kontakt je na konci, aby návštevník najprv videl, že riešime jeho situáciu.

**Dotknuté súbory** `src/components/MediconectForm.tsx`, `src/app/api/dopyt/route.ts`.

**Čo treba doplniť ručne** Nič. Ak má CRM dostávať aj etapu, treba to doplniť do mapovania `*_do_crm` (zatiaľ nie je).

**Pozor na** Nové polia sú nepovinné na úrovni API, aby staré klienty formulára fungovali. Formulár ich však vyžaduje.

---

## 2026-10-18 – Úvod: text pre oboje cesty (majiteľ aj zamestnaný lekár)

**Čo sa zmenilo** Nadpis úvodu je teraz „Vy sa venujte medicíne. My vybudujeme a ochránime prax, ktorá funguje.“ Podnadpis hovorí o oboch situáciách: zakladanie praxe, vedenie praxe aj zamestnanie s plánom ďalšieho kroku.

**Prečo** Pôvodný text („Partner lekára v každej fáze kariéry“) bol príliš všeobecný. Lekár, ktorý zakladá prax, a lekár v zamestnaní potrebujú vidieť, že riešime práve ich situáciu. Nový text to hovorí bez čísel a bez sľubov výsledku.

**Dotknuté súbory** `src/app/(marketing)/HomeContent.tsx`.

**Čo treba doplniť ručne** Nič.

**Pozor na** Prepínač „Som majiteľ / Som zamestnaný lekár“ je v sekcii „Cesta lekára“ pod úvodom a nemení sa. Tlačidlá v úvode ostali pôvodné („Bezplatná konzultácia“, „Naše služby“).

---

## 2026-10-17 – Premenovanie daňovej služby

**Čo sa zmenilo** Označenie „Daňové poradenstvo“ v navigácii a odkazoch
sa zmenilo na „Efektívna správa daní“.

**Prečo** Používateľ upravil názov služby.

**Dotknuté súbory** `src/lib/seo.ts`, `src/components/WealthAreas.tsx`,
`src/components/SiteHeader.tsx` a súvisiace stránky správy majetku.

---

## 2026-10-17 – Odkazy na služby v pätičke

**Čo sa zmenilo** Nadpis „Služby“ v pätičke odkazuje na prehľad služieb
na domovskej stránke. Zoznam pod ním zobrazuje hlavné služby v určenom poradí.

**Prečo** Všeobecný odkaz „Služby“ nemá návštevníka presmerovať priamo
na Healthcare marketing.

**Dotknuté súbory** `src/components/SiteFooter.tsx`.

---

## 2026-10-17 – Moderný exteriér polikliniky

**Čo sa zmenilo** Obrázok Kliniky a polikliniky zobrazuje modernú kliniku
zvonku s preskleným vstupom.

**Prečo** Predchádzajúce návrhy interiéru pôsobili nevhodne a zastarano.

**Dotknuté súbory** `public/images/segmenty/kliniky-a-polikliniky.webp`.

---

## 2026-10-17 – Obrázky a interakcie v kartách „Pre koho pracujeme“

**Čo sa zmenilo** Fotografie v šiestich kartách na stránke O nás majú
80 % opacity. Pre kategórie Ambulancie, Kliniky a polikliniky, Kúpele
a wellness a Osobné značky lekárov sú použité nové široké fotografie.
Pri prejdení myšou alebo klávesnicovým fokusom sa fotografia jemne priblíži
a zvýrazní sa odkaz. Karty rešpektujú nastavenie obmedzeného pohybu.

**Prečo** Používateľ navrhol vizuálne oživiť túto sekciu obrázkami
a interaktívnymi prvkami.

**Dotknuté súbory** `src/app/(marketing)/o-nas/Content.tsx`,
`public/images/segmenty/ambulancie.webp`,
`public/images/segmenty/kliniky-a-polikliniky.webp`,
`public/images/segmenty/kupele-a-wellness.webp`,
`public/images/segmenty/osobne-znacky-lekarov.webp`.

---

## 2026-10-17 – Úprava formulácie o symbole Mediconect

**Čo sa zmenilo** Na stránke O nás sa „Preto je aj naším symbolom“ mení
na „Preto je tiež naším symbolom“.

**Prečo** Používateľ spresnil požadované znenie.

**Dotknuté súbory** `src/app/(marketing)/o-nas/Content.tsx`.

---

## 2026-10-17 – Záverečný citát na stránke O nás

**Čo sa zmenilo** Záverečný citát v sekcii O nás hovorí: „Vy sa staráte o naše
zdravie. My sa postaráme o prosperitu vašej lekárskej praxe aj vášho
firemného a rodinného majetku.“

**Prečo** Používateľ dodal nové znenie citátu pre stránku O nás.

**Dotknuté súbory** `src/app/(marketing)/o-nas/Content.tsx`.

---

## 2026-10-17 – Diskrétne prostredie MyMedical na stránke O nás

**Čo sa zmenilo** Text na stránke O nás hovorí, že lekárom, ktorí chcú
starostlivosť pod jednou strechou, umožňujeme diskrétne prostredie
v platforme MyMedical. Odkaz smeruje na existujúcu adresu MyMedical.

**Prečo** Používateľ dodal nové znenie textu pre stránku O nás.

**Dotknuté súbory** `src/app/(marketing)/o-nas/Content.tsx`.

---

## 2026-10-17 – Personál pri štarte ambulancie

**Čo sa zmenilo** Karty služieb na stránkach Štart vlastnej ambulancie
a Business partner uvádzajú popri priestoroch a vybavení aj personál.
Text hovorí o výbere správneho personálu.

**Prečo** Používateľ požiadal 17. 10. 2026 doplniť do obsahu tému
„Priestory, vybavenie a personál“.

**Dotknuté súbory** `src/app/(marketing)/business-partner/start-vlastnej-ambulancie/Content.tsx`,
`src/app/(marketing)/business-partner/Content.tsx`.

---

## 2026-10-17 – Blog: box autora Viktora len s menom a funkciou

**Čo sa zmenilo** Pod článkami PhDr. Víťazoslava Struhára sa v boxe autora
zobrazuje už len fotka, meno a funkcia (Director, Mediconect) – bez
opisného textu. Pole `bio` v `content/authors.ts` je voliteľné; keď chýba,
`AuthorBox` text nevykreslí a obsah boxu zarovná na stred.

**Prečo** Rozhodnutie Viktora 17. 10. 2026 („nechaj iba meno a titul“).

**Dotknuté súbory** `content/authors.ts`, `src/components/blog/AuthorBox.tsx`.

**Pozor na** Box Tomáša Kuchtu má text naďalej – zmena sa týka len Viktora.

---

## 2026-10-17 – Blog SSVPL: mená pod spoločnou fotkou

**Čo sa zmenilo** V článku `/blog/ssvpl-konferencia-2026-ekonomicka-imunita-ambulancie`
má spoločná fotka popis s menami a funkciami (zľava MUDr. P. Makara, MPH,
prezident SSVPL; PhDr. V. Struhár, director Mediconect; MUDr. Ľ. Molčan, MSc.
a MUDr. J. Čajka, členovia výboru SSVPL). Mená doplnené aj do `alt`.

**Prečo** Znenie dodal Viktor 17. 10. 2026. Menovaní funkcionári SSVPL
zvyšujú dôveryhodnosť článku.

**Dotknuté súbory** `content/blog/ssvpl-konferencia-2026-ekonomicka-imunita-ambulancie.mdx`.

---

## 2026-10-17 – Blog: workshop Ekonomická imunita ambulancie (SSVPL 2026)

**Čo sa zmenilo** Nový článok
`/blog/ssvpl-konferencia-2026-ekonomicka-imunita-ambulancie` (kategória
Medzinárodná a odborná spolupráca, formát Z podujatia) o workshope na
47. výročnej konferencii SSVPL (15. – 17. 10. 2026, Horný Smokovec):
tri piliere ekonomickej imunity, 12 oblastí sebahodnotenia, odkaz na online
sebahodnotenie na mymedical.sk, prepojenie na Business partner a Správu
a ochranu majetku, FAQ. Štyri obrázky vo WebP: tri vlastné fotky z konferencie
a slajd „12 oblastí v troch blokoch“ (vyrenderovaný z prezentácie workshopu).

**Prečo** Viktor viedol workshop pre ~30 všeobecných lekárov; článok je
podklad k príspevku na LinkedIne a dopĺňa sériu EUROPREV → EURIPA o domácu
konferenciu. Obsah vychádza výhradne z prezentácie workshopu, programu
konferencie a Viktorovho zadania – žiadne vymyslené čísla ani citáty.

**Dotknuté súbory** `content/blog/ssvpl-konferencia-2026-ekonomicka-imunita-ambulancie.mdx`,
`public/images/blog/ssvpl-2026/*.webp`.

**Pozor na** Fotky so stánkom inej značky a s tretími osobami v popredí
zámerne nie sú použité. Ľudia na spoločnej fotke nie sú menovaní.

---

## 2026-10-16 – MyMedical pás na homepage bez odkazu na prieskum

**Čo sa zmenilo** Z karty „MyMedical – komunita lekárov“ na domovskej stránke
bol odstránený vedľajší odkaz „Prieskum o administratíve“. Karta má teraz
jediný cieľ – „Vstúpiť“ (mymedical.sk).

**Prečo** Rozhodnutie Viktora. Dva odkazy v jednej karte tríštia pozornosť;
karta má viesť do komunity, nie na dotazník.

**Dotknuté súbory** `src/components/MyMedicalStrip.tsx`.

**Pozor na** Prieskum na webe ostáva – odkaz na stránke
`/sluzby/umela-inteligencia-pre-ambulanciu` a v `llms.txt`
(`MYMEDICAL.aiSurveyUrl` v `src/lib/seo.ts` sa preto nemaže).

---

## 2026-10-16 – O nás: príbeh podľa architektúry značky

**Čo sa zmenilo** V úvodnej sekcii stránky `/o-nas`:
- odsek 2 – „rovnako overený prístup očakáva aj od ľudí okolo seba“
  namiesto „rovnakú odbornosť“,
- odsek 3 prepísaný – Mediconect ako Medical Business Partner na štyroch
  pilieroch (založenie a rast, pacienti a marketing, prevádzka a manažment,
  majetok a štruktúra) a členský program MyMedical (odkaz na mymedical.sk),
- nový manifest ako záverečný citát sekcie: „Vy sa staráte o zdravie svojich
  pacientov. My sa postaráme o zdravie vašej praxe aj vášho majetku.“

Nadpis, odsek 1 a citácia ostali bez zmeny. `<title>` stránky už bol
„O nás – Medical Business Partner pre lekárov“ – overené, netreba meniť.

**Prečo** Schválené znenie z architektúry značky (podklad od Viktora).
Pôvodný odsek 3 vymenúval služby, nový ukotvuje príbeh v štyroch pilieroch.

**Dotknuté súbory** `src/app/(marketing)/o-nas/Content.tsx`.

**Pozor na** Pôvodný citát „Od loga až po plnú čakáreň“, ktorý mal manifest
nahradiť, na stránke už nebol – manifest je preto nový citát na konci
úvodnej sekcie (rovnaký štýl ako „Málokto sa pritom pýta…“).

---

## 2026-10-16 – Náhľad pri zdieľaní: nové logo a názov sekcie

**Čo sa zmenilo** Obrázok, ktorý sa ukáže pri zdieľaní odkazu (WhatsApp,
Facebook, LinkedIn), sa generuje pri builde pre každú sekciu zvlášť: nové logo
z hlavičky webu (holubica, „medical business partner“) a pod ním názov sekcie –
Správa a ochrana majetku lekára, Business partner pre ambulancie, Healthcare
marketing; ostatné stránky majú len logo. Rozmer 1200 × 630.

**Prečo** Viktor poslal odkaz na Lifestyle Property a náhľad ukazoval staré
logo s textom „Strategický partner pre zdravotníctvo“ – celý web používal jeden
statický `public/og-image.png`, ktorý pri zmene loga nikto nevymenil. Na
stránkach o majetku navyše „zdravotníctvo“ nesedí s obsahom.

**Dotknuté súbory** `src/lib/og.ts` (nový – sekcie a prefixy ciest),
`src/app/og/[sekcia]/route.tsx` (nový – generovanie PNG), `src/lib/seo.ts`
(`ogImageFor()`, `metadataFor()`), `src/app/layout.tsx`,
`src/app/(marketing)/blog/[slug]/page.tsx`. Popis v [SEO.md](SEO.md#náhľadový-obrázok-pri-zdieľaní-open-graph).

**Čo treba doplniť ručne** Po nasadení obnoviť náhľad vo
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
(„Scrape Again“ – platí aj pre WhatsApp) pre adresy, ktoré sa už zdieľali.

**Pozor na** WhatsApp si náhľad pamätá – v chate, kde odkaz už bol, sa starý
obrázok môže ukazovať ďalej. Overovať novým zdieľaním (prípadne s `?v=2` na konci adresy).

---

## 2026-10-14 – Štart vlastnej ambulancie: financovanie a rast kmeňa

**Čo sa zmenilo** Krok „Otvorenie“ obsahuje aj financovanie vybavenia
a priestorov; služba „Prví pacienti“ dopĺňa nábor nových pacientov a rast
kapitačného kmeňa.

**Prečo** Pripomienka Viktora – pri štarte praxe sú financovanie a rast
kmeňa kľúčové témy, ktoré text vynechával.

---

## 2026-10-14 – Podstránky pilierov: priesvitnejšie fotky

**Čo sa zmenilo** Fotka pod úvodným textom v šablóne `PillarPage` má
`opacity-80` – rovnako ako fotky v kartách oblastí. Platí pre všetky
podstránky Business partner a Správa a ochrana majetku.

**Prečo** Viktor: „aj podstránky" – jednotný, stlmený vzhľad fotiek v tmavom dizajne.

---

## 2026-10-14 – Karty oblastí: priesvitnejšie fotky, nová fotka benefitov

**Čo sa zmenilo** Fotky v kartách oblastí (`AreaGrid` – prehľad Business
partner aj Správa a ochrana majetku) majú `opacity-80` (o 20 % priesvitnejšie).
Fotka Zamestnanecké benefity: kľúče medzi tmavými modelmi domov (Unsplash
1743486120850-ab4c8581897a) namiesto darčekových krabíc.

**Prečo** Viktor: darčekové krabice nepôsobili vhodne a fotky v kartách majú
byť výraznejšie stlmené do tmavého dizajnu webu.

---

## 2026-10-14 – Business partner: Zamestnanecké benefity + nová fotka Štart

**Čo sa zmenilo**
- Nová podstránka `/business-partner/zamestnanecke-benefity` (šablóna `PillarPage`)
  a 7. karta v prehľade Business partner, položka v menu, záznam v `ROUTES`
  (sitemap, llms.txt, drobčeky, footer) a voľba „Benefity pre zamestnancov"
  vo formulári (`src/lib/zaujmy.ts`).
- Obsah: program výhod, ktorý vedenie kliniky alebo ambulancie ponúka
  zamestnancom – bývanie a nehnuteľnosti (TUreality), bankové produkty,
  poistenie, dôchodok a sporenie, finančné vzdelávanie, pomoc pri poistnej
  udalosti. Na stránke je `FINANCE_DISCLOSURE`.
- Štart vlastnej ambulancie: fotka kľúča vo dverách namiesto lekára
  (Unsplash 1677951570313-b0750351c461), nový alternatívny text.
- Fotka benefitov: darčekové krabice (Unsplash 1674620213535-9b2a2553ef40).

**Prečo** Viktor schválil koncepciu 14. 10. 2026 – benefity sú nástroj na
udržanie a nábor personálu pre majiteľov kliník. Pri Štarte: fotky bez
lekárov a postáv, keď téma nie je o ľuďoch.

**Pozor na** Na web nepatria konkrétne zľavy, úspory ani sadzby z letáku
TUreality („úspora až …", „100 % kúpnej ceny", „za 15 minút") ani veta
o exkluzivite („len cez nás"). Menovaní sú iba myLife a TUreality; banky
a poisťovne (mBank, Kooperativa, Colonnade…) len všeobecne, kým nie je ich
súhlas s použitím značky. Oblasť „zdravie a voľný čas" sa doplní až
s reálnymi partnermi.

**Dotknuté súbory** `src/app/(marketing)/business-partner/zamestnanecke-benefity/*`,
`src/components/BusinessPartnerAreas.tsx`, `src/components/SiteHeader.tsx`,
`src/lib/seo.ts`, `src/lib/zaujmy.ts`,
`src/app/(marketing)/business-partner/start-vlastnej-ambulancie/Content.tsx`,
`public/images/business-partner/{zamestnanecke-benefity,start-vlastnej-ambulancie}.webp`.

---

## 2026-10-14 – Business partner: fotky bez lekárov pri biznisových témach

**Čo sa zmenilo** Nové fotky kariet a podstránok Efektívna a zisková ambulancia
(graf a prehľad čísel na notebooku, Unsplash 1551288049-bebda4e38f71) a
Obchodné partnerstvo (dielik skladačky zapadajúci na miesto, Unsplash
1605712916066-e143c317df72 – nahradil fotku stretnutia ľudí),
upravené alternatívne texty.

**Prečo** Viktor: „nemusia byť všade lekári na obrázkoch“ a „nedávaj tam furt
lekárov a postavy, nejaký iný námet“ – pri biznisových
témach (ekonomika, partnerstvo) majú fotky ukazovať tému, nie zdravotníkov.

---

## 2026-10-14 – Štart vlastnej ambulancie: nová fotka

**Čo sa zmenilo** Fotka karty a podstránky Štart vlastnej ambulancie
(`public/images/business-partner/start-vlastnej-ambulancie.webp`) – mladý lekár
vo svojej ambulancii namiesto prázdnej miestnosti, ktorá nepôsobila ako
ambulancia. Upravený aj alternatívny text.

**Prečo** Pripomienka Viktora – pôvodná fotka pôsobila ako toaleta.

**Fotka** Unsplash 1758691463333-c79215e8bc3b (rovnaká séria ako fotka
Predaj kmeňa a praxe – mladý lekár začína, skúsený odovzdáva).

---

## 2026-10-14 – Správa majetku: plný názov partnera v nadpise

**Čo sa zmenilo** Nadpis sekcie partnera: „V spolupráci so spoločnosťou MyLife
Slovensko a.s.“ (predtým bez „a.s.“), `sprava-a-ochrana-majetku/Sections.tsx`.

**Prečo** Pokyn Viktora – uviesť plný názov spoločnosti. Zápis „MyLife“ (bez
medzery) je rovnaký ako v povinnom texte o NBS (`FINANCE_DISCLOSURE`).

---

## 2026-10-14 – Business partner: Efektívna a zisková ambulancia; Predaj kmeňa a praxe

**Čo sa zmenilo**
- Nová podstránka `/business-partner/efektivna-a-ziskova-ambulancia`
  (audit prevádzky, ekonomika, cenník a doplnkové služby, vyťaženie hodín a
  prístrojov, procesy a role, nábor, administratíva a GDPR, databáza, mesačný
  prehľad čísel). Položka v menu, karta v prehľade (teraz šesť oblastí),
  možnosť „Efektívnejšia a ziskovejšia prevádzka“ vo formulári.
- Podsekcia „Predaj kmeňa a prevádzky“ premenovaná na „Predaj kmeňa a praxe“,
  nová adresa `/business-partner/predaj-kmena-a-praxe`. Stará adresa trvalo
  presmeruje (308) v `next.config.mjs`. Premenovaná aj fotka.

**Prečo** Pokyny Viktora 14. 10. 2026. Obsah z architektúry značky (pilier
Prevádzka a manažment) a brožúry MyMedical (stabilná ambulancia, databáza
ako aktívum), bez sľubov konkrétneho rastu tržieb.

**Fotka** Unsplash 1606318313647-137d1f3b4d3c.

---

## 2026-10-14 – Správa majetku: Lifestyle Property a nehnuteľnosti

**Čo sa zmenilo**
- Nová podstránka `/sprava-a-ochrana-majetku/lifestyle-property` (PillarPage,
  záznam v `ROUTES`, položka v menu, šiesta karta v `WealthAreas`).
- Obsahuje porovnanie „Len slovenský realitný trh vs. globálne rozložené
  nehnuteľnosti“ (6 hľadísk) a sekciu „Dva svety, jedna investícia“
  (Lifestyle + Property).
- Formulár úvodného rozhovoru: možnosť „Nehnuteľnosť v zahraničí (Lifestyle Property)“.

**Prečo** Pokyn Viktora – sekcia Lifestyle Property a obsah o nehnuteľnostiach
z brožúry MyMedical (str. 30–33).

**Pozor na** Z brožúry sa zámerne neprevzali výnosy a rast cien v percentách,
cenová tabuľka, počet slnečných dní, konkrétne letecké linky ani latinské
claimy (pravidlo: žiadne sľuby výnosov, čísla bez zdroja). Stránka uvádza, že
výnosy nie sú garantované a vývoj v minulosti nie je zárukou budúcnosti.

**Fotka** Unsplash 1593331808946-3c61b7e65c78, `public/images/sprava-majetku/lifestyle-property.webp`.

---

## 2026-10-14 – Business partner: Správa podnikateľských rizík; text kroku Diagnóza

**Čo sa zmenilo**
- Nová podstránka `/business-partner/sprava-podnikatelskych-rizik` (PillarPage,
  záznam v `ROUTES`, položka v menu Business partner, piata karta v prehľade
  `BusinessPartnerAreas`, možnosť „Poistenie a riziká ambulancie“ vo formulári).
- Úvod, krok „Diagnóza“ v sekcii Ako spolupracujeme: „Na základe detailnej
  analýzy vašej situácie pripravíme audit aktuálneho stavu a východiská pre
  ďalší postup.“ Krok „Liečebný plán“: „Podľa priorít a vašich zámerov
  nastavíme strategický plán a cez postupné kroky dohodneme jeho implementáciu.“
  Krok „Dlhodobá starostlivosť“: „Pravidelné konzultácie, merateľné výsledky a
  dlhodobá starostlivosť vám prinesú viac pokoja, nové možnosti a ekonomický
  rast vašej praxe.“
- Úvod, Ako spolupracujeme: fotky na pozadí kariet výraznejšie (opacity 20 % →
  70 %, bez prelínania), tmavý prechod zdola drží čitateľnosť textu, čísla krokov jasnejšie.

**Prečo** Pokyny Viktora 14. 10. 2026. Obsah rizík z brožúry MyMedical
(„Poistenie a ochrana majetku“, str. 16–17) a architektúry značky
(poistenie zodpovednosti, právna ochrana, GDPR).

**Pozor na** Poistenie je finančná služba – stránka zobrazuje
`FINANCE_DISCLOSURE` a uvádza, že poistenie sprostredkúva licencovaný partner.
Latinský claim z brožúry („Securitas sine lacunis“) sa nepreberal – latinské
claimy patria len MyMedicalu.

**Fotka** Unsplash 1758691462848-ba1e929da259, `public/images/business-partner/`.

---

## 2026-10-14 – Správa a ochrana majetku rozdelená na päť podsekcií

**Čo sa zmenilo**
- Nové podstránky (šablóna `PillarPage`, záznamy v `ROUTES`, rodič `/sprava-a-ochrana-majetku`):
  `architektura-majetku`, `holdingova-struktura`, `nadacne-a-zverenecke-schemy`,
  `danove-poradenstvo`, `pravne-sluzby`.
- Sekcia „Štruktúra majetku“ (schéma + princípy) sa presunula z prehľadu na
  Architektúru majetku (`StructureSection` je teraz v `Sections.tsx`), sekcia
  Holdingová štruktúra (`HoldingSection`) na podstránku Holdingová štruktúra.
- Prehľad: mriežka piatich oblastí s fotkou a ikonou (`src/components/WealthAreas.tsx`),
  ikony pri službách.
- Spoločná mriežka oblastí `src/components/AreaGrid.tsx` (používa ju aj
  Business partner; nepárna posledná karta je cez celú šírku).
- Menu: Správa a ochrana majetku je rozbaľovacia (Prehľad + päť podsekcií).
  Kvôli šírke sa zúžili okraje položiek menu (overené 1360–1920 px).
- Formulár úvodného rozhovoru: možnosti „Nadácia a prenos majetku na deti“ a
  „Daňové a právne poradenstvo“.

**Prečo**
Pokyn Viktora: podsekcie Architektúra majetku (vrátane obsahu Štruktúra
majetku), Holdingová štruktúra, Nadačné a zverenecké schémy, Daňové
poradenstvo, Právne služby.

**Pozor na**
- Daňové a právne služby poskytujú výhradne daňový poradca (člen SKDP) a
  advokáti – texty to uvádzajú, Mediconect koordinuje. Pri úpravách textov to
  zachovať (architektúra značky, pravidlo 1).
- Nadačné a zverenecké schémy: web zámerne netvrdí nič o konkrétnej právnej
  úprave – vhodnosť a prípustnosť formy posudzuje advokát.

**Fotky** (Unsplash, licencia Unsplash), `public/images/sprava-majetku/`:
architektúra 1775163024488-e88e4a71179f, holding 1621831337128-35676ca30868,
nadácie 1756982477754-2c05a288f4db (orezaná na šírku), dane
1626266061368-46a8f578ddd6, právne 1758518731462-d091b0b4ed0d.

---

## 2026-10-13 – Business partner: text o NBS podľa Správy majetku

**Čo sa zmenilo** Prehľad Business partner a podstránky Financovanie podnikania
a Obchodné partnerstvo zobrazujú dole `FINANCE_DISCLOSURE` (podriadený finančný
agent NBS 287404, spolupráca s MyLife Slovensko a.s., garant UNIVERSAL maklérsky
dom a.s., NBS 3389) namiesto kratšieho `FINANCING_DISCLOSURE`.

**Prečo** Pokyn Viktora – jednotné znenie s Správou a ochranou majetku.
Viktor zároveň schválil zverejnenie programu Mediconect Štart s menšinovým
podielom a opciou.

**Dotknuté súbory** `src/app/(marketing)/business-partner/**/Content.tsx`, `CLAUDE.md`.

---

## 2026-10-13 – Business partner rozdelený na štyri podsekcie, fotky a ikony

**Čo sa zmenilo**
- Nové podstránky piliera Business partner (šablóna `PillarPage`, záznamy v `ROUTES`):
  - `/business-partner/start-vlastnej-ambulancie`
  - `/business-partner/financovanie-podnikania` (s `FINANCING_DISCLOSURE`)
  - `/business-partner/obchodne-partnerstvo` (sieť ambulancií, program Mediconect Štart)
  - `/business-partner/predaj-kmena-a-prevadzky`
- Prehľad `/business-partner`: nová mriežka „Štyri oblasti“ s fotkou, ikonou a
  odkazom (`src/components/BusinessPartnerAreas.tsx`), ikony pri službách.
  Diagram „Cesta k otvoreniu“ sa presunul na podstránku Štart vlastnej ambulancie.
- Menu: Business partner je rozbaľovací (Prehľad + štyri podsekcie).
- `PillarPage`: voliteľná fotka pod úvodným textom (`image`) a ikona pri službe (`icon`).
- Odkazy v diagrame piliera (`PartnerDiagram`) vedú na nové podstránky.
- Formulár úvodného rozhovoru: nová možnosť „Vstup do siete Mediconect (program Štart)“.

**Prečo**
Viktor: rozčleniť Business partner na Štart vlastnej ambulancie, Financovanie
podnikania, Obchodné partnerstvo a Predaj kmeňa a prevádzky, a doplniť ikony a
obrázky, „nech to nie je iba o textoch“.

**Zdroj obsahu**
Architektúra značky v3 (pilier 1, program Mediconect Štart) a brožúra Systém
Mediconect. Bez čísel, sadzieb a sľubov; podmienky podielu a opcie sa podľa
podkladov nastavujú individuálne s advokátom – na webe sa neuvádzajú.

**Fotky** (Unsplash, licencia Unsplash – bezplatné komerčné použitie),
`public/images/business-partner/`: štart 1665231795856-769fb08a90bc,
financovanie 1681505531034-8d67054e07f6, partnerstvo 1745420052490-285dbfa1cf4d,
predaj 1758691461513-88a0aef72160. Pri reálnom fotení ich nahradiť vlastnými.

**Pozor na**
Texty o programe Mediconect Štart (menšinový podiel, opcia) vychádzajú z
architektúry značky – pred prvým lekárom v programe overiť s advokátom, že web
zodpovedá zmluve.

---

## 2026-10-13 – Väčšie logo, výraznejšie menu, nadpis Cesty lekára

**Čo sa zmenilo** Menu v hlavičke: jasnejší a tučnejší text, tenké
oddeľovače medzi sekciami, pri prejdení myšou jemné podfarbenie a sekcia,
na ktorej návštevník práve je, je zvýraznená tyrkysovou (Viktor: položky
„splývajú“). Nadpis sekcie Cesta lekára na úvode je „V ktorej etape sa
nachádzate vy?“ (predtým „V ktorej fáze ste vy?“, `src/components/CestaLekara.tsx`).
Logo Mediconect v hlavičke je o 20 % väčšie (45 → 54 px,
na veľkých obrazovkách 50 → 60 px). Hlavička je spoločná, platí na všetkých stránkach.

**Prečo** Požiadavka Viktora – logo na úvodnej stránke pôsobilo malé.

**Dotknuté súbory** `src/components/SiteHeader.tsx`.

**Pozor na** Menu sa pri šírke 1366 px stále zmestí do jedného riadku (overené),
ďalšie zväčšenie loga by ho mohlo zalomiť.

---

## 2026-10-13 – Úvod: výzva na rozhovor podľa štyroch pilierov, výber záujmov vo formulári

**Čo sa zmenilo**
- Záverečná výzva na úvodnej stránke (#kontakt): nadpis „Vaša prax si zaslúži …“
  strieda štyri slová podľa pilierov (pevné základy, správnych pacientov, menej
  administratívy, chránený majetok), nový popis a tlačidlo „Vybrať, s čím
  potrebujem pomôcť“.
- Formulár úvodného rozhovoru (`ContactModal`) má na začiatku výber „S čím vám
  môžeme pomôcť?“ – 13 možností v štyroch skupinách podľa pilierov
  (`src/lib/zaujmy.ts`). Voľný text je už iba nepovinný doplnok.
- Vybrané možnosti idú do e-mailu o dopyte aj do CRM Ordevia (zoznam služieb
  pri kontakte a v úlohe „Zavolať do 24 h“).
- E-mail z kontaktného formulára: predmet po slovensky („Nový dopyt z webu
  mediconect.sk“) a texty od návštevníka sa vkladajú ošetrené, nemôžu do
  e-mailu vložiť odkaz ani HTML.

**Prečo**
Viktor: text výzvy mal hovoriť len o marketingu („viditeľnosť, prezentáciu“),
hoci úvodná stránka predstavuje štyri oblasti. Lekár má hneď vybrať, čo ho
zaujíma (vlastná ambulancia, kapitácia, AI…), aby sa prvý rozhovor dal
pripraviť a v CRM bolo vidieť, o čo ide.

**Dotknuté súbory**
`src/app/(marketing)/HomeContent.tsx`, `src/components/ContactModal.tsx`,
`src/lib/zaujmy.ts` (nový), `src/app/api/contact/route.ts`.

**Pozor na**
Znenie možností v `src/lib/zaujmy.ts` sa ukladá do CRM. Pri zmene znenia budú
staré a nové kontakty mať rozdielne texty – meniť len s dôvodom.

---

## 2026-10-13 – Úvod: štyri piliere naraz viditeľné, Ordevia iba na vlastnej stránke

**Čo sa zmenilo**
- Portfólio „Štyri oblasti. Jeden partner." na úvodnej stránke: piliere sa samy
  striedajú každých 5 s, pod kartou je prepínač so všetkými štyrmi názvami,
  piliere sa dajú vybrať aj kliknutím a klávesnicou. Pri prejdení myšou
  striedanie zastane; pri zapnutom obmedzení animácií v systéme sa nestriedajú.
- Všetky štyri karty sú v HTML naraz (viditeľná je iba aktívna) – predtým bol
  v kóde stránky len prvý pilier.
- Sekcia Ordevia Connect z úvodnej stránky odstránená. Rovnaký obsah má stránka
  `/sluzby/webova-aplikacia-ordevia` a tlačidlo Ordevia v hlavičke.

**Prečo**
Viktor: „prečo tu ukazuje iba 1 pilier?" – karta sa menila len pri prejdení
myšou nad ikonou, čo návštevník nevedel; zvyšné tri piliere nevideli ani
vyhľadávače. Ordevia podľa architektúry značky patrí do vlastnej karty, nie
medzi piliere Mediconectu na úvode.

**Dotknuté súbory**
`src/components/ServicesNebula.tsx`, `src/app/(marketing)/HomeContent.tsx`, `ORDEVIA.md`.

**Pozor na**
`src/components/OrdeviaShowcase.tsx` sa nikde nepoužíva; súbor ostal (nemaže sa
bez súhlasu).

---

## 2026-10-13 – Formuláre webu idú do CRM Ordevia

**Čo sa zmenilo**
- Dopyt (`/api/dopyt`), kontaktný formulár (`/api/contact`) a newsletter
  „Zákulisie úspešných ambulancií“ (`/api/newsletter`) zapisujú do CRM
  Ordevia (workspace Mediconect) cez spoločnú funkciu `src/lib/crm.ts`.
- Web už priamo nevolá SmartEmailing. Do SmartEmailingu posiela kontakty
  so súhlasom nočná synchronizácia Ordevie (zoznam 83 newsletter, 84 formulár).
- E-mail o dopyte cez Resend a zápis do Google Sheets ostávajú bez zmeny.

**Prečo**
Newsletter vracal chybu – SmartEmailing odmietal prihlasovacie údaje z Vercelu.
Viktor rozhodol, že dopyty majú ísť do CRM a SmartEmailing sa iba
synchronizuje. Ordevia je jediný zdroj pravdy o kontaktoch aj súhlasoch.
Zároveň sa tým odstránilo, že dopyt bez marketingového súhlasu sa doteraz
zapisoval priamo do zoznamu SmartEmailingu.

**Ako to funguje**
Web vloží riadok do tabuľky `web_mediconect_formular` (verejný publishable
kľúč, rola anon smie iba vkladať). Trigger v databáze založí alebo doplní
kontakt, zaradí ho do skupiny zoznamu, zapíše aktivitu, pri dopyte
a kontakte vytvorí úlohu „Zavolať do 24 h“ a súhlas zapíše do evidencie
súhlasov. Text správy sa do CRM neukladá – je iba v e-maile.

**Dotknuté súbory**
`src/lib/crm.ts` (nový), `src/app/api/newsletter/route.ts`,
`src/app/api/dopyt/route.ts`, `src/app/api/contact/route.ts`, `.env.example`.

**Čo treba doplniť ručne**
- V Ordevii musí byť v produkcii aplikovaná migrácia 232
  (`Mediconect-sk/Ordevia`, PR #2824, issue #2822). **Tento PR zlúčiť až po
  nej** – inak newsletter vráti chybu a dopyty sa do CRM nezapíšu
  (e-mail o dopyte príde aj tak).
- Premenné `SMARTEMAILING_*` vo Verceli sa dajú neskôr odstrániť.

**Pozor na**
- Znenia súhlasov v `src/lib/crm.ts` musia zodpovedať textu pri checkboxe.
  Pri zmene textu na webe zmeňte aj konštantu – do evidencie súhlasov sa
  ukladá presné znenie.
- Volný text správy do `zapisDoCrm` neposielať (zdravotné údaje do CRM nepatria).

---

## 2026-10-13 – SmartEmailing: chyba prihlásenia, logy bez kľúčov

**Čo sa zistilo**

- Newsletter v produkcii vracia chybu – SmartEmailing odpovedá
  `Authentication Failed` (log Vercel, 13. 10. 2026 20:28). Prihlasovacie
  meno alebo API kľúč v premenných `SMARTEMAILING_USERNAME` /
  `SMARTEMAILING_API_KEY` sú neplatné.
- Rovnaké údaje používajú aj formuláre `/api/dopyt` a `/api/contact` – tie
  e-mail cez Resend odošlú, ale kontakt do SmartEmailingu nezapíšu.

**Čo sa zmenilo**

- `/api/dopyt` a `/api/contact` pri chýbajúcej premennej už nevypisujú
  hodnoty (vrátane API kľúča) do logov, len či je premenná nastavená.

**Prečo**

API kľúč v logoch je bezpečnostné riziko – logy vidí každý s prístupom
k projektu na Verceli.

**Čo treba doplniť ručne**

- Vo Verceli nastaviť platné `SMARTEMAILING_USERNAME` (prihlasovací e-mail
  do SmartEmailingu) a `SMARTEMAILING_API_KEY` (SmartEmailing → nastavenia
  účtu → API) a znovu nasadiť.

**Dotknuté súbory**

`src/app/api/dopyt/route.ts`, `src/app/api/contact/route.ts`.

---

## 2026-10-13 – FAQ a dopyt presunuté do Healthcare marketingu, bez sekcie „Kontaktný partner"

**Čo sa zmenilo**

- **FAQ** („Často kladené otázky", 3 kategórie) a výzva **„Vyplňte
  nezáväzný dopyt"** s formulárom presunuté z domovskej stránky na `/sluzby`
  (`src/components/MarketingFaqInquiry.tsx`, kotvy `#faq`, `#dopyt`).
  Súbor otázok presunutý do `src/app/(marketing)/sluzby/faq.ts`, FAQPage
  schema sa generuje na `/sluzby`.
- Odkazy „Dopyt" v menu Healthcare marketing a na `/kontakt` vedú na
  `/sluzby#dopyt`.
- Z domovskej stránky odstránená sekcia **„Váš kontaktný partner"**
  (Tomáš Kuchta) aj jej `Person` schema.
- Domovská stránka ponecháva všeobecnú výzvu „Rezervovať termín stretnutia"
  a newsletter.

**Kontrola newslettera „Zákulisie úspešných ambulancií"**

- Formulár posiela e-mail na `/api/newsletter` → SmartEmailing
  (`/api/v3/import`, zoznam `SMARTEMAILING_LIST_ID`, stav „confirmed").
- V produkcii (Vercel) sú nastavené `SMARTEMAILING_USERNAME`, `_API_KEY`,
  `_LIST_ID`. Overenie odoslaním skutočného kontaktu sa nerobilo (zapísal
  by sa do zoznamu).

**Prečo**

FAQ aj dopyt sa týkajú len marketingu; domovská stránka predstavuje
Mediconect ako Medical Business Partner so štyrmi piliermi.

**Dotknuté súbory**

`src/app/(marketing)/HomeContent.tsx`, `src/app/(marketing)/page.tsx`,
`src/app/(marketing)/sluzby/{Content,page,faq}.tsx|ts`,
`src/components/MarketingFaqInquiry.tsx`, `src/components/SiteHeader.tsx`,
`src/app/(marketing)/kontakt/Content.tsx`.

**Pozor na**

- Newsletter ukladá kontakty rovno ako „confirmed" (bez potvrdzovacieho
  e-mailu, tzv. double opt-in).

---

## 2026-10-13 – Správa majetku: sebahodnotenie „Ekonomická imunita ambulancie"

**Čo sa zmenilo**

- Na `/sprava-a-ochrana-majetku#ekonomicka-imunita` nová sekcia
  (`ImmunityCheck` v `Sections.tsx`) s osmi oblasťami sebahodnotenia
  a tlačidlom „Spustiť sebahodnotenie".
- Odkaz `MYMEDICAL.economicImmunityUrl` v `src/lib/seo.ts`
  (https://www.mymedical.sk/dotazniky/financna_imunita).
- Z menu mymedical.sk sa položka „Ekonomická imunita" odstraňuje
  (samostatný PR v repozitári anketa-lekari).

**Prečo**

Sebahodnotenie patrí k téme správy a ochrany majetku – na mediconect.sk
oslovuje lekárov presne tam, kde riešia ochranu majetku a rezervy.

**Dotknuté súbory**

`src/app/(marketing)/sprava-a-ochrana-majetku/{Sections,Content}.tsx`, `src/lib/seo.ts`.

**Pozor na**

- Samotný dotazník (otázky, súhlas, potvrdenie, ukladanie do Supabase) ďalej
  beží na mymedical.sk – mediconect.sk naň len odkazuje. Adresa dotazníka sa
  nesmie zmeniť bez úpravy `economicImmunityUrl`.

---

## 2026-10-13 – Grafické prvky a fotky namiesto „steny textu"

**Čo sa zmenilo**

- **Fotky na 6 stránkach „Pre koho"** – široký pás pod nadpisom
  (`src/components/SegmentBanner.tsx`, `public/images/segmenty/*.webp`),
  stlmený ako koláž na domovskej stránke. Zdroj: Unsplash (licencia
  Unsplash – bezplatné komerčné použitie, bez uvádzania autora), ID:
  ambulancie 1758691461888-b74515208d7a, kliniky 1719934398679-d764c1410770,
  diagnostika 1630959305790-4c956ce6c0b6, kúpele 1729003702131-51807464dcec,
  osobné značky 1612349317150-e413f6a5b16d, doplnkové služby 1723433892471-62f113c8c9a0.
- **Graf prípadovej štúdie** (`CaseStudyChart.tsx`) – doručenosť a otvorenosť
  ako pruhy, rezervácie pred/po ako stĺpce (index 100 → 142) – na Databáze
  pacientov a E-mail marketingu.
- **Pás fotiek z konferencií** (`ConferenceStrip.tsx`) na Healthcare
  marketingu – Madrid a Cartagena, odkazy na články.
- **Schéma procesu** (`FlowDiagram.tsx`): na Business partner „Od rozhodnutia
  po prvého pacienta" (6 krokov), na CRM a automatizáciách „Automatizácia,
  ktorá pracuje za vás" (5 krokov v cykle).
- **Správa majetku:** nad štyrmi fázami ilustračná krivka rastu (bez mierky
  a čísel); sekcia „Do hĺbky" ako 4 záložky namiesto 4 dlhých kariet (obsah
  ostáva v HTML, skryté sú len neaktívne panely).
- **Formulár dopytu:** odstránené „80+ lekárov a zariadení" a „75 % vyššia
  zapamätateľnosť značky" (bez overeného zdroja); ostáva „100 %
  transparentné výsledky".

**Prečo**

Audit 22 stránok: 15 z nich nemalo žiadnu fotku ani grafiku, web pôsobil ako
stena textu. Čísla a procesy sú teraz obrázkom, ktorý sa prečíta za pár sekúnd.

**Dotknuté súbory**

`src/components/{SegmentBanner,CaseStudyChart,ConferenceStrip,FlowDiagram}.tsx`,
`src/components/MediconectForm.tsx`, stránky `pre-koho/*`, `sluzby/*`,
`business-partner`, `sprava-a-ochrana-majetku/Sections.tsx`, `public/images/segmenty/`.

**Čo treba doplniť ručne**

- Vlastné fotky z práce (konzultácia, tím) pre O nás, Business partner a Kontakt.
- Ukážky realizovaných webov klientov – až so súhlasom klientov.

**Pozor na**

- Čísla v `CaseStudyChart` musia ostať zhodné s prípadovou štúdiou v blogu.
- Krivka rastu na Správe majetku je zámerne bez osí a hodnôt – nesmie
  pôsobiť ako sľub výnosu.

---

## 2026-10-13 – Správa majetku: spolupráca s MyLife Slovensko a osobný kontakt

**Čo sa zmenilo**

- Na `/sprava-a-ochrana-majetku` nová sekcia `#mylife` (`MyLifePartner`
  v `Sections.tsx`): logo MyLife (`public/images/partneri/mylife-logo.svg`,
  z mylife.sk, prefarbené na svetlú verziu pre tmavé pozadie), text
  o spolupráci, „viac ako 160 miliónov eur majetku klientov" pod správou
  MyLife a odkaz na www.mylife.sk.
- Osobná karta PhDr. Víťazoslava Struhára podľa predposlednej strany
  brožúry MyMedical: fotka (`public/images/tim/viktor-struhar-kancelaria.webp`),
  „27 rokov skúseností. Jediný cieľ: rast vášho majetku." a text – bez
  osobných kontaktov (telefón, e-mail ani adresa sa neuvádzajú, pokyn Viktora).
- V texte karty je údaj 160 mil. € (brožúra uvádzala 125 mil. €) – podľa
  pokynu Viktora z 13. 10. 2026.

**Prečo**

Spolupráca s MyLife je zákonný rámec finančných služieb Mediconectu
a konkrétna osoba s praxou buduje dôveru viac než všeobecný text.

**Dotknuté súbory**

`src/app/(marketing)/sprava-a-ochrana-majetku/Sections.tsx`,
`src/app/(marketing)/sprava-a-ochrana-majetku/Content.tsx`,
`public/images/partneri/mylife-logo.svg`, `public/images/tim/viktor-struhar-kancelaria.webp`.

**Pozor na**

- Údaj 160 mil. € aktualizovať pri zmene objemu (text karty aj riadok pri logu).
- Z fotky je orezaný spodný okraj so značkou nástroja na úpravu obrázkov.

---

## 2026-10-13 – Správa a ochrana majetku: texty z brožúry MyMedical

**Čo sa zmenilo**

Na `/sprava-a-ochrana-majetku` pribudli sekcie s textami z brožúry
„MyMedical koncepcia" (Canva DAHXUeLUP4c), súbor
`src/app/(marketing)/sprava-a-ochrana-majetku/Sections.tsx`:

- **Architektúra majetku** – „Nie lepší podielový fond" + rebríček úrovní
  Retail → Affluent → Private banking → Wealth management.
- **Holdingová štruktúra** – prevádzka vs. ochrana, kedy je holding
  nevyhnutnosťou, tri istoty (ochrana, daňová efektivita s § 13c,
  nástupníctvo a exit).
- **Štyri fázy budovania majetku** – prípravná, akumulačná, rastová, ochranná.
- **Do hĺbky** – poistenie a ochrana majetku, financovanie a úvery,
  geografická diverzifikácia, prenos majetku na ďalšie generácie.
- **Citát** „Diagnostika. Analýza. Plán. Rovnako ako v medicíne."
- Princípy Ochrana / Rast / Kontinuita doplnené podľa brožúry.

**Prečo**

Stránka mala len základný prehľad. Brožúra obsahuje overené, vecné texty,
ktoré vysvetľujú prístup – web tak hovorí rovnako ako obchodný materiál.

**Dotknuté súbory**

`src/app/(marketing)/sprava-a-ochrana-majetku/Sections.tsx` (nový),
`src/app/(marketing)/sprava-a-ochrana-majetku/Content.tsx`.

**Pozor na**

- Z brožúry sa zámerne **nepreberajú**: konkrétne výnosy (4–6 %, 7–9 %,
  7+ %, 6–8 %), investičné certifikáty s „garanciou", mená fondov a
  partnerov, Costa del Sol, latinské claimy (patria len MyMedicalu),
  sľuby „zníženého úroku" a „výnimiek" v bankách a čísla o správe kapitálu
  (130 / 125 mil. € – v brožúre sa líšia). Pravidlo: výnosy sa na webe
  nesľubujú.
- Daňové tvrdenia sú formulované „pri splnení podmienok zákona" a „vždy
  s daňovým poradcom".

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
