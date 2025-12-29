'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Network,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Lock,
  Wallet,
  Server,
} from 'lucide-react'

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: 'Referrals',
      subtitle: 'Your connections, our rails',
      description:
        'Our strongest partnerships started with a trusted intro. If you already know merchants scaling in iGaming, Forex, or crypto, we’ll take it from there — fast, compliant, and built to last.',
      you_bring: [
        'Merchants that actually move volume — not trial leads.',
        'Basic compliance info upfront so we can fast-track qualification.',
        'Honest expectations and clear communication.',
      ],
      you_get: [
        'Commission on every approved merchant (recurring, not one-off).',
        'Dedicated partner support — no bots, no ticket loops.',
        'Access to insider insights on risk, approval rates, and new jurisdictions before they go live.',
      ],
    },
    {
      title: 'ISOs',
      subtitle: 'Grow beyond your borders',
      description:
        'You’ve built the merchant relationships — now it’s time to scale them further. We connect ISOs with acquiring partners and coverage in 20+ jurisdictions, so your merchants can process locally, wherever they operate. No new stack. No new headaches. Just more reach.',
      you_bring: [
        'Merchant portfolios ready to expand internationally.',
        'Established onboarding and KYC processes.',
        'A reputation for reliability and growth.',
      ],
      you_get: [
        'Access to 20+ licensed jurisdictions and local banking partners.',
        'Consistent regional approvals and faster merchant onboarding.',
        'Cross-border coverage without new integrations or hidden hoops.',
      ],
    },
    {
      title: 'PayFacs',
      subtitle: 'You’ve built the rails, we’ll bring the traffic',
      description:
        'You already run your own stack — onboarding, risk, the whole deal. You’re just waiting on clients. We plug you into high-risk merchants who are pre-vetted, bank-ready, and looking for reliable rails — so you stay focused on processing, not prospecting.',
      you_bring: [
        'Proven infrastructure & onboarding stack.',
        'Established merchant network.',
        'Strong risk & compliance protocols.',
      ],
      you_get: [
        'Access to 20+ regulated jurisdictions.',
        'Extended acquiring and payout reach.',
        'Local partnerships built for high-risk industries.',
      ],
    },
  ]

  const features = [
    {
      title: 'Open Banking',
      icon: Wallet,
      description: 'Real-time access to merchant accounts.',
    },
    {
      title: 'Crypto Payments',
      icon: Zap,
      description: 'Native crypto payment processing.',
    },
    {
      title: '3D Secure Authentication',
      icon: Shield,
      description: 'Strong customer authentication built in.',
    },
    {
      title: 'Fraud Protection',
      icon: Lock,
      description: 'Real-time fraud detection and prevention.',
    },
    {
      title: 'Frictionless Integration',
      icon: Server,
      description: 'API-first, developer-friendly platform.',
    },
    {
      title: 'Smart Routing',
      icon: Network,
      description: 'Intelligent routing for higher approval rates.',
    },
    {
      title: 'Dashboards That Mean Business',
      icon: BarChart3,
      description: 'Real-time analytics and reporting.',
    },
    {
      title: 'Fair Share, First',
      icon: Globe,
      description: 'Global reach with aligned incentives.',
    },
  ]

  return (
    <section className="bg-white min-h-screen">
      {/* HERO - Center Aligned Purple Banner Style */}
      <motion.header
        className="py-32 px-8 md:px-16 bg-none text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-black font-bold uppercase leading-tight mb-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            They say cut out
            <br />
            <span className="text-6xl md:text-8xl text-black lg:text-9xl">the middleman.</span>
            <br />
            <span className="text-4xl md:text-5xl text-black lg:text-6xl font-normal">We know better.</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-black mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Because the right middlemen keep the rails running.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-6 rounded-full font-bold text-xl uppercase hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Become a partner
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* IT TAKES A NETWORK - Center Aligned Purple Accent */}
      <motion.section
        className="py-32 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-black mb-12"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            It Takes A Network
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            High-risk runs on trust. Connections close deals cold outreach never could.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-20 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            That’s why we grow through middlemen who already make things move.
          </motion.p>

          <motion.div
            className="bg-gray-800 text-white p-12 rounded-3xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold uppercase mb-6">Find your fit</h3>
            <a
              href="#partners"
              className="inline-flex items-center text-gray-400 gap-3 bg-white px-10 py-5 rounded-full font-bold text-xl uppercase hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Explore partner types
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNER BREAKDOWN - Column Format */}
      <motion.section
        id="partners"
        className="py-32 px-8 md:px-16 bg-none"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              className="flex flex-col md:flex-row items-center gap-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left Column - Content */}
              <div className="md:w-1/2 space-y-8 text-center md:text-left">
                <div className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-4">
                  {partner.title}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6 leading-tight">
                  {partner.subtitle}
                </h3>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  {partner.description}
                </p>

                {/* You Bring / You Get Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold uppercase text-black tracking-wide">You bring:</h4>
                    <ul className="space-y-3 text-lg text-gray-700">
                      {partner.you_bring.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold text-xl mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold uppercase text-black tracking-wide">You get:</h4>
                    <ul className="space-y-3 text-lg text-gray-700">
                      {partner.you_get.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold text-xl mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index === partnerTypes.length - 1 && (
                  <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-xl uppercase hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      Partner with us
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Visual */}
              <div className="md:w-1/2">
                <div className="bg-gray-200 h-96 rounded-3xl flex items-center justify-center p-12">
                  <div className="text-center text-gray-500">
                    <div className="w-32 h-32 bg-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Network className="w-16 h-16 text-purple-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-700 mb-2">{partner.title}</h4>
                    <p className="text-lg">Visual representation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FIND YOUR FIT / PARTNER TYPES */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6">
            Find Your Fit
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Referrals, ISOs, PayFacs — however you operate, there’s a model that
            lets you plug into our rails without rebuilding your stack.
          </p>

          <div className="space-y-24">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 !== 0
                    ? 'md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1'
                    : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                      {partner.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">
                      {partner.subtitle}
                    </p>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* You Bring vs You Get table-style block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-black uppercase text-sm tracking-wide">
                        You bring
                      </h4>
                      <ul className="space-y-2">
                        {partner.you_bring.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-gray-700 leading-relaxed"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-black uppercase text-sm tracking-wide">
                        You get
                      </h4>
                      <ul className="space-y-2">
                        {partner.you_get.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-gray-700 leading-relaxed"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">{partner.title} visual</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Partner with us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURE SHOWCASE */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6">
              Here’s the deal
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              Because in high-risk, strong partners mean smoother payouts. This
              is what your merchants get.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="font-bold text-black text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* EXPLAINER VIDEO PLACEHOLDER */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6">
              See it in action
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Walk through how high-risk merchants plug into our rails, how
              partners get paid, and what it looks like when everything just
              works.
            </p>
          </div>
          <div className="bg-gray-200 aspect-video rounded-xl flex items-center justify-center">
            <span className="text-gray-500 text-sm uppercase tracking-[0.2em]">
              Explainer video placeholder
            </span>
          </div>
        </div>
      </motion.section>

      {/* CTA BANNER */}
      <motion.section
        className="py-20 px-8 md:px-16 bg-black text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
            Ready for a win-win?
          </h2>
          <p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto">
            Expand into new markets and create new revenue opportunities when
            you partner with us. Submit the form below to meet with a
            partnership specialist.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Get started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.section>

      {/* CONTACT / AGENT FORM */}
      <motion.section
        id="contact-form"
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6">
            Partner with us
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Name your niche, regions, and merchant types. We’ll take it from
            there.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Work email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="you@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Company / agency name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="Your company"
              />
            </div>

            {/* Website / LinkedIn */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Website or LinkedIn profile
              </label>
              <input
                type="text"
                name="website"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="https://..."
              />
            </div>

            {/* Regions */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Regions you operate in <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="regions"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="e.g., Europe, APAC, North America"
              />
            </div>

            {/* Merchant types */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Merchant types you usually work with{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="merchant_types"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="e.g., iGaming, Forex, Crypto"
              />
            </div>

            {/* Lead source */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                How do you usually source leads?
              </label>
              <select
                name="lead_source"
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white"
              >
                <option value="">Select an option</option>
                <option value="referrals">Referrals</option>
                <option value="outbound">Cold outreach</option>
                <option value="inbound">Inbound inquiries</option>
                <option value="events">Events & conferences</option>
                <option value="partnerships">Existing partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional info */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                Additional information
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="Share anything else we should know about your portfolio, licenses, or goals..."
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-bold text-base uppercase hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>

            <p className="text-xs text-gray-600 text-center">
              A partnerships specialist will review your details and reach out
              within one business day.
            </p>
          </form>
        </div>
      </motion.section>
    </section>
  )
}
