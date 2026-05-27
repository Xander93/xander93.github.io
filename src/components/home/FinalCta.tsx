import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PolaroidEcho } from "@/components/PolaroidEcho"
import { ECHOS } from "@/lib/echos"

export function FinalCta() {
  return (
    <section className="container-luxe py-20 sm:py-28">
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-ink-glow px-8 py-16 text-center shadow-lift ring-1 ring-white/10 sm:px-16 sm:py-20">
        <div className="orb -right-16 -top-16 h-72 w-72 bg-gold/30" />
        <div className="orb -bottom-24 -left-10 h-72 w-72 bg-plum/40" />
        <div className="orb left-1/2 top-1/2 h-60 w-60 bg-blush/20" />

        {/* drifting memories — echoing the hero (bookend motif) */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
          <div className="absolute left-2 top-7 w-24 animate-float-slow">
            <PolaroidEcho src={ECHOS[2]} caption="ons wondertje" rotate="-10deg" />
          </div>
          <div
            className="absolute bottom-9 right-3 w-[5.5rem] animate-float"
            style={{ animationDelay: "1.6s" }}
          >
            <PolaroidEcho src={ECHOS[5]} caption="12 mei" rotate="9deg" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="text-[11px] font-medium uppercase tracking-luxe text-gold-light">
            Begin vandaag
          </span>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Een herinnering die je in je handen kunt houden
          </h2>
          <p className="mt-5 text-ivory-300/80">
            Het duurt twee minuten om te beginnen. Wij doen de rest — met de
            hand, met zorg.
          </p>
          <Link href="/bestellen" className="btn-gold mt-9">
            Maak jouw beeldje <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
