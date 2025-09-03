'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Users } from 'lucide-react'

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  // Transform scroll progress to chart animation
  const chartOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const chartScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  // Chart background with animated paths
  const AnimatedChart = () => (
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
    <div ref={containerRef} className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Navigation Sidebar */}
      <div className="fixed left-20 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-8 pl-4">
          <div className="writing-mode-vertical text-md tracking-wider text-gray-600 rotate-180 cursor-pointer hover:text-gray-900" style={{ writingMode: 'vertical-rl' }}>
            STORY
          </div>
          <div className="writing-mode-vertical text-md tracking-wider text-gray-600 rotate-180 cursor-pointer hover:text-gray-900" style={{ writingMode: 'vertical-rl' }}>
            OUR TEAM
          </div>
          <div className="writing-mode-vertical text-md tracking-wider text-gray-600 rotate-180 cursor-pointer hover:text-gray-900" style={{ writingMode: 'vertical-rl' }}>
            PARTNERS
          </div>
        </div>
      </div>

      {/* Section 1: State-of-the-art Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
        <div
          className="border p-8 max-w-7xl w-full mx-4 flex flex-col items-center"
          style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
        >
          <AnimatedChart />

          <motion.div
            className="relative z-10 w-full max-w-5xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.h1
              className="mx-auto leading-tight mb-12 max-w-full"
              style={{ fontFamily: "'OC Mikola', sans-serif", fontSize: "clamp(2rem, 14vw, 9rem)" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>A state-of-the-art </span>
              <br />
              <span style={{ whiteSpace: 'nowrap' }}>liquidity hub built </span>
              <br />
              <span style={{ whiteSpace: 'nowrap' }}>to forge the new </span>
              <br />
              <span style={{ whiteSpace: 'nowrap' }}>financial frontier</span>
            </motion.h1>
          </motion.div>
        </div>

        <div
        className="border p-8 max-w-7xl w-full mx-4 mt-8 flex flex-col items-end"
        style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
      >
        <motion.div
          className="relative z-10 w-full max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-lg max-w-xl leading-relaxed text-gray-700 text-right w-full p-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            Effortlessly unlock liquidity &<br/>
            boost your capital efficiency.
          </motion.p>
        </motion.div>
      </div>

      </section>


      {/* Section 2: Decentralized Protocol with Logo */}
      <section className="min-h-screen flex items-center relative px-8">
        <AnimatedChart />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              A decentralized, algorithmic protocol for lending, borrowing, and staking assets, featuring robust design and enhanced security.
            </h2>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Governed by HTM token holders and grounded on the principle of inclusivity, setting new industry standards.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 80, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.path 
                  d="M100 30L60 170h20l20-70 20 70h20L100 30z" 
                  fill="currentColor"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Product Suite */}
      <section className="min-h-screen flex items-center relative px-8">
        <AnimatedChart />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="mb-12"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="60" y1="10" x2="60" y2="35" stroke="currentColor" strokeWidth="2"/>
                  <line x1="60" y1="85" x2="60" y2="110" stroke="currentColor" strokeWidth="2"/>
                  <line x1="10" y1="60" x2="35" y2="60" stroke="currentColor" strokeWidth="2"/>
                  <line x1="85" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Hatom delivers a powerful suite of DeFi products, crafting a seamless ecosystem.
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
              Each of these products, backed by top-tier security audits, guarantees a secure and reliable user experience.
            </p>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 space-y-12"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex items-start space-x-6 p-8 rounded-lg bg-gray-50/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 250, 251, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-8 h-8 mt-2 text-black flex-shrink-0" />
              <p className="text-lg md:text-xl leading-relaxed">
                Gain access to sustainable yield generated through various revenue streams, ensuring consistent long-term growth.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-lg bg-gray-50/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 250, 251, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                Discover seamless navigation with our user-friendly and intuitively designed products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Section 4: Our Team */}
      <section className="min-h-screen flex items-center justify-center relative px-8">
        <AnimatedChart />
        
        <motion.div
          className="text-center relative z-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.h2 
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-[0.8] tracking-tight mb-16"
            initial={{ scale: 0.8, y: 100 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-200px" }}
          >
            OUR TEAM
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A dedicated team, driven by the common goal of creating the infrastructure to disrupt existing financial barriers.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 px-8 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ahmed Serghini", role: "Chief Executive Officer" },
              { name: "Franco Scucchiero", role: "Chief Technology Officer" },
              { name: "Ramiro Vignolo", role: "Head of Engineering" },
              { name: "Ariel Chang", role: "VP of Engineering" },
              { name: "Pablo Altamura", role: "Senior Blockchain Engineer" },
              { name: "Carlos Alvarez", role: "Senior Blockchain Engineer" },
              { name: "Federico Cavazzoli", role: "Senior Blockchain Engineer" },
              { name: "Rey Almicar", role: "Senior Backend Engineer" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-8 h-8 text-gray-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-wider">MORE TEAM</h3>
          </motion.div>
        </div>
      </section>


      {/* Section 5: Partners */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Backers and Security Partners
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-16">
              We are joined by a vast network of partners ready to drive forward our vision and innovate the industry.
            </p>
            
            {/* Partner logos placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-8 h-8 bg-gray-300 rounded" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Section 6: End CTA Section */}
      <section className="py-32 px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 1000 600" className="opacity-10">
            <motion.path
              d="M0,300 Q250,200 500,300 T1000,300"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-12 leading-relaxed">
              Access our diverse range of assets and brand visuals.
            </h2>
            
            <motion.button
              className="bg-white text-black px-12 py-4 rounded-lg font-bold text-lg tracking-wider mb-16 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              HATOM MEDIA KIT
            </motion.button>
            
            <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
              Embark on a revolutionary financial journey fueled by abundant liquidity, diverse utility, and real yields. Unlock an unparalleled DeFi experience that perfectly blends top-tier security with seamless user interaction.
            </p>
            
            <motion.button
              className="bg-gray-800 text-white px-12 py-4 rounded-lg font-bold text-lg tracking-wider hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              HATOM APP
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-400 mb-4">Copyright Hatom 2024</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>Terms</span>
            <div className="flex space-x-2">
              {['En', 'Fr', 'Zh', 'Ko', 'Pt', 'Ro', 'Es'].map((lang) => (
                <button key={lang} className="hover:text-white transition-colors">
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
