import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { StatuePreview } from "@/components/StatuePreview"

export function Hero() {
  return (
    <section className="surface-warm grain relative overflow-hidden">
      {/* floating glow orbs for depth */}
      <div className="orb -left-24 top-10 h-80 w-80 animate-float bg-gold/30" />
      <div className="orb right-0 top-40 h-72 w-72 animate-float-slow bg-blush/40" />
      <div className="orb bottom-0 left-1/3 h-72 w-72 bg-plum/15" />

      <div className="container-luxe relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-gold to-blush-deep" />
            Handgemaakte keepsakes
          </span>
          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tightish text-ink sm:text-6xl">
            Houd het allereerste{" "}
            <span className="text-gradient">moment</span>
            <br />
            voor altijd vast.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Van je echo naar een met de hand afgewerkt 3D-beeldje. Een stil,
            tijdloos eerbetoon aan het moment waarop jullie wereld veranderde.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/bestellen" className="btn-gold">
              Maak jouw beeldje <ArrowRight size={18} />
            </Link>
            <Link href="/#hoe-het-werkt" className="btn-ghost">
              Hoe het werkt
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/60 bg-white/40 px-4 py-3 backdrop-blur">
            <div className="flex -space-x-2">
              {["#E9C7BE", "#C8A15A", "#9FA88F", "#D79E91"].map((c) => (
                <span
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-ivory"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="text-sm text-ink-soft">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span>Geliefd bij 1.200+ kersverse ouders</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="relative mx-auto max-w-sm animate-float-slow">
            {/* palantír glow emanating from the keepsake */}
            <div className="pointer-events-none absolute -inset-12 animate-pulse-glow rounded-full bg-palantir opacity-90 blur-2xl" />
            <div className="pointer-events-none absolute -inset-4 animate-spin-slow rounded-full bg-aurora opacity-[0.18] blur-3xl" />
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-glow">
              <StatuePreview colorId="gold" finishId="gloss" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-night/50 px-4 py-2 text-xs font-medium tracking-wide text-ivory backdrop-blur">
                Jouw echo · in 3D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
