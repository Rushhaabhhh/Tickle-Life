import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | TickleCharge",
  description:
    "Explore TickleCharge's comprehensive payment processing solutions: Open Banking APIs, Fraud Prevention, Account Funding, and Compliance",
  keywords: [
    "payment services",
    "open banking",
    "fraud prevention",
    "account funding",
    "payment processing",
    "compliance",
  ],
  openGraph: {
    title: "Services | TickleCharge",
    description:
      "Explore TickleCharge's comprehensive payment processing solutions: Open Banking APIs, Fraud Prevention, Account Funding, and Compliance",
    url: "https://www.ticklecharge.com/services",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | TickleCharge",
    description:
      "Explore TickleCharge's comprehensive payment processing solutions.",
    images: ["https://www.ticklecharge.com/images/services-twitter.jpg"],
  },
};
