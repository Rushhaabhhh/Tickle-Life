'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    text: "Approval rates went from 71% to 89%. That's literally $280K monthly that used to get rejected. My CFO thinks I'm a genius for switching.",
    author: "— Jake Morrison",
    industry: "iGaming"
  },
  {
    text: "During the Brexit chaos, every other PSP had 'technical difficulties.' We processed £1.4M that weekend while competitors were down.",
    author: "— Sarah Chen",
    industry: "Forex"
  },
  {
    text: "Their compliance team actually understands adult regulations. No more explaining why recurring billing isn't money laundering.",
    author: "— Marcus Rodriguez",
    industry: "Adult Entertainment"
  }
]

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 px-8 inter-400">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-8 tracking-tight inter-400"
          style={{ color: '#2B1E17' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-16 font-light"
          style={{ color: '#4A3A2E' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Hear it straight from our clients.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-500 border rounded-full cursor-pointer inter-400 ${
                activeTab === idx
                  ? 'bg-[#2B1E17] text-white border-[#2B1E17]'
                  : 'bg-white text-[#4A3A2E] border-[#4A3A2E]/30 hover:border-[#2B1E17]'
              }`}
            >
              {testimonial.industry}
            </button>
          ))}
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="max-w-4xl mx-auto text-center px-8 inter-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic" style={{ color: '#2B1E17' }}>
                {TESTIMONIALS[activeTab].text}
              </p>

              <div className="space-y-1">
                <p className="text-base font-medium" style={{ color: '#2B1E17' }}>
                  {TESTIMONIALS[activeTab].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#2B1E17] w-8'
                  : 'bg-[#4A3A2E]/30 hover:bg-[#4A3A2E]/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
