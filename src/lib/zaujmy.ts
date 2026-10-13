/**
 * Čo lekára zaujíma – možnosti v úvodnom formulári (ContactModal).
 * Skupiny = štyri piliere Mediconectu (src/components/ServicesNebula.tsx).
 * Hodnoty sa posielajú do e-mailu aj do CRM Ordevia (custom.web_mediconect.sluzby),
 * preto ich nemeňte bez dôvodu – staré kontakty by mali iné znenie.
 */
export const ZAUJMY: { pilier: string; moznosti: string[] }[] = [
  {
    pilier: "Business partner",
    moznosti: [
      "Chcem otvoriť vlastnú ambulanciu",
      "Prechod z nemocnice do súkromnej praxe",
      "Financovanie prístrojov a vybavenia",
      "Vstup do siete Mediconect (program Štart)",
      "Odovzdanie alebo predaj praxe nástupcovi",
    ],
  },
  {
    pilier: "Healthcare marketing",
    moznosti: [
      "Zvýšiť kapitáciu a počet pacientov",
      "Nový web ambulancie",
      "Lepšie hodnotenia a viditeľnosť na Google",
      "Osloviť vlastnú databázu pacientov",
    ],
  },
  {
    pilier: "Automatizácie a AI",
    moznosti: [
      "Zaviesť AI do praxe",
      "Online objednávanie a pripomienky termínov",
      "Menej telefonátov a administratívy",
    ],
  },
  {
    pilier: "Správa a ochrana majetku",
    moznosti: [
      "Ochrana rodinného majetku",
      "Holding a štruktúra podnikania",
      "Nadácia a prenos majetku na deti",
      "Daňové a právne poradenstvo",
    ],
  },
];

export const VSETKY_ZAUJMY = ZAUJMY.flatMap((z) => z.moznosti);
