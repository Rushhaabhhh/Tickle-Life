'use client'

import React, { useState } from 'react'
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
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-20 tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          3 Problems our clients brought to us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative perspective-1000 w-full"
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
                  className="absolute w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col p-6 md:p-8 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  {/* Title */}
                  <div className="mb-6 flex-shrink-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight tracking-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Problem Quote */}
                  <div className="mb-6 flex-shrink-0">
                    <p className="text-lg md:text-xl text-gray-900 font-light italic leading-relaxed line-clamp-2">
                      "{item.problem}"
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-full">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="flex-shrink-0 border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm font-medium text-gray-500 tracking-wide bg-gray-50 px-4 py-2 rounded-full">
                        Hover to reveal solution →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Face - Solution */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl flex flex-col p-6 md:p-8 border-2 border-gray-800/50 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Solution Header */}
                  <div className="mb-6 flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold tracking-widest text-gray-300 uppercase bg-white/10 px-3 py-1 rounded-full">
                        Our Fix
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight line-clamp-2">
                      {item.solution}
                    </h4>
                  </div>

                  {/* Solution Description */}
                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent/30 max-h-full">
                      {item.fix}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="flex-shrink-0 border-t border-white/20 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide bg-white/10 px-4 py-2 rounded-full border border-white/20">
                        Hover away to see problem ←
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))
        }
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: currentColor;
          border-radius: 9999px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default ProblemsAndSolutions
