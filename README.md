# EchoPrint — frontend

Een premium, emotionele frontend voor een webshop die **handgemaakte 3D-beeldjes van een echo** verkoopt. Dit is bewust een **standalone frontend met mock-data**: het draait direct, zonder backend. De hele klant-flow zit erin, met een nette datalaag zodat we er later Medusa + Mollie achter kunnen bouwen.

## Stack
- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** (eigen luxe-thema)
- **lucide-react** (iconen)
- Lettertypes via `next/font` (Cormorant Garamond + Inter)

## Draaien
```bash
npm install
npm run dev      # http://localhost:3000
```

## Wat er staat
- **Landingspagina** (`/`): hero, "hoe het werkt", materialen & maten, verhalen, FAQ, CTA. Volledig responsive.
- **Bestel-flow** (`/bestellen`): een wizard in 3 stappen
  1. **Echo uploaden** — drag-and-drop + bladeren, met preview en validatie (type/grootte). Privacy-geruststelling.
  2. **Samenstellen** — live preview van het beeldje + maat / kleur / afwerking / gravure, met live prijs.
  3. **Overzicht** — samenvatting + (mock) afrekenen → bevestigingsscherm.

## Structuur
```
src/
  app/
    layout.tsx            # fonts, header, footer
    page.tsx              # landingspagina
    bestellen/page.tsx    # bestel-flow
    globals.css           # thema-tokens, knoppen, kaarten
  components/
    site/                 # Header, Footer, Wordmark
    home/                 # Hero, HowItWorks, Materials, Testimonials, Faq, FinalCta
    order/                # OrderWizard, Dropzone, Configurator
    StatuePreview.tsx     # kleur/afwerking-reagerende SVG van het beeldje
  lib/
    products.ts           # ← mock-catalogus (maten, kleuren, afwerkingen, prijzen)
    types.ts, format.ts
```

## Later infra erachter bouwen
De UI praat nergens direct met een API; vervang straks op drie plekken:

1. **Productdata** → `src/lib/products.ts`
   Nu hardcoded. Vervang `SIZES`/`COLORS`/`FINISHES` door een fetch naar Medusa (product + varianten + metadata).

2. **Afbeelding-upload** → `src/components/order/Dropzone.tsx`
   Nu alleen een lokale `URL.createObjectURL`-preview. Stuur het bestand straks naar een privé upload-endpoint en bewaar de geretourneerde `upload_id`.

3. **Afrekenen** → `OrderWizard.placeOrder()` in `src/components/order/OrderWizard.tsx`
   Nu een gesimuleerde `setTimeout`. Hier komt: line item + opties (kleur/afwerking/gravure/`upload_id`) naar de cart, en betaling via **Mollie**.

> Kleur/afwerking/gravure zijn bedoeld als **line-item metadata** (geen aparte varianten), zodat ze meereizen naar de order. Maat is de prijsbepalende variant.

## Notities
- Alle teksten zijn in het Nederlands; eenvoudig aan te passen.
- Beeldmateriaal is voorlopig een SVG-illustratie (`StatuePreview`) i.p.v. productfoto's.
