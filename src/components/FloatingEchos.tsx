import { clsx } from "clsx"
import { ECHOS } from "@/lib/echos"
import { PolaroidEcho } from "@/components/PolaroidEcho"

/**
 * A few ultrasound Polaroids softly drifting around the keepsake — like
 * memories pinned beside it. Decorative; sits behind the content so copy and
 * the product stay crisp. Hidden on small screens.
 */
const FLOATERS = [
  {
    src: ECHOS[1],
    caption: "19 weken",
    pos: "right-[6%] top-[1%] w-28",
    rotate: "-8deg",
    anim: "animate-float",
    delay: "0s",
    opacity: "opacity-95",
  },
  {
    src: ECHOS[3],
    caption: "ons kleintje",
    pos: "left-[39%] bottom-[5%] w-24",
    rotate: "6deg",
    anim: "animate-float-slow",
    delay: "1.3s",
    opacity: "opacity-90",
  },
  {
    src: ECHOS[4],
    caption: "12 mei",
    pos: "right-[2%] bottom-[6%] w-[6.5rem]",
    rotate: "5deg",
    anim: "animate-float",
    delay: "2.4s",
    opacity: "opacity-80",
  },
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
          className={clsx("absolute", f.pos, f.anim, f.opacity)}
          style={{ animationDelay: f.delay }}
        >
          <PolaroidEcho src={f.src} caption={f.caption} rotate={f.rotate} />
        </div>
      ))}
    </div>
  )
}
