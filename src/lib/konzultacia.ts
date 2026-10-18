/**
 * Formulár „Čo dnes najviac riešite?“ na /konzultacia (zdieľané pre web aj API).
 *
 * Hodnoty `potreba` sú zhodné s CHECK obmedzením v DB (Ordevia migrácia 250).
 * Doplňujúce otázky sa zobrazia podľa voľby; ich odpovede idú do `potreba_detail`.
 * Bez čísel a bez sľubov výsledkov (pravidlo webu).
 */

export type Potreba = "zakladanie" | "zlepsenie_chodu" | "financie_ochrana" | "kariera" | "ina";

export type Volba = { value: string; label: string };

export type Otazka = { id: string; text: string; volby: Volba[] };

export const POTREBY: { value: Potreba; label: string; otazky: Otazka[] }[] = [
  {
    value: "zakladanie",
    label: "Zakladám ambulanciu alebo prax",
    otazky: [
      {
        id: "termin",
        text: "Kedy plánujete prax otvoriť?",
        volby: [
          { value: "v_najblizsich_mesiacoch", label: "V najbližších mesiacoch" },
          { value: "v_priebehu_roka", label: "V priebehu roka" },
          { value: "bez_terminu", label: "Zatiaľ bez termínu" },
        ],
      },
      {
        id: "priestory",
        text: "Máte už priestory?",
        volby: [
          { value: "ano", label: "Áno" },
          { value: "hladam", label: "Hľadám" },
          { value: "nie", label: "Ešte nie" },
        ],
      },
    ],
  },
  {
    value: "zlepsenie_chodu",
    label: "Mám prax a chcem zlepšiť jej chod",
    otazky: [
      {
        id: "problem",
        text: "Čo je pre vás najväčší problém?",
        volby: [
          { value: "malo_pacientov", label: "Málo nových pacientov" },
          { value: "efektivita", label: "Chod a procesy v praxi" },
          { value: "marketing", label: "Marketing, ktorý nefunguje" },
          { value: "tim", label: "Organizácia tímu" },
        ],
      },
      {
        id: "vek_praxe",
        text: "Ako dlho prax funguje?",
        volby: [
          { value: "menej_ako_dva_roky", label: "Menej ako dva roky" },
          { value: "dva_az_pat", label: "Dva až päť rokov" },
          { value: "viac_ako_pat", label: "Viac ako päť rokov" },
        ],
      },
    ],
  },
  {
    value: "financie_ochrana",
    label: "Riešim financie a ochranu majetku",
    otazky: [
      {
        id: "ciel",
        text: "Čo chcete riešiť?",
        volby: [
          { value: "ochrana", label: "Ochranu majetku a rodiny" },
          { value: "rast", label: "Investovanie a rast" },
          { value: "existujuce", label: "Existujúce produkty" },
          { value: "zistit", label: "Zatiaľ len zistiť možnosti" },
        ],
      },
      {
        id: "vlastna_prax",
        text: "Máte už vlastnú prax?",
        volby: [
          { value: "ano", label: "Áno" },
          { value: "nie", label: "Nie" },
        ],
      },
    ],
  },
  {
    value: "kariera",
    label: "Pracujem ako lekár a plánujem ďalší krok",
    otazky: [
      {
        id: "plan",
        text: "Aký je váš plán?",
        volby: [
          { value: "vlastna_prax", label: "Chcem prejsť do vlastnej praxe" },
          { value: "lepsie_podmienky", label: "Hľadám lepšie podmienky v zamestnaní" },
          { value: "spolupraca", label: "Zvažujem spoluprácu s praxou" },
        ],
      },
      {
        id: "stupen",
        text: "Ako ďaleko ste v tomto kroku?",
        volby: [
          { value: "uvazujem", label: "Ešte len uvažujem" },
          { value: "konkretny_plan", label: "Mám konkrétny plán" },
        ],
      },
    ],
  },
  {
    value: "ina",
    label: "Niečo iné",
    otazky: [
      {
        id: "tema",
        text: "Akú tému riešite?",
        volby: [
          { value: "bez_temy", label: "Nezáväznú konzultáciu bez konkrétnej témy" },
          { value: "ina_tema", label: "Inú tému" },
        ],
      },
    ],
  },
];

export const POTREBA_VALUES = POTREBY.map((p) => p.value) as [Potreba, ...Potreba[]];

/** Vráti otázky pre zvolenú potrebu (prázdne, ak neplatná). */
export function otazkyPre(potreba: string): Otazka[] {
  return POTREBY.find((p) => p.value === potreba)?.otazky ?? [];
}

/** Overí, že detail obsahuje len platné dvojice otázka → voľba (pre API). */
export function platnyDetail(potreba: string, detail: Record<string, string>): boolean {
  const otazky = otazkyPre(potreba);
  if (!otazky.length) return false;
  const povolene = Object.fromEntries(
    otazky.map((o) => [o.id, new Set(o.volby.map((v) => v.value))])
  );
  return Object.entries(detail).every(
    ([k, v]) => povolene[k] !== undefined && povolene[k].has(v)
  );
}
