'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="bg-white min-h-screen">
      
      {/* Hero Banner - Left Aligned, Bold, Uppercase */}
      <motion.header
        className="min-h-screen flex items-center px-8 md:px-16 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-7xl w-full">
          <motion.h1
            className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold uppercase leading-[0.95] tracking-tight text-black mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Built by high-risk<br />
            For high-risk<br />
            <span className="text-gray-600">powered by fintech</span>
          </motion.h1>
        </div>
      </motion.header>

      {/* Our Story - Timeline Design (Rapyd Style) */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-16">Our Story</h2>
          
          {/* Timeline Container */}
          <div className="space-y-16">
            
            {/* Timeline Item 1 */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">THE PROBLEM</div>
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                  You&apos;re licensed. You&apos;re compliant. You move volume.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  But your processor still treats you like a liability.
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center md:order-1">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="space-y-4 md:order-2">
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">WHAT WE SAW</div>
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                  We&apos;ve seen it too many times
                </h3>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Accounts frozen mid-payout</li>
                  <li>• Chargebacks blamed on &quot;risk profile&quot;</li>
                  <li>• Support that vanishes the second you scale</li>
                </ul>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">OUR SOLUTION</div>
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                  So we built the infrastructure we wish existed
                </h3>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Backed by banks who actually understand regulated high-risk</li>
                  <li>• Designed to onboard fast and stay live—especially when it matters most</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </motion.div>

            {/* Final Statement */}
            <motion.div
              className="bg-black text-white p-12 rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                This isn&apos;t a payments company pretending to serve high-risk.<br />
                <span className="text-gray-400">This is high-risk infrastructure.</span><br />
                From operators who&apos;ve been through it.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Our Team - Bold Header Style */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-12">Our Team</h2>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
            <p className="font-bold text-black">
              High-risk First. Fintech Now.
            </p>
            <p className="text-gray-800">
              We&apos;re a small team of people who&apos;ve lived the high-risk grind — and built the systems we wish existed back then.
            </p>
            <p className="text-gray-700">
              Now we bring together industry experience, fintech engineering, and compliance to keep global payments moving.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Careers - Bold Header Style */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-8">
            We&apos;re growing. It&apos;s a good time to join.
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 max-w-4xl">
            We&apos;re hiring across product, onboarding, compliance, and partnerships.<br />
            Or if you&apos;re a regulator, lawyer, or license-holder and want to collaborate - we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              See Open Roles
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Compliance
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.section>

    </section>
  )
}
