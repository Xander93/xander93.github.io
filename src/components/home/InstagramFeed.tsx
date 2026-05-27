import { Instagram, Heart } from "lucide-react"

// Placeholder tiles: heavily blurred so you sense "content is coming" without
// faking specific posts. Swap for real customer photos later.
const TILES = [
  "/statue.png",
  "/echos/echo3.jpg",
  "/echos/echo1.jpg",
  "/echos/echo5.jpg",
  "/statue.png",
  "/echos/echo4.jpg",
]

export function InstagramFeed() {
  return (
    <section className="scroll-mt-24 border-y border-ink/[0.06] bg-ivory-200/50 py-16 sm:py-24">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Instagram size={13} /> @echoprint
          </span>
          <h2 className="mt-4 text-3xl font-medium text-ink sm:text-5xl">
            Binnenkort: gedeeld door ouders
          </h2>
          <p className="mt-3 text-ink-soft">
            De eerste beeldjes zijn onderweg. Volg ons voor échte foto&apos;s van
            ouders, en deel straks die van jou met{" "}
            <span className="font-medium text-ink">#echoprint</span>.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TILES.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/50 bg-night shadow-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden
                className="h-full w-full scale-125 object-cover opacity-70 blur-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-night/40 to-transparent">
                <span className="flex items-center gap-1 rounded-full border border-white/25 bg-night/40 px-2.5 py-1 text-[10px] font-medium text-ivory/90 backdrop-blur">
                  <Heart
                    size={10}
                    className="text-gold-light"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  binnenkort
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://instagram.com/echoprint"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Instagram size={18} /> Volg op Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
