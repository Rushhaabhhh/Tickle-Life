'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-transparent py-24 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-gray-900">
            FAQ
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* Questions List */}
        <div className="space-y-2">
          {FAQ_DATA.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-light text-base text-gray-900 pr-4 transition-colors duration-300 group-hover:text-gray-600">
                  {faq.question}
                </span>
                <motion.div
                  className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-gray-900 flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                  animate={{ rotate: openQuestion === idx ? 90 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg 
                    className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </button>

              {/* Answer - Revealed when question is clicked */}
              <AnimatePresence>
                {openQuestion === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-6 pt-0"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-5" />
                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
