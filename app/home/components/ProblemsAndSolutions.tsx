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
    <section className="py-24 px-8 bg-white font-['IBM_Plex_Sans']">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-20 tracking-tight font-['Bebas_Neue']"
          style={{ color: '#2B1E17' }}
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
              className="relative perspective-1000 w-full font-['IBM_Plex_Sans']"
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
                  className="absolute w-full h-full bg-white rounded-2xl shadow-lg border-2 border-[#4A3A2E]/20 flex flex-col p-6 md:p-8 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="mb-6 flex-shrink-0">
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight line-clamp-2 font-['Bebas_Neue']" style={{ color: '#2B1E17' }}>
                      {item.title}
                    </h3>
                  </div>

                  <div className="mb-6 flex-shrink-0">
                    <p className="text-lg md:text-xl font-light italic leading-relaxed line-clamp-2" style={{ color: '#2B1E17' }}>
                      "{item.problem}"
                    </p>
                  </div>

                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base leading-relaxed h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#4A3A2E]/30 scrollbar-track-transparent max-h-full" style={{ color: '#4A3A2E' }}>
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 border-t border-[#4A3A2E]/20 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm font-medium tracking-wide bg-[#F8F6F3] px-4 py-2 rounded-full border border-[#4A3A2E]/20" style={{ color: '#4A3A2E' }}>
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
                      <span className="text-xs font-bold tracking-widest uppercase bg-[#C9A24D]/20 px-3 py-1 rounded-full border border-[#C9A24D]/30">
                        Our Fix
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight line-clamp-2 font-['Bebas_Neue']" style={{ color: '#C9A24D' }}>
                      {item.solution}
                    </h4>
                  </div>

                  <div className="mb-8 flex-1 min-h-0">
                    <p className="text-sm md:text-base leading-relaxed h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#C9A24D]/50 scrollbar-track-transparent/30 max-h-full" style={{ color: '#F8F6F3' }}>
                      {item.fix}
                    </p>
                  </div>

                  <div className="flex-shrink-0 border-t border-[#C9A24D]/30 pt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-xs md:text-sm font-medium tracking-wide bg-[#C9A24D]/20 px-4 py-2 rounded-full border border-[#C9A24D]/30" style={{ color: '#C9A24D' }}>
                        Hover away to see problem ←
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
      </div>
    </section>
  )
}

export default ProblemsAndSolutions
