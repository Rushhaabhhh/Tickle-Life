import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TickleCharge",
  description:
    "Get in touch with TickleCharge. Free compliance review and consultation for payment processing solutions. Contact our team of experts.",
  keywords: ["contact", "get in touch", "support", "sales inquiry", "partnership"],
  openGraph: {
    title: "Contact Us | TickleCharge",
    description:
      "Get in touch with TickleCharge. Free compliance review and consultation for payment processing solutions.",
    url: "https://www.ticklecharge.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://www.ticklecharge.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "TickleCharge Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TickleCharge",
    description:
      "Get in touch with TickleCharge. Free compliance review and consultation.",
    images: ["https://www.ticklecharge.com/images/contact-twitter.jpg"],
  },
};
