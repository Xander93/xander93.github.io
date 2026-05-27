const HEART =
  "M16 28.8C6.9 22.2 2.8 17.4 2.8 11.9 2.8 8 5.7 5 9.4 5 11.8 5 14 6.3 16 8.7 18 6.3 20.2 5 22.6 5 26.3 5 29.2 8 29.2 11.9 29.2 17.4 25.1 22.2 16 28.8Z"

export function Wordmark({
  className = "",
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 30"
        className="h-9 w-9 drop-shadow-[0_5px_14px_rgba(224,174,104,0.5)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1CF96" />
            <stop offset="52%" stopColor="#E0AE68" />
            <stop offset="100%" stopColor="#E9C7BE" />
          </linearGradient>
          {/* cut a smaller heart out of the big heart */}
          <mask id="wm-cut">
            <rect x="0" y="0" width="32" height="30" fill="#fff" />
            <path
              d={HEART}
              transform="translate(16 13) scale(0.4) translate(-16 -13)"
              fill="#000"
            />
          </mask>
        </defs>
        <path d={HEART} fill="url(#wm-g)" mask="url(#wm-cut)" />
      </svg>
      <span
        className={`font-display text-[20px] font-semibold leading-none tracking-tightish ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Echo<span className="text-gradient">Print</span>
      </span>
    </span>
  )
}
