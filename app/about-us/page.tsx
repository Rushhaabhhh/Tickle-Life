'use client'

import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { InternalLinks, getInternalLinksForPage } from '@/app/components/InternalLinks'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="bg-white text-brand">
      <div className="px-8 md:px-16 py-12 max-w-7xl mx-auto">
        <Breadcrumbs />
      </div>

      {/* Hero Banner */}
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
            className="inter-800 text-5xl leading-none tracking-[-0.03em] uppercase ui-heading-gradient"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Built by high-risk.
            <br />
            For high-risk.
            <br />
            <span className="ui-heading-gradient">
              Powered by fintech brains.
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/contact-us"
              className="group ui-btn ui-btn-secondary px-8 py-4 rounded-xl inter-700 text-base uppercase"
            >
              Talk to our team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us"
              className="group ui-btn ui-btn-ghost px-8 py-4 rounded-xl inter-700 text-base uppercase bg-white/20 backdrop-blur-xl border-brand"
            >
              See if you qualify
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Our Story */}
      <motion.section
        className="px-8 md:px-16 py-24 md:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase mb-12 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          <motion.div
            className="inter-300 space-y-6 text-lg md:text-xl leading-relaxed text-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600 text-xl md:text-2xl">
              Just because it was legal didn&apos;t make it easy.
            </p>

            <p>
              We started in sexual wellness, helping people learn, connect, and grow.
              Fully compliant. Properly licensed. Doing everything by the book.
            </p>
            <p>
              And still, banks labelled us &quot;high-risk.&quot;
            </p>

            <p>
              Every payment &quot;solution&quot; worked… until we tried to scale.
              Accounts got frozen. Approvals vanished. Risk teams changed the rules overnight.
            </p>

            <p>
              So we stopped depending on broken systems and built our own.
            </p>

            <p>
              That&apos;s how <span className="font-bold">TickleCharge</span> was born:
              <br />
              A payment solution <span className="font-bold">for high-risk, built by people who&apos;ve lived high-risk.</span>
            </p>
            <p>
              We&apos;re built on stability, backed by real compliance, and designed to grow with you, not against you.
            </p>

            <p>
              We stand between you and the bank, taking on the risks they won&apos;t.
              Chargebacks. Compliance reviews. Ongoing risk assessments. Regulatory pressure.
            </p>

            <p>
              We handle it before it ever reaches you.
            </p>

            <p>
              So you don&apos;t fight banks.
              <br />
              You don&apos;t explain your business for the hundredth time.
              <br />
              You just move money the way you&apos;re supposed to.
            </p>

            <div className="pt-6">
              <a
                href="/contact-us"
                className="group ui-btn ui-btn-secondary px-8 py-4 rounded-xl inter-700 text-base uppercase"
              >
                See if TickleCharge is right for you
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Our Team */}
      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase mb-12 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <motion.div
            className="inter-300 space-y-6 text-lg md:text-xl leading-relaxed text-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600 text-xl md:text-2xl">
              High-Risk First. Fintech Now.
            </p>

            <p>
              We&apos;re a lean team of operators, engineers, and compliance specialists who&apos;ve been on the wrong side of &quot;declined.&quot;
            </p>

            <p>
              We&apos;ve run high-risk businesses.
              <br />
              We&apos;ve survived bank shutdowns.
              <br />
              We&apos;ve dealt with regulators, card schemes, and sudden policy changes.
            </p>

            <p>
              Now we combine:
            </p>

            <div className="space-y-2 ml-4 border-l-2 border-brand pl-4">
              <p>Real high-risk operating experience</p>
              <p>Fintech and payment engineering</p>
              <p>Deep compliance and licensing expertise</p>
            </div>

            <p>
              To keep global payments moving, reliably, legally, and at scale.
            </p>

            <div className="pt-6 flex gap-4">
              <a
                href="/team"
                className="group ui-btn ui-btn-secondary px-8 py-4 rounded-xl inter-700 text-base uppercase"
              >
                Meet the team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact-us"
                className="group ui-btn ui-btn-ghost px-8 py-4 rounded-xl inter-700 text-base uppercase bg-white/20 backdrop-blur-xl border-brand"
              >
                Talk to compliance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Careers */}
      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase mb-12 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Careers
          </motion.h2>

          <motion.div
            className="inter-300 space-y-6 text-lg md:text-xl leading-relaxed text-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600 text-xl md:text-2xl">
              We&apos;re Growing. It&apos;s a Good Time to Join.
            </p>

            <p>
              We&apos;re hiring across:
            </p>

            <div className="space-y-2 ml-4 border-l-2 border-brand pl-4">
              <p>Product & Engineering</p>
              <p>Merchant Onboarding</p>
              <p>Compliance & Risk</p>
              <p>Partnerships & Business Development</p>
            </div>

            <p>
              If you like solving hard problems and working where regulation meets reality, you&apos;ll fit in.
            </p>

            <p>
              Not looking for a job, but want to collaborate?
            </p>

            <p>
              If you&apos;re a <span className="font-bold">regulator, lawyer, compliance consultant, or license holder</span>, we&apos;d love to talk.
            </p>

            <div className="pt-6">
              <a
                href="/careers"
                className="group ui-btn ui-btn-secondary px-8 py-4 rounded-xl inter-700 text-base uppercase"
              >
                See Open Roles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partner With Us */}
      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase mb-12 ui-heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Partner With Us
          </motion.h2>

          <motion.div
            className="inter-300 space-y-6 text-lg md:text-xl leading-relaxed text-brand"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="inter-600 text-xl md:text-2xl">
              Get in Touch
            </p>

            <p>
              Have questions? Want to qualify? Need a compliance conversation before anything else?
            </p>

            <div className="space-y-4 mt-8">
              <div className="border-l-2 border-brand pl-4">
                <p className="inter-600 text-lg mb-2">Sales & Partnerships</p>
                <a
                  href="mailto:sales@ticklecharge.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sales@ticklecharge.com
                </a>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <p className="inter-600 text-lg mb-2">Compliance & Risk</p>
                <a
                  href="mailto:compliance@ticklecharge.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  compliance@ticklecharge.com
                </a>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <p className="inter-600 text-lg mb-2">General Enquiries</p>
                <a
                  href="mailto:hello@ticklecharge.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@ticklecharge.com
                </a>
              </div>
            </div>

            <p className="pt-6">
              Or skip the email chains:
            </p>

            <div className="pt-4">
              <a
                href="/contact-us"
                className="group ui-btn ui-btn-ghost px-8 py-4 rounded-xl inter-700 text-base uppercase bg-white/20 backdrop-blur-xl border-brand"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-24 md:py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inter-300 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="inter-800 text-4xl md:text-5xl lg:text-6xl uppercase ui-heading-gradient">
              High-risk doesn&apos;t have to mean high stress.
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-brand">
              Let&apos;s see if we can move your payments the way they should.
            </p>

            <div className="pt-8">
              <a
                href="/contact-us"
                className="group ui-btn ui-btn-secondary px-8 py-4 rounded-xl inter-700 text-base uppercase"
              >
                Get Started with TickleCharge
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="px-8 md:px-16 max-w-7xl mx-auto">
        <InternalLinks links={getInternalLinksForPage("/about-us")} />
      </div>
    </section>
  )
}