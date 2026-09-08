# Pokyny pre prácu na tomto projekte

Web spoločnosti MediConect s.r.o. – Next.js 15 (App Router), React 19,
Tailwind v4, framer-motion. Obsah je v slovenčine.

---

## 📌 Pravidlo č. 1: každý zásah do kódu sa zapisuje do dokumentácie

**Po každej úprave, novej funkcii alebo akomkoľvek zásahu do kódu sa zmena
zapisuje do markdown dokumentácie. Bez výnimky, aj pri malých zmenách.**

Cieľom je, aby bolo aj o rok jasné, **čo sa robilo** a **ako to funguje**.
Zmena bez zápisu sa považuje za nedokončenú.

### Kam sa zapisuje

| Súbor | Čo tam patrí |
|---|---|
| `CHANGELOG.md` | **Vždy.** Chronologický záznam: čo sa zmenilo, prečo, ktoré súbory. |
| tematický `*.md` | Ak zmena mení **ako niečo funguje** – doplniť alebo upraviť príslušný dokument. |
| `CLAUDE.md` | Ak zmena zavádza novú konvenciu alebo pravidlo pre ďalšiu prácu. |

### Ako má zápis vyzerať

Nový záznam do `CHANGELOG.md` ide **na vrch** a obsahuje:

1. **Dátum a krátky názov** zmeny.
2. **Čo sa zmenilo** – konkrétne, nie „vylepšenia".
3. **Prečo** – aký problém to rieši. Toto je najdôležitejšia časť; z kódu sa
   dôvod spätne nedá vyčítať.
4. **Dotknuté súbory** – aspoň tie kľúčové.
5. **Čo treba doplniť ručne** – ak zmena vyžaduje krok mimo kódu
   (premenná prostredia, nastavenie v externom nástroji, obsah).
6. **Pozor na** – ak je v riešení pasca, na ktorú sa dá ľahko naraziť.

Ak zmena mení fungovanie niečoho, čo už má vlastný dokument, **uprav ten
dokument**, neopakuj celý popis v changelogu – v changelogu stačí odkaz.

---

## Mapa dokumentácie

| Súbor | Obsah |
|---|---|
| `CHANGELOG.md` | Chronologický záznam všetkých zmien. |
| `SEO.md` | SEO a GEO: audit, riešenie, štruktúra stránok, structured data, čo doplniť ručne. |
| `SECURITY_NOTES.md` | Bezpečnostné poznámky a lokálny setup. |
| `brand_guidelines.md` | Vizuálna identita, farby, typografia. |
| `.env.example` | Zoznam premenných prostredia s vysvetlením. |

---

## Konvencie projektu

### Stránky sa delia na server + client

Každá stránka má dva súbory:

- **`page.tsx`** – server component, exportuje `metadata` a vykresľuje structured data,
- **`Content.tsx`** – client component (`'use client'`) s animáciami.

Next.js **neumožňuje exportovať `metadata` z komponentu označeného `'use client'`**.
Ak by bola celá stránka klientska, zdedila by titulok aj popis z root layoutu.

### SEO sa riadi z jedného miesta

`src/lib/seo.ts` obsahuje mapu `ROUTES`. **Nová stránka = jeden nový záznam.**
Automaticky z neho vznikne metadata, canonical, položka v `sitemap.xml`
a `llms.txt`, drobčeky aj odkaz vo footeri.

> ⚠️ Do `src/app/layout.tsx` **nikdy nepridávajte `alternates.canonical`.**
> Root metadata sa dedia do podstránok a canonical by každej z nich oznámil,
> že jej kanonickou verziou je domovská stránka – Google by ich prestal
> indexovať. Detaily v `SEO.md`.

### Obsah musí byť v HTML, nie až po kliknutí

Rozbaľovacie sekcie (accordiony, taby) musia mať obsah **v DOM vždy** a skrývať
ho len vizuálne. Ak sa obsah odmontuje (napr. cez `AnimatePresence`), nevidia ho
vyhľadávače ani AI crawlery, ktoré nespúšťajú JavaScript.

### Animácie

`framer-motion` animácie vnútri sekcií s `variants` na rodičovi sú gatované
rodičovským variantom. Ak potrebujete animáciu, ktorá musí fungovať vždy
(napr. rozbalenie accordionu), použite čisté CSS.

### Jazyk

Web, dokumentácia aj komentáre v kóde sú po slovensky. Commit messages
tiež po slovensky, ale **bez diakritiky** (existujúca konvencia repozitára).

---

## Príkazy

```bash
npm run dev     # vývojový server na porte 3000
npm run build   # produkčný build (spustí aj kontrolu typov)
npm run start   # produkčný server
```

Pred commitom vždy spustite `npm run build` – overí typy aj generovanie stránok.
