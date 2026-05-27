// STATIC_EXPORT=true (used by CI) produces a static site in ./out for GitHub Pages.
// Locally it stays a normal Next app so `npm run dev` / `next start` keep working.
const isExport = process.env.STATIC_EXPORT === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  ...(isExport ? { output: "export", images: { unoptimized: true } } : {}),
}

export default nextConfig
