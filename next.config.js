/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ticklecharge.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Optimize images for Core Web Vitals
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // Security & Performance Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Performance Headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate'
          },
        ],
      },
      // Cache static assets for longer
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // Cache images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ]
  },
  // Redirects for SEO
  async redirects() {
    return [
      // Add any old URLs to maintain 301 redirects
    ]
  },
  // Rewrites for cleaner URLs
  async rewrites() {
    return []
  },
  // Optimize bundle size
  swcMinify: true,
  compress: true,
  // Enable React strict mode for development
  reactStrictMode: true,
  // For SPA fallback (if needed)
  fallback: true,
};

module.exports = nextConfig;
