import { clsx } from "clsx"

/**
 * Shows the keepsake on a dresser, next to a plant and a framed photo, so the
 * size choice gives a real-world indication. The statue scales relative to the
 * (fixed) photo frame: Petite 10 cm < frame 15 cm < Grand 20 cm.
 */

const COLOR_FILTER: Record<string, string> = {
  gold: "saturate(1.06) brightness(1.03)",
  onyx: "grayscale(1) brightness(0.62) contrast(1.16)",
  pearl: "grayscale(0.92) brightness(1.5) contrast(0.92)",
  blush: "sepia(0.5) saturate(1.7) hue-rotate(300deg) brightness(1.12)",
}

// statue height as a % of the scene height, per size (frame ≈ 31%)
const STATUE_H: Record<string, number> = {
  petite: 25,
  classic: 34,
  grand: 45,
}

export function RoomScene({
  colorId = "gold",
  sizeId = "classic",
  className,
}: {
  colorId?: string
  sizeId?: string
  className?: string
}) {
  const filter = COLOR_FILTER[colorId] ?? COLOR_FILTER.gold
  const statueH = STATUE_H[sizeId] ?? STATUE_H.classic

  return (
    <div className={clsx("relative h-full w-full overflow-hidden", className)}>
      {/* wall */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #F4EEE4 0%, #EFE5D6 55%, #E7DAC6 100%)",
        }}
      />
      {/* soft window light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 26% 12%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      {/* dresser front */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background: "linear-gradient(180deg, #C7A982 0%, #B2906A 100%)",
        }}
      />
      {/* dresser surface lip */}
      <div className="absolute inset-x-0 bottom-[30%] h-[3px] bg-white/40" />
      <div
        className="absolute inset-x-0 bottom-[30%] h-[10%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* objects on the surface */}
      <div className="absolute inset-x-0 bottom-[30%] flex items-end justify-center gap-[7%] px-[9%]">
        {/* plant */}
        <Plant className="h-0 w-[20%]" style={{ height: "40%" }} />

        {/* the keepsake (scales with size) */}
        <div
          className="relative flex flex-col items-center transition-[height] duration-500"
          style={{ height: `${statueH}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/beeldje.png"
            alt="Het beeldje op een dressoir"
            className="h-full w-auto object-contain"
            style={{ filter, transition: "filter 500ms" }}
          />
          <div className="absolute -bottom-[6px] h-[7px] w-[80%] rounded-[50%] bg-black/25 blur-[3px]" />
        </div>

        {/* framed photo (fixed reference ≈ 15 cm) */}
        <Frame style={{ height: "31%" }} />
      </div>
    </div>
  )
}

function Plant({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg viewBox="0 0 70 120" className={className} style={style} aria-hidden>
      <g fill="#7C9A6B">
        <path d="M35 70C30 50 18 40 14 26c10 2 22 10 24 30z" />
        <path d="M35 70c5-22 17-32 23-44-10 1-23 8-25 30z" opacity="0.9" />
        <path d="M35 72C33 50 26 36 28 20c8 6 14 18 11 38z" fill="#8FAE7C" />
        <path d="M35 72c3-20 12-30 12-46-7 5-13 16-14 34z" fill="#6E8C5D" />
      </g>
      {/* pot */}
      <path d="M20 72h30l-4 40H24z" fill="#B98B62" />
      <path d="M18 70h34v8H18z" fill="#CDA079" />
    </svg>
  )
}

function Frame({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 80" style={style} className="w-auto" aria-hidden>
      {/* easel back */}
      <rect x="6" y="4" width="48" height="64" rx="4" fill="#9C7A52" />
      <rect x="10" y="8" width="40" height="56" rx="2" fill="#F3ECE2" />
      {/* a soft "photo" with a tiny heart */}
      <rect x="13" y="11" width="34" height="50" rx="1.5" fill="#E7D3CC" />
      <path
        d="M30 40l-6-5.6a3.8 3.8 0 015.9-4.8 3.8 3.8 0 015.9 4.8L30 40z"
        fill="#C8A15A"
        opacity="0.8"
      />
      <rect x="26" y="66" width="8" height="10" fill="#9C7A52" />
    </svg>
  )
}
