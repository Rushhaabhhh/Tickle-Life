'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FAQ_DATA = [
  {
    question: "How are your rates so much lower?",
    answer: "You only pay for what you use. No bloated bundles, no \"one-size-fits-all\" rates. Add or remove payment methods anytime — your pricing adjusts automatically."
  },
  {
    question: "How fast can we go live?",
    answer: "Depends how fast you move. If your docs are ready and your devs know what they're doing, we've seen merchants live in under a week. Two if things get messy."
  },
  {
    question: "Do you work with my industry?",
    answer: "If you're licensed and compliant — probably yes. We specialize in iGaming, Forex, and Adult, but we've onboarded everything from dating platforms to crypto brokerages."
  },
  {
    question: "Do I have to switch everything at once?",
    answer: "Hell no. Start with 20% of your volume as a test. See the difference. Then decide if you want to move more. Smart merchants always have backup processors anyway."
  },
  {
    question: "How long does approval actually take?",
    answer: "About 48 hours for qualification, then up to a week for integration and testing. We move fast, but never at the cost of compliance."
  },
  {
    question: "How do I get started?",
    answer: "A valid license, clean compliance record, and traffic that doesn't suck. That's it. If you've got those, we can move fast."
  }
]

const FAQ: React.FC = () => {
  const [showFAQ, setShowFAQ] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowFAQ(showFAQ === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 cursor-pointer"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl">{showFAQ === idx ? '−' : '+'}</span>
              </button>
              {showFAQ === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
