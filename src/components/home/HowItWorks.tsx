import { Upload, Wand2, Hand, Gift } from "lucide-react"

const STEPS = [
  {
    icon: Upload,
    title: "Deel je echo",
    body: "Upload de scan veilig vanaf je telefoon of laptop. Eén foto is genoeg.",
  },
  {
    icon: Wand2,
    title: "Wij verfijnen",
    body: "Onze artiesten retoucheren de scan met de hand tot een zuivere, zachte vorm.",
  },
  {
    icon: Hand,
    title: "Met de hand gemaakt",
    body: "We sculpteren een 3D-model en printen en werken jouw beeldje stuk voor stuk af.",
  },
  {
    icon: Gift,
    title: "In fluweel bezorgd",
    body: "Verpakt als een echt erfstuk, verzekerd en getraceerd bij je thuisbezorgd.",
  },
]

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="container-luxe scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Het atelier</span>
        <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
          Van vluchtig beeld naar tastbaar erfstuk
        </h2>
        <p className="mt-4 text-ink-soft">
          Geen automatisering, geen haast. Elk beeldje gaat door de handen van
          onze makers.
        </p>
      </div>

      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="group relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ink to-plum-deep text-gold-light shadow-card ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1">
              <step.icon size={22} strokeWidth={1.6} />
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-sm text-gold">
                0{i + 1}
              </span>
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
