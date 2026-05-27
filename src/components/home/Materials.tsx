import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { StatuePreview } from "@/components/StatuePreview"
import { COLORS, FINISHES, SIZES } from "@/lib/products"
import { formatPrice } from "@/lib/format"

export function Materials() {
  return (
    <section
      id="materialen"
      className="scroll-mt-24 border-y border-ink/[0.06] bg-ivory-200/50 py-20 sm:py-28"
    >
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-full bg-palantir opacity-70 blur-2xl" />
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-glow">
              <StatuePreview colorId="gold" finishId="gloss" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Materialen &amp; maten</span>
          <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
            Afgewerkt zoals jij het wilt
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Kies een formaat dat bij je plek past, een kleur die je raakt en een
            afwerking die spreekt. Voeg een naam of datum toe in subtiele
            gravure.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
                Kleuren
              </h4>
              <div className="mt-3 flex flex-wrap gap-3">
                {COLORS.map((c) => (
                  <span key={c.id} className="flex items-center gap-2 text-sm text-ink-soft">
                    <span
                      className="h-7 w-7 rounded-full border border-ink/10 shadow-inner"
                      style={{ background: c.hex }}
                    />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
                Afwerkingen
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {FINISHES.map((f) => (
                  <span
                    key={f.id}
                    className="rounded-full border border-ink/12 bg-white/70 px-4 py-1.5 text-sm text-ink-soft"
                  >
                    {f.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
                Maten
              </h4>
              <div className="mt-3 divide-y divide-ink/[0.07]">
                {SIZES.map((s) => (
                  <div key={s.id} className="flex items-baseline justify-between py-2.5">
                    <span className="text-ink">
                      {s.label}{" "}
                      <span className="text-ink-muted">· {s.dimension}</span>
                    </span>
                    <span className="font-display text-lg text-ink">
                      vanaf {formatPrice(s.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/bestellen" className="btn-primary mt-9">
            Stel jouw beeldje samen <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
