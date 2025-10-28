'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const industriesData = [
  {
    id: 'igaming',
    title: 'iGaming',
    description: 'Bonuses are the heartbeat of iGaming - but for most processors, sudden transaction spikes look like red flags. Our fraud filters are trained on high-risk data from your industry, so they know the difference between a regular promo surge and actual fraud.',
    benefits: [
      'Regulated EU and LatAm approvals',
      'License‑based onboarding logic'
    ],
    icon: <span className="text-black text-4xl">🎰</span>
  },
  {
    id: 'forex',
    title: 'Forex & Trading',
    description:
      "Traders move fast — your payments can't wait. Global processing adds too many steps: conversions, transfers, compliance delays. Our coverage includes partners in 22 jurisdictions, so your transactions settle locally — everywhere.",
    benefits: [
      'Fast onboarding for KYC‑compliant platforms',
      '90%+ approval in UAE and India'
    ],
    icon: <span className="text-gray-900 text-4xl">📈</span>
  },
  {
    id: 'adult',
    title: 'Adult',
    description:
      "We know the space — we've been here. Even today we are treated like a liability. PSPs freeze accounts at the first sign of trouble. But we don't back down when the going gets tough. We stick around and keep your business going. Our rails are built for stability and discretion, so your business runs smooth and stays respected.",
    benefits: [
      'Partner banks with content‑friendly compliance',
      '3D Secure and crypto off‑ramp support'
    ],
    icon: <span className="text-gray-700 text-4xl">🔞</span>
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description:
      'Wellness and alternative health payments get flagged for the wrong reasons. We run real-time compliance checks on every transaction to keep your operations clean, trusted, and fully above board.',
    benefits: [
      'Telemedicine, lab testing, diagnostics',
      'Approved in US, UK and GCC'
    ],
    icon: <span className="text-gray-700 text-4xl">💊</span>
  },
  {
    id: 'crypto',
    title: 'Crypto On/Off Ramps',
    description:
      'Crypto doesn\'t need "all or nothing" processing. We built a modular structure that lets you run cards, APMs, and on/off ramps independently — each with its own rate. Add what you need to your stack and pay only for what you use.',
    benefits: [
      'Custodial and non‑custodial flows',
      'Stablecoin rails and global settlement options'
    ],
    icon: <span className="text-black text-4xl">🪙</span>
  },
  {
    id: 'education',
    title: 'Education, Info, Subscription',
    description:
      "Cross-border tuition shouldn't take weeks. Most processors route education payments through endless intermediaries, each adding cost, delay, and risk. That's why we partnered with banks in 22 jurisdictions to move funds locally, so payments land faster, cleaner, and with full compliance visibility.",
    benefits: [
      'Recurring billing logic',
      'High approval in mid‑risk zones'
    ],
    icon: <span className="text-gray-700 text-4xl">🎓</span>
  }
]

export default function IndustriesExpandingHorizontal() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="w-full flex flex-col items-center min-h-[700px] relative py-8 md:py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-10 text-center">Industries We Serve</h2>

      <div className="max-w-[90vw] mx-auto flex items-stretch justify-start gap-0 overflow-x-auto scrollbar-none">
        {industriesData.map((industry, idx) => {
          const expanded = expandedId === industry.id
          return (
            <motion.div
              key={industry.id}
              layout
              tabIndex={0}
              className={`
                flex flex-col h-[460px] bg-white border border-gray-300 cursor-pointer
                items-center justify-between overflow-hidden
                rounded-none first:rounded-l-3xl last:rounded-r-3xl
                transition-all duration-300 ease-in-out outline-none
                ${expanded ? "ring-2 ring-black shadow-xl z-20" : "hover:shadow-xl"}
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
                <div className="text-xl font-bold text-black text-center mb-3">{industry.title}</div>
                {!expanded && <ArrowRight className="text-gray-600 w-6 h-6 mt-9 flex-shrink-0" />}
              </motion.div>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.36, type: 'spring', bounce: 0.12 }}
                    className="bg-gray-50 p-8 border-t border-gray-200 w-full overflow-hidden"
                    style={{ flexShrink: 0 }}
                  >
                    <h3 className="mb-6 text-2xl font-semibold text-gray-900">{industry.title}</h3>
                    <p className="mb-6 text-lg leading-relaxed text-gray-800">
                      {industry.description}
                    </p>
                    <ul className="mb-6 space-y-4">
                      {industry.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-900 text-lg">
                          <Check className="w-6 h-6" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button className="inline-flex items-center gap-3 bg-black text-white font-bold text-lg px-10 py-3 rounded-lg hover:bg-gray-900 transition duration-250">
                      Get qualified for {industry.title}
                      <ArrowRight className="w-6 h-6" />
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
