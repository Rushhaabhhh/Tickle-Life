'use client'

import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

const AnimatedChart: React.FC = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll()

  // Animate opacity and scale based on scroll position
  const chartOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const chartScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 800 400"
      className="absolute inset-0 opacity-20"
      style={{ opacity: chartOpacity, scale: chartScale }}
    >
      {/* Main curve */}
      <motion.path
        d="M0,350 Q100,300 200,250 T400,200 T600,150 T800,100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-gray-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Secondary curve */}
      <motion.path
        d="M0,380 Q150,330 300,280 T600,230 T800,180"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-gray-300"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
      />

      {/* Circle accent */}
      <circle
        cx="700"
        cy="120"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gray-200"
        opacity="0.5"
      />
    </motion.svg>
  )
}

export default AnimatedChart
