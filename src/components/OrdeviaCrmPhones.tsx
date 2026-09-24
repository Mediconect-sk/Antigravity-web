import Image from 'next/image';

/**
 * Tri obrazovky CRM Ordevia na mobile (Rezervácie · Prehľad dňa · Tímový chat)
 * poskladané cez seba ako na propagačnom banneri.
 *
 * Obrázky sú PNG s priehľadným pozadím, vykreslené zo zdrojového HTML
 * v repozitári Ordevia (`propagacia/ordevia-mobil/`). Údaje na nich sú
 * vymyslené. Pri novej verzii obrázkov stačí prepísať súbory
 * v `public/images/ordevia/` – rozmer 1040 × 1960 musí zostať.
 */

const W = 1040;
const H = 1960;

const SIDE_SIZES = '(min-width: 1024px) 230px, 38vw';
const CENTER_SIZES = '(min-width: 1024px) 270px, 45vw';

export default function OrdeviaCrmPhones({ className = '' }: { className?: string }) {
    return (
        <div className={`relative mx-auto w-full max-w-[600px] aspect-[100/86] ${className}`}>
            {/* Žiara za telefónmi */}
            <div className="absolute inset-[15%] bg-teal/15 rounded-full blur-[80px] pointer-events-none" />

            <Image
                src="/images/ordevia/ordevia-crm-rezervacie.png"
                alt="CRM Ordevia na mobile – zoznam dnešných rezervácií so stavmi Potvrdená, Nová a Prebieha a tlačidlom Potvrdiť"
                width={W}
                height={H}
                sizes={SIDE_SIZES}
                className="absolute left-0 top-[12%] w-[38%] h-auto opacity-90"
            />
            <Image
                src="/images/ordevia/ordevia-crm-chat.png"
                alt="Tímový chat v CRM Ordevia – skupina Recepcia Poprad so správami kolegov"
                width={W}
                height={H}
                sizes={SIDE_SIZES}
                className="absolute right-0 top-[12%] w-[38%] h-auto opacity-90"
            />
            <Image
                src="/images/ordevia/ordevia-crm-prehlad.png"
                alt="Prehľad dňa v CRM Ordevia – čo vyžaduje pozornosť, rezervácie a úlohy na dnes a program dňa"
                width={W}
                height={H}
                sizes={CENTER_SIZES}
                className="absolute left-[28%] top-0 z-10 w-[44%] h-auto"
            />
        </div>
    );
}
