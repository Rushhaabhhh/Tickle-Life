'use client'

import React, { useState, useRef } from 'react'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import ProblemsAndSolutions from './components/ProblemsAndSolutions'
import FeaturesReality from './components/FeaturesReality'
import Testimonials from './components/Testimonials'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import TrustAndSupport from './components/TrustAndSupport'

const PSPHomepage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-transparent text-[#2B1E17] relative overflow-x-hidden font-['IBM_Plex_Sans']"
      style={{ 
        '--title-color': '#2B1E17',
        '--body-color': '#4A3A2E', 
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
    </div>
  )
}

export default PSPHomepage
