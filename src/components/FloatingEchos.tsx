import { ECHOS } from "@/lib/echos"

/**
 * Ambient layer of softly drifting ultrasound photos — "herinneringen die
 * rondzweven". Decorative only: placed in the margins / gaps (never behind the
 * headline), blurred and semi-transparent so copy stays crisp. Hidden on small
 * screens to avoid clutter.
 */
const FLOATERS: { src: string; cls: string }[] = [
  { src: ECHOS[1], cls: "right-[-2rem] top-[9%] h-20 w-20 rotate-6 opacity-60 blur-[2px] animate-float" },
  { src: ECHOS[2], cls: "left-[41%] top-[-1.5rem] h-16 w-16 -rotate-6 opacity-50 blur-[2.5px] animate-float-slow" },
  { src: ECHOS[3], cls: "right-[3%] bottom-[-1.75rem] h-24 w-24 -rotate-3 opacity-60 blur-[1.5px] animate-float-slow" },
  { src: ECHOS[4], cls: "left-[37%] bottom-[6%] h-[4.5rem] w-[4.5rem] rotate-[9deg] opacity-45 blur-[3px] animate-float" },
]

export function FloatingEchos() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
      aria-hidden
    >
      {FLOATERS.map((f, i) => (
        <div
          key={i}
          className={`absolute overflow-hidden rounded-2xl border border-white/25 bg-night shadow-card ${f.cls}`}
          style={{ animationDelay: `${i * 1.4}s` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={f.src} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
