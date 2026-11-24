/**
 * Kontrola telefónneho čísla pre formuláre (previerka webu).
 *
 * Prijíma slovenské a české čísla v bežných zápisoch:
 *   0905 123 456 · +421 905 123 456 · 00421905123456 · +420 601 123 456
 * a vracia ich v jednotnom tvare E.164 (+421905123456).
 *
 * Odmieta zjavne zástupné čísla (0900 000 000, 0905 111 111, 0123 456 789…),
 * aby sa do CRM nedostali kontakty, na ktoré sa nedá dovolať.
 * Číslo sa neoveruje hovorom ani SMS – iba tvar.
 */
export function normalizujTelefon(vstup: string): string | null {
    const t = vstup.trim().replace(/[\s\-./()]/g, '');
    if (!/^\+?\d+$/.test(t)) return null;

    let cislo: string;
    if (/^\+42[01]\d{9}$/.test(t)) cislo = t;
    else if (/^0042[01]\d{9}$/.test(t)) cislo = '+' + t.slice(2);
    else if (/^0\d{9}$/.test(t)) cislo = '+421' + t.slice(1);
    else if (/^[2-9]\d{8}$/.test(t)) cislo = '+420' + t; // české číslo bez predvoľby
    else return null;

    const ucastnik = cislo.slice(4); // 9 číslic bez predvoľby krajiny
    // Zástupné čísla: 6 a viac rovnakých číslic za sebou alebo celý rad 123456789 / 987654321.
    if (/(\d)\1{5,}/.test(ucastnik)) return null;
    if (ucastnik === '123456789' || ucastnik === '987654321') return null;
    return cislo;
}

export const SPRAVA_NEPLATNY_TELEFON =
    'Zadajte platné telefónne číslo, napríklad 0905 123 456 alebo +421 905 123 456.';
