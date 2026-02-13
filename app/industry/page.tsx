'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lock, Shield, Check, Zap } from 'lucide-react'
import Link from 'next/link'
import IndustriesExpandingVertical from './components/IndustriesCard'
import { Card, Typography } from '@/app/components/ui'


const features = [
  {
    title: 'Low processing rates',
    description: 'Pay only for the rails you actually use.',
    icon: <Zap className="w-12 h-12 text-brand" />
  },
  {
    title: 'Unparalleled security',
    description: 'Level 1 PCI DSS, real-time monitoring, and smart fraud controls.',
    icon: <Shield className="w-12 h-12 text-brand" />
  },
  {
    title: 'Compliance expertise',
    description: 'Industry-aware onboarding, licensing logic, and ongoing risk oversight.',
    icon: <Lock className="w-12 h-12 text-brand" />
  },
  {
    title: 'Tailored solutions',
    description: 'No bundles. No assumptions. Built around your flow.',
    icon: <Check className="w-12 h-12 text-brand" />
  }
]

export default function IndustriesSection() {

  return (
    <section className="bg-white min-h-screen text-brand">

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
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.95] tracking-tight ui-heading-gradient mb-4">
              Built for one business.<br />
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tight text-brand-muted mb-8">
              Yours.
            </h1>
            <Typography as="p" variant="body" className="text-xl md:text-2xl mb-12 max-w-3xl text-brand">
              Payments shouldn&apos;t force you into a template. We adapt to how you operate, not the other way around.
            </Typography>
            <Link href="/" className="ui-btn ui-btn-primary px-10 py-4 hover:scale-105 hover:shadow-xl">
              See if we&apos;re a fit
            </Link>
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
            className="text-4xl md:text-5xl font-bold uppercase mb-16 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What You Get
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-10 flex flex-col items-start text-left"
                interactive
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold ui-heading-gradient mb-3">{feature.title}</h3>
                <Typography as="p" variant="body" className="text-lg text-brand">{feature.description}</Typography>
              </Card>
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
            className="text-4xl md:text-5xl font-bold uppercase mb-8 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Not seeing your industry listed?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-brand"
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
              className="group ui-btn ui-btn-secondary rounded-xl px-10 py-5 font-bold text-lg uppercase"
            >
              Talk to our team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us"
              className="bg-transparent group ui-btn ui-btn-ghost rounded-xl px-10 py-5 font-bold text-lg uppercase"
            >
              Start qualification
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.section>

    </section>
  )
}
