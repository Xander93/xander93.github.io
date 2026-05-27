"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { clsx } from "clsx"
import { Wordmark } from "./Wordmark"

const NAV = [
  { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
  { label: "Materialen", href: "/#materialen" },
  { label: "Verhalen", href: "/#verhalen" },
  { label: "Vragen", href: "/#faq" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/[0.06] bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-luxe flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="EchoPrint home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/bestellen" className="btn-primary">
            Maak jouw beeldje
          </Link>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/[0.06] bg-ivory/95 backdrop-blur-md md:hidden">
          <nav className="container-luxe flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-ink-soft hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/bestellen"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Maak jouw beeldje
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
