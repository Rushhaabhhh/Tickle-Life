// This file handles robots.txt generation  
// Place in: app/robots.ts

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/private',
          '/*.json$',
          '/*?*sort=',
          '/search',
        ],
      },
      // Specific rules for Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.ticklecharge.com/sitemap.xml',
    host: 'https://www.ticklecharge.com',
  }
}
