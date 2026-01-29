'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    heading: "Features",
    subheading: "What you get",
    points: [
      "Smart transaction routing",
      "Multicurrency settlement",
      "Transparent reporting"
    ]
  },
  {
    heading: "Technical Reality",
    subheading: "Cause we keep it real",
    points: [
      "2 weeks integration time",
      "48 hour testing",
      "End-to-end chargeback management"
    ]
  }
]

const FeaturesReality: React.FC = () => {
  return (
    <section className="py-24 px-8 inter-400">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-6 tracking-tight"
          style={{ color: '#2B1E17' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Features & Reality
        </motion.h2>

        <motion.div
          className="border rounded-3xl p-12 md:p-16 max-w-6xl w-full mx-auto"
          style={{ borderColor: "rgba(74, 58, 46, 0.3)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                className="space-y-8 inter-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                <div className="space-y-3">
                  <h3 className="text-3xl font-light tracking-tight inter-400" style={{ color: '#2B1E17' }}>
                    {feature.heading}
                  </h3>
                  <p className="text-base uppercase text-xs tracking-wide inter-400" style={{ color: '#4A3A2E' }}>
                    {feature.subheading}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-[#4A3A2E]/50 via-[#4A3A2E]/20 to-transparent" />

                <ul className="space-y-5">
                  {feature.points.map((point, pointIdx) => (
                    <motion.li
                      key={pointIdx}
                      className="flex items-start gap-4 inter-400"
                      style={{ color: '#4A3A2E' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2 + pointIdx * 0.12,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#2B1E17] mt-2.5 flex-shrink-0" />
                      <span className="text-base leading-relaxed inter-400">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesReality
