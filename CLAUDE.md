# Pokyny pre prácu na tomto projekte

Web spoločnosti MediConect s.r.o. – Next.js 15 (App Router), React 19,
Tailwind v4, framer-motion. Obsah je v slovenčine.

---

## 📌 Pravidlo č. 1: pracuje sa vo vetvách cez pull requesty

**Východiskový postup je nová vetva + pull request. Nie commit priamo do `main`.**

Priamo do `main` sa commituje **len vtedy, keď to používateľ výslovne povie** –
napríklad „robme to do mainu" alebo „mergni to hneď". Bez takého pokynu vždy
vetva a PR, aj keď sa zmena zdá jednoduchá.

Platí to obzvlášť pri väčších zásahoch: refaktoring, nová funkcia, zmena
štruktúry projektu, čokoľvek, čo sa dotýka viacerých súborov. Pri takých
zmenách sa priamy commit do `main` nerobí ani vtedy, keď sa zdá, že je to
rýchlejšie – push do `main` môže spustiť produkčné nasadenie.

### Pomenovanie vetiev

| Prefix | Kedy |
|---|---|
| `feat/` | nová funkcia |
| `fix/` | oprava chyby |
| `refactor/` | prestavba bez zmeny správania |
| `docs/` | len dokumentácia |

Napríklad `feat/seo-structured-data`, `fix/mobilne-menu`, `docs/changelog`.

### Postup

1. `git checkout -b <prefix>/<kratky-popis>`
2. Urobiť zmenu a **zapísať ju do dokumentácie** (pravidlo č. 2 nižšie).
3. `npm run build` – musí prejsť.
4. Commit, push vetvy, otvoriť PR cez `gh pr create`.
5. Popis PR má povedať **čo a prečo**, nie len vymenovať súbory.
6. Merge nechať na používateľa, pokiaľ nepovie inak.
7. **Vetvy sa po merge nemažú** – ani na GitHube, ani lokálne.

### Vetvy sa nemažú

Každá vetva zostáva na GitHube aj po merge – je to záznam o tom, ako práca
prebiehala. Preto:

- `gh pr merge` **bez** `--delete-branch`,
- v GitHube po merge **neklikať** na „Delete branch",
- nespúšťať `git push origin --delete <vetva>` ani `git branch -d` na hotové vetvy,
- v nastaveniach repozitára musí zostať vypnuté automatické mazanie
  (`delete_branch_on_merge: false`, overené 10. 9. 2026).

Pri malých zmenách, kde je PR len formalita (napríklad dodatočná dokumentácia),
je v poriadku vetvu a PR založiť a rovno napísať, že sa dá mergnúť hneď –
ale rozhodnutie zostáva na používateľovi.

---

## 📌 Pravidlo č. 2: každý zásah do kódu sa zapisuje do dokumentácie

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
a popisy PR tiež po slovensky, ale **bez diakritiky** (existujúca konvencia
repozitára).

---

## Príkazy

```bash
npm run dev     # vývojový server na porte 3000
npm run build   # produkčný build (spustí aj kontrolu typov)
npm run start   # produkčný server
```

Pred commitom vždy spustite `npm run build` – overí typy aj generovanie stránok.

Typický cyklus:

```bash
git checkout -b feat/nazov-zmeny
# ... úpravy + zápis do CHANGELOG.md ...
npm run build
git add -A && git commit
git push -u origin feat/nazov-zmeny
gh pr create
```
