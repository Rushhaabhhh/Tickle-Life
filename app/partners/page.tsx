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
        'Our strongest partnerships started with a trusted intro. If you already know merchants scaling in iGaming, Forex, or crypto, we\'ll take it from there — fast, compliant, and built to last.',
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
        'You\'ve built the merchant relationships — now it\'s time to scale them further. We connect ISOs with acquiring partners and coverage in 20+ jurisdictions, so your merchants can process locally, wherever they operate. No new stack. No new headaches. Just more reach.',
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
        'You already run your own stack — onboarding, risk, the whole deal. You\'re just waiting on clients. We plug you into high-risk merchants who are pre-vetted, bank-ready, and looking for reliable rails — so you stay focused on processing, not prospecting.',
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
      {/* HERO */}
      <motion.header
        className="py-32 px-8 md:px-16 bg-none text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8"
            style={{ 
              color: '#16f98a',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            They say cut out
            <br />
            <span className="text-6xl md:text-8xl text-[#16f98a] lg:text-9xl">the middleman.</span>
            <br />
            <span className="text-4xl md:text-5xl text-[#16f98a] lg:text-6xl font-normal">We know better.</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ 
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}
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
              className="inline-flex items-center gap-3 bg-[#ffffff] text-[#134338] px-10 py-6 rounded-full font-bold text-xl uppercase hover:bg-[#16f98a] hover:text-[#ffffff] transition-all duration-300 hover:scale-105 shadow-2xl border border-[#16f98a]"
              style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
            >
              Become a partner
              <ArrowRight className="w-6 h-6" style={{ color: '#134338' }} />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* IT TAKES A NETWORK */}
      <motion.section
        className="py-32 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-12"
            style={{ 
              color: '#16f98a',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            It Takes A Network
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            High-risk runs on trust. Connections close deals cold outreach never could.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-20 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            That's why we grow through middlemen who already make things move.
          </motion.p>

          <motion.div
            className="bg-[#134338] text-[#ffffff] p-12 rounded-3xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold uppercase mb-6" style={{ 
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
            }}>Find your fit</h3>
            <a
              href="#partners"
              className="inline-flex items-center gap-3 bg-[#ffffff] text-[#134338] px-10 py-5 rounded-full font-bold text-xl uppercase hover:bg-[#16f98a] hover:text-[#ffffff] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
            >
              Explore partner types
              <ArrowRight className="w-6 h-6" style={{ color: '#134338' }} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNER BREAKDOWN */}
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
              <div className="md:w-1/2 space-y-8 text-center md:text-left" style={{ 
                fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
              }}>
                <div className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#16f98a' }}>
                  {partner.title}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight" style={{ color: '#16f98a' }}>
                  {partner.subtitle}
                </h3>
                
                <p className="text-xl leading-relaxed mb-12" style={{ color: '#134338' }}>
                  {partner.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold uppercase tracking-wide" style={{ color: '#16f98a' }}>You bring:</h4>
                    <ul className="space-y-3 text-lg" style={{ color: '#134338' }}>
                      {partner.you_bring.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#16f98a] font-bold text-xl mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold uppercase tracking-wide" style={{ color: '#16f98a' }}>You get:</h4>
                    <ul className="space-y-3 text-lg" style={{ color: '#134338' }}>
                      {partner.you_get.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#16f98a] font-bold text-xl mt-0.5">→</span>
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
                      className="inline-flex items-center gap-3 bg-[#134338] text-[#ffffff] px-10 py-5 rounded-full font-bold text-xl uppercase hover:bg-[#16f98a] transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
                    >
                      Partner with us
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </motion.div>
                )}
              </div>

              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-[#f8fff5] to-[#e8ffe0] h-96 rounded-3xl flex items-center justify-center p-12 border border-[#16f98a]">
                  <div className="text-center" style={{ 
                    color: '#134338',
                    fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
                  }}>
                    <div className="w-32 h-32 bg-[#ffffff]/30 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Network className="w-16 h-16" style={{ color: '#16f98a' }} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{partner.title}</h4>
                    <p className="text-lg">Visual representation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FIND YOUR FIT */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ 
            color: '#16f98a',
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
          }}>
            Find Your Fit
          </h2>
          <p className="text-xl mb-16 max-w-2xl" style={{ 
            color: '#134338',
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
          }}>
            Referrals, ISOs, PayFacs — however you operate, there's a model that
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
                style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#16f98a' }}>
                      {partner.title}
                    </h3>
                    <p className="text-lg font-semibold" style={{ color: '#134338' }}>
                      {partner.subtitle}
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed" style={{ color: '#134338' }}>
                    {partner.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-3">
                      <h4 className="font-bold uppercase text-sm tracking-wide" style={{ color: '#16f98a' }}>
                        You bring
                      </h4>
                      <ul className="space-y-2">
                        {partner.you_bring.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-relaxed"
                            style={{ color: '#134338' }}
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold uppercase text-sm tracking-wide" style={{ color: '#16f98a' }}>
                        You get
                      </h4>
                      <ul className="space-y-2">
                        {partner.you_get.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-relaxed"
                            style={{ color: '#134338' }}
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f8fff5] to-[#e8ffe0] h-64 rounded-lg flex items-center justify-center border border-[#16f98a]">
                  <span style={{ color: '#134338' }}>{partner.title} visual</span>
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
              className="inline-flex items-center gap-2 bg-[#134338] text-[#ffffff] px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-[#16f98a] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
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
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ 
              color: '#16f98a',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}>
              Here's the deal
            </h2>
            <p className="text-xl max-w-2xl" style={{ 
              color: '#134338',
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
            }}>
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
                  className="bg-white p-8 rounded-xl border border-[#16f98a] hover:border-[#16f98a]/80 transition-all duration-300 hover:shadow-md"
                  style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10" style={{ color: '#16f98a' }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#16f98a' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#134338' }}>
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* EXPLAINER VIDEO */}
      <motion.section
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div style={{ 
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
          }}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ color: '#16f98a' }}>
              See it in action
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#134338' }}>
              Walk through how high-risk merchants plug into our rails, how
              partners get paid, and what it looks like when everything just
              works.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#f8fff5] to-[#e8ffe0] aspect-video rounded-xl flex items-center justify-center border border-[#16f98a]">
            <span className="text-[#134338]/70 text-sm uppercase tracking-[0.2em]" style={{ 
              fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
            }}>
              Explainer video placeholder
            </span>
          </div>
        </div>
      </motion.section>

      {/* CTA BANNER */}
      <motion.section
        className="py-20 px-8 md:px-16 bg-[#134338] text-[#ffffff]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ 
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
          }}>
            Ready for a win-win?
          </h2>
          <p className="text-xl mb-3 max-w-2xl mx-auto" style={{ 
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
          }}>
            Expand into new markets and create new revenue opportunities when
            you partner with us. Submit the form below to meet with a
            partnership specialist.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-[#ffffff] text-[#134338] px-8 py-4 rounded-xl font-bold text-base uppercase hover:bg-[#16f98a] hover:text-[#ffffff] transition-all duration-300 hover:scale-105"
            style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
          >
            Get started
            <ArrowRight className="w-5 h-5" style={{ color: '#134338' }} />
          </a>
        </div>
      </motion.section>

      {/* CONTACT FORM */}
      <motion.section
        id="contact-form"
        className="py-24 px-8 md:px-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ 
            color: '#16f98a',
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
          }}>
            Partner with us
          </h2>
          <p className="text-lg mb-12" style={{ 
            color: '#134338',
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif'
          }}>
            Name your niche, regions, and merchant types. We'll take it from
            there.
          </p>

          <form className="space-y-6" style={{ 
            fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' 
          }}>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Name <span style={{ color: '#16f98a' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="Your name"
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Work email <span style={{ color: '#16f98a' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="you@company.com"
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Company / agency name <span style={{ color: '#16f98a' }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="Your company"
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Website or LinkedIn profile
              </label>
              <input
                type="text"
                name="website"
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="https://..."
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Regions you operate in <span style={{ color: '#16f98a' }}>*</span>
              </label>
              <input
                type="text"
                name="regions"
                required
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="e.g., Europe, APAC, North America"
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Merchant types you usually work with{' '}
                <span style={{ color: '#16f98a' }}>*</span>
              </label>
              <input
                type="text"
                name="merchant_types"
                required
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="e.g., iGaming, Forex, Crypto"
                style={{ color: '#134338' }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                How do you usually source leads?
              </label>
              <select
                name="lead_source"
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                style={{ color: '#134338' }}
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

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#134338' }}>
                Additional information
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-6 py-3 border border-[#16f98a] rounded-lg focus:outline-none focus:border-[#16f98a] transition-colors bg-white"
                placeholder="Share anything else we should know about your portfolio, licenses, or goals..."
                style={{ color: '#134338' }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#134338] text-[#ffffff] py-4 rounded-xl font-bold text-base uppercase hover:bg-[#16f98a] transition-all duration-300"
              style={{ fontFamily: '"Myriad Variable Concept", system-ui, -apple-system, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>

            <p className="text-xs text-center" style={{ color: '#134338' }}>
              A partnerships specialist will review your details and reach out
              within one business day.
            </p>
          </form>
        </div>
      </motion.section>
    </section>
  )
}
