/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/ashans-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ashans-portfolio/' : '',
  trailingSlash: true,
  output: 'export',
}

export default nextConfig
