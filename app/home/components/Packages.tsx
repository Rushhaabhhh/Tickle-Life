'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

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

const Packages = () => {
  const router = useRouter()

  return (
    <section id="packages" className="py-24 px-8 inter-400">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-8 tracking-tight "
          style={{ color: '#2B1E17' }}
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
              className="bg-white rounded-2xl p-8 border border-[#4A3A2E]/20 transition-all duration-500 relative overflow-hidden hover:border-[#C9A24D]/30 hover:shadow-2xl group inter-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="mb-8 pt-2">
                <h3 className="text-2xl font-medium tracking-tight inter-700 mb-2" style={{ color: '#2B1E17' }}>
                  {pkg.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A3A2E' }}>
                  {pkg.subtitle}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-[#4A3A2E]/30 via-[#4A3A2E]/10 to-transparent mb-8" />

              <div className="mb-8">
                <h4 className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#4A3A2E' }}>
                  What you get
                </h4>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#4A3A2E' }}>
                      <span className="w-1 h-1 rounded-full bg-[#2B1E17] mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 rounded-lg">
                <p className="text-xs font-light mb-1 uppercase tracking-wide" style={{ color: '#4A3A2E' }}>
                  Best for
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#2B1E17' }}>
                  {pkg.bestFor}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium" style={{ color: '#2B1E17' }}>
                  {pkg.savings}
                </p>
              </div>

              <button
                onClick={() => router.push('/')}
                className="w-full py-4 rounded-xl inter-500 transition-all duration-400 text-sm tracking-wide bg-white text-[#2B1E17] border-2 border-[#2B1E17] hover:bg-[#2B1E17] hover:text-white hover:scale-105 cursor-pointer"
              >
                {pkg.cta}
              </button>
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
          <button
            onClick={() => router.push('/')}
            className="bg-[#2B1E17] text-white px-10 py-4 rounded-full text-base inter-500 hover:bg-[#4A3A2E] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Try our calculator to see what you could be paying →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
