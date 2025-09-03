'use client'

import React, {useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, TrendingUp, Shield, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to chart animation
  const chartOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const chartScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  // SVG Chart Component
  const ChartBackground = () => (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 800 400"
      className="absolute inset-0 opacity-20"
      style={{ opacity: chartOpacity, scale: chartScale }}
    >
      <motion.path
        d="M0,350 Q100,300 200,250 T400,200 T600,150 T800,100"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-gray-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,380 Q150,330 300,280 T600,230 T800,180"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-gray-300"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
      />
      <circle cx="700" cy="120" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-200" opacity="0.5" />
    </motion.svg>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-8 pl-4">
          <div className="writing-mode-vertical text-sm tracking-wider text-gray-600 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            STORY
          </div>
          <div className="writing-mode-vertical text-sm tracking-wider text-gray-900 font-medium rotate-180" style={{ writingMode: 'vertical-rl' }}>
            OUR TEAM
          </div>
          <div className="writing-mode-vertical text-sm tracking-wider text-gray-600 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            PARTNERS
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 right-0 z-30 flex items-center justify-between p-6 w-full">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M16 4L8 28h4l6-18 6 18h4L16 4z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <span>Sound</span>
          <span className="bg-black text-white px-2 py-1 rounded">0</span>
          <button className="bg-black text-white px-4 py-2 rounded text-xs">MENU</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section - OUR TEAM */}
        <section className="min-h-screen flex items-center justify-center relative px-8">
          <ChartBackground />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center z-10"
          >
            <motion.h1 
              className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              OUR TEAM
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mt-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A dedicated team, driven by the common goal of creating the infrastructure to disrupt existing financial barriers.
            </motion.p>
          </motion.div>
        </section>

        {/* Product Suite Section */}
        <section className="min-h-screen flex items-center px-8 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mb-8">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="4" x2="32" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="44" x2="32" y2="60" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="2"/>
                  <line x1="44" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Hatom delivers a powerful suite of DeFi products, crafting a seamless ecosystem.
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Each of these products, backed by top-tier security audits, guarantees a secure and reliable user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <TrendingUp className="w-8 h-8 mb-4 text-gray-700" />
                <p className="text-lg leading-relaxed">
                  Gain access to sustainable yield generated through various revenue streams, ensuring consistent long-term growth.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <Shield className="w-8 h-8 mb-4 text-gray-700" />
                <p className="text-lg leading-relaxed">
                  Discover seamless navigation with our user-friendly and intuitively designed products.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Protocol Description Section */}
        <section className="min-h-screen flex items-center px-8 py-20 relative">
          <ChartBackground />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium leading-relaxed">
                A decentralized, algorithmic protocol for lending, borrowing, and staking assets, featuring robust design and enhanced security.
              </h3>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Governed by HTM token holders and grounded on the principle of inclusivity, setting new industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-32 h-32">
                <svg viewBox="0 0 128 128" className="w-full h-full">
                  <path d="M64 16L32 112h16l12-48 12 48h16L64 16z" fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Liquidity Hub Section */}
        <section className="min-h-screen flex items-center justify-center px-8 relative">
          <ChartBackground />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8">
              A state-of-the-art
              <br />
              <span className="block">Liquidity hub built</span>
              <br />
              <span className="block">To forge the new</span>
              <br />
              <span className="block">Financial frontier</span>
            </h2>
          </motion.div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Ahmed Serghini", role: "Chief Executive Officer" },
                { name: "Franco Scucchiero", role: "Chief Technology Officer" },
                { name: "Ramiro Vignolo", role: "Head of Engineering" },
                { name: "Ariel Chang", role: "VP of Engineering" },
                { name: "Pablo Altamura", role: "Senior Blockchain Engineer" },
                { name: "Carlos Alvarez", role: "Senior Blockchain Engineer" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Access our diverse range of assets and brand visuals.
              </h2>
              
              <motion.button
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>HATOM MEDIA KIT</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <p className="text-lg text-gray-700 mt-8 max-w-2xl mx-auto">
                Embark on a revolutionary financial journey fueled by abundant liquidity, diverse utility, and real yields. Unlock an unparalleled DeFi experience that perfectly blends top-tier security with seamless user interaction.
              </p>
              
              <motion.button
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium mt-8 inline-flex items-center space-x-2 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>HATOM APP</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
