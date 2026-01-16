'use client'

import { useState, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Globe, EyeOff, UserCheck, FileBadge2 } from 'lucide-react'

const tabs = [
  { label: 'For Merchants', key: 'merchant' },
  { label: 'For Agents', key: 'agent' },
  { label: 'For Partners', key: 'partner' }
] as const

type TabKey = typeof tabs[number]['key']

function TrustList() {
  const trustItems = [
    { icon: <FileBadge2 size={18} className="text-[#2B1E17]" />, text: "Free compliance and risk review with every inquiry." },
    { icon: <UserCheck size={18} className="text-[#2B1E17]" />, text: "Real people, no bots — every submission is reviewed manually." },
    { icon: <EyeOff size={18} className="text-[#2B1E17]" />, text: "Your data stays private — never shared or sold." },
    { icon: <Globe size={18} className="text-[#2B1E17]" />, text: "Registered with FinCEN (U.S.) and FINTRAC (Canada)." },
    { icon: <ShieldCheck size={18} className="text-[#2B1E17]" />, text: "PCI DSS Level 1 certified and licensed in 22+ jurisdictions." }
  ]
  return (
    <ul className="list-none pl-0 space-y-3 mt-6">
      {trustItems.map(({ icon, text }) => (
        <li key={text} className="flex items-center gap-3 text-[#2B1E17] text-base font-light" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
          {icon}
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

type FieldProps = {
  label: string
  name: string
  value: string
  type?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

function FormField({ label, ...props }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#2B1E17] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{label}</label>
      <input
        className="w-full px-4 py-3 border-2 rounded-lg text-base font-light text-[#2B1E17] bg-white focus:outline-none transition-all duration-300"
        style={{ 
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          borderColor: '#2B1E17',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#2B1E17'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(43, 30, 23, 0.1)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none'
        }}
        {...props}
      />
    </div>
  )
}

function MerchantForm({ onDone, loading, setLoading }: { onDone: () => void; loading: boolean; setLoading: (v: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', industry: '', website: '', region: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    setError(null)
    if (Object.values(formData).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <div className="space-y-5">
      <FormField label="Name*" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Company*" name="company" value={formData.company} onChange={handleChange} />
      <FormField label="Industry*" name="industry" value={formData.industry} onChange={handleChange} />
      <FormField label="Company Website*" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Operating Region*" name="region" value={formData.region} onChange={handleChange} />
      {error && <div className="text-[#2B1E17] text-sm font-semibold" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{error}</div>}
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-bold text-base transition-all duration-300 ${loading ? 'cursor-not-allowed opacity-70' : 'hover:scale-105'}`}
        style={{ 
          fontFamily: '"Ardela Edge", "Bebas Neue", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
          color: '#ffffff',
          border: '2px solid transparent'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
            e.currentTarget.style.backdropFilter = 'blur(10px)'
            e.currentTarget.style.color = '#2B1E17'
            e.currentTarget.style.borderColor = '#2B1E17'
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
            e.currentTarget.style.backdropFilter = 'none'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = 'transparent'
          }
        }}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}

function AgentForm({ onDone, loading, setLoading }: { onDone: () => void; loading: boolean; setLoading: (v: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: '', email: '', agency: '', website: '', regions: '', types: '', sourcing: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    setError(null)
    if (Object.values(formData).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <div className="space-y-5">
      <FormField label="Name*" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Company / Agency Name*" name="agency" value={formData.agency} onChange={handleChange} />
      <FormField label="Website or LinkedIn Profile*" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Regions You Operate In*" name="regions" value={formData.regions} onChange={handleChange} />
      <FormField label="Merchant Types You Usually Work With*" name="types" value={formData.types} onChange={handleChange} />
      <FormField label="How Do You Usually Source Leads?*" name="sourcing" value={formData.sourcing} onChange={handleChange} />
      {error && <div className="text-[#2B1E17] text-sm font-semibold" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{error}</div>}
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-bold text-base transition-all duration-300 ${loading ? 'cursor-not-allowed opacity-70' : 'hover:scale-105'}`}
        style={{ 
          fontFamily: '"Ardela Edge", "Bebas Neue", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
          color: '#ffffff',
          border: '2px solid transparent'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
            e.currentTarget.style.backdropFilter = 'blur(10px)'
            e.currentTarget.style.color = '#2B1E17'
            e.currentTarget.style.borderColor = '#2B1E17'
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
            e.currentTarget.style.backdropFilter = 'none'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = 'transparent'
          }
        }}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}

function PartnerForm({ onDone, loading, setLoading }: { onDone: () => void; loading: boolean; setLoading: (v: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: '', email: '', org: '', orgtype: '', website: '', licenses: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setFormData(f => ({ ...f, orgtype: e.target.value }))
  const handleSubmit = () => {
    setError(null)
    if (Object.values(formData).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <div className="space-y-5">
      <FormField label="Name*" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Organization Name*" name="org" value={formData.org} onChange={handleChange} />
      <div>
        <label className="block text-xs font-medium text-[#2B1E17] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Organization Type*</label>
        <select
          name="orgtype"
          value={formData.orgtype}
          onChange={handleSelectChange}
          className="w-full px-4 py-3 border-2 rounded-lg text-base font-light text-[#2B1E17] bg-white focus:outline-none transition-all duration-300"
          style={{ 
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            borderColor: '#2B1E17',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#2B1E17'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(43, 30, 23, 0.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = 'none'
          }}
          required
        >
          <option value="">Select type</option>
          <option value="bank">Bank</option>
          <option value="iso">ISO</option>
          <option value="processor">Processor</option>
          <option value="tech">Tech</option>
          <option value="compliance">Compliance</option>
          <option value="other">Other</option>
        </select>
      </div>
      <FormField label="Website*" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Licenses*" name="licenses" value={formData.licenses} onChange={handleChange} />
      {error && <div className="text-[#2B1E17] text-sm font-semibold" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{error}</div>}
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-bold text-base transition-all duration-300 ${loading ? 'cursor-not-allowed opacity-70' : 'hover:scale-105'}`}
        style={{ 
          fontFamily: '"Ardela Edge", "Bebas Neue", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
          color: '#ffffff',
          border: '2px solid transparent'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
            e.currentTarget.style.backdropFilter = 'blur(10px)'
            e.currentTarget.style.color = '#2B1E17'
            e.currentTarget.style.borderColor = '#2B1E17'
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
            e.currentTarget.style.backdropFilter = 'none'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = 'transparent'
          }
        }}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}

export default function ContactSection() {
  const [tab, setTab] = useState<TabKey>('merchant')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <section className="bg-white py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl leading-tight mb-3 text-center" style={{ 
            background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Ardela Edge", "Bebas Neue", system-ui, sans-serif' 
          }}>
            Contact Us
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ 
            color: '#2B1E17',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif' 
          }}>
            Ready to move forward? Let&apos;s talk.<br /><br />
            If you&apos;ve already run the simulator and know you qualify, drop your details here.<br />
            Our compliance team reviews each submission manually—most get a response in 24 hours.
            <br /><br />
            Not ready yet? Check out our <a className="underline hover:no-underline transition-all" href="/resources" style={{ 
              background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 600
            }}>Resources</a> or <a className="underline hover:no-underline transition-all" href="/resources" style={{ 
              background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 600
            }}>Eligibility Widget</a> first →
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          <section>
            <h2 className="text-2xl md:text-4xl font-bold mb-10" style={{ 
              background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: '"Ardela Edge", "Bebas Neue", system-ui, sans-serif' 
            }}>
              Why Choose Our Platform
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif' 
                }}>Free compliance and risk review</h3>
                <p className="text-base" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  opacity: 0.8
                }}>Every inquiry is double-checked by specialists for accuracy and speed.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif' 
                }}>Registered & Certified</h3>
                <p className="text-base" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  opacity: 0.8
                }}>FinCEN, FINTRAC, PCI DSS Level 1—plus licensed in 22+ global jurisdictions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif' 
                }}>Privacy First</h3>
                <p className="text-base mb-20" style={{ 
                  color: '#2B1E17',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  opacity: 0.8
                }}>We never sell or share your data. Real people only, no bots.</p>
              </div>
            </div>
            <TrustList />
          </section>

          <section>
            <div className="flex gap-3 mb-8">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => { setTab(t.key); setSubmitted(false) }}
                  className={`px-6 py-3 rounded-full font-medium transition-all text-sm duration-300 cursor-pointer flex-1 ${tab === t.key ? "" : "border-2"}`}
                  style={{ 
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    ...(tab === t.key ? {
                      background: 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)',
                      color: '#ffffff'
                    } : {
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      color: '#2B1E17',
                      borderColor: '#2B1E17'
                    })
                  }}
                  onMouseEnter={(e) => {
                    if (tab !== t.key) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2B1E17 0%, #4A3428 100%)'
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.backdropFilter = 'none'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tab !== t.key) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                      e.currentTarget.style.backdropFilter = 'blur(10px)'
                      e.currentTarget.style.color = '#2B1E17'
                    }
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm min-h-[370px] flex flex-col justify-center border-2" style={{
              borderColor: '#2B1E17',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <AnimatePresence mode="wait">
                {!submitted && !loading && tab === 'merchant' && (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MerchantForm onDone={() => setSubmitted(true)} loading={loading} setLoading={setLoading} />
                  </motion.div>
                )}
                {!submitted && !loading && tab === 'agent' && (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AgentForm onDone={() => setSubmitted(true)} loading={loading} setLoading={setLoading} />
                  </motion.div>
                )}
                {!submitted && !loading && tab === 'partner' && (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PartnerForm onDone={() => setSubmitted(true)} loading={loading} setLoading={setLoading} />
                  </motion.div>
                )}
                {(submitted || loading) && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center min-h-[300px] text-center"
                    style={{ color: '#2B1E17' }}
                  >
                    <p className="text-2xl font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Great! You&apos;re on your way.</p>
                    <p style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', color: '#2B1E17', opacity: 0.8 }}>If you&apos;re qualified, we&apos;ll reach out to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}