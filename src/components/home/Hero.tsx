import Link from "next/link"
import { ArrowRight, Star, Clock } from "lucide-react"
import { StatuePreview } from "@/components/StatuePreview"
import { FloatingEchos } from "@/components/FloatingEchos"
import { HERO_ECHO } from "@/lib/echos"

export function Hero() {
  return (
    <section className="surface-warm grain relative overflow-hidden">
      {/* floating glow orbs for depth */}
      <div className="orb -left-24 top-10 h-80 w-80 animate-float bg-gold/30" />
      <div className="orb right-0 top-40 h-72 w-72 animate-float-slow bg-blush/40" />
      <div className="orb bottom-0 left-1/3 h-72 w-72 bg-plum/15" />

      {/* softly drifting memories */}
      <FloatingEchos />

      <div className="container-luxe relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-gold to-blush-deep" />
            Handgemaakte 3D-beeldjes van je echo
          </span>
          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tightish text-ink sm:text-6xl">
            Houd het allereerste{" "}
            <span className="text-gradient">moment</span>
            <br />
            voor altijd vast.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Van je echo naar een met de hand gemaakt 3D-beeldje. Een stille,
            blijvende herinnering aan het moment waarop jullie wereld
            veranderde.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/bestellen" className="btn-gold">
              Maak jouw beeldje <ArrowRight size={18} />
            </Link>
            <Link href="/#hoe-het-werkt" className="btn-ghost">
              Hoe het werkt
            </Link>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
            <Clock size={15} className="text-gold-dark" />
            Klaar in 5–6 werkdagen · vandaag besteld, morgen in productie
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/60 bg-white/40 px-4 py-3 backdrop-blur">
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
              {/* the source scan, tucked into the corner */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-white/15 bg-night/55 p-1.5 pr-3 backdrop-blur">
                <span className="h-11 w-11 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={HERO_ECHO} alt="Jouw 3D-echo" className="h-full w-full object-cover" />
                </span>
                <span className="text-[11px] font-medium leading-tight text-ivory/90">
                  jouw echo
                </span>
              </div>
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-night/50 px-4 py-2 text-xs font-medium tracking-wide text-ivory backdrop-blur">
                Met de hand · in 3D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
