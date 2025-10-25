'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    heading: "Features",
    subheading: "What we offer",
    points: [
      "Smart transaction routing",
      "Multicurrency settlement",
      "Transparent reporting"
    ]
  },
  {
    heading: "Technical Reality",
    subheading: "How it actually works",
    points: [
      "2 weeks integration time",
      "48 hour testing",
      "End-to-end chargeback management"
    ]
  }
]

const FeaturesReality: React.FC = () => {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-6 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Features & Reality
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-500 mb-20 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          &apos;Cause we keep it real
        </motion.p>

        <motion.div
          className="border rounded-3xl p-12 md:p-16 max-w-6xl w-full mx-auto"
          style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                {/* Heading */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                    {feature.heading}
                  </h3>
                  <p className="text-base text-gray-400 font-light tracking-wide uppercase text-xs">
                    {feature.subheading}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-300 via-gray-200 to-transparent" />

                {/* Points */}
                <ul className="space-y-5">
                  {feature.points.map((point, pointIdx) => (
                    <motion.li
                      key={pointIdx}
                      className="flex items-start gap-4 text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.2 + pointIdx * 0.12,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                      <span className="text-base leading-relaxed font-light">
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
