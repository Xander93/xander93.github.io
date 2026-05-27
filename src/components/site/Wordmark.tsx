export function Wordmark({
  className = "",
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[0.85rem] shadow-glow">
        <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2C281" />
              <stop offset="55%" stopColor="#C8A15A" />
              <stop offset="100%" stopColor="#D79E91" />
            </linearGradient>
          </defs>
          <rect width="36" height="36" rx="11" fill="url(#wm-g)" />
          {/* soft inner highlight */}
          <rect width="36" height="17" rx="11" fill="#ffffff" opacity="0.18" />
          {/* heartbeat / echo pulse */}
          <path
            d="M6 19h5l2.4-6 3.2 11 2.6-7 1.7 2h5.1"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
