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
        'Our strongest partnerships started with a trusted intro. If you already know merchants scaling in iGaming, Forex, or crypto, we\'ll take it from there, fast, compliant, and built to last.',
      you_bring: [
        'Merchants that actually move volume, not trial leads.',
        'Basic compliance info upfront so we can fast-track qualification.',
        'Honest expectations and clear communication.',
      ],
      you_get: [
        'Commission on every approved merchant (recurring, not one-off).',
        'Dedicated partner support. No bots, no ticket loops.',
        'Access to insider insights on risk, approval rates, and new jurisdictions before they go live.',
      ],
    },
    {
      title: 'ISOs',
      subtitle: 'Grow beyond your borders',
      description:
        'You\'ve built the merchant relationships. Now it\'s time to scale them further. We connect ISOs with acquiring partners and coverage in 20+ jurisdictions. , so your merchants can process locally, wherever they operate. No new stack. No new headaches. Just more reach.',
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
      subtitle: 'You\'ve built the rails, we\'ll bring the traffic',
      description:
        'You already run your own stack, onboarding, risk, the whole deal. You’re just waiting on clients. We plug you into high-risk merchants who are pre-vetted, bank-ready, and looking for reliable rails, so you stay focused on processing, not prospecting.',
      you_bring: [
        'Proven infrastructure & onboarding stack.',
        'Established merchant network.',
        'High risk & compliance protocols.',
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
    <section className="bg-white min-h-screen text-brand">
      {/* Hero */}
      <motion.header
        className="py-32 px-8 md:px-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="inter-900 text-5xl md:text-7xl lg:text-8xl uppercase leading-tight mb-8 text-brand"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            They say cut out
            <br />
            <span className="text-6xl md:text-8xl lg:text-9xl">the middleman.</span>
            <br />
            <span className="inter-400 text-4xl md:text-5xl lg:text-6xl">We know better.</span>
          </motion.h1>

          <motion.p
            className="inter-400 text-2xl md:text-3xl mb-12 leading-relaxed max-w-3xl mx-auto text-brand"
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
              className="ui-btn ui-btn-primary inline-flex items-center gap-3 px-10 py-6 rounded-full inter-700 text-xl uppercase hover:scale-105 shadow-2xl border border-brand"
            >
              Become a partner
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Network Section */}
      <motion.section
        className="py-32 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="inter-900 text-5xl md:text-7xl lg:text-8xl uppercase mb-12 text-brand"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            It Takes A Network
          </motion.h2>

          <motion.p
            className="inter-400 text-2xl md:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed text-brand"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            High-risk runs on trust. Connections close deals; cold outreach never could. That’s why we grow through middlemen who already make things move.
          </motion.p>

          <motion.a
            href="#partners"
            className="ui-btn ui-btn-primary py-4 px-16 rounded-full inter-700 uppercase shadow-2xl inline-flex items-center gap-2 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Find your fit
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.section>

      {/* Partner Breakdown */}
      <motion.section
        id="partners"
        className="py-32 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              className="flex flex-col lg:flex-row items-center gap-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="inter-700 text-sm uppercase tracking-widest mb-4 text-brand">
                  {partner.title}
                </div>
                
                <h3 className="inter-900 text-4xl md:text-5xl uppercase mb-6 leading-tight text-brand">
                  {partner.subtitle}
                </h3>
                
                <p className="inter-400 text-xl leading-relaxed mb-12 text-brand">
                  {partner.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="inter-700 text-2xl uppercase tracking-wide text-brand">You bring:</h4>
                    <ul className="space-y-3 text-lg inter-400 text-brand">
                      {partner.you_bring.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-brand font-bold text-xl mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="inter-700 text-2xl uppercase tracking-wide text-brand">You get:</h4>
                    <ul className="space-y-3 text-lg inter-400 text-brand">
                      {partner.you_get.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-brand font-bold text-xl mt-0.5">→</span>
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
                      className="ui-btn ui-btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-full inter-700 text-xl uppercase"
                    >
                      Partner with us
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </motion.div>
                )}
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-brand-paper to-brand-paper2 h-96 rounded-3xl flex items-center justify-center p-12 border border-brand">
                  <div className="text-center text-brand">
                    <div className="w-32 h-32 bg-white/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Network className="w-16 h-16 text-brand" />
                    </div>
                    <h4 className="inter-700 text-2xl mb-2">{partner.title}</h4>
                    <p className="inter-400 text-lg">Visual representation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="py-24 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="inter-900 text-4xl md:text-5xl uppercase mb-6 text-brand">
              Here&apos;s the deal
            </h2>
            <p className="inter-400 text-xl max-w-2xl mx-auto text-brand">
              Because in high-risk, strong partners mean smoother payouts. This is what your merchants get.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-xl border border-brand hover:border-brand/80 hover:shadow-md transition-all duration-300 text-brand"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-brand" />
                  </div>
                  <h3 className="inter-700 text-lg mb-2">{feature.title}</h3>
                  <p className="inter-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Explainer Video */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="inter-900 text-4xl md:text-5xl uppercase mb-6 text-brand">
              See it in action
            </h2>
            <p className="inter-400 text-lg leading-relaxed text-brand">
              Walk through how high-risk merchants plug into our rails, how partners get paid, and what it looks like when everything just works.
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-paper to-brand-paper2 aspect-video rounded-xl flex items-center justify-center border border-brand">
            <span className="inter-700 text-brand/70 text-sm uppercase tracking-[0.2em]">
              Explainer video placeholder
            </span>
          </div>
        </div>
      </motion.section>


      {/* Contact Form */}
      <motion.section
        id="contact-form"
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="inter-900 text-4xl md:text-5xl uppercase mb-6 text-brand">
            Partner with us
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Work email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Company / agency name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Website or LinkedIn profile
              </label>
              <input
                type="text"
                name="website"
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Regions you operate in <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="regions"
                required
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="e.g., Europe, APAC, North America"
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                Merchant types you usually work with <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="merchant_types"
                required
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
                placeholder="e.g., iGaming, Forex, Crypto"
              />
            </div>

            <div>
              <label className="block inter-700 text-sm uppercase tracking-widest mb-2 text-brand">
                How do you usually source leads?
              </label>
              <select
                name="lead_source"
                className="ui-input w-full px-6 py-3 border border-brand rounded-lg focus:border-brand/80 transition-colors bg-white inter-400 text-brand"
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


            <motion.button
              type="submit"
              className="w-full ui-btn ui-btn-primary py-4 rounded-xl inter-700 text-base uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.section>
    </section>
  )
}
