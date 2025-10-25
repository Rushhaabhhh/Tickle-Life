'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RealSupportProps {
  setShowQualificationModal: (show: boolean) => void
}

const STATS = [
  { number: '$50M+', label: 'Monthly Volume' },
  { number: 'Level 1', label: 'PCI DSS' },
  { number: '21+', label: 'Jurisdictions' },
  { number: '99.99%', label: 'Uptime SLA' },
  { number: '26+', label: 'Banking Partners' }
]

const TrustAndSupport: React.FC<RealSupportProps> = ({ setShowQualificationModal }) => {
  return (
    <>
      {/* Trust Elements Section */}
      <section className="flex items-center justify-center relative px-8 py-16">
        <motion.div
          className="w-full max-w-6xl mx-auto flex flex-row justify-between items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col justify-center pl-6 pr-6 py-5 relative">
              <div className="text-2xl md:text-3xl font-semibold text-black mb-2">{stat.number}</div>
              <div className="text-base md:text-lg text-gray-700">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Real Support Section */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          className="text-center font-bold tracking-tight leading-tight"
          style={{
            fontSize: "clamp(1.4rem, 6vw, 3.2rem)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400">Real</span> Support.{" "}
          <span className="text-gray-400">Real</span> Compliance.{" "}
          <span className="text-gray-400">Real</span> Coverage.
        </motion.h2>
      </div>

      <section className="flex items-center justify-center relative px-8 py-16">
        <div
          className="border p-8 max-w-7xl w-full mx-4 flex flex-col items-center"
          style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6">Still Unsure? See if we&apos;re a fit</p>
            <button
              onClick={() => setShowQualificationModal(true)}
              className="bg-gray-900 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
              Check Fit →
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TrustAndSupport
