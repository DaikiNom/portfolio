/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
}

module.exports = nextConfig
