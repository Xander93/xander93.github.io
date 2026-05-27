import { Quote } from "lucide-react"

const STORIES = [
  {
    quote:
      "Ik kreeg het beeldje binnen en moest meteen huilen. Het is precies óns moment, maar dan om vast te houden.",
    name: "Anouk & Daan",
    detail: "Classic · Parelwit",
  },
  {
    quote:
      "Het mooiste cadeau dat we onze ouders konden geven. De afwerking voelt echt als een kunstwerk.",
    name: "Yasmin",
    detail: "Grand · Champagne-goud",
  },
  {
    quote:
      "Discreet, persoonlijk en met zoveel zorg gemaakt. Het staat nu op de mooiste plek in huis.",
    name: "Lotte & Sven",
    detail: "Petite · Onyx",
  },
]

export function Testimonials() {
  return (
    <section id="verhalen" className="container-luxe scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Verhalen</span>
        <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
          Bewaard door ouders zoals jij
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {STORIES.map((s) => (
          <figure key={s.name} className="card flex flex-col p-7 shadow-card">
            <Quote className="text-gold" size={26} strokeWidth={1.5} />
            <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-ink">
              “{s.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-ink">{s.name}</span>
              <span className="block text-ink-muted">{s.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
