import type { Metadata } from "next";
import { organizationSchema, websiteSchema } from "@/app/lib/schemas";
import RootLayoutClient from "@/app/layout-client";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ticklecharge.com"),
  title: {
    default: "TickleCharge | Payment Solutions for High-Risk Merchants",
    template: "%s | TickleCharge",
  },
  description:
    "The trusted PSP for regulated, high-risk merchants. Payment processing for iGaming, Forex, crypto, wellness, and more. Compliance-first approach.",
  keywords: [
    "payment processor",
    "high-risk merchant",
    "PSP",
    "payment gateway",
    "iGaming payments",
    "forex payments",
    "cryptocurrency payments",
    "adult industry payments",
    "wellness payments",
    "compliance",
    "fraud prevention",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ticklecharge.com",
    siteName: "TickleCharge",
    title: "TickleCharge | Payment Solutions for High-Risk Merchants",
    description:
      "The trusted PSP for regulated, high-risk merchants. Payment processing for iGaming, Forex, crypto, wellness, and more.",
    images: [
      {
        url: "https://www.ticklecharge.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge - Payment Processing for High-Risk Merchants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ticklecharge",
    title: "TickleCharge | Payment Solutions for High-Risk Merchants",
    description:
      "The trusted PSP for regulated, high-risk merchants. Compliance-first payment processing.",
    images: ["https://www.ticklecharge.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ticklecharge.com",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111" />

        {/* Structured Data - Organization & Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}