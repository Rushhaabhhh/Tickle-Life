'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PACKAGES = [
  {
    title: "High-Volume Merchant Track",
    subtitle: "You process $3M+ monthly and want direct control",
    cta: "Get Custom Quote",
    benefits: [
      "Account manager who knows your business",
      "Custom integration support from actual engineers", 
      "Volume-based pricing that improves as you grow",
      "Direct line to compliance team when shit hits the fan"
    ],
    bestFor: "Established operators who want partnership, not vendor relationship.",
    savings: "Monthly savings potential: $8K - $35K based on current volume",
  },
  {
    title: "Growing Business Track",
    subtitle: "You do $1M-3M monthly and need room to scale",
    cta: "Get Custom Quote",
    benefits: [
      "Standard integration with full feature access",
      "Shared support team with industry experience",
      "Modular pricing that grows with your business",
      "Clear upgrade path as volume increases"
    ],
    bestFor: "Profitable businesses ready to optimize their payment stack.",
    savings: "Monthly savings potential: $3K - $15K based on current setup",
  },
  {
    title: "Agent/Referral Track",
    subtitle: "You know merchants who need better processing",
    cta: "Join Our Referral Program",
    benefits: [
      "Transparent commission tracking (no hidden bullshit)",
      "Marketing materials that actually convert",
      "Fast merchant onboarding (your referrals get priority)",
      "Monthly commission payments, no minimum thresholds"
    ],
    bestFor: "Industry consultants, tech partners, anyone with merchant relationships.",
    savings: "Earning potential: $500-2,500 per successful referral",
  }
]

interface PackagesProps {
  setShowQualificationModal: (show: boolean) => void
  scrollToCalculator: () => void
}

const Packages: React.FC<PackagesProps> = ({ setShowQualificationModal, scrollToCalculator }) => {
  return (
    <section id="packages" className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-8 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Choose your path
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-500 mb-16 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Better processing starts here
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-500 relative overflow-hidden hover:border-gray-400 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="mb-8 pt-2">
                <h3 className="text-2xl font-medium text-gray-900 mb-2 tracking-tight">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {pkg.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent mb-8" />

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                  What you get
                </h4>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-light leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 font-light mb-1 uppercase tracking-wide">
                  Best for
                </p>
                <p className="text-sm text-gray-900 font-light leading-relaxed">
                  {pkg.bestFor}
                </p>
              </div>

              {/* Savings */}
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-900">
                  {pkg.savings}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowQualificationModal(true)}
                className="w-full py-4 rounded-xl font-medium transition-all duration-400 text-sm tracking-wide bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105 cursor-pointer"
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Calculator CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToCalculator}
            className="bg-gray-900 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Try our calculator to see what you could be paying →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
