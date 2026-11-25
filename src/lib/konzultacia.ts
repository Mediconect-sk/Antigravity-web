/**
 * Formulár „Čo dnes najviac riešite?“ na /konzultacia (zdieľané pre web aj API).
 *
 * Návštevník vyberá z TÉM (dlaždice). Každá téma patrí do jednej z piatich
 * kategórií `potreba`, ktoré sú zhodné s CHECK obmedzením v DB (Ordevia
 * migrácia 250) – preto rozšírenie tém nevyžaduje zmenu databázy.
 * Zvolená téma ide do `potreba_detail.tema`, odpovede na doplňujúce otázky
 * do ďalších kľúčov `potreba_detail` (jsonb, do 2 000 B).
 *
 * Bez čísel a bez sľubov výsledkov (pravidlo webu). Pri financovaní a daniach
 * sa nič nesľubuje – formulár iba zbiera tému rozhovoru.
 */

export type Potreba = "zakladanie" | "zlepsenie_chodu" | "financie_ochrana" | "kariera" | "ina";

export const POTREBA_VALUES = [
  "zakladanie",
  "zlepsenie_chodu",
  "financie_ochrana",
  "kariera",
  "ina",
] as [Potreba, ...Potreba[]];

export type Volba = { value: string; label: string };

export type Otazka = { id: string; text: string; volby: Volba[] };

export type Tema = {
  /** Kľúč témy, ukladá sa do potreba_detail.tema. */
  value: string;
  label: string;
  /** Názov ikony z public/ikony. */
  ikona: string;
  /** Kategória pre CRM (CHECK v DB). */
  potreba: Potreba;
  otazky: Otazka[];
};

const VEK_PRAXE: Otazka = {
  id: "vek_praxe",
  text: "Ako dlho prax funguje?",
  volby: [
    { value: "menej_ako_dva_roky", label: "Menej ako dva roky" },
    { value: "dva_az_pat", label: "Dva až päť rokov" },
    { value: "viac_ako_pat", label: "Viac ako päť rokov" },
  ],
};

