/**
 * Ikona z Higgsfield sady (public/ikony/<name>.svg).
 * Vykresľuje sa na bielom štvorci, lebo tmavomodrá čiara by na tmavom
 * pozadí nebola viditeľná (pozri CHANGELOG 17. 11. 2026).
 */
type IkonaProps = {
  name: string;
  size?: number;
};

export default function Ikona({ name, size = 28 }: IkonaProps) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#fff]"
      style={{ width: size + 14, height: size + 14 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/ikony/${name}.svg`} alt="" width={size} height={size} aria-hidden="true" />
    </span>
  );
}
