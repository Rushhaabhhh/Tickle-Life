'use client'

import React from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { number: '$50M+', label: 'Monthly Volume' },
  { number: 'Level 1', label: 'PCI DSS' },
  { number: '21+', label: 'Jurisdictions' },
  { number: '99.99%', label: 'Uptime SLA' },
  { number: '26+', label: 'Banking Partners' }
]

const TrustAndSupport: React.FC = () => {
  return (
    <>
      {/* Trust Elements Section */}
      <section className="flex items-center justify-center relative px-8 py-16 font-['IBM_Plex_Sans']">
        <motion.div
          className="w-full max-w-6xl mx-auto flex flex-row justify-between items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="flex-1 flex flex-col justify-center pl-6 pr-6 py-5 relative font-['IBM_Plex_Sans']"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="text-2xl md:text-3xl font-bold tracking-tight mb-2 font-['Bebas_Neue']"
                style={{ color: '#2B1E17' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-base md:text-lg font-light uppercase tracking-wide"
                style={{ color: '#4A3A2E' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Real Support Section */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-8 py-20 font-['IBM_Plex_Sans']">
        <motion.h2
          className="text-center font-bold tracking-tight leading-tight font-['Bebas_Neue']"
          style={{
            fontSize: "clamp(1.4rem, 6vw, 3.2rem)",
            color: '#2B1E17'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#C9A24D' }}>Real</span> Support.{" "}
          <span style={{ color: '#C9A24D' }}>Real</span> Compliance.{" "}
          <span style={{ color: '#C9A24D' }}>Real</span> Coverage.
        </motion.h2>
      </div>

      {/* CTA Section */}
      <section className="flex items-center justify-center relative px-8 py-16 bg-white">
        <div
          className="border p-8 max-w-7xl w-full mx-4 flex flex-col items-center rounded-3xl"
          style={{ borderColor: "rgba(74, 58, 46, 0.3)" }}
        >
          <motion.div
            className="text-center font-['IBM_Plex_Sans']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-lg mb-6 font-light leading-relaxed"
              style={{ color: '#4A3A2E' }}
            >
              Still Unsure? See if we're a fit
            </p>
            <button
              onClick={() => {
                window.location.href = '/resources'
              }}
              className="bg-[#2B1E17] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#4A3A2E] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer font-['IBM_Plex_Sans'] border-2 border-[#2B1E17] hover:border-[#4A3A2E]"
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
