'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

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
    icon: <span className="text-black text-4xl">🎰</span>
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
    icon: <span className="text-gray-900 text-4xl">📈</span>
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
    icon: <span className="text-gray-700 text-4xl">🔞</span>
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
    icon: <span className="text-gray-700 text-4xl">💊</span>
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
    icon: <span className="text-black text-4xl">🪙</span>
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
    icon: <span className="text-gray-700 text-4xl">🎓</span>
  }
]

export default function IndustriesExpandingHorizontal() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="w-full flex flex-col items-center min-h-[700px] relative py-8 md:py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-10 text-center bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent">Industries We Power</h2>

      <div className="max-w-[90vw] mx-auto flex items-stretch justify-start gap-0 overflow-x-auto scrollbar-none">
        {industriesData.map((industry, idx) => {
          const expanded = expandedId === industry.id
          return (
            <motion.div
              key={industry.id}
              layout
              tabIndex={0}
              className={`
                flex flex-col h-[460px] bg-white border border-[#2B1E17]/20 cursor-pointer
                items-center justify-between overflow-hidden
                rounded-none first:rounded-l-3xl last:rounded-r-3xl
                transition-all duration-300 ease-in-out outline-none
                ${expanded ? "ring-2 ring-[#2B1E17] shadow-xl z-20" : "hover:shadow-xl"}
                `}
              style={{
                marginLeft: idx > 0 ? '-1px' : 0,
                width: expanded ? 480 : 135,
                minWidth: expanded ? 480 : 135,
                maxWidth: expanded ? 480 : 135
              }}
              onMouseEnter={() => setExpandedId(industry.id)}
              onMouseLeave={() => setExpandedId(null)}
              onClick={() => setExpandedId(industry.id)}
              onFocus={() => setExpandedId(industry.id)}
              onBlur={() => setExpandedId(null)}
            >
              <motion.div
                className="w-full flex flex-col items-center px-6 pt-8 pb-5 h-full"
                initial={false}
                animate={{ background: expanded ? "#f9f9f9" : "#fff" }}
                transition={{ duration: 0.18 }}
              >
                <div className="mb-6 flex-shrink-0">{industry.icon}</div>
                <div className="text-xl font-bold bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent text-center mb-3">{industry.title}</div>
                {!expanded && <ArrowRight className="text-[#2B1E17] w-6 h-6 mt-9 flex-shrink-0" />}
              </motion.div>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.36, type: 'spring', bounce: 0.12 }}
                    className="bg-white p-8 border-t border-[#2B1E17]/20 w-full overflow-hidden"
                    style={{ flexShrink: 0 }}
                  >
                    <h3 className="mb-6 text-2xl font-semibold bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent">{industry.title}</h3>
                    <p className="mb-6 text-lg leading-relaxed" style={{ color: '#2B1E17' }}>
                      {industry.description}
                    </p>
                    <ul className="mb-6 space-y-4">
                      {industry.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-4 text-lg" style={{ color: '#2B1E17' }}>
                          <Check className="w-6 h-6 text-[#2B1E17]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] text-white font-bold text-lg px-10 py-3 rounded-lg hover:opacity-90 transition duration-250">
                      Get qualified for {industry.title}
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
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
