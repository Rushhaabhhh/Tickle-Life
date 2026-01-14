'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Shield, Bitcoin, LockKeyhole, Landmark } from 'lucide-react'

// Updated 2x2 Featured Cards from Rapyd Industries page
const featuredCards = [
  {
    id: 'open-banking',
    title: 'Open Banking',
    description:
      'Direct bank-to-bank payments built for speed, security, and higher approval rates',
    icon: <Landmark className="w-14 h-14 text-black" />
  },
  {
    id: 'crypto',
    title: 'Crypto',
    description:
      'Zero chargebacks. Full transparency. We use blockchain rails to keep your on/off ramps clean, fast, and compliant.',
    icon: <Bitcoin className="w-14 h-14 text-black" />
  },
  {
    id: '3d-secure',
    title: '3D Secure Authentication',
    description:
      'Next-gen transaction security that adds an extra layer of protection — without slowing your checkout.',
    icon: <LockKeyhole className="w-14 h-14 text-black" />
  },
  {
    id: 'fraud',
    title: 'Fraud Protection',
    description:
      'Smart filters trained on high-risk data. We know the difference between a whale and a fraudster.',
    icon: <Shield className="w-14 h-14 text-black" />
  },
]

// Supported Payment Modes
const supportedPaymentModes = [
  { id: 'card-processing', name: 'Card Processing (default)', discount: 10, default: true },
  { id: 'local-apms', name: 'Local APMs', discount: 10 },
  { id: 'crypto-ramp', name: 'Crypto Ramp', discount: 10 },
  { id: 'geo-routing', name: 'Geo-specific Routing', discount: 10 },
  { id: 'fraud-logic', name: 'Custom Fraud Logic', discount: 10 },
]

