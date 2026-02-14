"use client";

import { blogPostSchema } from "@/app/lib/schemas";

interface BlogPostSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
  content: string;
}

export function BlogPostSchemaComponent(props: BlogPostSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogPostSchema(props)),
      }}
      suppressHydrationWarning
    />
  );
}

// Helper function to calculate reading time
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper to strip HTML tags
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

// Helper to get excerpt
export function getExcerpt(text: string, length: number = 160): string {
  const clean = stripHtmlTags(text);
  return clean.length > length ? clean.substring(0, length) + "..." : clean;
}
