/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphassets.com'],
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
