import React from 'react';
import Image from 'next/image';
import { Facebook, ThumbsUp, MessageCircle, Share2, Play } from 'lucide-react';

/**
 * Ukážky príspevkov sociálnych sietí s fotografiami a skutočným textom.
 * Fotografie sú vygenerované (public/images/socialne-siete/).
 * Texty sú všeobecné edukačné témy, nie tvrdenia o konkrétnej ambulancii.
 */

const IMG = '/images/socialne-siete';

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
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
                <Image src={`${IMG}/facebook.webp`} alt="Svetlá čakáreň ambulancie s rastlinami" fill sizes="(min-width: 1024px) 320px, 80vw" className="object-cover" />
                <span className="absolute left-3 bottom-3 rounded-xl bg-[#041D2C]/85 text-[#fff] px-3 py-1.5 font-kanit font-semibold text-sm">Prvá návšteva bez stresu</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#3F4B54] text-xs whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5"><ThumbsUp size={14} /> Páči sa mi</span>
                <span className="inline-flex items-center gap-1.5"><MessageCircle size={14} /> Komentár</span>
                <span className="inline-flex items-center gap-1.5"><Share2 size={14} /> Zdieľať</span>
            </div>
        </div>
    );
}

const IG_TILES: { t: string; img: string; alt: string }[] = [
    { t: 'Náš tím', img: 'tim', alt: 'Tím ambulancie na recepcii' },
    { t: 'Tip týždňa', img: 'tip', alt: 'Pohár vody, jablko a zápisník na stole' },
    { t: 'Prevencia', img: 'prevencia', alt: 'Tlakomer a fonendoskop na stole' },
    { t: 'Za scénou', img: 'za-scenou', alt: 'Ráno v prázdnej ambulancii' },
    { t: 'Otázky', img: 'otazky', alt: 'Pacient s telefónom a čajom v čakárni' },
    { t: 'Postup', img: 'postup', alt: 'Kontrolný zoznam na podložke s perom' },
];

export function InstagramGrid({ className = '', labels = true }: { className?: string; labels?: boolean }) {
    return (
        <div className={`grid grid-cols-3 gap-1.5 ${className}`}>
            {IG_TILES.map((x) => (
                <div key={x.t} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={`${IMG}/${x.img}.webp`} alt={x.alt} fill sizes="(min-width: 1024px) 120px, 30vw" className="object-cover" />
                    {labels && <span className="absolute left-1 right-1 bottom-1 rounded-md bg-[#041D2C]/80 text-[#fff] px-1.5 py-0.5 font-kanit font-semibold text-[10px] leading-tight truncate">{x.t}</span>}
                </div>
            ))}
        </div>
    );
}

export function YouTubeThumb({ className = '' }: { className?: string }) {
    return (
        <div className={className}>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image src={`${IMG}/youtube.webp`} alt="Lekárka vysvetľuje pacientom postup v edukačnom videu" fill sizes="(min-width: 1024px) 360px, 80vw" className="object-cover" />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#88D5DB] text-[#041D2C] flex items-center justify-center"><Play size={16} /></span>
                <span className="absolute left-3 bottom-3 right-14 rounded-xl bg-[#041D2C]/85 text-[#fff] px-3 py-1.5 font-kanit font-semibold text-sm leading-snug">Ako sa pripraviť na vyšetrenie</span>
            </div>
            <p className="mt-2 text-xs font-stolzl text-[#3F4B54]">Vaša ambulancia · Edukačné video</p>
        </div>
    );
}

export function TikTokCard({ className = '' }: { className?: string }) {
    return (
        <div className={`relative rounded-2xl overflow-hidden ${className}`}>
            <Image src={`${IMG}/tiktok.webp`} alt="Telefón na statíve pripravený na natáčanie krátkeho videa v ambulancii" fill sizes="160px" className="object-cover" />
            <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#88D5DB] text-[#041D2C] flex items-center justify-center"><Play size={14} /></span>
            <span className="absolute left-2 right-2 bottom-2 rounded-xl bg-[#041D2C]/85 text-[#fff] px-2.5 py-1.5 font-kanit font-semibold text-xs leading-snug">3 otázky pred prvou návštevou</span>
        </div>
    );
}
