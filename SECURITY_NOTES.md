# Bezpečnostné poznámky a lokálny setup

> Stav k **2026-09-08**. Zistené pri `npm install` na čistom klone repa.
> Verzie: `next@15.5.12`, `react@19.2.4`, Node/npm audit → **14 zraniteľností (5 moderate, 9 high)**.

---

## 1. Env premenné — lokálne netreba

Web sa lokálne spustí **bez** `.env.local`. Chýbajúce premenné ovplyvnia len
odosielanie formulárov (kontakt, dopyt, newsletter) — zvyšok stránky funguje normálne.

Produkčné hodnoty sú nastavené na Verceli. Ak treba testovať aj formuláre lokálne:

```bash
npx vercel env pull .env.local
```

### Zoznam premenných

| Premenná | Použitie | Súbor |
|---|---|---|
| `RESEND_API_KEY` | odosielanie emailov | `src/app/api/contact/route.ts`, `src/app/api/dopyt/route.ts` |
| `SMARTEMAILING_USERNAME` | SmartEmailing auth | contact, dopyt, newsletter |
| `SMARTEMAILING_API_KEY` | SmartEmailing auth | contact, dopyt, newsletter |
| `SMARTEMAILING_LIST_ID` | newsletter zoznam | `src/app/api/newsletter/route.ts` |
| `SMARTEMAILING_CONTACT_LIST_ID` | kontakt/dopyt zoznam | contact, dopyt |
| `GOOGLE_SHEETS_WEBHOOK_URL` | zápis dopytov do Sheets | contact, dopyt |

---

## 2. Zraniteľnosti — triáž

### 2a. Dev-only — ignorovateľné

Závislosti ESLintu / TypeScript-ESLintu. Bežia len pri `npm run lint` na lokále,
**nedostanú sa do produkčného buildu**. Prakticky neškodné.

- `@humanfs/node` <0.16.8 (moderate) — recursive copy follows symlinks
- `ajv` <6.14.0 (moderate) — ReDoS pri `$data`
- `brace-expansion` (high) — DoS, viacero CVE
- `flatted` <=3.4.1 (high) — unbounded recursion DoS, prototype pollution
- `js-yaml` 4.0.0–4.3.0 (high) — kvadratický DoS pri merge kľúčoch
- `minimatch` (high) — ReDoS cez wildcards

### 2b. Produkčné — stoja za pozornosť

| Balík | Severity | Podstata |
|---|---|---|
| **next** 15.5.12 | high | cache poisoning, middleware/proxy bypass, XSS s CSP nonce, DoS v Image Optimization API, SSRF cez WebSocket upgrade, HTTP request smuggling v rewrites |
| **sharp** <0.35.0 | high | zdedené CVE z libvips (CVE-2026-33327/33328/35590/35591) |
| **postcss** | high | XSS cez neescapovaný `</style>`, path traversal cez `sourceMappingURL` |
| **nanoid** <=3.3.17 | high | nekonečná slučka pri zápornej/nulovej veľkosti, integer overflow |
| **uuid** <11.1.1 | moderate | chýbajúca kontrola hraníc bufferu; ťahá to `resend` → `svix` → `uuid` |

---

## 3. Prečo to zatiaľ neriešime

1. **`npm audit fix` neopraví Next.js.** Patch je až v Next 16 — major upgrade mimo
   `^15.1.0` v `package.json`. Chce to samostatnú, otestovanú migráciu.
2. **`npm audit fix` pridá ~40 balíkov** (`@img/sharp-*` binárky pre všetky platformy)
   a hlavnú položku aj tak nevyrieši.
3. **Vercel má mitigácie na úrovni platformy** — väčšina Next.js advisories cieli na
   self-hosted nasadenie, najmä cache poisoning a middleware bypass. Reálne riziko je
   výrazne nižšie, než ako vyzerá surový zoznam.
4. Sú to **zdedené závislosti, nie chyby v našom kóde**.

### Ak sa k tomu vrátime

Samostatná úloha „**upgrade na Next 16**" — pokryje najväčšiu časť zoznamu naraz.
Menšie veci (`sharp`, `postcss`, `nanoid`) sa dajú spraviť samostatne cez `npm audit fix`,
ale prínos je malý, kým Next ostáva na 15.

---

## 4. Lokálne spustenie

```bash
npm install
npm run dev
```

Next.js 15 App Router + Turbopack, React 19, Tailwind CSS v4, Framer Motion.
