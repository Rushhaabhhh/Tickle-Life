'use client'

import React, { useRef } from 'react'
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
      className="min-h-screen bg-transparent text-brand relative overflow-x-hidden inter-400"
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
