import QRCode from 'qrcode';

/**
 * QR kód na adresu ukážky Ordevie. Server component – SVG vzniká pri builde,
 * do prehliadača nejde žiadny JavaScript. Do klientskej stránky sa odovzdáva
 * ako prop (napr. `<Content qrApp={<OrdeviaQr … />} />` v page.tsx).
 *
 * Tmavé moduly na bielom pozadí – na tmavom pozadí webu by inverzný QR kód
 * niektoré čítačky neprečítali. Okraj (quiet zone) tvorí margin v SVG + padding.
 */
export default async function OrdeviaQr({ url, label, className = '' }: { url: string; label: string; className?: string }) {
    const svg = await QRCode.toString(url, {
        type: 'svg',
        margin: 2,
        errorCorrectionLevel: 'M',
        color: { dark: '#041D2C', light: '#FFFFFF' },
    });

    return (
        <div
            role="img"
            aria-label={label}
            className={`bg-[#fff] rounded-2xl p-2 [&_svg]:block [&_svg]:w-full [&_svg]:h-auto ${className}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
