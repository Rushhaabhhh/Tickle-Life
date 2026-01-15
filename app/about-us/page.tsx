'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="bg-white">
      
      <motion.header
        className="min-h-screen flex items-center bg-transparent px-8 md:px-16 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '2rem',
            marginLeft: '14rem',
          }}
        >
          <motion.h1
            style={{
              fontSize: '5rem',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#16f98a',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Built by high-risk
            <br />
            For high-risk
            <br />
            <span style={{ color: '#134338' }}>powered by fintech.</span>
          </motion.h1>
        </div>
      </motion.header>

      <motion.section
        className="px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
              color: '#16f98a',
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          <motion.div
            className="space-y-8 text-xl md:text-2xl leading-relaxed"
            style={{
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-bold">
              Just because it was legal didn&apos;t make it easy.
            </p>

            <p>
              We started in sexual wellness to help people learn, connect, and grow.
              But no matter how compliant we were, banks still labeled us as
              &apos;high-risk&apos;. Every &quot;solution&quot; we used broke down when
              we tried to scale. Until finally, we did it ourselves.
            </p>

            <p>
              So we built TickleCharge — a payment solution for high-risk, by
              high-risk. Based on stability, backed by compliance, and designed to
              grow with you — not against you.
            </p>

            <p>
              We stand between you and the bank, taking on the risks they don&apos;t.
              The chargebacks, the compliance checks, the endless risk reviews —
              we handle it before it ever reaches you.
            </p>

            <p className="text-2xl md:text-3xl font-semibold">
              And you just move your money the way you want.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
              color: '#16f98a',
            }}
            className="text-5xl md:text-5xl lg:text-6xl font-bold uppercase mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <motion.div
            className="space-y-8 text-xl md:text-2xl leading-relaxed"
            style={{
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-2xl md:text-3xl">
              High-risk First. Fintech Now.
            </p>
            <p>
              We&apos;re a small team of people who&apos;ve lived the high-risk grind —
              and built the systems we wish existed back then.
            </p>
            <p>
              Now we bring together industry experience, fintech engineering, and
              compliance to keep global payments moving.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            style={{
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
              color: '#16f98a',
            }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            We&apos;re growing. It&apos;s a good time to join.
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl leading-relaxed mb-12 font-medium"
            style={{
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We&apos;re hiring across product, onboarding, compliance, and partnerships.
            <br />
            Or if you&apos;re a regulator, lawyer, or license-holder and want to
            collaborate – we&apos;d love to hear from you.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#16f98a] text-[#134338] px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-[#ffffff] hover:text-[#16f98a] hover:border-[#16f98a] transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#16f98a]"
              style={{ 
                fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
              }}
            >
              See Open Roles
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#134338] text-[#ffffff] border-2 border-[#134338] px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-[#16f98a] hover:text-[#134338] hover:border-[#16f98a] transition-all duration-300 hover:scale-105"
              style={{ 
                fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
              }}
            >
              Contact Compliance
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </section>
  )
}
