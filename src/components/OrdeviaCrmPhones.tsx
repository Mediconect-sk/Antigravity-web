import Image from 'next/image';

/**
 * Obrazovky CRM Ordevia na mobile (Rezervácie · Prehľad dňa · Tímový chat).
 *
 * Obrázky sú PNG s priehľadným pozadím, vykreslené zo zdrojového HTML
 * v repozitári Ordevia (`propagacia/ordevia-mobil/`). Údaje na nich sú
 * vymyslené. Pri novej verzii obrázkov stačí prepísať súbory
 * v `public/images/ordevia/` – rozmer 1040 × 1960 musí zostať.
 */

const W = 1040;
const H = 1960;

export const CRM_SCREENS = {
    prehlad: {
        src: '/images/ordevia/ordevia-crm-prehlad.png',
        alt: 'Prehľad dňa v CRM Ordevia – čo vyžaduje pozornosť, rezervácie a úlohy na dnes a program dňa',
    },
    rezervacie: {
        src: '/images/ordevia/ordevia-crm-rezervacie.png',
        alt: 'CRM Ordevia na mobile – zoznam dnešných rezervácií so stavmi Potvrdená, Nová a Prebieha a tlačidlom Potvrdiť',
    },
    chat: {
        src: '/images/ordevia/ordevia-crm-chat.png',
        alt: 'Tímový chat v CRM Ordevia – skupina Recepcia Poprad so správami kolegov',
    },
} as const;

export type CrmScreen = keyof typeof CRM_SCREENS;

/** Jeden telefón s obrazovkou CRM. Šírku určuje `className` (napr. `w-[280px]`). */
export function OrdeviaCrmPhone({
    screen,
    sizes,
    className = '',
    priority = false,
}: {
    screen: CrmScreen;
    sizes: string;
    className?: string;
    priority?: boolean;
}) {
    const { src, alt } = CRM_SCREENS[screen];
    return (
        <Image src={src} alt={alt} width={W} height={H} sizes={sizes} priority={priority} className={`h-auto ${className}`} />
    );
}

const SIDE_SIZES = '(min-width: 1024px) 230px, 38vw';
const CENTER_SIZES = '(min-width: 1024px) 270px, 45vw';

/** Tri telefóny poskladané cez seba ako na propagačnom banneri. */
export default function OrdeviaCrmPhones({ className = '' }: { className?: string }) {
    return (
        <div className={`relative mx-auto w-full max-w-[600px] aspect-[100/86] ${className}`}>
            {/* Žiara za telefónmi */}
            <div className="absolute inset-[15%] bg-teal/15 rounded-full blur-[80px] pointer-events-none" />

            <OrdeviaCrmPhone screen="rezervacie" sizes={SIDE_SIZES} className="absolute left-0 top-[12%] w-[38%] opacity-90" />
            <OrdeviaCrmPhone screen="chat" sizes={SIDE_SIZES} className="absolute right-0 top-[12%] w-[38%] opacity-90" />
            <OrdeviaCrmPhone screen="prehlad" sizes={CENTER_SIZES} className="absolute left-[28%] top-0 z-10 w-[44%]" />
        </div>
    );
}
