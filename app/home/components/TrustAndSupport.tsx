'use client'

import React from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { number: '$50M+', label: 'monthly volume processed' },
  { number: 'Level 1', label: 'PCI DSS compliant' },
  { number: '21+', label: 'jurisdictions supported' },
  { number: '99.99%', label: 'uptime SLA' },
  { number: '26+', label: 'banking partners' }
]

const TrustAndSupport: React.FC = () => {
  return (
    <>
      {/* Trust Elements Section */}
      <section className="flex items-center justify-center relative px-8 py-16 inter-400">
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
              className="flex-1 flex flex-col justify-center pl-6 pr-6 py-5 relative inter-400"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="text-2xl md:text-3xl font-bold tracking-tight mb-2 inter-400 text-brand"
              >
                {stat.number}
              </div>
              <div 
                className="text-base md:text-lg font-light uppercase tracking-wide text-brand-muted"
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Real Support Section */}
      <div className="max-w-9xl mx-auto w-full relative z-10 px-8 py-20 inter-400">
        <motion.h2
          className="text-center font-bold tracking-tight leading-tight inter-600"
          style={{ fontSize: 'clamp(1.4rem, 6vw, 3.2rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-muted">Real</span> Support.{" "}
          <span className="text-brand-muted">Real</span> Compliance.{" "}
          <span className="text-brand-muted">Real</span> Coverage.
        </motion.h2>
      </div>

      {/* CTA Section */}
      <section className="flex items-center justify-center relative px-8 py-16 bg-white">
        <div
          className="p-8 max-w-7xl w-full mx-4 flex flex-col items-center rounded-3xl"
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => {
                window.location.href = '/resources'
              }}
              className="ui-btn ui-btn-primary px-14 py-4 rounded-full text-base font-large hover:scale-105 border-2 border-brand"
            >
              Still unsure? See if we&apos;re a fit
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TrustAndSupport
