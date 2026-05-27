import { ArrowRight, Hand, Sparkles } from "lucide-react"
import { StatuePreview } from "@/components/StatuePreview"
import { ECHOS, HERO_ECHO } from "@/lib/echos"

export function Transformation() {
  return (
    <section className="scroll-mt-24 border-y border-ink/[0.06] bg-ivory-200/45 py-20 sm:py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">
          <Sparkles size={13} /> Zo werkt het
        </span>
        <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
          Van jouw echo naar jouw beeldje
        </h2>
        <p className="mt-4 text-ink-soft">
          We werken altijd vanaf jóuw scan — die ene foto waarop je voor het
          eerst je kindje zag.
        </p>
      </div>

      {/* echo  →  beeldje */}
      <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <Frame label="Jouw echo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_ECHO}
            alt="3D-echo van een baby"
            className="h-full w-full object-cover"
          />
        </Frame>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/55 bg-white/45 px-5 py-4 text-center shadow-glass backdrop-blur-xl">
            <Hand size={20} className="text-violet" strokeWidth={1.6} />
            <span className="text-xs font-medium text-ink">
              In 3D gebracht
              <br />
              &amp; met de hand afgewerkt
            </span>
            <ArrowRight className="text-gold lg:block" size={20} />
          </div>
        </div>

        <Frame label="Jouw beeldje" glow>
          <StatuePreview colorId="gold" finishId="gloss" />
        </Frame>
      </div>

      {/* reassurance — imperfect photos welcome */}
      <div className="mt-16 rounded-3xl border border-white/55 bg-white/40 p-7 shadow-glass backdrop-blur-xl sm:p-9">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="eyebrow">Geen zorgen</span>
            <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Geen perfecte foto nodig
            </h3>
            <p className="mt-3 text-ink-soft">
              Wazig, gedraaid, donker of met ziekenhuistekst erop? Elke echo is
              welkom. Onze krachtige techniek analyseert je foto tot op
              micro-niveau en haalt er een zuivere, zachte vorm uit — twijfel je,
              stuur er gerust meerdere.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
            {ECHOS.map((src) => (
              <div
                key={src}
                className="aspect-square overflow-hidden rounded-xl border border-white/40 bg-night shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Voorbeeld van een ingestuurde echo"
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

function Frame({
  label,
  glow,
  children,
}: {
  label: string
  glow?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      {glow && (
        <div className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-full bg-palantir opacity-70 blur-2xl" />
      )}
      <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow">
        {children}
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-night/55 px-3.5 py-1.5 text-xs font-medium text-ivory backdrop-blur">
          {label}
        </span>
      </div>
    </div>
  )
}
