'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    text: "Approval rates went from 71% to 89%. That's literally $280K monthly that was getting rejected before. My CFO thinks I'm a genius for switching.",
    author: "— Jake Morrison",
    industry: "iGaming"
  },
  {
    text: "During Brexit chaos, every other PSP was having 'technical difficulties.' We processed £1.4M that weekend while our competitors were down. That's when I knew we made the right choice.",
    author: "— Sarah Chen",
    industry: "Forex"
  },
  {
    text: "Their compliance team actually understands adult content regulations. No more explaining why recurring billing isn't money laundering.",
    author: "— Marcus Rodriguez",
    industry: "Adult Entertainment"
  }
]

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-8 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Let&apos;s get real
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-500 mb-16 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Hear it straight from our clients.
        </motion.p>

        {/* Industry Tabs */}
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
              className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-500 border rounded-full cursor-pointer ${
                activeTab === idx
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900'
              }`}
            >
              {testimonial.industry}
            </button>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="max-w-4xl mx-auto text-center px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* Testimonial Text */}
              <p className="text-2xl md:text-3xl text-gray-900 font-light leading-relaxed mb-8 italic">
                {TESTIMONIALS[activeTab].text}
              </p>

              {/* Author */}
              <div className="space-y-1">
                <p className="text-base text-gray-900 font-medium">
                  {TESTIMONIALS[activeTab].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
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
                  ? 'bg-gray-900 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
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
