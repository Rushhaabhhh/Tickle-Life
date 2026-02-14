import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | TickleCharge",
  description:
    "Join TickleCharge's partner program. Referral partnerships, technology integrations, and strategic alliances for payment processing.",
  keywords: ["partnerships", "referral program", "integration", "reseller"],
  openGraph: {
    title: "Partners | TickleCharge",
    description:
      "Join TickleCharge's partner program. Referral partnerships, technology integrations, and strategic alliances.",
    url: "https://www.ticklecharge.com/partners",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/partners-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | TickleCharge",
    description:
      "Join TickleCharge's partner program. Referral partnerships and integrations.",
    images: ["https://www.ticklecharge.com/images/partners-twitter.jpg"],
  },
};
