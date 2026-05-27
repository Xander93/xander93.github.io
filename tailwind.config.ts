import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // "ivory" = our canvas. Tinted twilight mist (not stark white) + a light
        // tone that still reads as light text on dark sections.
        ivory: {
          DEFAULT: "#ECE7F2",
          50: "#F3EFF7",
          100: "#ECE7F2",
          200: "#DED6EA",
          300: "#CCC1DE",
        },
        ink: {
          DEFAULT: "#171226",
          soft: "#433B59",
          muted: "#867C97",
        },
        // deep atmospheric "night" for dramatic sections (palantír depths)
        night: {
          DEFAULT: "#140F23",
          800: "#1C1532",
          700: "#271B45",
        },
        // echo-screen cool glow
        teal: {
          DEFAULT: "#3DBEB6",
          light: "#7FE3DB",
          dark: "#229089",
        },
        // palantír violet/indigo
        violet: {
          DEFAULT: "#7C6CF2",
          light: "#AA9CFF",
          dark: "#5340C6",
        },
        plum: { DEFAULT: "#6E5AC4", deep: "#2C2148" },
        // warm, inviting, emotional accent (sonogram amber / candlelight)
        gold: { DEFAULT: "#E0AE68", light: "#F1CF96", dark: "#B5854A" },
        blush: { DEFAULT: "#E9C7BE", deep: "#D79E91" },
        sage: "#9FA88F",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      letterSpacing: { luxe: "0.24em", tightish: "-0.02em" },
      backgroundImage: {
        "gold-rose":
          "linear-gradient(120deg, #F1CF96 0%, #E0AE68 40%, #D79E91 100%)",
        aurora:
          "linear-gradient(120deg, #7FE3DB 0%, #7C6CF2 55%, #AA9CFF 100%)",
        "aurora-warm":
          "linear-gradient(115deg, #3DBEB6 0%, #7C6CF2 45%, #E0AE68 100%)",
        "ink-glow":
          "radial-gradient(120% 130% at 50% -10%, #271B45 0%, #140F23 62%)",
        palantir:
          "radial-gradient(circle at 50% 42%, rgba(170,156,255,0.95) 0%, rgba(124,108,242,0.7) 24%, rgba(61,190,182,0.45) 48%, rgba(20,15,35,0) 72%)",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.55) inset, 0 24px 60px -28px rgba(23,18,38,0.5)",
        glow: "0 30px 80px -30px rgba(124,108,242,0.65)",
        "glow-teal": "0 30px 80px -30px rgba(61,190,182,0.6)",
        "glow-gold": "0 26px 70px -28px rgba(224,174,104,0.6)",
        lift: "0 44px 100px -42px rgba(10,7,22,0.7)",
        soft: "0 28px 70px -30px rgba(23,18,38,0.35)",
        card: "0 18px 52px -26px rgba(23,18,38,0.45)",
      },
      borderRadius: { xl2: "1.75rem", xl3: "2.25rem" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-22px) scale(1.05)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1s ease both",
        float: "float 9s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "pulse-glow": "pulse-glow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 38s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
