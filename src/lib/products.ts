import type { ColorOption, Finish, Size } from "./types"

/**
 * Mock catalogue. This is the single place the storefront reads product options
 * from — swap it for a Medusa/API call later without touching the UI.
 */

export const SIZES: Size[] = [
  {
    id: "petite",
    label: "Petite",
    dimension: "10 cm",
    price: 149,
    note: "Subtiel op een plank of nachtkastje",
  },
  {
    id: "classic",
    label: "Classic",
    dimension: "15 cm",
    price: 229,
    note: "Onze meest gekozen maat",
  },
  {
    id: "grand",
    label: "Grand",
    dimension: "20 cm",
    price: 349,
    note: "Een ingelijst middelpunt",
  },
]

export const COLORS: ColorOption[] = [
  { id: "pearl", label: "Parelwit", hex: "#F1ECE1" },
  { id: "onyx", label: "Onyx", hex: "#2B2B2E" },
  { id: "gold", label: "Champagne-goud", hex: "#C9A86A" },
  { id: "blush", label: "Blush", hex: "#E6C7C2" },
]

export const FINISHES: Finish[] = [
  { id: "matte", label: "Mat", description: "Zacht en ingetogen" },
  { id: "satin", label: "Satijn", description: "Subtiele, warme glans" },
  { id: "gloss", label: "Hoogglans", description: "Luxe en spiegelend" },
]

export const ENGRAVING_MAX = 24
export const CURRENCY = "EUR"

export function findSize(id: string | null) {
  return SIZES.find((s) => s.id === id) ?? null
}
export function findColor(id: string | null) {
  return COLORS.find((c) => c.id === id) ?? null
}
export function findFinish(id: string | null) {
  return FINISHES.find((f) => f.id === id) ?? null
}