export const TEMY: Tema[] = [
  {
    value: "zakladanie",
    label: "Zakladám ambulanciu alebo prax",
    ikona: "briefcase",
    potreba: "zakladanie",
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
    value: "nastupnictvo",
    label: "Preberám prax alebo hľadám nástupcu",
    ikona: "handshake",
    potreba: "kariera",
    otazky: [
      {
        id: "smer",
        text: "Čo vás čaká?",
        volby: [
          { value: "preberam", label: "Preberám prax po kolegovi" },
          { value: "odovzdavam", label: "Hľadám nástupcu pre svoju prax" },
        ],
      },
      {
        id: "termin",
        text: "Kedy by sa to malo stať?",
        volby: [
          { value: "do_roka", label: "Do roka" },
          { value: "neskor", label: "Neskôr" },
          { value: "bez_terminu", label: "Zatiaľ bez termínu" },
        ],
      },
    ],
  },
  {
    value: "pacienti",
    label: "Chcem viac nových pacientov",
    ikona: "target",
    potreba: "zlepsenie_chodu",
    otazky: [
      {
        id: "zdroj_pacientov",
        text: "Odkiaľ k vám dnes prichádzajú noví pacienti najčastejšie?",
        volby: [
          { value: "odporucania", label: "Z odporúčaní" },
          { value: "google", label: "Z Googlu a webu" },
          { value: "socialne_siete", label: "Zo sociálnych sietí" },
          { value: "neviem", label: "Neviem to presne povedať" },
        ],
      },
      VEK_PRAXE,
    ],
  },
  {
    value: "web_online",
    label: "Web, Google a online objednávanie",
    ikona: "lupa",
    potreba: "zlepsenie_chodu",
    otazky: [
      {
        id: "co_riesit",
        text: "Čo chcete riešiť?",
        volby: [
          { value: "novy_web", label: "Nový web" },
          { value: "lepsi_web", label: "Zlepšiť súčasný web" },
          { value: "online_objednavanie", label: "Online objednávanie pacientov" },
          { value: "google_profil", label: "Google profil a recenzie" },
        ],
      },
    ],
  },
  {
    value: "objednavanie",
    label: "Telefóny, objednávanie a administratíva",
    ikona: "telefon",
    potreba: "zlepsenie_chodu",
    otazky: [
      {
        id: "co_zdrzuje",
        text: "Čo vás v praxi najviac zdržiava?",
        volby: [
          { value: "telefonaty", label: "Telefonáty a nedovolaní pacienti" },
          { value: "objednavanie", label: "Objednávanie a termíny" },
          { value: "administrativa", label: "Papierovanie a administratíva" },
          { value: "komunikacia", label: "Komunikácia s pacientmi" },
        ],
      },
    ],
  },
  {
    value: "tim",
    label: "Tím a nábor",
    ikona: "users",
    potreba: "zlepsenie_chodu",
    otazky: [
      {
        id: "co_riesit",
        text: "Čo riešite?",
        volby: [
          { value: "sestra_recepcia", label: "Hľadám sestru alebo recepčnú" },
          { value: "lekar", label: "Hľadám lekára" },
          { value: "organizacia", label: "Organizáciu a fungovanie tímu" },
        ],
      },
    ],
  },
  {
    value: "dane",
    label: "Dane, účtovníctvo a právna forma",
    ikona: "calculator",
    potreba: "financie_ochrana",
    otazky: [
      {
        id: "co_riesit",
        text: "Čo riešite?",
        volby: [
          { value: "dane", label: "Dane a odvody" },
          { value: "pravna_forma", label: "Živnosť alebo s. r. o." },
          { value: "uctovnictvo", label: "Účtovníctvo a účtovného partnera" },
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
    value: "financovanie",
    label: "Financovanie praxe alebo prístrojov",
    ikona: "banknote",
    potreba: "financie_ochrana",
    otazky: [
      {
        id: "na_co",
        text: "Na čo potrebujete financovanie?",
        volby: [
          { value: "priestory", label: "Priestory" },
          { value: "pristroje", label: "Prístroje a vybavenie" },
          { value: "prevadzka", label: "Prevádzku a rast" },
        ],
      },
    ],
  },
  {
    value: "financie_ochrana",
    label: "Ochrana majetku a investovanie",
    ikona: "shield",
    potreba: "financie_ochrana",
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
    ],
  },
  {
    value: "kariera",
    label: "Pracujem ako lekár a plánujem ďalší krok",
    ikona: "stethoscope",
    potreba: "kariera",
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
    ],
  },
  {
    value: "ina",
    label: "Niečo iné",
    ikona: "help",
    potreba: "ina",
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

/** Téma podľa kľúča (undefined, ak neplatná). */
export function temaPodla(value: string | undefined): Tema | undefined {
  return TEMY.find((t) => t.value === value);
}

/** Popis pre e-mail a CRM: názov témy, inak názov kategórie. */
export function popisVolby(potreba: string, detail: Record<string, string>): string {
  return temaPodla(detail.tema)?.label ?? potreba;
}

/**
 * Overí odoslané údaje (pre API): téma existuje, patrí do odoslanej kategórie
 * a ostatné kľúče sú platné dvojice otázka → voľba danej témy.
 * Pri téme „Niečo iné“ je doplňujúca otázka tiež pod kľúčom `tema`, preto sa
 * jej voľba posiela pod kľúčom `tema_detail`.
 */
export function platnyDetail(potreba: string, detail: Record<string, string>): boolean {
  const tema = temaPodla(detail.tema);
  if (!tema || tema.potreba !== potreba) return false;
  const povolene = Object.fromEntries(
    tema.otazky.map((o) => [kluc(o.id), new Set(o.volby.map((v) => v.value))])
  );
  const odpovede = Object.entries(detail).filter(([k]) => k !== "tema");
  if (odpovede.length !== tema.otazky.length) return false;
  return odpovede.every(([k, v]) => povolene[k] !== undefined && povolene[k].has(v));
}

/** Kľúč odpovede v potreba_detail (otázka s id „tema“ by prepísala zvolenú tému). */
export function kluc(otazkaId: string): string {
  return otazkaId === "tema" ? "tema_detail" : otazkaId;
}
