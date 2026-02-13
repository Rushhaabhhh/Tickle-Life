'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/app/components/ui'

const PACKAGES = [
  {
    title: "High-Volume Merchant Track",
    subtitle: "You process $3M+ monthly and want full control",
    cta: "Get my custom quote",
    benefits: [
      "Dedicated account manager who understands your business",
      "Custom integrations with real engineers", 
      "Volume-based pricing that improves as you scale",
      "Direct access to compliance when things get messy"
    ],
    bestFor: "Established operators seeking a partner, not a vendor",
    savings: "Estimated monthly savings: $8K–$35K",
  },
  {
    title: "Growing Business Track",
    subtitle: "You process $1M–$3M monthly and need room to scale",
    cta: "Get my custom rate",
    benefits: [
      "Standard integration with full feature access and no hidden fees",
      "Shared expert support team",
      "Modular pricing that grows with you",
      "Clear upgrade path as volume increases"
    ],
    bestFor: "Profitable businesses optimising their payment stack",
    savings: "Estimated monthly savings: $3K–$15K",
  },
  {
    title: "Agent / Referral Track",
    subtitle: "You know merchants who need better processing",
    cta: "Join our referral program",
    benefits: [
      "Transparent commission tracking (no hidden nonsense)",
      "Proven marketing materials",
      "Priority onboarding for your referrals",
      "Monthly payouts, no minimum thresholds"
    ],
    bestFor: "Industry consultants, tech partners, anyone with merchant relationships.",
    savings: "Earning potential: $500–$2,500 per successful referral",
  }
]

const Packages = () => {
  const router = useRouter()

  return (
    <section id="packages" className="py-24 px-8 inter-400">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-8 tracking-tight text-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Choose your path to better processing
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-brand/20 transition-all duration-500 relative overflow-hidden hover:border-brand-accent/30 hover:shadow-2xl group inter-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="mb-8 pt-2">
                <h3 className="text-2xl font-medium tracking-tight inter-700 mb-2 text-brand">
                  {pkg.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {pkg.subtitle}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-brand-muted/30 via-brand-muted/10 to-transparent mb-8" />

              <div className="mb-8">
                <h4 className="text-xs font-medium uppercase tracking-widest mb-4 text-brand-muted">
                  What you get
                </h4>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted">
                      <span className="w-1 h-1 rounded-full bg-brand mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 rounded-lg">
                <p className="text-xs font-light mb-1 uppercase tracking-wide text-brand-muted">
                  Best for
                </p>
                <p className="text-sm font-light leading-relaxed text-brand">
                  {pkg.bestFor}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-brand">
                  {pkg.savings}
                </p>
              </div>

              <Button
                onClick={() => router.push('/')}
                variant="ghost"
                className="bg-transparent w-full py-4 rounded-xl inter-500 text-sm tracking-wide border-2 border-brand hover:bg-brand hover:text-white hover:scale-105"
              >
                {pkg.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => router.push('/')}
            className="px-12 py-4 rounded-full text-base text-lg inter-500 hover:scale-105"
          >
            Try our calculator and see what you could be paying
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
