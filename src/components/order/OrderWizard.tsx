"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { clsx } from "clsx"
import { Dropzone } from "./Dropzone"
import { Configurator } from "./Configurator"
import { findColor, findFinish, findSize } from "@/lib/products"
import { formatPrice } from "@/lib/format"
import type { StatueConfig, UploadedImage } from "@/lib/types"

type Step = "upload" | "configure" | "review"
const STEPS: { id: Step; label: string }[] = [
  { id: "upload", label: "Echo" },
  { id: "configure", label: "Samenstellen" },
  { id: "review", label: "Overzicht" },
]
const SHIPPING = 12

export function OrderWizard() {
  const [step, setStep] = useState<Step>("upload")
  const [image, setImage] = useState<UploadedImage | null>(null)
  const [config, setConfig] = useState<StatueConfig>({
    sizeId: "classic",
    colorId: "pearl",
    finishId: "satin",
    engraving: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const size = findSize(config.sizeId)
  const color = findColor(config.colorId)
  const finish = findFinish(config.finishId)
  const price = size?.price ?? 0
  const total = price + SHIPPING

  const stepIndex = STEPS.findIndex((s) => s.id === step)
  const canContinue = useMemo(() => {
    if (step === "upload") return !!image
    if (step === "configure") return !!config.sizeId && !!config.colorId && !!config.finishId
    return true
  }, [step, image, config])

  const placeOrder = async () => {
    setSubmitting(true)
    // Mock checkout — real Mollie payment plugs in here later.
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setDone(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (done) {
    return <Confirmation image={image} config={config} total={total} />
  }

  return (
    <div className="container-luxe py-10 sm:py-14">
      <Stepper current={stepIndex} />

      <div className="mt-10">
        {step === "upload" && (
          <StepShell
            title="Begin met je echo"
            subtitle="Upload de scan waarvan we jouw beeldje maken. Eén heldere foto is genoeg."
          >
            <div className="mx-auto max-w-xl">
              <Dropzone image={image} onChange={setImage} />
            </div>
          </StepShell>
        )}

        {step === "configure" && (
          <StepShell
            title="Stel jouw beeldje samen"
            subtitle="Kies formaat, kleur en afwerking. Voeg een persoonlijke gravure toe."
          >
            <Configurator
              image={image}
              config={config}
              onChange={setConfig}
              price={price}
            />
          </StepShell>
        )}

        {step === "review" && (
          <StepShell
            title="Je bestelling op een rij"
            subtitle="Controleer de details. Daarna gaan onze makers met de hand aan de slag."
          >
            <Review
              image={image}
              config={config}
              price={price}
              shipping={SHIPPING}
              total={total}
            />
          </StepShell>
        )}
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between">
        {stepIndex > 0 ? (
          <button
            onClick={() => setStep(STEPS[stepIndex - 1].id)}
            className="btn-ghost"
          >
            <ArrowLeft size={18} /> Terug
          </button>
        ) : (
          <Link href="/" className="btn-ghost">
            <ArrowLeft size={18} /> Home
          </Link>
        )}

        {step !== "review" ? (
          <button
            onClick={() => canContinue && setStep(STEPS[stepIndex + 1].id)}
            disabled={!canContinue}
            className={clsx("btn-primary", !canContinue && "cursor-not-allowed opacity-40 hover:translate-y-0")}
          >
            Volgende <ArrowRight size={18} />
          </button>
        ) : (
          <button onClick={placeOrder} disabled={submitting} className="btn-gold">
            {submitting ? "Bezig…" : `Afrekenen · ${formatPrice(total)}`}
            {!submitting && <ArrowRight size={18} />}
          </button>
        )}
      </div>

      {step === "review" && (
        <p className="mx-auto mt-4 flex max-w-3xl items-center justify-center gap-2 text-xs text-ink-muted">
          <Lock size={13} /> Veilige betaling via Mollie volgt in de volgende fase ·
          dit is een demo-afronding.
        </p>
      )}
    </div>
  )
}

/* ----------------------------------- bits ---------------------------------- */

function Stepper({ current }: { current: number }) {
  return (
    <ol className="mx-auto flex max-w-md items-center">
      {STEPS.map((s, i) => {
        const active = i === current
        const complete = i < current
        return (
          <li key={s.id} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2.5">
              <span
                className={clsx(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                  complete && "border-ink bg-ink text-ivory",
                  active && "border-gold bg-gold text-white",
                  !active && !complete && "border-ink/20 text-ink-muted"
                )}
              >
                {complete ? <Check size={15} /> : i + 1}
              </span>
              <span
                className={clsx(
                  "hidden text-sm sm:block",
                  active ? "font-medium text-ink" : "text-ink-muted"
                )}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={clsx(
                  "mx-3 h-px flex-1",
                  complete ? "bg-ink/40" : "bg-ink/12"
                )}
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="animate-fade-up">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="text-3xl font-medium text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 text-ink-soft">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}

function Review({
  image,
  config,
  price,
  shipping,
  total,
}: {
  image: UploadedImage | null
  config: StatueConfig
  price: number
  shipping: number
  total: number
}) {
  const size = findSize(config.sizeId)
  const color = findColor(config.colorId)
  const finish = findFinish(config.finishId)

  return (
    <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-[1fr_1.2fr]">
      <div className="card overflow-hidden rounded-3xl shadow-card">
        <div className="aspect-square bg-ivory-200">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.previewUrl}
              alt="Jouw echo"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-ink-muted">
              Geen foto
            </div>
          )}
        </div>
      </div>

      <div className="card flex flex-col rounded-3xl p-6 shadow-card">
        <h3 className="font-display text-2xl text-ink">Jouw 3D-echobeeldje</h3>
        <dl className="mt-4 space-y-2.5 text-sm">
          <Row label="Formaat" value={`${size?.label} · ${size?.dimension}`} />
          <Row label="Kleur" value={color?.label ?? "Geen"} />
          <Row label="Afwerking" value={finish?.label ?? "Geen"} />
          <Row
            label="Gravure"
            value={config.engraving.trim() ? `“${config.engraving}”` : "Geen"}
          />
        </dl>

        <div className="mt-5 space-y-2 border-t border-ink/[0.08] pt-4 text-sm">
          <Row label="Beeldje" value={formatPrice(price)} />
          <Row label="Verzekerd verzenden" value={formatPrice(shipping)} />
          <div className="flex items-baseline justify-between border-t border-ink/[0.08] pt-3">
            <span className="font-medium text-ink">Totaal</span>
            <span className="font-display text-2xl text-ink">
              {formatPrice(total)}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-ivory-200/70 px-4 py-3 text-xs text-ink-soft">
          <ShieldCheck size={16} className="shrink-0 text-sage" />
          Klaar in 5–6 werkdagen · vandaag besteld, morgen in productie · je foto
          blijft altijd privé.
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  )
}

function Confirmation({
  image,
  config,
  total,
}: {
  image: UploadedImage | null
  config: StatueConfig
  total: number
}) {
  const size = findSize(config.sizeId)
  const color = findColor(config.colorId)
  const finish = findFinish(config.finishId)

  return (
    <div className="container-luxe py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center animate-fade-up">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Sparkles size={28} />
        </span>
        <h1 className="mt-6 font-display text-4xl font-medium text-ink sm:text-5xl">
          Bedankt! We gaan voor je aan de slag
        </h1>
        <p className="mt-4 text-ink-soft">
          Je beeldje is in goede handen. We sturen je updates bij elke stap: van
          het verfijnen van je echo tot het moment dat het in fluweel jouw kant
          op komt.
        </p>

        <div className="card mx-auto mt-8 max-w-sm rounded-3xl p-5 text-left shadow-card">
          <div className="flex items-center gap-4">
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.previewUrl}
                alt="Jouw echo"
                className="h-16 w-16 rounded-xl object-cover"
              />
            )}
            <div className="text-sm">
              <p className="font-medium text-ink">Jouw 3D-echobeeldje</p>
              <p className="text-ink-muted">
                {size?.label} · {color?.label} · {finish?.label}
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {formatPrice(total)}
              </p>
            </div>
          </div>
        </div>

        <Link href="/" className="btn-primary mt-9">
          Terug naar home
        </Link>
        <p className="mt-4 text-xs text-ink-muted">
          Demo: echte betaling (Mollie) en orderverwerking volgen wanneer de
          infrastructuur eronder wordt gebouwd.
        </p>
      </div>
    </div>
  )
}
