'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lock, Shield, Check, Zap } from 'lucide-react'
import IndustriesExpandingVertical from './components/IndustriesCard'


const features = [
  {
    title: 'Low processing rates',
    description: 'Pay only for the rails you actually use.',
    icon: <Zap className="w-12 h-12 text-[#2B1E17]" />
  },
  {
    title: 'Unparalleled security',
    description: 'Level 1 PCI DSS, real-time monitoring, and smart fraud controls.',
    icon: <Shield className="w-12 h-12 text-[#2B1E17]" />
  },
  {
    title: 'Compliance expertise',
    description: 'Industry-aware onboarding, licensing logic, and ongoing risk oversight.',
    icon: <Lock className="w-12 h-12 text-[#2B1E17]" />
  },
  {
    title: 'Tailored solutions',
    description: 'No bundles. No assumptions. Built around your flow.',
    icon: <Check className="w-12 h-12 text-[#2B1E17]" />
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
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent mb-4">
              Built for one business.<br />
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent mb-8">
              Yours.
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl" style={{ color: '#2B1E17' }}>
              Payments shouldn&apos;t force you into a template. We adapt to how you operate, not the other way around.
            </p>
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl inter-700 text-base uppercase transition-all duration-300 border-2 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] text-white border-transparent hover:opacity-90"
            >
              👉 See if we&apos;re a fit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Feature Showcase - "What You Get" */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold uppercase mb-16 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What You Get
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 border border-[#2B1E17]/20 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent mb-3">{feature.title}</h3>
                <p className="text-lg" style={{ color: '#2B1E17' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Inline Expanding Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <IndustriesExpandingVertical />
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold uppercase mb-8 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Not seeing your industry listed?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-12"
            style={{ color: '#2B1E17' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            If you&apos;re licensed, compliant, and serious about scaling, there&apos;s a good chance we can help.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-10 py-5 font-bold text-lg uppercase transition-all duration-300 border-2 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] text-white border-transparent hover:opacity-90 rounded-xl"
            >
              👉 Talk to our team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-10 py-5 font-bold text-lg uppercase transition-all duration-300 border-2 bg-white/20 backdrop-blur-xl text-[#2B1E17] border-[#2B1E17] hover:bg-gradient-to-r hover:from-[#2B1E17] hover:to-[#4A3428] hover:text-white hover:border-transparent rounded-xl"
            >
              👉 Start qualification
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.section>

    </section>
  )
}
