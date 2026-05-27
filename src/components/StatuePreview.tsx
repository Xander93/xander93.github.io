import { clsx } from "clsx"
import { Heart } from "lucide-react"

/**
 * Product visual. Uses a single realistic render and adapts it parametrically:
 *  - colour   → CSS filter (champagne/onyx/pearl/blush)
 *  - finish   → sheen + contrast (matte / satin / gloss)
 *  - engraving→ dynamic overlay on the base (the render's baked text is faded out)
 *
 * Swap `/statue.png` per colour later for true material renders without touching callers.
 */

const COLOR_FILTER: Record<string, string> = {
  gold: "saturate(1.06) brightness(1.03)", // champagne ≈ the bronze render
  onyx: "grayscale(1) brightness(0.6) contrast(1.16)",
  pearl: "grayscale(0.92) brightness(1.55) contrast(0.9)",
  blush: "sepia(0.5) saturate(1.7) hue-rotate(300deg) brightness(1.12)",
}

export function StatuePreview({
  colorId = "gold",
  finishId = "satin",
  engraving,
  className,
}: {
  colorId?: string
  finishId?: string
  engraving?: string
  className?: string
}) {
  const colorFilter = COLOR_FILTER[colorId] ?? COLOR_FILTER.gold
  const finishAdj =
    finishId === "gloss"
      ? " contrast(1.08) brightness(1.03)"
      : finishId === "matte"
        ? " brightness(0.96) saturate(0.92)"
        : ""
  const sheen = finishId === "gloss" ? 0.5 : finishId === "satin" ? 0.3 : 0.14

  return (
    <div className={clsx("relative h-full w-full overflow-hidden bg-night", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/statue.png"
        alt="3D-beeldje van je echo"
        className="absolute inset-0 h-full w-full object-cover object-[center_8%] transition-[filter] duration-700"
        style={{ filter: colorFilter + finishAdj }}
      />

      {/* finish sheen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(58% 40% at 32% 16%, rgba(255,255,255,${sheen}) 0%, rgba(255,255,255,0) 62%)`,
        }}
      />

      {/* fade the render's base into darkness so we can place a dynamic engraving */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-night via-night/75 to-transparent" />

      {engraving?.trim() ? (
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-1.5 px-6 text-center">
          <Heart size={12} className="text-gold-light" fill="currentColor" strokeWidth={0} />
          <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-ivory/90">
            {engraving}
          </span>
        </div>
      ) : null}
    </div>
  )
}
