'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Lock, Shield, Check, Zap } from 'lucide-react'
import IndustriesExpandingVertical from './components/IndustriesCard'

const industriesData = [
  {
    id: 'igaming',
    title: 'iGaming',
    description: 'Bonuses are the heartbeat of iGaming - but for most processors, sudden transaction spikes look like red flags. Our fraud filters are trained on high-risk data from your industry, so they know the difference between a regular promo surge and actual fraud.',
    benefits: [
      'Regulated EU and LatAm approvals',
      'License‑based onboarding logic'
    ],
    icon: '🎰'
  },
  {
    id: 'forex',
    title: 'Forex & Trading',
    description: 'Traders move fast — your payments can\'t wait. Global processing adds too many steps: conversions, transfers, compliance delays. Our coverage includes partners in 22 jurisdictions, so your transactions settle locally — everywhere.',
    benefits: [
      'Fast onboarding for KYC‑compliant platforms',
      '90%+ approval in UAE and India'
    ],
    icon: '📈'
  },
  {
    id: 'adult',
    title: 'Adult',
    description: 'We know the space — we\'ve been here. Even today we are treated like a liability. PSPs freeze accounts at the first sign of trouble. But we don\'t back down when the going gets tough. We stick around and keep your business going. Our rails are built for stability and discretion, so your business runs smooth and stays respected.',
    benefits: [
      'Partner banks with content‑friendly compliance',
      '3D Secure and crypto off‑ramp support'
    ],
    icon: '🔞'
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description: 'Wellness and alternative health payments get flagged for the wrong reasons. We run real-time compliance checks on every transaction to keep your operations clean, trusted, and fully above board.',
    benefits: [
      'Telemedicine, lab testing, diagnostics',
      'Approved in US, UK and GCC'
    ],
    icon: '💊'
  },
  {
    id: 'crypto',
    title: 'Crypto On/Off Ramps',
    description: 'Crypto doesn\'t need "all or nothing" processing. We built a modular structure that lets you run cards, APMs, and on/off ramps independently — each with its own rate. Add what you need to your stack and pay only for what you use.',
    benefits: [
      'Custodial and non‑custodial flows',
      'Stablecoin rails and global settlement options'
    ],
    icon: '🪙'
  },
  {
    id: 'education',
    title: 'Education, Info, Subscription',
    description: 'Cross-border tuition shouldn\'t take weeks. Most processors route education payments through endless intermediaries, each adding cost, delay, and risk. That\'s why we partnered with banks in 22 jurisdictions to move funds locally, so payments land faster, cleaner, and with full compliance visibility.',
    benefits: [
      'Recurring billing logic',
      'High approval in mid‑risk zones'
    ],
    icon: '🎓'
  }
]

const features = [
  {
    title: 'Low processing rates',
    icon: <Zap className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Unparalleled security',
    icon: <Shield className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Compliance expertise',
    icon: <Lock className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Tailored Solutions',
    icon: <Check className="w-12 h-12 text-gray-900" />
  }
]

export default function IndustriesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="bg-white min-h-screen">

      {/* Hero Section */}
      <motion.header
        className="min-h-[60vh] flex items-center px-8 md:px-16 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full">
          <motion.div
            className="mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-black mb-4">
              Built for one business.<br />
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-gray-500 mb-12">
              Yours.
            </h1>
            <a
              href="#industries"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold text-base hover:bg-gray-800 transition-all duration-300"
            >
              See if we are a fit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Feature Showcase - 2x2 Grid */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 border border-gray-200 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Inline Expanding Cards */}
      <IndustriesExpandingVertical />

      {/* CTA Section */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-black text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Check your eligibility and see what we can do for your business.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 font-bold text-lg hover:bg-gray-200 transition-all duration-300">
            Check Eligibility
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.section>

    </section>
  )
}
