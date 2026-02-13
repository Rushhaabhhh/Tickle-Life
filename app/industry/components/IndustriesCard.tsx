'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Typography } from '@/app/components/ui'

const industriesData = [
  {
    id: 'igaming',
    title: 'iGaming',
    description: 'Bonuses are the heartbeat of iGaming, but most processors see promo spikes as red flags. Our fraud filters are trained on high-risk iGaming data, so they know the difference between a bonus surge and real fraud.',
    benefits: [
      'Regulated EU and LatAm approvals',
      'License-based onboarding logic',
      'Smart risk scoring for bonus campaigns'
    ],
  },
  {
    id: 'forex',
    title: 'Forex & Trading',
    description:
      "Traders move fast; your payments can't lag behind. Global routing adds friction: conversions, transfers, compliance delays. We settle locally in 22 jurisdictions, keeping funds moving without unnecessary hops.",
    benefits: [
      'Fast onboarding for KYC-compliant platforms',
      '90%+ approval rates in UAE and India',
      'Local settlement, lower FX leakage'
    ],
  },
  {
    id: 'adult',
    title: 'Adult',
    description:
      "We know the space; we've lived it. Adult businesses are still treated like liabilities. Most PSPs freeze accounts at the first sign of pressure. We don't. We stay when things get hard. Our rails are built for stability, discretion, and longevity, so your business runs smoothly and stays respected.",
    benefits: [
      'Partner banks with content-friendly compliance',
      '3D Secure and crypto off-ramp support',
      'Proven recurring billing logic'
    ],
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description:
      'Alternative health and wellness payments get flagged for the wrong reasons. We run real-time compliance checks on every transaction to keep operations clean, trusted, and regulator-ready.',
    benefits: [
      'Telemedicine, lab testing, diagnostics',
      'Approved in US, UK, and GCC markets',
      'Clear MCC and descriptor handling'
    ],
  },
  {
    id: 'crypto',
    title: 'Crypto On- & Off-Ramps',
    description:
      'Crypto doesn\'t have to be all-or-nothing. Our modular setup lets you run cards, APMs, and on/off ramps independently, each with its own pricing and risk logic. Add what you need. Pay only for what you use.',
    benefits: [
      'Custodial and non-custodial flows',
      'Stablecoin rails and global settlement',
      'Seamless fiat-crypto transitions'
    ],
  },
  {
    id: 'education',
    title: 'Education, Info & Subscriptions',
    description:
      "Cross-border tuition and subscriptions shouldn't take weeks to settle. Most processors add layers of intermediaries. Each increasing cost, delay, and risk. We move funds locally across 22 jurisdictions for faster, cleaner settlement.",
    benefits: [
      'Recurring billing & installment logic',
      'High approval in mid-risk regions',
      'Full compliance visibility'
    ],
  }
]

export default function IndustriesExpandingHorizontal() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="w-full flex flex-col items-center min-h-[700px] relative py-8 md:py-16 bg-white text-brand">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-10 text-center ui-heading-gradient">Industries We Power</h2>
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
        {industriesData.map((industry) => {
          const expanded = expandedId === industry.id
          return (
            <motion.div
              key={industry.id}
              layout
              tabIndex={0}
              className={`bg-white border border-brand rounded-2xl overflow-hidden transition-all duration-ui ease-ui outline-none ${expanded ? "shadow-xl ring-2 ring-brand" : "hover:shadow-lg"}`}
              onMouseEnter={() => setExpandedId(industry.id)}
              onMouseLeave={() => setExpandedId(null)}
              onClick={() => setExpandedId(expanded ? null : industry.id)}
              onFocus={() => setExpandedId(industry.id)}
              onBlur={() => setExpandedId(null)}
              aria-expanded={expanded}
            >
              <div className="flex items-center justify-between px-6 md:px-8 py-6 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="text-xl font-bold ui-heading-gradient">
                    {industry.title}
                  </div>
                </div>
                <ArrowRight
                  className={`w-5 h-5 text-brand transition-transform ${expanded ? "rotate-90" : ""}`}
                />
              </div>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="border-t border-brand px-6 md:px-8 pb-8 pt-6"
                  >
                    <Typography as="p" variant="body" className="mb-6 text-lg text-brand">
                      {industry.description}
                    </Typography>
                    <ul className="mb-6 space-y-3">
                      {industry.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg text-brand">
                          <Check className="w-5 h-5 text-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact-us"
                      className="ui-btn ui-btn-primary px-8 py-3 text-sm md:text-base"
                    >
                      Get qualified for {industry.title}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
