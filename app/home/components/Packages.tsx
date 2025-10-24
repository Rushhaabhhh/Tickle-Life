'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PACKAGES = [
  {
    title: "High-Volume Merchant Track",
    subtitle: "You process $3M+ monthly and want direct control",
    cta: "Get my custom quote →",
    benefits: [
      "Dedicated account manager who knows your business",
      "Custom integration support from actual engineers", 
      "Volume-based pricing that improves as you grow",
      "Direct line to compliance team when shit hits the fan"
    ],
    bestFor: "Established operators who want partnership, not vendor relationship.",
    savings: "Monthly savings potential: $8K - $35K based on current volume"
  },
  {
    title: "Growing Business Track",
    subtitle: "You do $1M-3M monthly and need room to scale",
    cta: "Get my custom rate →",
    benefits: [
      "Standard integration with full feature access",
      "Shared support team with industry experience",
      "Modular pricing that grows with your business",
      "Clear upgrade path as volume increases"
    ],
    bestFor: "Profitable businesses ready to optimize their payment stack.",
    savings: "Monthly savings potential: $3K - $15K based on current setup"
  },
  {
    title: "Agent/Referral Track",
    subtitle: "You know merchants who need better processing",
    cta: "Join our referral program →",
    benefits: [
      "Transparent commission tracking (no hidden bullshit)",
      "Marketing materials that actually convert",
      "Fast merchant onboarding (your referrals get priority)",
      "Monthly commission payments, no minimum thresholds"
    ],
    bestFor: "Industry consultants, tech partners, anyone with merchant relationships.",
    savings: "Earning potential: $500-2,500 per successful referral"
  }
]

interface PackagesProps {
  setShowQualificationModal: (show: boolean) => void
  scrollToCalculator: () => void
}

const Packages: React.FC<PackagesProps> = ({ setShowQualificationModal, scrollToCalculator }) => {
  return (
    <section id="packages" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Choose your path to better processing
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-black transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">What you get:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <p className="text-sm"><strong>Best for:</strong> {pkg.bestFor}</p>
                <p className="text-sm font-semibold text-green-600 mt-2">{pkg.savings}</p>
              </div>
              
              <button
                onClick={() => setShowQualificationModal(true)}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToCalculator}
            className="bg-red-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-colors cursor-pointer"
          >
            Try our calculator to see what you could be paying →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
