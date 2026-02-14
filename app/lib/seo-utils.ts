// Advanced SEO Utilities
// app/lib/seo-utils.ts

import { Metadata } from "next";

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string): string {
  return `https://www.ticklecharge.com${path}`;
}

/**
 * Ensure trailing slashes consistency
 */
export function normalizeUrl(path: string): string {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Generate SEO-friendly meta description with character limit
 */
export function sanitizeDescription(
  description: string,
  maxLength: number = 160
): string {
  const clean = description
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;|&quot;|&apos;|&amp;/g, (match: string) => {
      const entities: Record<string, string> = {
        "&nbsp;": " ",
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&",
      };
      return entities[match] || match;
    })
    .trim();

  return clean.length > maxLength ? clean.substring(0, maxLength) + "..." : clean;
}

/**
 * Generate SEO-friendly title with character limit
 */
export function sanitizeTitle(title: string, maxLength: number = 60): string {
  const clean = title.replace(/<[^>]*>/g, "").trim();
  return clean.length > maxLength ? clean.substring(0, maxLength) + "..." : clean;
}

/**
 * Generate keywords array from a single string
 */
export function generateKeywords(keywordString: string): string[] {
  return keywordString
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0);
}

/**
 * Create structured robots metadata
 */
export function getSeoRobots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
  };
}

/**
 * Generate OpenGraph metadata object
 */
export function getOpenGraphMetadata(
  title: string,
  description: string,
  url: string,
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }
) {
  return {
    type: "website" as const,
    locale: "en_US" as const,
    url,
    siteName: "TickleCharge",
    title,
    description,
    images: image
      ? [
          {
            url: image.url,
            width: image.width || 1200,
            height: image.height || 630,
            alt: image.alt || title,
          },
        ]
      : [
          {
            url: "https://www.ticklecharge.com/images/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "TickleCharge - Payment Processing for High-Risk Merchants",
          },
        ],
  };
}

/**
 * Generate Twitter Card metadata object
 */
export function getTwitterCardMetadata(
  title: string,
  description: string,
  imageUrl?: string
) {
  return {
    card: "summary_large_image" as const,
    site: "@ticklecharge",
    title,
    description,
    images: imageUrl ? [imageUrl] : ["https://www.ticklecharge.com/images/twitter-image.jpg"],
  };
}

/**
 * Build complete metadata object for a page
 */
export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
  options?: {
    image?: { url: string; width?: number; height?: number; alt?: string };
    keywords?: string;
    canonical?: string;
  }
): Metadata {
  const canonicalUrl = options?.canonical || getCanonicalUrl(path);
  const pageUrl = getCanonicalUrl(path);

  return {
    title: sanitizeTitle(title),
    description: sanitizeDescription(description),
    keywords: options?.keywords ? generateKeywords(options.keywords) : [],
    robots: getSeoRobots(),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: getOpenGraphMetadata(title, description, pageUrl, options?.image),
    twitter: getTwitterCardMetadata(title, description, options?.image?.url),
  };
}

/**
 * Calculate reading time for content
 */
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return Math.ceil(words / wordsPerMinute);
}

/**
 * Extract text from HTML content
 */
export function extractTextFromHTML(html: string): string {
  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;|&quot;|&apos;|&amp;/g, (match: string) => {
      const entities: Record<string, string> = {
        "&nbsp;": " ",
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&",
      };
      return entities[match] || match;
    })
    .trim();
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(
  content: string,
  length: number = 160
): string {
  const text = extractTextFromHTML(content);
  return text.length > length ? text.substring(0, length) + "..." : text;
}

/**
 * Create internal link object for SEO
 */
export interface InternalLinkConfig {
  href: string;
  label: string;
  description: string;
  keywords?: string[];
}

/**
 * Validate if a URL is properly formatted
 */
export function isValidSeoUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return (
      urlObj.protocol === "https:" &&
      urlObj.hostname.includes("ticklecharge.com")
    );
  } catch {
    return false;
  }
}

/**
 * Generate sitemap entry
 */
export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}

export function generateSitemapEntry(
  path: string,
  options?: {
    lastModified?: Date;
    changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
    priority?: number;
  }
): SitemapEntry {
  return {
    url: getCanonicalUrl(path),
    lastModified: options?.lastModified || new Date(),
    changeFrequency: options?.changeFrequency || "weekly",
    priority: options?.priority || 0.7,
  };
}
