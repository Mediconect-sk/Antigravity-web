'use client';

/*
 * Pozadie stránky – svetlý redizajn „Klinická elegancia“ (31. 10. 2026).
 * Pôvodne tu bol tmavý základ #0C141A, päť rotujúcich tyrkysových „orbov“,
 * vineta a mriežka. Redizajn nepoužíva gradienty ani mriežku – pozadie je
 * jednoliata teplá biela (--mc-bg). Komponent ostáva kvôli importu v layout.tsx
 * a kvôli tomu, aby sa dal štýl pozadia neskôr vrátiť z histórie vetvy.
 */
export default function ScrollGradientBackground() {
    return (
        <div
            aria-hidden="true"
            suppressHydrationWarning
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                backgroundColor: 'var(--mc-bg)',
                pointerEvents: 'none',
            }}
        />
    );
}
