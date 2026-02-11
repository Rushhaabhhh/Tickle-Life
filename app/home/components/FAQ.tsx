'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ_DATA = [
  {
    question: "How are your rates so much lower?",
    answer: "You only pay for what you use. No bloated bundles, no fixed pricing traps. Add or remove payment methods anytime; pricing adjusts automatically."
  },
  {
    question: "How fast can we go live?",
    answer: "Depends how fast you move. With complete docs and a ready dev team, some merchants go live in under a week. Two weeks if things get messy."
  },
  {
    question: "Do you work in my industry?",
    answer: "If you're licensed and compliant, probably yes. We specialise in iGaming, Forex, and Adult, but also support dating platforms, crypto brokerages, and more."
  },
  {
    question: "Do I have to switch everything at once?",
    answer: "No. Start with 20% of your volume. Test us. Compare results. Smart merchants always keep backup processors."
  },
  {
    question: "How long does approval take?",
    answer: "48 hours for qualification, then up to a week for integration and testing. Fast but never at the cost of compliance."
  },
  {
    question: "How do I get started?",
    answer: "A valid license, clean compliance record, and quality traffic. If you've got those, we move fast."
  }
]

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-8 inter-400">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 tracking-tight" style={{ color: '#2B1E17' }}>
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-2">
          {FAQ_DATA.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-[#4A3A2E]/20 rounded-xl overflow-hidden hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left inter-400 cursor-pointer"
              >
                <span className="text-base inter-500" style={{ color: '#4A3A2E' }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openQuestion === idx ? 90 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg 
                    className="w-4 h-4 text-[#4A3A2E] group-hover:text-white transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openQuestion === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-relaxed inter-300" style={{ color: '#4A3A2E' }}>
                        {faq.answer}
                      </p>
                    </div>
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
