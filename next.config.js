/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    graphQlUri: process.env.GRAPH_QL_URI,
    hygraphSecret: process.env.HYPRAPH_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
