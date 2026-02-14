import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TickleCharge",
  description:
    "Learn about TickleCharge's mission to provide compliant, trusted payment solutions for regulated high-risk merchants worldwide.",
  openGraph: {
    title: "About Us | TickleCharge",
    description:
      "Learn about TickleCharge's mission to provide compliant, trusted payment solutions for regulated high-risk merchants worldwide.",
    url: "https://www.ticklecharge.com/about-us",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | TickleCharge",
    description:
      "Learn about TickleCharge's mission and vision for compliant payment processing.",
    images: ["https://www.ticklecharge.com/images/about-twitter.jpg"],
  },
};
