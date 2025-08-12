'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface EligibilityResult {
  status: string
  description: string
  onboarding: string
  approval: string
  setup: string
}

interface IndustryData {
  icon: string
  title: string
  badges: string[]
  feature: string
  approvalRate: string
}

interface CostResult {
  mdr: number
  monthly: number
  setup: number
  reserve: number
  factors: string[]
}

const IndustriesPage: React.FC = () => {
  const [selectedVertical, setSelectedVertical] = useState<string>('')
  const [showMoreVerticals, setShowMoreVerticals] = useState<boolean>(false)
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult | null>(null)
  const [costResult, setCostResult] = useState<CostResult | null>(null)
  const [activeModal, setActiveModal] = useState<string>('')
  
  const heroRef = useRef<HTMLElement>(null)
  const tilesRef = useRef<HTMLDivElement>(null)
  const outcomeRef = useRef<HTMLElement>(null)

  const industryData: Record<string, IndustryData> = {
    igaming: {
      icon: '🎰',
      title: 'iGaming',
      badges: ['MGA Licensed', 'UKGC Approved', 'EU Compliant'],
      feature: 'Real-time transaction monitoring with automated responsible gaming controls and jurisdiction-specific routing',
      approvalRate: '95% approval rate in regulated EU markets'
    },
    forex: {
      icon: '📈',
      title: 'Forex & CFD Trading',
      badges: ['FCA Regulated', 'CySEC', 'ASIC'],
      feature: 'Instant funding with advanced fraud detection tailored for high-frequency trading patterns',
      approvalRate: '92% approval rate for FCA-regulated brokers'
    },
    adult: {
      icon: '🔞',
      title: 'Adult Entertainment',
      badges: ['Age Verified', 'GDPR', 'PCI L1'],
      feature: 'Privacy-focused processing with enhanced chargeback protection and discrete billing descriptors',
      approvalRate: '88% approval rate with specialized routing'
    }
  }

  const moreIndustries = [
    { id: 'cryptocurrency', icon: '🪙', title: 'Cryptocurrency', subtitle: 'Exchange & wallet services' },
    { id: 'nutraceuticals', icon: '💊', title: 'Nutraceuticals', subtitle: 'Health supplements & vitamins' },
    { id: 'cbd', icon: '🌿', title: 'CBD/Cannabis', subtitle: 'Legal cannabis products' },
    { id: 'travel', icon: '✈️', title: 'High-Risk Travel', subtitle: 'Tours & high-risk destinations' },
    { id: 'dating', icon: '💕', title: 'Dating & Social', subtitle: 'Dating apps & social platforms' },
    { id: 'telemarketing', icon: '📞', title: 'Telemarketing', subtitle: 'Phone & direct sales' },
    { id: 'ecigarettes', icon: '💨', title: 'E-cigarettes', subtitle: 'Vaping products & accessories' },
    { id: 'weightloss', icon: '⚖️', title: 'Weight Loss', subtitle: 'Diet & fitness products' }
  ]


  const checkEligibility = () => {
    const geoSelect = document.getElementById('geoSelect') as HTMLSelectElement
    const verticalSelect = document.getElementById('verticalSelect') as HTMLSelectElement
    
    const geo = geoSelect?.value
    const vertical = verticalSelect?.value
    
    if (!geo || !vertical) {
      alert('Please select both geography and vertical')
      return
    }

    // Simulate eligibility check
    const eligibilityData: Record<string, EligibilityResult> = {
      'eu-igaming': { status: 'Eligible', description: 'Full processing available with MGA licensing', onboarding: '3-5 days', approval: '98%', setup: '$1,500' },
      'uk-forex': { status: 'Eligible', description: 'FCA regulated brokers welcome', onboarding: '5-7 days', approval: '95%', setup: '$2,000' },
      'india-adult': { status: 'Restricted', description: 'Limited availability with enhanced compliance', onboarding: '10-14 days', approval: '70%', setup: '$5,000' },
      'gcc-igaming': { status: 'Not Eligible', description: 'Not permitted in this jurisdiction', onboarding: 'N/A', approval: 'N/A', setup: 'N/A' }
    }
    
    const key = `${geo}-${vertical}`
    const result = eligibilityData[key] || { 
      status: 'Eligible with Conditions', 
      description: 'Processing available with enhanced due diligence',
      onboarding: '7-10 days',
      approval: '85%',
      setup: '$3,000'
    }
    
    setEligibilityResult(result)
  }

  const calculateCosts = () => {
    const industrySelect = document.getElementById('simIndustry') as HTMLSelectElement
    const volumeSelect = document.getElementById('simVolume') as HTMLSelectElement
    const paymentSelect = document.getElementById('simPaymentMethod') as HTMLSelectElement
    
    const industry = industrySelect?.value
    const volume = parseInt(volumeSelect?.value || '0')
    const paymentMethod = paymentSelect?.value
    
    if (!industry || !volume || !paymentMethod) {
      alert('Please fill all fields')
      return
    }

    // Industry risk multipliers
    const industryRates: Record<string, { base: number; risk: number }> = {
      'igaming': { base: 3.2, risk: 1.2 },
      'forex': { base: 2.8, risk: 1.1 },
      'adult': { base: 4.5, risk: 1.5 },
      'cryptocurrency': { base: 5.2, risk: 1.8 },
      'nutraceuticals': { base: 3.8, risk: 1.3 },
      'cbd': { base: 6.2, risk: 2.0 },
      'travel': { base: 3.5, risk: 1.2 },
      'dating': { base: 4.0, risk: 1.4 },
      'telemarketing': { base: 4.8, risk: 1.6 },
      'ecigarettes': { base: 5.8, risk: 1.9 },
      'weightloss': { base: 4.2, risk: 1.4 }
    }

    // Payment method modifiers
    const paymentRates: Record<string, number> = {
      'cards': 1.0,
      'apms': 0.85,
      'crypto': 1.3,
      'bank_transfer': 0.6,
      'e_wallets': 0.9,
      'mixed': 0.8
    }

    // Volume discounts
    const volumeDiscount = volume > 5000000 ? 0.85 : volume > 1000000 ? 0.9 : volume > 500000 ? 0.95 : 1.0

    const baseRate = industryRates[industry]?.base || 3.5
    const finalRate = baseRate * (paymentRates[paymentMethod] || 1.0) * volumeDiscount
    const monthlyCost = volume * finalRate / 100
    const setupCost = (industryRates[industry]?.risk || 1.0) * 1500
    const reserveRate = Math.min((industryRates[industry]?.risk || 1.0) * 3, 15)

    const industryFactors: Record<string, string[]> = {
      'igaming': ['🎯 Gaming license requirements', '🌍 Multi-jurisdiction processing', '🛡️ Responsible gaming controls'],
      'forex': ['📈 High-frequency trading support', '⚡ Instant funding capabilities', '🛡️ Enhanced fraud detection'],
      'adult': ['🔞 Age verification systems', '💳 Discrete billing descriptors', '🛡️ Chargeback protection']
    }

    const factors = industryFactors[industry] || ['🎯 Industry risk assessment', '🌍 Geographic processing costs', '🛡️ Enhanced fraud protection']

    setCostResult({
      mdr: finalRate,
      monthly: monthlyCost,
      setup: setupCost,
      reserve: reserveRate,
      factors
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_100%)] text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 18" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern
                id="bgPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <polygon fill="currentColor" points="0,20 20,0 20,20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgPattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
          >
            Tailored payment solutions for your industry&apos;s compliance and growth
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            See how we optimize approval and reliability for each high-risk vertical
          </motion.p>
        </div>
      </section>

      {/* Industries Tiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900"
          >
            Choose Your Industry
          </motion.h2>
          
          <div ref={tilesRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Main Industry Tiles */}
            {Object.entries(industryData).map(([key, data], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white border-3 border-slate-200 rounded-2xl p-8 text-black text-center cursor-pointer relative overflow-hidden group hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                onClick={() => setActiveModal('qualification')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="text-6xl mb-5">{data.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{data.title}</h3>
                
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {data.badges.map((badge, badgeIndex) => (
                    <motion.span
                      key={badge}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.1 * badgeIndex }}
                      className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl mb-5 border-l-4 border-blue-500">
                  <strong className="text-blue-900">Key Feature:</strong> {data.feature}
                </div>
                
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl mb-6 font-semibold text-lg">
                  ⚡ {data.approvalRate}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold w-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveModal('qualification')
                  }}
                >
                  Get qualified for {data.title}
                </motion.button>
              </motion.div>
            ))}

            {/* More Industries Tile */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center cursor-pointer relative hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              onClick={() => setShowMoreVerticals(!showMoreVerticals)}
            >
              <div className="text-6xl mb-5">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">More Industries</h3>
              
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Multi-Licensed</span>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Specialized</span>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl mb-5 border-l-4 border-blue-500 text-black">
                <strong className="text-blue-900">Explore:</strong> Click to see all supported high-risk verticals with tailored compliance solutions
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl mb-6 font-semibold text-lg">
                ⚡ Industry-specific optimization available
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold w-full transition-colors"
              >
                View All Industries
              </motion.button>
              
              <AnimatePresence>
                {showMoreVerticals && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl mt-3 z-20"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {moreIndustries.map((industry, index) => (
                        <motion.div
                          key={industry.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-3 cursor-pointer rounded-lg hover:bg-slate-100 transition-colors text-left"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedVertical(industry.id)
                            setShowMoreVerticals(false)
                          }}
                        >
                          <div className="font-semibold text-blue-900">
                            {industry.icon} {industry.title}
                          </div>
                          <div className="text-sm text-slate-600">{industry.subtitle}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section ref={outcomeRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900"
          >
            Industry Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                stat: '98%',
                statDesc: 'Approval rate for EU iGaming operators',
                testimonial: '"TrustPay\'s understanding of MGA requirements and their technical integration made our European expansion seamless. Our payment success rates increased by 23% after switching."',
                author: '— Sarah Johnson, CTO at EuroSlots Gaming'
              },
              {
                stat: '$2.3B',
                statDesc: 'Processed for Forex brokers in 2024',
                testimonial: '"The instant funding capability and their specialized fraud protection for trading accounts has been game-changing. We\'ve reduced funding friction by 40%."',
                author: '— Marcus Chen, Head of Payments at TradePro'
              },
              {
                stat: '0.3%',
                statDesc: 'Chargeback rate for adult merchants',
                testimonial: '"Their discrete billing and enhanced chargeback protection tools helped us maintain excellent payment metrics while growing our subscriber base."',
                author: '— Alex Rivera, Director of Operations at ContentHub'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="outcome-card bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-5 rounded-2xl text-center mb-6"
                >
                  <div className="text-4xl font-bold mb-2">{story.stat}</div>
                  <div className="text-lg opacity-90">{story.statDesc}</div>
                </motion.div>
                
                <div className="text-lg italic text-slate-600 mb-5 leading-relaxed">
                  {story.testimonial}
                </div>
                
                <div className="font-semibold text-blue-900 mb-3">{story.author}</div>
                
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#case-study"
                  className="text-blue-500 hover:text-blue-700 font-semibold hover:underline transition-colors"
                >
                  See full case study →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900"
          >
            Compliance & FAQ
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                question: 'Can I onboard this vertical in my geo?',
                answer:
                  'Eligibility varies by geography and business model. We maintain licensing and compliance requirements for each region and can provide instant qualification checking.',
              },
              {
                question: 'Which flows are disqualified?',
                answer:
                  'We maintain strict compliance standards. Certain traffic sources, models, or jurisdictions may be restricted based on regulations and risk assessment.',
              },
              {
                question: 'What documentation do I need?',
                answer:
                  'Requirements vary by industry and geography. We provide a comprehensive checklist and dedicated compliance support during onboarding.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500"
              >
                <div className="text-xl font-bold text-blue-900 mb-3">
                  {item.question}
                </div>
                <p className="text-slate-700 mb-4">{item.answer}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                  onClick={() => setActiveModal(item.question)}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Widget */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-center mb-4 text-blue-900">Check Your Eligibility</h3>
            <p className="text-center text-slate-600 mb-10 text-lg">
              Pick your geography and vertical to see eligibility, onboarding time, and requirements
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Target Geography:</label>
                <select 
                  id="geoSelect"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors cursor-pointer text-black"
                >
                  <option value="">Select region...</option>
                  <option value="eu">European Union</option>
                  <option value="uk">United Kingdom</option>
                  <option value="india">India</option>
                  <option value="gcc">GCC Countries</option>
                  <option value="latam">Latin America</option>
                  <option value="apac">Asia Pacific</option>
                  <option value="na">North America</option>
                </select>
              </div>
              
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Business Vertical:</label>
                <select 
                  id="verticalSelect"
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors cursor-pointer text-black"
                >
                  <option value="">Select industry...</option>
                  <option value="igaming">iGaming</option>
                  <option value="forex">Forex & CFD Trading</option>
                  <option value="adult">Adult Entertainment</option>
                  <option value="cryptocurrency">Cryptocurrency</option>
                  <option value="nutraceuticals">Nutraceuticals</option>
                  <option value="cbd">CBD/Cannabis</option>
                  <option value="travel">High-Risk Travel</option>
                  <option value="dating">Dating & Social</option>
                  <option value="telemarketing">Telemarketing</option>
                  <option value="ecigarettes">E-cigarettes</option>
                  <option value="weightloss">Weight Loss</option>
                </select>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={checkEligibility}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-5 rounded-full text-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Check Eligibility & Requirements
            </motion.button>
            
            <AnimatePresence>
              {eligibilityResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-l-4 border-emerald-500"
                >
                  <div className="text-center mb-6">
                    <div className={`text-2xl font-bold mb-2 ${
                      eligibilityResult.status.includes('Eligible') ? 'text-emerald-600' : 
                      eligibilityResult.status.includes('Restricted') ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {eligibilityResult.status}
                    </div>
                    <p className="text-slate-700">{eligibilityResult.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                    <div className="bg-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">{eligibilityResult.onboarding}</div>
                      <div className="text-emerald-800 font-medium">Onboarding Time</div>
                    </div>
                    <div className="bg-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">{eligibilityResult.approval}</div>
                      <div className="text-emerald-800 font-medium">Approval Rate</div>
                    </div>
                    <div className="bg-white p-5 rounded-xl text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">{eligibilityResult.setup}</div>
                      <div className="text-emerald-800 font-medium">Setup Fee</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl">
                    <h5 className="text-blue-900 font-semibold mb-4">Required Documentation:</h5>
                    <ul className="space-y-2">
                      {['Valid business license', 'Regulatory compliance certificates', 'Financial statements (last 6 months)', 'Risk management documentation'].map((req, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-slate-700"
                        >
                            <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 4.293a1 1 0 00-1.414-1.414l-8 8a1 1 0 01-.707.293H4a1 1 0 100 2h3a1 1 0 00.707-.293l8-8z" />
                            </svg>
                            {req}
                        </motion.li>
                        ))}
                    </ul>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </motion.div>
        </div>
        </section>
        
        {/* Payment Cost Simulator Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-500 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Payment Cost Simulator
            </motion.h2>

            <div className="bg-white text-black rounded-3xl p-10 shadow-xl">
              <p className="text-center text-lg text-slate-600 mb-8">
                Get instant estimates for MDR and monthly costs based on your industry,
                volume, and payment methods
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block font-semibold mb-2">Industry:</label>
                  <select
                    id="simIndustry"
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 cursor-pointer"
                  >
                    <option value="">Select industry...</option>
                    {[
                      'igaming',
                      'forex',
                      'adult',
                      'cryptocurrency',
                      'nutraceuticals',
                      'cbd',
                      'travel',
                      'dating',
                      'telemarketing',
                      'ecigarettes',
                      'weightloss',
                    ].map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Monthly Volume (USD):
                  </label>
                  <select
                    id="simVolume"
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 cursor-pointer"
                  >
                    <option value="">Select volume...</option>
                    <option value="50000">$50K - $100K</option>
                    <option value="200000">$100K - $500K</option>
                    <option value="750000">$500K - $1M</option>
                    <option value="2500000">$1M - $5M</option>
                    <option value="7500000">$5M - $10M</option>
                    <option value="15000000">$10M+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Primary Payment Method:
                  </label>
                  <select
                    id="simPaymentMethod"
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 cursor-pointer"
                  >
                    <option value="">Select payment method...</option>
                    <option value="cards">Credit/Debit Cards</option>
                    <option value="apms">Alternative Payment Methods</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="e_wallets">E-Wallets</option>
                    <option value="mixed">Mixed Payment Stack</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateCosts}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-5 rounded-full text-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Calculate My Costs
              </motion.button>

              <AnimatePresence>
                {costResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8"
                  >
                    <h4 className="text-center text-2xl font-bold text-blue-900 mb-6">
                      Your Estimated Processing Costs
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                      <div className="bg-blue-50 p-5 rounded-xl text-center border-2 border-blue-200">
                        <div className="text-lg font-semibold">MDR</div>
                        <div className="text-2xl font-bold">
                          {costResult.mdr.toFixed(2)}%
                        </div>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-xl text-center border-2 border-blue-200">
                        <div className="text-lg font-semibold">Monthly Cost</div>
                        <div className="text-2xl font-bold">
                          ${costResult.monthly.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-xl text-center border-2 border-blue-200">
                        <div className="text-lg font-semibold">Setup</div>
                        <div className="text-2xl font-bold">
                          ${costResult.setup.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-5 rounded-xl text-center border-2 border-blue-200">
                        <div className="text-lg font-semibold">Reserve</div>
                        <div className="text-2xl font-bold">
                          {costResult.reserve.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h5 className="font-semibold mb-4 text-blue-900">
                        Cost Factors for Your Industry:
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {costResult.factors.map((factor, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span>{factor.split(' ')[0]}</span>
                            <span>{factor.substring(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
    </div>
  )
}

export default IndustriesPage;   