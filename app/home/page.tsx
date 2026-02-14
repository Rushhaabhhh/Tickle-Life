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
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { faqSchema } from '@/app/lib/schemas'

// FAQ data matching the FAQ component
const FAQ_DATA = [
  {
    question: "How are your rates so much lower?",
    answer: "You only pay for what you use. No bloated bundles, no fixed pricing traps. Add or remove payment methods anytime; pricing adjusts automatically."
  },
  {
    question: "How fast can we go live?",
    answer: "Depends how fast you move. With complete docs and a ready dev team, some merchants go live in under a week. Two weeks if things get messy."
  },
  {
    question: "Do you work in my industry?",
    answer: "If you're licensed and compliant, probably yes. We specialise in iGaming, Forex, and Adult, but also support dating platforms, crypto brokerages, and more."
  },
  {
    question: "Do I have to switch everything at once?",
    answer: "No. Start with 20% of your volume. Test us. Compare results. Smart merchants always keep backup processors."
  },
  {
    question: "How long does approval take?",
    answer: "48 hours for qualification, then up to a week for integration and testing. Fast but never at the cost of compliance."
  },
  {
    question: "How do I get started?",
    answer: "A valid license, clean compliance record, and quality traffic. If you've got those, we move fast."
  }
]

const PSPHomepage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_DATA)),
        }}
        suppressHydrationWarning
      />

      <div
        ref={containerRef}
        className="min-h-screen bg-transparent text-brand relative overflow-x-hidden inter-400"
      >
        <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <Breadcrumbs />
        </div>

        <Hero />
        <TrustAndSupport />
        <StorySection />
        <ProblemsAndSolutions />
        <FeaturesReality />
        <Testimonials />
        <Packages />
        <FAQ />
      </div>
    </>
  )
}

export default PSPHomepage
