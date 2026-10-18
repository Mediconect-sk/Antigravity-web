'use client';

import React, { useState } from 'react';
import { POTREBY, otazkyPre, type Potreba } from '@/lib/konzultacia';

/**
 * Formulár „Čo dnes najviac riešite?“ na /konzultacia.
 * Najprv jedna otázka s piatimi voľbami, potom 1–2 doplňujúce otázky podľa voľby,
 * kontakt až na konci. Pôvodný formulár na /kontakt zostáva samostatne.
 */

const SUHLAS =
  'Súhlasím so spracovaním osobných údajov na účely vybavenia mojej žiadosti o konzultáciu v súlade s dokumentom Ochrana osobných údajov.';

export default function KonzultaciaFormular() {
  const [potreba, setPotreba] = useState<Potreba | ''>('');
  const [detail, setDetail] = useState<Record<string, string>>({});
  const [meno, setMeno] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [suhlas, setSuhlas] = useState(false);
  const [chyby, setChyby] = useState<Record<string, string>>({});
  const [stav, setStav] = useState<'idle' | 'odosiela' | 'hotovo' | 'chyba'>('idle');
  const [chybaSprava, setChybaSprava] = useState('');

  const otazky = potreba ? otazkyPre(potreba) : [];

  function zvolPotrebu(v: Potreba) {
    setPotreba(v);
    setDetail({});
    setChyby({});
  }

  function zvolDetail(id: string, v: string) {
    setDetail((d) => ({ ...d, [id]: v }));
  }

  function over(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!potreba) e.potreba = 'Vyberte, čo dnes najviac riešite.';
    otazky.forEach((o) => {
      if (!detail[o.id]) e[o.id] = 'Vyberte prosím odpoveď.';
    });
    if (!meno.trim()) e.meno = 'Zadajte prosím meno.';
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) e.email = 'Zadajte platný e-mail.';
    if (!suhlas) e.suhlas = 'Súhlas je potrebný na vybavenie žiadosti.';
    return e;
  }

  async function odosli(ev: React.FormEvent) {
    ev.preventDefault();
    const e = over();
    setChyby(e);
    if (Object.keys(e).length) return;

    setStav('odosiela');
    setChybaSprava('');
    try {
      const res = await fetch('/api/konzultacia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          potreba,
          detail,
          meno: meno.trim(),
          email: email.trim(),
          telefon: telefon.trim() || null,
          suhlas: true,
        }),
      });
      if (!res.ok) throw new Error('bad status');
      setStav('hotovo');
    } catch {
      setStav('chyba');
      setChybaSprava('Odoslanie sa nepodarilo. Skúste to prosím neskôr alebo napíšte na info@mediconect.sk.');
    }
  }

  if (stav === 'hotovo') {
    return (
      <div className="mc-body" role="status">
        <div className="mc-section-title">Ďakujeme</div>
        <p>Ozveme sa vám do jedného pracovného dňa. Váš výber sme prijali.</p>
      </div>
    );
  }

  return (
    <form className="mc-body" onSubmit={odosli} noValidate>
      <div className="mc-section-title">Čo dnes najviac riešite?</div>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="mc-label">Vyberte jednu možnosť <span className="mc-req">*</span></legend>
        {POTREBY.map((p) => (
          <label key={p.value} className="mc-label" style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <input
              type="radio"
              name="potreba"
              value={p.value}
              checked={potreba === p.value}
              onChange={() => zvolPotrebu(p.value)}
            />
            {p.label}
          </label>
        ))}
        {chyby.potreba && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby.potreba}</div>}
      </fieldset>

      {otazky.map((o) => (
        <fieldset key={o.id} style={{ border: 0, padding: 0, margin: '20px 0 0' }}>
          <legend className="mc-label">{o.text} <span className="mc-req">*</span></legend>
          {o.volby.map((v) => (
            <label key={v.value} className="mc-label" style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
              <input
                type="radio"
                name={o.id}
                value={v.value}
                checked={detail[o.id] === v.value}
                onChange={() => zvolDetail(o.id, v.value)}
              />
              {v.label}
            </label>
          ))}
          {chyby[o.id] && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby[o.id]}</div>}
        </fieldset>
      ))}

      {potreba && (
        <>
          <div className="mc-section-title" style={{ marginTop: 32 }}>Kontakt</div>

          <label className="mc-label" htmlFor="kz-meno">Meno <span className="mc-req">*</span></label>
          <input id="kz-meno" name="meno" type="text" value={meno} onChange={(e) => setMeno(e.target.value)} autoComplete="name" />
          {chyby.meno && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby.meno}</div>}

          <label className="mc-label" htmlFor="kz-email">E-mail <span className="mc-req">*</span></label>
          <input id="kz-email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          {chyby.email && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby.email}</div>}

          <label className="mc-label" htmlFor="kz-telefon">Telefón (nepovinné)</label>
          <input id="kz-telefon" name="telefon" type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} autoComplete="tel" />

          <label className="mc-label" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16 }}>
            <input type="checkbox" checked={suhlas} onChange={(e) => setSuhlas(e.target.checked)} />
            <span>{SUHLAS} <span className="mc-req">*</span></span>
          </label>
          {chyby.suhlas && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby.suhlas}</div>}

          {chybaSprava && <div className="mc-error-msg" style={{ display: 'block' }}>{chybaSprava}</div>}

          <button type="submit" className="mc-submit" disabled={stav === 'odosiela'} style={{ marginTop: 24 }}>
            {stav === 'odosiela' ? 'Odosielam…' : 'Odoslať žiadosť'}
          </button>
        </>
      )}
    </form>
  );
}
