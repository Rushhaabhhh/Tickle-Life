"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

interface InternalLinksProps {
  title?: string;
  links: RelatedLink[];
}

export function InternalLinks({ title = "Related Resources", links }: InternalLinksProps) {
  return (
    <motion.section
      className="my-24 py-16 px-6 md:px-12 bg-white border border-[#2B1E17]/10 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#2B1E17" }}>
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((link, idx) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={link.href}
              className="block p-6 rounded-xl border border-[#2B1E17]/20 hover:border-[#2B1E17] hover:shadow-md transition-all group"
            >
              <h4 className="text-lg font-semibold group-hover:underline" style={{ color: "#2B1E17" }}>
                {link.label} →
              </h4>
              <p className="text-sm mt-2 text-gray-600">
                {link.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Helper function to get contextual internal links
export const getInternalLinksForPage = (currentPage: string): RelatedLink[] => {
  const linkMap: Record<string, RelatedLink[]> = {
    "/services": [
      {
        href: "/industry",
        label: "Industry-Specific Solutions",
        description: "See how our services apply to your industry - from iGaming to Forex to crypto.",
      },
      {
        href: "/resources",
        label: "Case Studies & Documentation",
        description: "Learn from success stories and detailed implementation guides.",
      },
      {
        href: "/about-us",
        label: "Why Choose TickleCharge",
        description: "Understand our compliance-first philosophy and proven track record.",
      },
      {
        href: "/contact-us",
        label: "Get Started Today",
        description: "Contact our team for a free consultation and custom assessment.",
      },
    ],
    "/industry": [
      {
        href: "/services",
        label: "Explore Our Services",
        description: "Discover the full range of payment solutions we offer.",
      },
      {
        href: "/resources",
        label: "Industry-Specific Resources",
        description: "Read guides and best practices for your vertical.",
      },
      {
        href: "/contact-us",
        label: "Industry Consultation",
        description: "Get expert guidance tailored to your specific sector.",
      },
    ],
    "/resources": [
      {
        href: "/services",
        label: "Discover Our Solutions",
        description: "See how our services address the challenges covered in these resources.",
      },
      {
        href: "/industry",
        label: "Industry Insights",
        description: "Explore vertical-specific payment strategies and requirements.",
      },
      {
        href: "/contact-us",
        label: "Let's Talk About Your Needs",
        description: "Discuss how TickleCharge can solve your payment challenges.",
      },
    ],
    "/about-us": [
      {
        href: "/services",
        label: "Our Payment Solutions",
        description: "Explore the comprehensive services behind our compliance expertise.",
      },
      {
        href: "/industry",
        label: "Industries We Serve",
        description: "See the diverse verticals we've successfully partnered with.",
      },
      {
        href: "/partners",
        label: "Partnership Opportunities",
        description: "Join our growing network of referral and technology partners.",
      },
    ],
    "/contact-us": [
      {
        href: "/services",
        label: "Service Overview",
        description: "Review our full range of payment processing services.",
      },
      {
        href: "/industry",
        label: "Industry Solutions",
        description: "See solutions tailored for your specific business type.",
      },
      {
        href: "/resources",
        label: "Educational Resources",
        description: "Read documentation and case studies while we prepare your proposal.",
      },
    ],
    "/partners": [
      {
        href: "/services",
        label: "Services to Recommend",
        description: "Comprehensive payment solutions that benefit your customers.",
      },
      {
        href: "/about-us",
        label: "About TickleCharge",
        description: "Learn what makes us the right partner for your referrals.",
      },
      {
        href: "/contact-us",
        label: "Start a Partnership",
        description: "Get in touch about referral commissions or technology integration.",
      },
    ],
  };

  return linkMap[currentPage] || [];
};
