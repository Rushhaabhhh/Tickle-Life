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
            className="inter-800 text-5xl leading-none tracking-[-0.03em] uppercase bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Built by high-risk
            <br />
            For high-risk
            <br />
            <span className="bg-gradient-to-r from-[#2B1E17] to-[#3d2b1f] bg-clip-text text-transparent">
              powered by fintech.
            </span>
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
            className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase mb-12 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          <motion.div
            className="inter-300 space-y-8 text-xl md:text-2xl leading-relaxed"
            style={{ color: '#2B1E17' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600">
              Just because it was legal didn't make it easy.
            </p>

            <p>
              We started in sexual wellness to help people learn, connect, and grow.
              But no matter how compliant we were, banks still labeled us as
              'high-risk'. Every "solution" we used broke down when
              we tried to scale. Until finally, we did it ourselves.
            </p>

            <p>
              So we built TickleCharge — a payment solution for high-risk, by
              high-risk. Based on stability, backed by compliance, and designed to
              grow with you — not against you.
            </p>

            <p>
              We stand between you and the bank, taking on the risks they don't.
              The chargebacks, the compliance checks, the endless risk reviews —
              we handle it before it ever reaches you.
            </p>

            <p className="inter-600 text-2xl md:text-3xl">
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
            className="inter-800 text-5xl md:text-5xl lg:text-6xl uppercase mb-12 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <motion.div
            className="inter-300 space-y-8 text-xl md:text-2xl leading-relaxed"
            style={{ color: '#2B1E17' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600 text-2xl md:text-3xl">
              High-risk First. Fintech Now.
            </p>
            <p>
              We're a small team of people who've lived the high-risk grind —
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
            className="inter-800 text-4xl md:text-5xl lg:text-5xl leading-tight mb-8 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            We're growing. It's a good time to join.
          </motion.h2>

          <motion.p
            className="inter-500 text-2xl md:text-3xl leading-relaxed mb-12"
            style={{ color: '#2B1E17' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're hiring across product, onboarding, compliance, and partnerships.
            <br />
            Or if you're a regulator, lawyer, or license-holder and want to
            collaborate – we'd love to hear from you.
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
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl inter-700 text-base uppercase transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] text-white border-transparent"
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.background = 'rgba(255,255,255,0.2)'
                target.style.backdropFilter = 'blur(10px)'
                target.style.color = '#2B1E17'
                target.style.borderColor = '#2B1E17'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
                target.style.backdropFilter = 'none'
                target.style.color = '#ffffff'
                target.style.borderColor = 'transparent'
              }}
            >
              See Open Roles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl inter-700 text-base uppercase transition-all duration-300 hover:scale-105 border-2 bg-white/20 backdrop-blur-xl text-[#2B1E17] border-[#2B1E17]"
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
                target.style.backdropFilter = 'none'
                target.style.color = '#ffffff'
                target.style.borderColor = 'transparent'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.background = 'rgba(255,255,255,0.2)'
                target.style.backdropFilter = 'blur(10px)'
                target.style.color = '#2B1E17'
                target.style.borderColor = '#2B1E17'
              }}
            >
              Contact Compliance
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </section>
  )
}