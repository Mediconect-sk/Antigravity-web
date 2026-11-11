"use client";

import { useState } from "react";

/**
 * Interaktívny samo-audit v článku: čitateľ pri každej otázke zvolí „Viem“ alebo
 * „Neviem“ a pod zoznamom dostane vyhodnotenie. Otázky aj všetky texty sú v DOM
 * vždy (SEO), stav sa drží len v prehliadači – nič sa neodosiela.
 */
export function AuditCheck({
    questions,
    threshold = 3,
    ok,
    warn,
}: {
    questions: string[];
    /** Od koľkých „Neviem“ sa zobrazí varovné vyhodnotenie. */
    threshold?: number;
    ok: string;
    warn: string;
}) {
    const [answers, setAnswers] = useState<Record<number, "viem" | "neviem">>({});
    const answered = Object.keys(answers).length;
    const unknown = Object.values(answers).filter((a) => a === "neviem").length;
    const done = answered === questions.length;

    return (
        <div className="not-prose glass rounded-2xl border border-teal/15 p-6 my-8">
            <ol className="space-y-4">
                {questions.map((q, i) => {
                    const a = answers[i];
                    return (
                        <li key={q} className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <span className="flex-1 text-white/80 leading-relaxed">
                                <span className="text-teal font-semibold mr-2">{i + 1}.</span>
                                {q}
                            </span>
                            <span className="flex gap-2 shrink-0" role="group" aria-label={`Odpoveď na otázku ${i + 1}`}>
                                {(["viem", "neviem"] as const).map((v) => (
                                    <button
                                        key={v}
                                        type="button"
                                        aria-pressed={a === v}
                                        onClick={() => setAnswers((s) => ({ ...s, [i]: v }))}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
                                            a === v
                                                ? "bg-teal text-[#ffffff] border-teal"
                                                : "bg-transparent text-teal border-teal/40 hover:border-teal"
                                        }`}
                                    >
                                        {v === "viem" ? "Viem" : "Neviem"}
                                    </button>
                                ))}
                            </span>
                        </li>
                    );
                })}
            </ol>
            <div className="mt-6 pt-5 border-t border-teal/15 text-white/80 leading-relaxed" aria-live="polite">
                {done ? (
                    <p>
                        <strong className="text-white">
                            {unknown} z {questions.length} odpovedí „Neviem“.
                        </strong>{" "}
                        {unknown >= threshold ? warn : ok}
                    </p>
                ) : (
                    <p className="text-white/50">
                        Odpovedzte na všetkých {questions.length} otázok a dostanete vyhodnotenie.
                    </p>
                )}
            </div>
        </div>
    );
}
