// This file handles dynamic sitemap generation
// Place in: app/sitemap.ts

import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.ticklecharge.com'

// All static routes
const staticRoutes = [
  '',
  '/home',
  '/services',
  '/industry',
  '/about-us',
  '/partners',
  '/resources',
  '/contact-us',
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/resources' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/resources' ? 0.9 : 0.8,
  }))

  // Blog posts from WordPress API (optional - add if needed)
  // This could be populated dynamically from your WordPress API
  const blogEntries: MetadataRoute.Sitemap = [
    // Example structure:
    // {
    //   url: `${BASE_URL}/blog/${slug}`,
    //   lastModified: new Date(post.modified),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // }
  ]

  return [...staticEntries, ...blogEntries]
}
