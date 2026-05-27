import Link from "next/link"
import { Instagram } from "lucide-react"
import { Wordmark } from "./Wordmark"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/[0.08] bg-ivory-200/60">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Handgemaakte 3D-beeldjes van je echo. Met zorg ontworpen en met de
            hand afgewerkt in ons atelier in Amsterdam.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <span className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
              Volg ons
            </span>
            <a
              href="https://instagram.com/echoprint"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white/60 text-ink-soft transition-colors hover:border-gold/50 hover:text-ink"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://tiktok.com/@echoprint"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 bg-white/60 text-ink-soft transition-colors hover:border-gold/50 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M16.5 3c.32 2.2 1.86 3.9 4 4.2v2.86c-1.4 0-2.78-.42-4-1.12v5.74a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6.02.9.07v2.94a2.8 2.8 0 1 0 1.96 2.69V3h2.84z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
            Ontdek
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link href="/#hoe-het-werkt" className="hover:text-ink">Hoe het werkt</Link></li>
            <li><Link href="/#materialen" className="hover:text-ink">Materialen &amp; maten</Link></li>
            <li><Link href="/#faq" className="hover:text-ink">Veelgestelde vragen</Link></li>
            <li><Link href="/bestellen" className="hover:text-ink">Maak jouw beeldje</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-luxe text-ink-muted">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>hallo@echoprint.nl</li>
            <li>Ma–vr · 9:00–17:00</li>
            <li className="flex items-center gap-2 pt-1 text-ink-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
              Je foto blijft privé
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/[0.06]">
        <div className="container-luxe flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-muted sm:flex-row">
          <span>© {new Date().getFullYear()} EchoPrint. Met liefde gemaakt.</span>
          <span className="flex gap-5">
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Voorwaarden</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
