'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, cubicBezier, Variants } from 'framer-motion'
import { Award, Shield, Users, Building2, X, ChevronRight, Globe, Lock, TrendingUp, CheckCircle } from 'lucide-react'


const Page = () => {
  type ModalKey = keyof typeof modalData;
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.42, 0, 0.58, 1) }
    }
  }

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder", 
      description: "Former VP at Chase Paymentech, 15+ years in high-risk payment processing and regulatory compliance."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "Former lead architect at Stripe, specializing in fraud prevention and payment infrastructure scalability."
    },
    {
      name: "Jennifer Walsh", 
      role: "Chief Compliance Officer",
      description: "Former regulatory counsel at FDIC, expert in BSA/AML, KYC compliance, and international payment regulations."
    }
  ]

  const credentials = {
    security: [
      { name: "PCI DSS Level 1", key: "pci" as ModalKey },
      { name: "ISO 27001", key: "iso" as ModalKey },
      { name: "SOC 2 Type II", key: "soc" as ModalKey },
      { name: "GDPR Compliant", key: "gdpr" as ModalKey }
    ],
    awards: [
      { name: "Best PSP 2024", key: "award1" as ModalKey },
      { name: "Fintech Innovation", key: "award2" as ModalKey },
      { name: "Compliance Excellence", key: "award3" as ModalKey }
    ]
  }

  const partners = [
    "Wells Fargo", "HSBC", "Barclays", "Deutsche Bank", 
    "BNP Paribas", "Santander", "ING Group"
  ]

  const modalData = {
    pci: {
      title: "PCI DSS Level 1 Certified",
      content: "Our highest level PCI DSS certification ensures that all cardholder data is processed, stored, and transmitted with the utmost security. We undergo annual assessments and maintain continuous compliance monitoring."
    },
    iso: {
      title: "ISO 27001 Information Security",
      content: "Internationally recognized certification for information security management systems. Our ISO 27001 compliance demonstrates our systematic approach to managing sensitive company and customer information."
    },
    soc: {
      title: "SOC 2 Type II Report",
      content: "Our SOC 2 Type II attestation validates our security, availability, processing integrity, confidentiality, and privacy controls over a 12-month period."
    },
    gdpr: {
      title: "GDPR Compliance",
      content: "Full compliance with the European Union's General Data Protection Regulation, ensuring proper handling of personal data for all EU customers and partners."
    },
    award1: {
      title: "Best Payment Service Provider 2024",
      content: "Recognized by the International Payment Services Association for excellence in high-risk merchant processing and customer satisfaction."
    },
    award2: {
      title: "Fintech Innovation Award",
      content: "Honored for our proprietary risk assessment algorithms and real-time fraud detection capabilities."
    },
    award3: {
      title: "Compliance Excellence Award",
      content: "Recognized by the Financial Compliance Association for outstanding regulatory adherence and proactive compliance management."
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      {/* Section 1: Company Story */}
      <motion.section
        className="min-h-screen flex items-center px-4 py-20 text-white relative"
        style={{ y }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Powering Commerce Where Others Won&apos;t
          </motion.h1>
          
          <motion.div
            className="space-y-6 text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              For over a decade, we&apos;ve been the trusted bridge between high-risk merchants and global payment networks. When traditional processors say no, we say yes—with security, compliance, and innovation at our core.
            </p>
            <p>
              Founded in 2012 by former banking executives who saw an underserved market, SecurePay Solutions has processed over $2.8 billion in transactions across industries from CBD and nutraceuticals to travel and gaming.
            </p>
            <p className="font-semibold text-xl">
              Our mission is simple: democratize payment processing by making it accessible, secure, and profitable for every legitimate business.
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-indigo-300"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-purple-300"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp size={32} />
        </motion.div>
      </motion.section>

      {/* Section 2: Team */}
      <motion.section
        className="min-h-screen flex items-center px-4 py-20 bg-white/95 backdrop-blur-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Built by Industry Veterans
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Our leadership team combines decades of experience in banking, fintech, and regulatory compliance. We&apos;re not just payment processors—we&apos;re your strategic partners in navigating complex financial landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3: Credentials */}
      <motion.section
        className="min-h-screen flex items-center px-4 py-20 text-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Our certifications, partnerships, and industry recognition demonstrate our commitment to security, compliance, and excellence in high-risk payment processing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Security Credentials */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                <Lock size={28} />
                Security & Compliance
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {credentials.security.map((cert, index) => (
                  <motion.button
                    key={cert.key}
                    onClick={() => setActiveModal(cert.key)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cert.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                <Award size={28} />
                Industry Recognition
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {credentials.awards.map((award, index) => (
                  <motion.button
                    key={award.key}
                    onClick={() => setActiveModal(award.key)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {award.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <Globe size={28} />
              27+ Partner Banks Worldwide
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-gray-800 min-w-[140px] text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <motion.div
          className="absolute top-32 right-10 text-indigo-300/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Building2 size={60} />
        </motion.div>
      </motion.section>

      {/* Section 4: CTA */}
      <motion.section
        className="min-h-screen flex items-center px-4 py-20 bg-white/95 backdrop-blur-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Join the Leaders in High-Risk PSP
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 mb-12">
              <p>
                We&apos;re always looking for ambitious professionals who thrive in dynamic environments. Whether you&apos;re in compliance, technology, or business development, help us shape the future of payment processing.
              </p>
              <p>
                Work with cutting-edge technology, navigate complex regulatory landscapes, and make a real impact on businesses worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <ChevronRight size={20} />
            </motion.button>
            <motion.button
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Compliance Team
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-500" size={28} />
                <h3 className="text-xl font-bold text-gray-900">
                  {modalData[activeModal]?.title}
                </h3>
              </div>
              
                {activeModal && (
                  <p className="text-gray-700 leading-relaxed">
                    {modalData[activeModal]?.content}
                  </p>
                )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Page