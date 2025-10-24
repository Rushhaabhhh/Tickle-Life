'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FeaturesRealityProps {
  scrollToCalculator: () => void
}

const FeaturesReality: React.FC<FeaturesRealityProps> = ({ scrollToCalculator }) => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Features + Reality
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          &apos;Cause we keep it real
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Smart transaction routing</li>
              <li>Multicurrency settlement</li>
              <li>Transparent reporting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Technical Reality</h3>
            <ul className="space-y-2 text-gray-700">
              <li>2 weeks integration time</li>
              <li>48 hour testing</li>
              <li>End-to-end chargeback management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">What you get</h3>
            <button
              onClick={scrollToCalculator}
              className="bg-black text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
            >
              See Your Rates →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesReality
