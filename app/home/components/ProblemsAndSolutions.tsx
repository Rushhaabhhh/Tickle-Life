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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative h-[440px] perspective-1000"
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
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards.has(idx) ? 180 : 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Front Face - Problem */}
                <div
                  className="absolute w-full h-full bg-white rounded-2xl shadow-sm hover:shadow-xl p-10 flex flex-col justify-between border border-gray-200 transition-shadow duration-500"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="space-y-6">
                    
                    <h3 className="text-2xl font-medium text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-gray-900 font-light italic leading-relaxed">
                      &quot;{item.problem}&quot;
                    </p>
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                    <span className="text-xs text-gray-400 tracking-wide">Hover to reveal solution</span>
                  </div>
                </div>

                {/* Back Face - Solution */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl p-10 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                        Our Fix
                      </span>
                      
                    </div>
                    
                    <h4 className="text-2xl font-medium text-white leading-tight">
                      {item.solution}
                    </h4>
                    
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      {item.fix}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center pt-6 border-t border-white/10">
                    <span className="text-xs text-slate-300 tracking-wide">Hover away to see problem</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}

export default ProblemsAndSolutions
