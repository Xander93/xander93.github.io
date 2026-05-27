export function Wordmark({
  className = "",
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full shadow-glow-gold">
        <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F1CF96" />
              <stop offset="52%" stopColor="#E0AE68" />
              <stop offset="100%" stopColor="#E9C7BE" />
            </linearGradient>
          </defs>
          <circle cx="18" cy="18" r="18" fill="url(#wm-g)" />
          {/* soft top sheen */}
          <ellipse cx="18" cy="11" rx="16" ry="9" fill="#ffffff" opacity="0.16" />
          {/* a sweet, soft heart */}
          <path
            d="M18 26.6C9.6 20.7 6.1 16.3 6.1 12.3 6.1 9.2 8.6 6.8 11.6 6.8 14 6.8 16 8.2 18 10.8 20 8.2 22 6.8 24.4 6.8 27.4 6.8 29.9 9.2 29.9 12.3 29.9 16.3 26.4 20.7 18 26.6Z"
            fill="#ffffff"
          />
          {/* tiny highlight for a soft, glossy feel */}
          <ellipse
            cx="13"
            cy="12"
            rx="2.6"
            ry="1.7"
            fill="#ffffff"
            opacity="0.55"
            transform="rotate(-28 13 12)"
          />
        </svg>
      </span>
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
