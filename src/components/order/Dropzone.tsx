"use client"

import { useRef, useState } from "react"
import { UploadCloud, ImageIcon, RefreshCw, Trash2, Lock } from "lucide-react"
import { clsx } from "clsx"
import type { UploadedImage } from "@/lib/types"
import { formatBytes } from "@/lib/format"
import { ECHOS } from "@/lib/echos"

const MAX_BYTES = 15 * 1024 * 1024

export function Dropzone({
  image,
  onChange,
}: {
  image: UploadedImage | null
  onChange: (img: UploadedImage | null) => void
}) {
  const [drag, setDrag] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file?: File | null) => {
    setError(null)
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setError("Kies een afbeelding: JPG, PNG of WEBP.")
      return
    }
    if (file.size > MAX_BYTES) {
      setError("De afbeelding is te groot (maximaal 15 MB).")
      return
    }
    if (image?.previewUrl) URL.revokeObjectURL(image.previewUrl)
    onChange({
      previewUrl: URL.createObjectURL(file),
      name: file.name,
      sizeBytes: file.size,
    })
  }

  const remove = () => {
    if (image?.previewUrl) URL.revokeObjectURL(image.previewUrl)
    onChange(null)
    setError(null)
  }

  if (image) {
    return (
      <div className="card overflow-hidden p-4 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-40 w-full overflow-hidden rounded-2xl bg-ivory-200 sm:h-28 sm:w-28">
            {/* blob preview — eslint-disable next-line @next/next/no-img-element */}
            <img
              src={image.previewUrl}
              alt="Voorbeeld van je echo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-ink">{image.name}</p>
            <p className="text-sm text-ink-muted">{formatBytes(image.sizeBytes)}</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => inputRef.current?.click()}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-sm text-ink-soft hover:border-ink/30"
              >
                <RefreshCw size={14} /> Vervang
              </button>
              <button
                onClick={remove}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm text-ink-muted hover:text-ink"
              >
                <Trash2 size={14} /> Verwijder
              </button>
            </div>
          </div>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDrag(true)
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDrag(false)
          handleFile(e.dataTransfer.files?.[0])
        }}
        className={clsx(
          "flex w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-14 text-center transition-all duration-300",
          drag
            ? "border-gold bg-gold/[0.06]"
            : "border-ink/15 bg-white/50 hover:border-gold/60 hover:bg-white"
        )}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-ivory">
          {drag ? <ImageIcon size={24} /> : <UploadCloud size={24} />}
        </span>
        <span className="mt-5 text-lg font-medium text-ink">
          Sleep je echo hierheen
        </span>
        <span className="mt-1 text-sm text-ink-soft">
          of <span className="text-gold underline underline-offset-2">blader op je apparaat</span>
        </span>
        <span className="mt-3 text-xs text-ink-muted">
          JPG, PNG of WEBP · tot 15 MB
        </span>
      </button>

      {error && <p className="mt-3 text-sm text-red-700">{error}</p>}

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-muted">
        <Lock size={13} /> Je foto wordt privé verwerkt en nooit gedeeld.
      </p>

      {/* reassurance: imperfect scans are welcome */}
      <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/50 bg-white/40 p-4 backdrop-blur">
        <p className="text-xs text-ink-soft">
          Ook wazige of gedraaide echo&apos;s werken prima, zoals deze:
        </p>
        <div className="flex gap-2">
          {ECHOS.slice(0, 5).map((src) => (
            <span
              key={src}
              className="h-12 w-12 overflow-hidden rounded-lg border border-white/40 bg-night"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Voorbeeld-echo" className="h-full w-full object-cover" />
            </span>
          ))}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  )
}
