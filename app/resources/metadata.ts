import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blog | TickleCharge",
  description:
    "Read the latest articles, guides, and insights about payment processing, compliance, fraud prevention, and industry trends from TickleCharge.",
  keywords: [
    "blog",
    "resources",
    "articles",
    "guides",
    "payment processing",
    "compliance",
    "fraud prevention",
    "industry insights",
  ],
  openGraph: {
    title: "Resources & Blog | TickleCharge",
    description:
      "Read the latest articles, guides, and insights about payment processing, compliance, and fraud prevention.",
    url: "https://www.ticklecharge.com/resources",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/resources-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources & Blog | TickleCharge",
    description:
      "Read the latest articles, guides, and insights about payment processing and compliance.",
    images: ["https://www.ticklecharge.com/images/resources-twitter.jpg"],
  },
};
