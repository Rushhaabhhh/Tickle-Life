'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lock, Shield, Check, Zap } from 'lucide-react'
import IndustriesExpandingVertical from './components/IndustriesCard'


const features = [
  {
    title: 'Low processing rates',
    icon: <Zap className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Unparalleled security',
    icon: <Shield className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Compliance expertise',
    icon: <Lock className="w-12 h-12 text-gray-900" />
  },
  {
    title: 'Tailored Solutions',
    icon: <Check className="w-12 h-12 text-gray-900" />
  }
]

export default function IndustriesSection() {

  return (
    <section className="bg-white min-h-screen">

      {/* Hero Section */}
      <motion.header
        className="min-h-[60vh] flex items-center px-8 md:px-16 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full">
          <motion.div
            className="mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-black mb-4">
              Built for one business.<br />
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-gray-500 mb-12">
              Yours.
            </h1>
            <a
              href="#industries"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold text-base hover:bg-gray-800 transition-all duration-300"
            >
              See if we are a fit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Feature Showcase - 2x2 Grid */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 border border-gray-200 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Inline Expanding Cards */}
      <IndustriesExpandingVertical />

      {/* CTA Section */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-black text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Check your eligibility and see what we can do for your business.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 font-bold text-lg hover:bg-gray-200 transition-all duration-300">
            Check Eligibility
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.section>

    </section>
  )
}
