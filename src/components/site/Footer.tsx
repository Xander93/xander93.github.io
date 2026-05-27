import Link from "next/link"
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
