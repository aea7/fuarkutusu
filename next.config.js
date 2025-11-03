/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for CMS to work in development
  images: {
    unoptimized: true,
  },
  transpilePackages: ['outstatic'],
}

module.exports = nextConfig
