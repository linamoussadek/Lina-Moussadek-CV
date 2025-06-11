/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Add trailing slashes to all routes
  basePath: '',  // Base path for the application
  assetPrefix: '',  // Asset prefix for static assets
}

module.exports = nextConfig 