'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FEATURES = [
  "Smart transaction routing",
  "Multi-currency settlement",
  "Transparent reporting",
  "2-week integration timeline",
  "48-hour testing window",
  "End-to-end chargeback management"
]

const FeaturesReality: React.FC = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-4 tracking-tight text-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Features & Reality
        </motion.h2>

        <motion.div
          className="border border-brand rounded-3xl p-12 md:p-14 max-w-6xl w-full mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 font-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                <span className="text-base leading-relaxed text-brand-muted">
                  {feature}
                </span>

                
              </motion.div>
            ))}          
          </div>  
        </motion.div>

        <motion.p
          className="text-center text-lg mt-12 inter-400 text-brand-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          No fluff. No mystery features. Just what actually works.
        </motion.p>
      </div>
    </section>
  )
}

export default FeaturesReality
