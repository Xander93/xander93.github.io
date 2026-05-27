"use client"

import { clsx } from "clsx"
import { Check, Sparkles } from "lucide-react"
import { StatuePreview } from "@/components/StatuePreview"
import {
  COLORS,
  ENGRAVING_MAX,
  FINISHES,
  SIZES,
  findColor,
  findFinish,
} from "@/lib/products"
import { formatPrice } from "@/lib/format"
import type { StatueConfig, UploadedImage } from "@/lib/types"

export function Configurator({
  image,
  config,
  onChange,
  price,
}: {
  image: UploadedImage | null
  config: StatueConfig
  onChange: (next: StatueConfig) => void
  price: number
}) {
  const color = findColor(config.colorId)
  const finish = findFinish(config.finishId)

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Live preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-full bg-palantir opacity-70 blur-2xl" />
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow">
            <StatuePreview
              colorId={config.colorId ?? "gold"}
              finishId={config.finishId ?? "satin"}
              engraving={config.engraving}
            />
            {image && (
              <div className="absolute left-4 top-4 h-16 w-16 overflow-hidden rounded-xl border border-white/30 shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.previewUrl}
                  alt="Jouw echo"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between px-1">
          <span className="text-sm text-ink-muted">Vanaf-prijs</span>
          <span className="font-display text-3xl text-ink">
            {formatPrice(price)}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-9">
        {/* Size */}
        <Field label="Formaat">
          <div className="grid gap-3 sm:grid-cols-3">
            {SIZES.map((s) => {
              const active = config.sizeId === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => onChange({ ...config, sizeId: s.id })}
                  className={clsx(
                    "rounded-2xl border p-4 text-left transition-all",
                    active
                      ? "border-gold bg-gold/[0.06] shadow-card"
                      : "border-ink/12 bg-white/60 hover:border-ink/25"
                  )}
                >
                  <span className="block font-medium text-ink">{s.label}</span>
                  <span className="block text-sm text-ink-muted">
                    {s.dimension}
                  </span>
                  <span className="mt-2 block font-display text-lg text-ink">
                    {formatPrice(s.price)}
                  </span>
                </button>
              )
            })}
          </div>
        </Field>

        {/* Color */}
        <Field label="Kleur" value={color?.label}>
          <div className="flex flex-wrap gap-3">
            {COLORS.map((c) => {
              const active = config.colorId === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => onChange({ ...config, colorId: c.id })}
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
        </Field>

        {/* Finish — fixed high gloss (vapor-smoothed), shown not chosen */}
        <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/50 px-4 py-3 text-sm text-ink-soft">
          <Sparkles size={15} className="shrink-0 text-gold-dark" />
          Afwerking: handgepolijste{" "}
          <span className="font-medium text-ink">hoogglans</span>
        </div>

        {/* Engraving */}
        <Field label="Gravure" optional>
          <input
            type="text"
            maxLength={ENGRAVING_MAX}
            value={config.engraving}
            onChange={(e) =>
              onChange({ ...config, engraving: e.target.value })
            }
            placeholder="bijv. Liv · 12 mei 2026"
            className="w-full rounded-2xl border border-ink/15 bg-white/70 px-4 py-3 text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <div className="mt-1.5 flex justify-between text-xs text-ink-muted">
            <span>Subtiel gegraveerd in de voet</span>
            <span>
              {config.engraving.length}/{ENGRAVING_MAX}
            </span>
          </div>
        </Field>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  optional,
  children,
}: {
  label: string
  value?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
          {label}
          {optional && <span className="ml-2 normal-case tracking-normal text-ink-muted/70">optioneel</span>}
        </h3>
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
