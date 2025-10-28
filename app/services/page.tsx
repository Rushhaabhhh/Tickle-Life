'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, X, Shield, Coins, Lock, Building } from 'lucide-react'

// Service Cards Data with Monochrome icons using lucide-react icons or emoji fallbacks
const serviceCards = [
  {
    id: 'open-banking',
    title: 'Open Banking',
    description:
      'Direct bank-to-bank payments built for speed, security, and higher approval rates',
    icon: <Building className="w-14 h-14 text-gray-900" />
  },
  {
    id: 'crypto',
    title: 'Crypto',
    description:
      'Zero chargebacks. Full transparency. We use blockchain rails to keep your on/off ramps clean, fast, and compliant.',
    icon: <Coins className="w-14 h-14 text-gray-700" />
  },
  {
    id: '3d-secure',
    title: '3D Secure Authentication',
    description:
      'Next-gen transaction security that adds an extra layer of protection — without slowing your checkout.',
    icon: <Lock className="w-14 h-14 text-gray-600" />
  },
  {
    id: 'fraud',
    title: 'Fraud Protection',
    description:
      'Smart filters trained on high-risk data. We know the difference between a whale and a fraudster.',
    icon: <Shield className="w-14 h-14 text-gray-500" />
  },
]

// Supported Payment Modes - Card Processing default added
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
    <section className="bg-white min-h-screen px-6 md:px-16 py-16 font-sans">
      {/* Hero Section */}
      <motion.header
        className="min-h-[50vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-tight text-[#111111]"
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
        className="max-w-7xl mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {serviceCards.map((card) => {
          const expanded = expandedCard === card.id
          return (
            <motion.div
              key={card.id}
              className="relative w-full h-[360px] rounded-3xl border border-[#ddd] shadow-sm overflow-hidden"
              onClick={() => setExpandedCard(expanded ? null : card.id)}
              onMouseEnter={() => setExpandedCard(card.id)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              {/* Sliding Title */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-8"
                initial={{ y: "0%" }}
                animate={{ y: expanded ? "-80%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-4xl font-bold text-[#222] select-none">{card.title}</h3>
              </motion.div>

              {/* Content overlay */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    key="content"
                    className="absolute inset-0 p-10 flex flex-col justify-center shadow-lg bg-white rounded-3xl"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  >
                    <p className="text-lg leading-relaxed text-[#555] select-text">
                      {card.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon top right */}
              <div className="absolute top-12 right-12 text-7xl select-none pointer-events-none opacity-20">
                {card.icon}
              </div>
            </motion.div>
          )
        })}
      </motion.section>

      {/* Build Your Stack - Drag & Drop */}
      <motion.section
        className="max-w-7xl mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Supported Payment Modes */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Supported Payment Modes</h3>
          <div className="space-y-4">
            {supportedPaymentModes.map((mode) => (
              <motion.div
                key={mode.id}
                draggable={!mode.default}
                onDragStart={() => !mode.default && handleDragStart(mode.id)}
                className={`bg-gray-200 border-2 rounded-xl p-6 cursor-pointer select-none transition-colors duration-300 ${
                  mode.default
                    ? 'bg-[#222] border-[#222] text-white cursor-default'
                    : 'bg-[#eee] border-[#ccc] hover:bg-[#ddd] hover:border-[#aaa]'
                }`}
                whileHover={!mode.default ? { scale: 1.03 } : {}}
                whileTap={!mode.default ? { scale: 0.97 } : {}}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{mode.name}</span>
                  {!mode.default && <Plus className="w-5 h-5 text-[#555]" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Your Custom Stack */}
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`min-h-[400px] border-2 border-dashed rounded-xl p-6 transition-all duration-300 ${
                  customStack.length === 0
                    ? 'border-gray-300 bg-gray-50'
                    : 'border-black bg-white'
                }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#111]">Your Custom Stack</h3>
          {customStack.length === 0 ? (
            <p className="text-[#999] text-center mt-20 select-none">
              Drag payment modes here to build your stack
            </p>
          ) : (
            <ul className="space-y-3">
              {/* Always show default card processing on top with distinct style */}
              {customStack
                .sort((a, b) => (a.default ? -1 : b.default ? 1 : 0))
                .map((item) => (
                  <li
                    key={item.id}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                      item.default
                        ? 'bg-[#111] text-white cursor-default'
                        : 'bg-[#444] text-white'
                    }`}
                  >
                    <span className="font-semibold">{item.name}</span>
                    {!item.default && (
                      <button
                        onClick={() => removeFromStack(item.id)}
                        className="hover:bg-white/20 rounded p-1 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </li>
                ))}
            </ul>
          )}
          {customStack.length > 0 && (
            <div className="mt-8 text-center font-semibold text-lg text-[#444]">
              Modular Savings: {totalDiscount}%
            </div>
          )}
        </div>
      </motion.section>

      {/* Advanced Features */}
      <motion.section
        className="max-w-7xl mx-auto py-24 px-8 md:px-16 bg-[#f9f9f9]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-center text-[#111]">
          Advanced Features
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {advancedFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-10 border border-gray-300 text-center rounded-2xl
                shadow-md hover:shadow-2xl hover:-translate-y-2 transition-transform
                duration-300 cursor-default select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#222]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-[#111] text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tight">
            Ready to build your stack?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get started with our modular payment solutions today.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 font-bold text-lg hover:bg-gray-200 transition-all duration-300">
            Get Started
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.section>
    </section>
  )
}
