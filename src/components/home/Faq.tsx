import { Plus } from "lucide-react"

const FAQS = [
  {
    q: "Welke echo-foto werkt het best?",
    a: "Een heldere 2D- of 3D-echo waarop het profiel goed zichtbaar is. Twijfel je? Upload gerust meerdere — wij kiezen samen met jou de mooiste.",
  },
  {
    q: "Is mijn foto privé?",
    a: "Altijd. Je beeld wordt versleuteld en privé opgeslagen, alleen gebruikt om jouw beeldje te maken en nooit gedeeld of openbaar getoond.",
  },
  {
    q: "Hoe lang duurt het?",
    a: "Omdat alles met de hand gebeurt, maken we je beeldje in 2 tot 3 weken. Je ontvangt onderweg updates over elke productiestap.",
  },
  {
    q: "Kan ik een naam of datum graveren?",
    a: "Ja. Voeg een korte tekst toe — een naam, geboortedatum of een woord dat blijft — subtiel gegraveerd in de voet.",
  },
  {
    q: "Waarvan wordt het beeldje gemaakt?",
    a: "Van een hoogwaardige, matte composiet die warm aanvoelt in de hand. Beschikbaar in vier kleuren en drie afwerkingen.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-ink/[0.06] bg-ivory-200/50 py-20 sm:py-28"
    >
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Goed om te weten</span>
          <h2 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">
            Veelgestelde vragen
          </h2>
          <p className="mt-4 max-w-sm text-ink-soft">
            Nog een vraag? Mail ons gerust op{" "}
            <span className="text-ink">hallo@echoprint.nl</span> — we denken
            graag met je mee.
          </p>
        </div>

        <div className="divide-y divide-ink/[0.08]">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink">
                {item.q}
                <Plus
                  size={20}
                  className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-xl text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
