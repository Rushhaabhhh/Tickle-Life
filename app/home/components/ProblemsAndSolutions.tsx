'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PROBLEMS = [
  {
    title: "Geographic Blocks",
    problem: "Our business is global, but our payments don't reach.",
    description: "We get approved in one region, then rejected everywhere else. Scaling shouldn't mean rebuilding your entire payments stack.",
    solution: "Process locally, everywhere.",
    fix: "We connect you to acquiring banks in 22 jurisdictions, allowing UAE players to pay via UAE banks and Malta customers to transact with local Maltese institutions."
  },
  {
    title: "One-Size-Fits-All Pricing",
    problem: "We're paying for services we don't even use.",
    description: "Same rates whether you process cards, crypto, or a single method. Pricing that has nothing to do with how you actually operate.",
    solution: "Only pay for what you use.",
    fix: "Our modular pricing lets you start with cards and add crypto or APMs as you grow. Your pricing adjusts to your setup, not the other way around."
  },
  {
    title: "Dumb Fraud Filters",
    problem: "Our biggest customers keep getting flagged as fraud.",
    description: "Legacy systems can't tell loyal high-value users from real fraud. Every large transaction becomes a false alarm.",
    solution: "Smart filters trained on high-risk data.",
    fix: "Our models know the difference between a whale and a fraudster; better accuracy, fewer false declines, and more revenue kept."
  }
]

const ProblemsAndSolutions: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const handleMouseEnter = (idx: number) => {
    setFlippedCards(prev => new Set(prev).add(idx))
  }

  const handleMouseLeave = (idx: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      newSet.delete(idx)
      return newSet
    })
  }

  return (
    <section className="py-24 px-8 bg-white inter-400">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl text-center mb-20 inter-500 text-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          The Problems We Solved
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative  w-full inter-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <motion.div
                className="relative w-full h-[28rem] md:h-[32rem] cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards.has(idx) ? 180 : 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Front Face - Problem */}
                <div
                  className="absolute w-full h-full bg-white rounded-2xl shadow-lg border-2 border-brand-muted/20 flex flex-col p-6 md:p-8 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="mb-6 flex-shrink-0">
                    <h3 className="text-xl md:text-2xl leading-tight line-clamp-2 inter-400 text-brand">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mb-6 flex-shrink-0">
                    <p className="text-lg md:text-xl italic leading-relaxed line-clamp-2 text-brand">
                      &quot;{item.problem}&quot;
                    </p>
                  </div>

                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base leading-relaxed h-full max-h-full text-brand-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 border-t border-brand-muted/20 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm bg-brand-cream px-4 py-2 rounded-full border border-brand-muted/20 text-brand-muted">
                        Hover to reveal solution →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Face - Solution */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-[#2B1E17] via-[#4A3A2E] to-[#2B1E17] rounded-2xl shadow-2xl flex flex-col p-6 md:p-8 border-2 border-[#C9A24D]/30 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="mb-6 flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-white uppercase bg-[#C9A24D]/20 px-3 py-1 rounded-full border border-[#C9A24D]/30">
                        Our Fix
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl leading-tight line-clamp-2 inter-400" style={{ color: '#C9A24D' }}>
                      {item.solution}
                    </h4>
                  </div>

                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base leading-relaxed h-full max-h-full" style={{ color: '#F8F6F3' }}>
                      {item.fix}
                    </p>
                  </div>

                  <div className="flex-shrink-0 border-t border-[#C9A24D]/30 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm tracking-wide bg-[#C9A24D]/20 px-4 py-2 rounded-full border border-[#C9A24D]/30 text-white">
                        Hover away to see problem
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemsAndSolutions
