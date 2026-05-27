"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { clsx } from "clsx"
import { StatuePreview } from "@/components/StatuePreview"
import { COLORS, FINISHES, SIZES, findSize } from "@/lib/products"
import { formatPrice } from "@/lib/format"

export function Materials() {
  const [sizeId, setSizeId] = useState("classic")
  const [colorId, setColorId] = useState("gold")
  const [finishId, setFinishId] = useState("satin")

  const price = findSize(sizeId)?.price ?? 0

  return (
    <section
      id="materialen"
      className="scroll-mt-24 border-y border-ink/[0.06] bg-ivory-200/50 py-20 sm:py-28"
    >
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
        {/* live preview */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-24">
          <div className="relative mx-auto max-w-sm">
            <div className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-full bg-palantir opacity-70 blur-2xl" />
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-glow">
              <StatuePreview colorId={colorId} finishId={finishId} />
            </div>
          </div>
          <div className="mx-auto mt-4 flex max-w-sm items-baseline justify-between px-1">
            <span className="text-sm text-ink-muted">Jouw keuze, vanaf</span>
            <span className="font-display text-3xl text-ink">
              {formatPrice(price)}
            </span>
          </div>
        </div>

        {/* live customiser */}
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Stel samen</span>
          <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
            Afgewerkt zoals jij het wilt
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Speel gerust: kies een formaat, een kleur en een afwerking en zie je
            beeldje meteen veranderen.
          </p>

          <div className="mt-8 space-y-7">
            {/* size */}
            <Group label="Formaat">
              <div className="grid gap-2.5 sm:grid-cols-3">
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
                      <span className="block font-medium text-ink">{s.label}</span>
                      <span className="block text-xs text-ink-muted">
                        {s.dimension}
                      </span>
                      <span className="mt-1 block font-display text-ink">
                        {formatPrice(s.price)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </Group>

            {/* color */}
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
                        "relative h-11 w-11 rounded-full border shadow-inner transition-transform",
                        active
                          ? "scale-110 border-gold ring-2 ring-gold/40"
                          : "border-ink/15 hover:scale-105"
                      )}
                      style={{ background: c.hex }}
                    >
                      {active && (
                        <Check
                          size={16}
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

            {/* finish */}
            <Group
              label="Afwerking"
              value={FINISHES.find((f) => f.id === finishId)?.description}
            >
              <div className="flex flex-wrap gap-2.5">
                {FINISHES.map((f) => {
                  const active = finishId === f.id
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFinishId(f.id)}
                      className={clsx(
                        "rounded-full border px-5 py-2 text-sm transition-all",
                        active
                          ? "border-ink bg-ink text-ivory"
                          : "border-ink/15 bg-white/60 text-ink-soft hover:border-ink/30"
                      )}
                    >
                      {f.label}
                    </button>
                  )
                })}
              </div>
            </Group>
          </div>

          <Link href="/bestellen" className="btn-gold mt-9">
            Maak jouw beeldje <ArrowRight size={18} />
          </Link>
          <p className="mt-3 text-xs text-ink-muted">
            Je echo upload je in de volgende stap.
          </p>
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
      <div className="mb-3 flex items-baseline justify-between">
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
