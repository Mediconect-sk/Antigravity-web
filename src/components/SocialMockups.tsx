import React from 'react';
import { Facebook, ThumbsUp, MessageCircle, Share2, Play } from 'lucide-react';

/**
 * Ilustračné ukážky príspevkov so skutočným textom (nie sivé zástupné pásiky).
 * Texty sú všeobecné edukačné témy, nie tvrdenia o konkrétnej ambulancii.
 */

export function FacebookPost({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-3xl border border-[#E6E6E6] bg-[#fff] p-5 font-stolzl text-[#041D2C] ${className}`}>
            <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-full bg-[#041D2C] text-[#88D5DB] flex items-center justify-center"><Facebook size={18} /></span>
                <div>
                    <p className="text-sm font-semibold leading-tight">Vaša ambulancia</p>
                    <p className="text-xs text-[#3F4B54]">Edukácia pacienta</p>
                </div>
            </div>
            <p className="text-sm leading-relaxed mb-3">Ako prebieha preventívna prehliadka a ako sa na ňu pripraviť? Pripravili sme krátky sprievodca pre pacientov.</p>
            <div className="rounded-2xl bg-[#041D2C] text-[#fff] px-4 py-5 font-kanit font-semibold text-lg leading-snug mb-3">Prvá návšteva bez stresu</div>
            <div className="flex items-center gap-5 text-[#3F4B54] text-xs">
                <span className="inline-flex items-center gap-1.5"><ThumbsUp size={14} /> Páči sa mi</span>
                <span className="inline-flex items-center gap-1.5"><MessageCircle size={14} /> Komentár</span>
                <span className="inline-flex items-center gap-1.5"><Share2 size={14} /> Zdieľať</span>
            </div>
        </div>
    );
}

const IG_TILES: { t: string; bg: string; fg: string }[] = [
    { t: 'Náš tím', bg: '#041D2C', fg: '#fff' },
    { t: 'Tip týždňa', bg: '#88D5DB', fg: '#041D2C' },
    { t: 'Prevencia', bg: '#EAF4F5', fg: '#041D2C' },
    { t: 'Za scénou', bg: '#4CADB6', fg: '#041D2C' },
    { t: 'Otázky', bg: '#041D2C', fg: '#fff' },
    { t: 'Postup', bg: '#EAF4F5', fg: '#041D2C' },
];

export function InstagramGrid({ className = '' }: { className?: string }) {
    return (
        <div className={`grid grid-cols-3 gap-1.5 ${className}`}>
            {IG_TILES.map((x) => (
                <div key={x.t} className="aspect-square rounded-lg flex items-end p-2 font-kanit font-semibold text-[11px] leading-tight" style={{ background: x.bg, color: x.fg }}>{x.t}</div>
            ))}
        </div>
    );
}

export function YouTubeThumb({ className = '' }: { className?: string }) {
    return (
        <div className={className}>
            <div className="relative aspect-video rounded-2xl bg-[#041D2C] text-[#fff] p-4 flex items-end font-kanit font-semibold text-base leading-snug">
                Ako sa pripraviť na vyšetrenie
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#88D5DB] text-[#041D2C] flex items-center justify-center"><Play size={16} /></span>
            </div>
            <p className="mt-2 text-xs font-stolzl text-[#3F4B54]">Vaša ambulancia · Edukačné video</p>
        </div>
    );
}

export function TikTokCard({ className = '' }: { className?: string }) {
    return (
        <div className={`relative rounded-2xl bg-[#041D2C] text-[#fff] p-4 flex flex-col justify-end font-kanit font-semibold leading-snug ${className}`}>
            <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#88D5DB] text-[#041D2C] flex items-center justify-center"><Play size={14} /></span>
            3 otázky pred prvou návštevou
        </div>
    );
}
