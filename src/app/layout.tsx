import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EchoPrint — Een tastbare herinnering aan je eerste echo",
  description:
    "Van je echo naar een met de hand gemaakt 3D-beeldje. Een blijvende herinnering aan het moment waarop alles veranderde.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
