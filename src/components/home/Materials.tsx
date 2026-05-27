"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check, Ruler, Sparkles } from "lucide-react"
import { clsx } from "clsx"
import { StatuePreview } from "@/components/StatuePreview"
import { COLORS, SIZES, findSize } from "@/lib/products"
import { formatPrice } from "@/lib/format"

// Relatable size references so people grasp the real dimensions.
const SIZE_COMPARE: Record<string, string> = {
  petite: "ongeveer zo groot als een koffiemok",
  classic: "ongeveer zo groot als een wijnglas",
  grand: "ongeveer zo groot als een wijnfles",
}

export function Materials() {
  const [sizeId, setSizeId] = useState("classic")
  const [colorId, setColorId] = useState("gold")

  const size = findSize(sizeId)
  const price = size?.price ?? 0

  return (
    <section
      id="materialen"
      className="scroll-mt-24 border-y border-ink/[0.06] bg-ivory-200/50 py-16 sm:py-24"
    >
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Stel samen</span>
          <h2 className="mt-4 text-3xl font-medium text-ink sm:text-5xl">
            Afgewerkt zoals jij het wilt
          </h2>
          <p className="mt-3 text-ink-soft">
            Speel gerust: kies een formaat en een kleur en zie je beeldje meteen
            veranderen.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-7 lg:grid-cols-2 lg:gap-12">
          {/* live preview — compact on mobile so it fits with the options */}
          <div className="lg:sticky lg:top-24">
            <div className="relative mx-auto w-full max-w-[200px] sm:max-w-[250px] lg:max-w-sm">
              <div className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-full bg-palantir opacity-70 blur-2xl" />
              <div className="glass relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-glow lg:rounded-[2.25rem]">
                <StatuePreview colorId={colorId} finishId="gloss" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-night/55 px-3.5 py-1.5 text-xs font-semibold text-ivory backdrop-blur">
                  {size?.dimension} hoog
                </span>
              </div>
            </div>
          </div>

          {/* options */}
          <div className="space-y-5 lg:space-y-7">
            <Group label="Formaat">
              <div className="grid grid-cols-3 gap-2.5">
                {SIZES.map((s) => {
                  const active = sizeId === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSizeId(s.id)}
                      className={clsx(
                        "rounded-2xl border p-3 text-left transition-all",
                        active
                          ? "border-gold bg-gold/[0.07] shadow-card"
                          : "border-ink/12 bg-white/60 hover:border-ink/25"
                      )}
                    >
                      <span className="block text-sm font-medium text-ink">
                        {s.label}
                      </span>
                      <span className="block text-xs text-ink-muted">
                        {s.dimension}
                      </span>
                      <span className="mt-1 block font-display text-sm text-ink">
                        {formatPrice(s.price)}
                      </span>
                    </button>
                  )
                })}
              </div>
              <p className="mt-2.5 flex items-center gap-1.5 text-xs text-ink-muted">
                <Ruler size={13} />
                {size?.dimension} hoog — {SIZE_COMPARE[sizeId]}
              </p>
            </Group>

            <Group
              label="Kleur"
              value={COLORS.find((c) => c.id === colorId)?.label}
            >
              <div className="flex flex-wrap gap-3">
                {COLORS.map((c) => {
                  const active = colorId === c.id
                  return (
                    <button
                      key={c.id}
                      onClick={() => setColorId(c.id)}
                      aria-label={c.label}
                      className={clsx(
                        "relative h-10 w-10 rounded-full border shadow-inner transition-transform",
                        active
                          ? "scale-110 border-gold ring-2 ring-gold/40"
                          : "border-ink/15 hover:scale-105"
                      )}
                      style={{ background: c.hex }}
                    >
                      {active && (
                        <Check
                          size={15}
                          className={clsx(
                            "absolute inset-0 m-auto",
                            isLight(c.hex) ? "text-ink" : "text-white"
                          )}
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            </Group>

            {/* finish is fixed (vapor-smoothed high gloss) — shown, not chosen */}
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <Sparkles size={15} className="text-gold-dark" />
              Standaard met een handgepolijste{" "}
              <span className="font-medium text-ink">hoogglans</span> afwerking.
            </p>

            <div className="flex items-center justify-between gap-4 border-t border-ink/[0.08] pt-5">
              <div>
                <span className="block text-xs text-ink-muted">
                  Jouw keuze, vanaf
                </span>
                <span className="font-display text-3xl text-ink">
                  {formatPrice(price)}
                </span>
              </div>
              <Link href="/bestellen" className="btn-gold">
                Maak jouw beeldje <ArrowRight size={18} />
              </Link>
            </div>
            <p className="text-xs text-ink-muted">
              Je echo upload je in de volgende stap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Group({
  label,
  value,
  children,
}: {
  label: string
  value?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-baseline justify-between">
        <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
          {label}
        </h4>
        {value && <span className="text-sm text-ink-soft">{value}</span>}
      </div>
      {children}
    </div>
  )
}

function isLight(hex: string) {
  const h = hex.replace("#", "")
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6
}