// Advanced Features Cards
const advancedFeatures = [
  {
    title: 'Frictionless Integration',
    description:
      'You get a compliance checklist on day one. No waiting. No back-and-forth. Most merchants go live in under 2 weeks.'
  },
  {
    title: 'Smart Routing',
    description:
      'Your transactions shouldn’t depend on luck. Our routing adapts in real time to BIN, geo, and issuer signals — staying one step ahead of every decline.'
  },
  {
    title: 'Dashboards That Mean Business',
    description:
      'Approvals, declines, chargebacks, settlements — all visible, all exportable. Real-time data so you make decisions, not guesses.'
  }
]

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [customStack, setCustomStack] = useState(
    supportedPaymentModes.filter((m) => m.default)
  )
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  // Drag handlers
  const handleDragStart = (id: string) => setDraggedItem(id)
  const handleDragOver = (e: React.DragEvent) => e.preventDefault()
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (draggedItem) {
      const item = supportedPaymentModes.find((m) => m.id === draggedItem)
      if (item && !customStack.find((s) => s.id === item.id)) {
        setCustomStack([...customStack, item])
      }
    }
    setDraggedItem(null)
  }
  const removeFromStack = (id: string) =>
    setCustomStack(customStack.filter((item) => item.id !== id))
  const totalDiscount = customStack.reduce((sum, item) => sum + item.discount, 0)

  return (
    <section className="bg-white min-h-screen px-6 md:px-16 py-16">

      {/* Hero Section */}
      <motion.header
        className="min-h-[50vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ 
              color: '#3F9396',
              fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif'
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We solve your problem
          </motion.h1>
        </div>
      </motion.header>

      {/* Service Cards */}
      <motion.section
        className="max-w-7xl mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {featuredCards.map((card) => {
          const expanded = expandedCard === card.id
          return (
            <motion.a
              key={card.id}
              className="relative w-full h-[360px] rounded-2xl border border-[#72CFCA] overflow-hidden shadow-sm group"
              style={{ fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif' }}
              onClick={() => setExpandedCard(expanded ? null : card.id)}
              onMouseEnter={() => setExpandedCard(card.id)}
              onMouseLeave={() => setExpandedCard(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Card background with subtle gradient */}
              <div className="absolute inset-0 group-hover:bg-gradient-to-br group-hover:from-[#F0FAFB] group-hover:to-[#E3F8F7]"></div>
              
              {/* Sliding Title */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 z-10"
                style={{ 
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ y: "0%" }}
                animate={{ y: expanded ? "-80%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-3xl font-bold uppercase select-none" style={{ 
                  color: '#3F9396',
                  fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>{card.title}</h3>
              </motion.div>

              {/* Content overlay */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    key="content"
                    className="absolute inset-0 p-10 flex flex-col justify-center shadow-2xl rounded-2xl z-20"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,252,251,0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(114,207,202,0.3)'
                    }}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  >
                    <p className="text-lg leading-relaxed text-[#0C0C0C] select-text" style={{ fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif' }}>
                      {card.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon top right */}
              <div className="absolute top-12 right-12 text-6xl select-none pointer-events-none z-10 group-hover:scale-110 transition-transform duration-300" 
                  style={{ 
                    color: '#72CFCA', 
                    opacity: 0.6,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>
                {card.icon}
              </div>
            </motion.a>
          )
        })}
      </motion.section>

      {/* Build Your Stack - Drag & Drop */}
      <motion.section
        className="py-24 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-16 text-center" style={{ 
            color: '#3F9396',
            fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif'
          }}>
            Build Your Stack
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Supported Payment Modes */}
            <div>
              <h3 className="text-2xl text-[#3F9396] font-bold mb-6" style={{ fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif' }}>Supported Payment Modes</h3>

              <div className="space-y-4">
                {supportedPaymentModes.map((mode) => (
                  <motion.div
                    key={mode.id}
                    draggable={!mode.default}
                    onDragStart={() => !mode.default && handleDragStart(mode.id)}
                    className={`border border-[#72CFCA] rounded-xl p-6 select-none transition-colors duration-300  ${
                      mode.default
                        ? 'text-[#9AA0A6]'
                        : 'text-black hover:bg-[#3F9396] cursor-move'
                    }`}
                    style={{ fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif' }}
                    whileHover={!mode.default ? { scale: 1.03 } : {}}
                    whileTap={!mode.default ? { scale: 0.97 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{mode.name}</span>
                      {!mode.default && <Plus className="w-5 h-5 text-[#72CFCA]" />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Your Custom Stack */}
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`min-h-[400px] border-2 border-dashed rounded-xl p-6 transition-all duration-300  border-[#72CFCA]`}
              style={{ fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#3F9396]" style={{ fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif' }}>Your Custom Stack</h3>

              {customStack.length === 0 ? (
                <p className="text-center text-[#9AA0A6] mt-4">
                  Add something to your custom stack to generate your modular pricing savings!
                </p>
              ) : (
                <ul className="space-y-3">
                  {customStack
                    .sort((a, b) => (a.default ? -1 : b.default ? 1 : 0))
                    .map((item) => (
                      <li
                        key={item.id}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-white`}
                        style={{ 
                          backgroundColor: item.default ? '#9AA0A6' : '#3F9396'
                        }}
                      >
                        <span className="font-semibold">{item.name}</span>
                        {!item.default && (
                          <button
                            onClick={() => removeFromStack(item.id)}
                            className="hover:bg-white/20 rounded p-1 transition-colors cursor-pointer"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </li>
                    ))}
                </ul>
              )}

              {/* Pricing Savings */}
              <div className="mt-8 pt-6 border-t-2" style={{ borderColor: '#72CFCA' }}>
                <div className="flex items-center text-black justify-between text-xl font-bold">
                  <span>Total Modular Savings:</span>
                  <span className="text-2xl text-[#D7B750]">{totalDiscount}%</span>
                </div>
                <p className="text-[#9AA0A6] mt-2 text-sm">
                  Each module adds 10% to your overall processing costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Features */}
      <motion.section
        className="max-w-7xl mx-auto py-24 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-center" style={{ 
          color: '#3F9396',
          fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif'
        }}>
          Advanced Features
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {advancedFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-[#1A1A1A] p-10 border border-[#72CFCA] text-center rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 cursor-default select-none"
              style={{ fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#FFFFFF]" style={{ fontFamily: '"Bebas Neue", system-ui, -apple-system, sans-serif' }}>{feature.title}</h3>
              <p className="text-[#9AA0A6] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  )
}
