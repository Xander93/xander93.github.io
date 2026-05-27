import type { Metadata } from "next"
import { OrderWizard } from "@/components/order/OrderWizard"

export const metadata: Metadata = {
  title: "Maak jouw beeldje — EchoPrint",
  description:
    "Upload je echo, kies formaat, kleur en afwerking en stel je handgemaakte 3D-beeldje samen.",
}

export default function BestellenPage() {
  return (
    <div className="surface-warm min-h-screen">
      <OrderWizard />
    </div>
  )
}
