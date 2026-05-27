import { Zap } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-ivory">
      <div className="container-luxe flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 py-2 text-center text-[12.5px] font-medium">
        <span className="inline-flex items-center gap-1.5 font-semibold text-gold-light">
          <Zap size={13} fill="currentColor" strokeWidth={0} />
          Vandaag besteld, morgen in productie
        </span>
        <span className="hidden opacity-30 sm:inline">•</span>
        <span className="hidden text-ivory/90 sm:inline">Klaar in 5–6 werkdagen</span>
        <span className="hidden opacity-30 sm:inline">•</span>
        <span className="text-ivory/90">Gratis verzekerde verzending</span>
      </div>
    </div>
  )
}
