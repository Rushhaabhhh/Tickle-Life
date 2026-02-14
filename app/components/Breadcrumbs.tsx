"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { breadcrumbSchema } from "@/app/lib/schemas";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Home", href: "/" }],
  "/home": [
    { label: "Home", href: "/" },
    { label: "Overview", href: "/home" },
  ],
  "/services": [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ],
  "/industry": [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industry" },
  ],
  "/about-us": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ],
  "/contact-us": [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  "/partners": [
    { label: "Home", href: "/" },
    { label: "Partners", href: "/partners" },
  ],
  "/resources": [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
  ],
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const items = breadcrumbMap[pathname] || [{ label: "Home", href: "/" }];

  // Convert to schema format
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="hover:text-blue-600 hover:underline transition-colors"
              >
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(schemaItems)),
        }}
        suppressHydrationWarning
      />
    </>
  );
}
