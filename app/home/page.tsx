'use client'

import React, { useState, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import StorySection from './components/Story-Lines'
import ProblemsAndSolutions from './components/ProblemsAndSolutions'
import FeaturesReality from './components/FeaturesReality'
import Testimonials from './components/Testimonials'
import Calculator from './components/Calculator'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import Modal from './components/Modal'
import TrustAndSupport from './components/TrustAndSupport'

const PSPHomepage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  const [showQualificationModal, setShowQualificationModal] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)

  const chartOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1])
  const chartScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black relative overflow-x-hidden">
      <Hero 
        scrollToCalculator={scrollToCalculator} 
        chartOpacity={chartOpacity} 
        chartScale={chartScale} 
      />
      
      <TrustAndSupport setShowQualificationModal={setShowQualificationModal} />

      <StorySection />
      
      <ProblemsAndSolutions />
      
      <FeaturesReality />
      
      <Testimonials />
      
      <Calculator setShowQualificationModal={setShowQualificationModal} />
      
      <Packages 
        setShowQualificationModal={setShowQualificationModal}
        scrollToCalculator={scrollToCalculator}
      />
      
      <FAQ />

      {/* Qualification Modal */}
      <Modal isOpen={showQualificationModal} onClose={() => setShowQualificationModal(false)}>
        <h3 className="text-2xl font-bold mb-5">Quick Qualification Check</h3>
        <form className="space-y-5 text-black">
          <div>
            <label className="block mb-2 font-semibold">Business Type:</label>
            <select className="w-full p-3 border-2 border-gray-300 rounded-lg" required>
              <option value="">Select...</option>
              <option>iGaming/Online Casino</option>
              <option>Forex/CFD Trading</option>
              <option>Adult Entertainment</option>
              <option>Cryptocurrency Exchange</option>
              <option>Other High-Risk</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Monthly Volume (USD):</label>
            <select className="w-full p-3 border-2 border-gray-300 rounded-lg" required>
              <option value="">Select...</option>
              <option>$50K - $250K</option>
              <option>$250K - $1M</option>
              <option>$1M - $5M</option>
              <option>$5M+</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Primary Markets:</label>
            <select className="w-full p-3 border-2 border-gray-300 rounded-lg" required>
              <option value="">Select...</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>India/GCC</option>
              <option>Latin America</option>
              <option>Multiple Regions</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg font-semibold cursor-pointer hover:bg-gray-900 transition-colors"
          >
            Check My Eligibility
          </button>
        </form>
      </Modal>

      {/* Compliance Modal */}
      <Modal isOpen={showComplianceModal} onClose={() => setShowComplianceModal(false)}>
        <h3 className="text-2xl font-bold mb-5">Compliance Certifications</h3>
        <div className="space-y-5 text-black text-center">
          <div>
            <h4 className="text-lg font-semibold">🛡️ PCI DSS Level 1 Certified</h4>
            <p className="text-gray-700">Highest level of payment card security compliance</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🏛️ Multi-Jurisdictional Licenses</h4>
            <p className="text-gray-700">Licensed and regulated across 21+ jurisdictions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🔒 ISO 27001 Security Management</h4>
            <p className="text-gray-700">International standard for information security</p>
          </div>
          <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-full font-semibold mt-5 cursor-pointer transition-colors">
            Download Certificate Pack
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default PSPHomepage
