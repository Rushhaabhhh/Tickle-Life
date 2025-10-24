'use client'

import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import AnimatedChart from './AnimatedChart'

interface HeroProps {
  scrollToCalculator: () => void
  chartOpacity: MotionValue<number>
  chartScale: MotionValue<number>
}

const Hero: React.FC<HeroProps> = ({ scrollToCalculator, chartOpacity, chartScale }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
      <div
        className="border p-8 max-w-7xl w-full mx-4 flex flex-col items-center"
        style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
      >
        <AnimatedChart chartOpacity={chartOpacity} chartScale={chartScale} />

        <motion.div
          className="relative z-10 w-full max-w-6xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.h1
            className="mx-auto leading-tight mb-12 max-w-full"
            style={{ fontFamily: "'OC Mikola', sans-serif", fontSize: "clamp(1.5rem, 8vw, 4.5rem)"}}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            While you&apos;re stuck paying <span className="text-red-600">4.5%</span>, our clients average <span className="text-green-600">2.1%</span>.<br />
            &apos;Cause we don&apos;t punish risk — we understand it.
          </motion.h1>
        </motion.div>
      </div>

      <div
        className="border p-8 max-w-7xl w-full mx-4 mt-8 flex flex-col items-center"
        style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
      >
        <motion.div
          className="relative z-10 w-full max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-700 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            Try our calculator to see what you could be paying.
          </motion.p>
          <motion.button
            onClick={scrollToCalculator}
            className="bg-black text-white px-12 py-4 rounded-full text-lg font-semibold transition-transform transform hover:-translate-y-1 shadow-lg cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Try Calculator →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
