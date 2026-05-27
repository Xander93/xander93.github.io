export type Size = {
  id: string
  label: string
  dimension: string
  price: number
  note?: string
}

export type ColorOption = {
  id: string
  label: string
  hex: string
}

export type Finish = {
  id: string
  label: string
  description: string
}

export type StatueConfig = {
  sizeId: string | null
  colorId: string | null
  finishId: string | null
  engraving: string
}

export type UploadedImage = {
  /** Object URL for in-browser preview only. Real upload arrives with the backend later. */
  previewUrl: string
  name: string
  sizeBytes: number
}
