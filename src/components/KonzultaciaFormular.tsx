'use client';

import React, { useState } from 'react';
import { TEMY, temaPodla, kluc } from '@/lib/konzultacia';
import { trackEvent } from '@/lib/track';
import { utmPreCrm, zdrojAkoText } from '@/lib/zdroj';
import { SUHLAS_NEWSLETTER } from '@/lib/crm';
import { Styles } from '@/components/MediconectForm';
import Ikona from '@/components/Ikona';

/**
 * Formulár „Čo dnes najviac riešite?“ na /konzultacia.
 * Najprv výber témy (dlaždice z TEMY v lib/konzultacia), potom 1–2 doplňujúce otázky,
 * kontakt až na konci. Pôvodný formulár na /kontakt zostáva samostatne.
 *
 * Triedy `mc-*` definuje <Styles /> z MediconectForm a platia len vnútri `.mc-card`.
 * Bez obalu `.mc-card` a bez <Styles /> ostane formulár bez štýlov (chyba opravená 11. 11. 2026).
 */

const SUHLAS =
  'Súhlasím so spracovaním osobných údajov na účely vybavenia mojej žiadosti o konzultáciu v súlade s dokumentom Ochrana osobných údajov.';

export default function KonzultaciaFormular() {
  const [tema, setTema] = useState('');
  const [detail, setDetail] = useState<Record<string, string>>({});
  const [meno, setMeno] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [suhlas, setSuhlas] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [chyby, setChyby] = useState<Record<string, string>>({});
  const [stav, setStav] = useState<'idle' | 'odosiela' | 'hotovo' | 'chyba'>('idle');
  const [chybaSprava, setChybaSprava] = useState('');

  const zvolena = temaPodla(tema);
  const potreba = zvolena?.potreba ?? '';
  const otazky = zvolena?.otazky ?? [];

  function zvolTemu(v: string) {
    setTema(v);
    setDetail({});
    setChyby({});
  }

  function zvolDetail(id: string, v: string) {
    setDetail((d) => ({ ...d, [id]: v }));
  }

  function over(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!zvolena) e.potreba = 'Vyberte, čo dnes najviac riešite.';
    otazky.forEach((o) => {
      if (!detail[kluc(o.id)]) e[o.id] = 'Vyberte prosím odpoveď.';
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
          detail: { tema, ...detail },
          meno: meno.trim(),
          email: email.trim(),
          telefon: telefon.trim() || null,
          suhlas: true,
          newsletter,
          zdroj: zdrojAkoText(),
          utm: utmPreCrm(),
        }),
      });
      if (!res.ok) throw new Error('bad status');
      trackEvent('konzultacia_odoslana', { potreba, tema });
      if (newsletter) trackEvent('newsletter_prihlaseny', { miesto: 'konzultacia' });
      setStav('hotovo');
    } catch {
      setStav('chyba');
      setChybaSprava('Odoslanie sa nepodarilo. Skúste to prosím neskôr alebo napíšte na info@mediconect.sk.');
    }
  }

  if (stav === 'hotovo') {
    return (
      <div className="mc-card mc-card--konzultacia" suppressHydrationWarning>
        <div className="mc-body" role="status">
          <div className="mc-section-title">Ďakujeme</div>
          <p>Ozveme sa vám do jedného pracovného dňa. Váš výber sme prijali.</p>
        </div>
        <Styles />
      </div>
    );
  }

  return (
    <div className="mc-card mc-card--konzultacia" suppressHydrationWarning>
    <form className="mc-body" onSubmit={odosli} noValidate>
      <div className="mc-section-title">Čo dnes najviac riešite?</div>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="mc-label">Vyberte jednu možnosť <span className="mc-req">*</span></legend>
        <div
          style={{
            background: '#0B2B3D',
            borderRadius: 20,
            padding: 16,
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            boxShadow: '0 20px 60px -20px rgba(4,29,44,0.8)',
          }}
        >
          {TEMY.map((p) => {
            const aktivna = tema === p.value;
            return (
              <label
                key={p.value}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 18px',
                  borderRadius: 16,
                  cursor: 'pointer',
                  background: aktivna ? '#041D2C' : 'rgba(4,29,44,0.6)',
                  border: `1px solid ${aktivna ? '#4CADB6' : 'rgba(255,255,255,0.1)'}`,
                  color: '#FAFAF8',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                <input
                  type="radio"
                  name="potreba"
                  value={p.value}
                  checked={aktivna}
                  onChange={() => zvolTemu(p.value)}
                  style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
                />
                <Ikona name={p.ikona} size={28} />
                <span style={{ flex: 1 }}>{p.label}</span>
                <span
                  aria-hidden
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    border: `2px solid ${aktivna ? '#4CADB6' : 'rgba(255,255,255,0.4)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {aktivna && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CADB6' }} />}
                </span>
              </label>
            );
          })}
        </div>
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
                checked={detail[kluc(o.id)] === v.value}
                onChange={() => zvolDetail(kluc(o.id), v.value)}
              />
              {v.label}
            </label>
          ))}
          {chyby[o.id] && <div className="mc-error-msg" style={{ display: 'block' }}>{chyby[o.id]}</div>}
        </fieldset>
      ))}

      {zvolena && (
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

          <label className="mc-label" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 12 }}>
            <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
            <span><strong>Pošlite mi aj newsletter Tajomstvo efektívnych ambulancií</strong> (nepovinné). {SUHLAS_NEWSLETTER}</span>
          </label>

          {chybaSprava && <div className="mc-error-msg" style={{ display: 'block' }}>{chybaSprava}</div>}

          <button type="submit" className="mc-submit" disabled={stav === 'odosiela'} style={{ marginTop: 24 }}>
            {stav === 'odosiela' ? 'Odosielam…' : 'Odoslať žiadosť'}
          </button>
        </>
      )}
    </form>
    <Styles />
    </div>
  );
}
