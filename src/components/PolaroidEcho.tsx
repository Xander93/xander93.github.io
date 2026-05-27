import { clsx } from "clsx"

/** A single ultrasound photo styled as a Polaroid: white frame, thick bottom
 * edge and a handwritten caption. */
export function PolaroidEcho({
  src,
  caption,
  rotate,
  className,
}: {
  src: string
  caption?: string
  rotate?: string
  className?: string
}) {
  return (
    <figure
      className={clsx(
        "relative rounded-[8px] bg-white p-2 pb-7 shadow-lift ring-1 ring-black/5",
        className
      )}
      style={rotate ? { transform: `rotate(${rotate})` } : undefined}
    >
      <div className="aspect-square w-full overflow-hidden rounded-[3px] bg-night">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-1.5 text-center font-hand text-[17px] leading-none text-ink/65">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
