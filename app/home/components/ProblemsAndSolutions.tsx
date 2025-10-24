'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PROBLEMS = [
  {
    title: "Geographic Blocks",
    problem: "Our Business is Global, but our payments don't reach far enough",
    description: "We get approved in one region, then rejected everywhere else. Scaling across markets shouldn't mean rebuilding your payments stack every time.",
    solution: "Process locally, everywhere.",
    fix: "We connect you to acquiring banks in 22 jurisdictions, so your UAE players use UAE banks and your Malta customers use local Maltese institutions."
  },
  {
    title: "One-Size-Fits-All Pricing",
    problem: "We're paying for services we don't even use.",
    description: "Same rates, whether we process cards, crypto, or just one payment method. The pricing has nothing to do with what we actually use.",
    solution: "Only pay for what you use.",
    fix: "Our modular pricing lets you start with cards, and add crypto or APM as you grow. Our pricing adjusts to your set up, not the other way around."
  },
  {
    title: "Dumb Fraud Filters",
    problem: "Our biggest customers keep getting flagged as fraud.",
    description: "Their systems can't even tell a loyal customer from a fraud. Any high-value transaction gets blocked.",
    solution: "Smart filters trained with high-risk data.",
    fix: "Our models know the difference between a whale and a fraud. Better accuracy, less lost revenue."
  }
]

const ProblemsAndSolutions: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          3 Problems our clients brought to us
        </motion.h2>

        <div className="space-y-16">
          {PROBLEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-red-600">Problem {idx + 1}: {item.title}</h3>
                <p className="text-xl font-semibold italic">&ldquo;{item.problem}&rdquo;</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-700 mb-3">Our fix:</h4>
                <p className="text-lg font-semibold mb-3">{item.solution}</p>
                <p className="text-gray-700">{item.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsAndSolutions
