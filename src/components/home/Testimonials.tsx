import { Quote, Star } from "lucide-react"

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
  {
    quote:
      "Onze echo was niet eens superscherp, maar het beeldje is verbluffend mooi geworden.",
    name: "Sanne",
    detail: "Classic · Blush",
  },
  {
    quote:
      "Sneller in huis dan verwacht, en die hoogglans is echt prachtig om te zien.",
    name: "Jeroen & Iris",
    detail: "Classic · Champagne-goud",
  },
  {
    quote:
      "Ik betrap me erop dat ik er steeds even naar kijk. Zo'n bijzonder plekje in huis.",
    name: "Fleur",
    detail: "Petite · Parelwit",
  },
]

export function Testimonials() {
  return (
    <section id="verhalen" className="scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Verhalen</span>
          <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
            Bewaard door ouders zoals jij
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-ink-soft">
            <span className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            4,9 gemiddeld
          </div>
        </div>
      </div>

      {/* auto-scrolling marquee, pauses on hover */}
      <div className="group relative mt-12 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee pl-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...STORIES, ...STORIES].map((s, i) => (
            <figure
              key={i}
              className="card flex w-[300px] shrink-0 flex-col p-6 shadow-card sm:w-[360px]"
            >
              <Quote className="text-gold" size={24} strokeWidth={1.5} />
              <blockquote className="mt-3 flex-1 font-display text-lg leading-relaxed text-ink sm:text-xl">
                “{s.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-ink">{s.name}</span>
                <span className="block text-ink-muted">{s.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
