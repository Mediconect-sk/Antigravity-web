'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * „Naša filozofia" Healthcare marketingu (pilier 2 Pacienti a marketing).
 * Presunuté z domovskej stránky na /sluzby – domovská stránka predstavuje
 * Mediconect ako Medical Business Partner, nie marketingovú agentúru
 * (architektúra značky v2, 27. 9. 2026).
 *
 * Bez latinského claimu: latinské claimy patria len MyMedicalu, nie Mediconectu.
 */

const POINTS = [
    'Preberáme plnú zodpovednosť za váš digitálny obraz — pomáhame vyrozprávať váš príbeh moderne a profesionálne.',
    'Chápeme, že lekár nie je marketér. Vaším poslaním je zdravie pacientov, naším je vaša prosperita a dobré meno.',
    'Každý krok konzultujeme s ohľadom na vašu vyťaženosť — minimálny čas, maximálne výsledky.',
    'Nestavíme na lajkoch. Staviame na dátach, dôvere a kontinuite kontaktu, ktorá vedie k liečbe.',
    'Diskrétna komunikácia, ktorá pacienta edukuje, vedie k prevencii a zvyšuje adherenciu.',
];

export default function MarketingPhilosophy() {
    return (
        <section id="filozofia" className="py-24 relative z-10 overflow-hidden scroll-mt-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-teal text-sm font-semibold uppercase tracking-widest block mb-4">Naša filozofia</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                        Marketing, ktorý nie je o lajkoch. Je o{' '}
                        <span className="text-gradient">dôvere a konverzii.</span>
                    </h2>
                </motion.div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                    {POINTS.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={`flex items-start gap-3 ${i === POINTS.length - 1 ? 'md:col-span-2 md:max-w-[calc(50%-20px)] md:mx-auto' : ''}`}
                        >
                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center">
                                <Check size={11} className="text-teal" />
                            </span>
                            <span className="text-base text-white/60 leading-relaxed">{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
