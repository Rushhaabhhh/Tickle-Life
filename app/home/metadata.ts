import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | TickleCharge",
  description:
    "Welcome to TickleCharge. Discover how we provide compliant payment solutions for high-risk merchants in iGaming, Forex, crypto, and wellness industries.",
  openGraph: {
    title: "Home | TickleCharge",
    description:
      "Welcome to TickleCharge. Discover how we provide compliant payment solutions for high-risk merchants.",
    url: "https://www.ticklecharge.com/home",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | TickleCharge",
    description:
      "Welcome to TickleCharge. Discover how we provide compliant payment solutions for high-risk merchants.",
    images: ["https://www.ticklecharge.com/images/home-twitter.jpg"],
  },
};
