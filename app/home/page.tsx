'use client'

import React, { useState, useRef } from 'react'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import ProblemsAndSolutions from './components/ProblemsAndSolutions'
import FeaturesReality from './components/FeaturesReality'
import Testimonials from './components/Testimonials'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import Modal from './components/Modal'
import TrustAndSupport from './components/TrustAndSupport'

const PSPHomepage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const [showQualificationModal, setShowQualificationModal] = useState(false)
  const [showComplianceModal, setShowComplianceModal] = useState(false)

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-transparent text-[#2B1E17] relative overflow-x-hidden font-['IBM_Plex_Sans']"
      style={{ 
        '--title-color': '#2B1E17',
        '--body-color': '#4A3A2E', 
        '--accent-color': '#C9A24D'
      } as React.CSSProperties}
    >
      <Hero />
      <TrustAndSupport />
      <StorySection />
      <ProblemsAndSolutions />
      <FeaturesReality />
      <Testimonials />
      <Packages />
      <FAQ />

      {/* Qualification Modal */}
      <Modal isOpen={showQualificationModal} onClose={() => setShowQualificationModal(false)}>
        <h3 className="text-2xl font-bold mb-5 text-[#2B1E17] font-['Bebas_Neue'] tracking-wide">Quick Qualification Check</h3>
        <form className="space-y-5 text-[#4A3A2E]">
          <div>
            <label className="block mb-2 font-semibold text-[#2B1E17]">Business Type:</label>
            <select className="w-full p-3 border-2 border-[#4A3A2E] rounded-lg bg-white text-[#4A3A2E] focus:border-[#C9A24D] focus:outline-none" required>
              <option value="">Select...</option>
              <option>iGaming/Online Casino</option>
              <option>Forex/CFD Trading</option>
              <option>Adult Entertainment</option>
              <option>Cryptocurrency Exchange</option>
              <option>Other High-Risk</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-[#2B1E17]">Monthly Volume (USD):</label>
            <select className="w-full p-3 border-2 border-[#4A3A2E] rounded-lg bg-white text-[#4A3A2E] focus:border-[#C9A24D] focus:outline-none" required>
              <option value="">Select...</option>
              <option>$50K - $250K</option>
              <option>$250K - $1M</option>
              <option>$1M - $5M</option>
              <option>$5M+</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-[#2B1E17]">Primary Markets:</label>
            <select className="w-full p-3 border-2 border-[#4A3A2E] rounded-lg bg-white text-[#4A3A2E] focus:border-[#C9A24D] focus:outline-none" required>
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
            className="w-full bg-[#2B1E17] text-white py-4 rounded-lg font-semibold cursor-pointer hover:bg-[#4A3A2E] transition-colors font-['IBM_Plex_Sans']"
          >
            Check My Eligibility
          </button>
        </form>
      </Modal>

      {/* Compliance Modal */}
      <Modal isOpen={showComplianceModal} onClose={() => setShowComplianceModal(false)}>
        <h3 className="text-2xl font-bold mb-5 text-[#2B1E17] font-['Bebas_Neue'] tracking-wide">Compliance Certifications</h3>
        <div className="space-y-5 text-[#4A3A2E] text-center font-['IBM_Plex_Sans']">
          <div>
            <h4 className="text-lg font-semibold text-[#2B1E17]">🛡️ PCI DSS Level 1 Certified</h4>
            <p className="text-[#4A3A2E]">Highest level of payment card security compliance</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#2B1E17]">🏛️ Multi-Jurisdictional Licenses</h4>
            <p className="text-[#4A3A2E]">Licensed and regulated across 21+ jurisdictions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#2B1E17]">🔒 ISO 27001 Security Management</h4>
            <p className="text-[#4A3A2E]">International standard for information security</p>
          </div>
          <button className="bg-[#2B1E17] hover:bg-[#4A3A2E] text-white px-8 py-3 rounded-full font-semibold mt-5 cursor-pointer transition-colors font-['IBM_Plex_Sans']">
            Download Certificate Pack
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default PSPHomepage
