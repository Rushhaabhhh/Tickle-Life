'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hear it straight from our clients.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-semibold text-gray-600 mb-4">{testimonial.industry}</div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="font-semibold text-black">{testimonial.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
