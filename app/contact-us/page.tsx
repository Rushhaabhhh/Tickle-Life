'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Globe, EyeOff, UserCheck, FileBadge2 } from 'lucide-react'

const tabs = [
  { label: 'For Merchants', key: 'merchant' },
  { label: 'For Agents', key: 'agent' },
  { label: 'For Partners', key: 'partner' }
] as const

type TabKey = typeof tabs[number]['key']

// Trust icons/points
function TrustList() {
  const trustItems = [
    { icon: <FileBadge2 size={18} className="text-green-600" />, text: "Free compliance and risk review with every inquiry." },
    { icon: <UserCheck size={18} className="text-green-600" />, text: "Real people, no bots — every submission is reviewed manually." },
    { icon: <EyeOff size={18} className="text-green-600" />, text: "Your data stays private — never shared or sold." },
    { icon: <Globe size={18} className="text-green-600" />, text: "Registered with FinCEN (U.S.) and FINTRAC (Canada)." },
    { icon: <ShieldCheck size={18} className="text-green-600" />, text: "PCI DSS Level 1 certified and licensed in 22+ jurisdictions." }
  ]
  return (
    <ul className="list-none pl-0 space-y-3 mt-4">
      {trustItems.map(({ icon, text }) => (
        <li key={text} className="flex items-center gap-3 text-gray-800 text-base font-light">
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
      <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">{label}</label>
      <input
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-light text-gray-900 bg-white focus:border-black focus:outline-none transition-all duration-300"
        {...props}
      />
    </div>
  )
}

type MerchantFormProps = {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
}

function MerchantForm({ onDone, loading, setLoading }: MerchantFormProps) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', industry: '', website: '', region: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (Object.values(form).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormField label="Name*" name="name" value={form.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={form.email} onChange={handleChange} />
      <FormField label="Company*" name="company" value={form.company} onChange={handleChange} />
      <FormField label="Industry*" name="industry" value={form.industry} onChange={handleChange} />
      <FormField label="Company Website*" name="website" value={form.website} onChange={handleChange} />
      <FormField label="Operating Region*" name="region" value={form.region} onChange={handleChange} />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-medium text-base transition-all cursor-pointer
        ${loading ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-black text-white hover:bg-gray-900 hover:scale-[1.02]'}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

type AgentFormProps = {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
}

function AgentForm({ onDone, loading, setLoading }: AgentFormProps) {
  const [form, setForm] = useState({
    name: '', email: '', agency: '', website: '', regions: '', types: '', sourcing: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (Object.values(form).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormField label="Name*" name="name" value={form.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={form.email} onChange={handleChange} />
      <FormField label="Company / Agency Name*" name="agency" value={form.agency} onChange={handleChange} />
      <FormField label="Website or LinkedIn Profile*" name="website" value={form.website} onChange={handleChange} />
      <FormField label="Regions You Operate In*" name="regions" value={form.regions} onChange={handleChange} />
      <FormField label="Merchant Types You Usually Work With*" name="types" value={form.types} onChange={handleChange} />
      <FormField label="How Do You Usually Source Leads?*" name="sourcing" value={form.sourcing} onChange={handleChange} />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-medium text-base transition-all cursor-pointer
        ${loading ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-black text-white hover:bg-gray-900 hover:scale-[1.02]'}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

type PartnerFormProps = {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
}

function PartnerForm({ onDone, loading, setLoading }: PartnerFormProps) {
  const [form, setForm] = useState({
    name: '', email: '', org: '', orgtype: '', website: '', licenses: ''
  })
  const [error, setError] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setForm(f => ({ ...f, orgtype: e.target.value }))
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (Object.values(form).some(x => !x)) { setError("All fields required."); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); onDone() }, 1400)
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormField label="Name*" name="name" value={form.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={form.email} onChange={handleChange} />
      <FormField label="Organization Name*" name="org" value={form.org} onChange={handleChange} />
      <div>
        <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Organization Type*</label>
        <select
          name="orgtype"
          value={form.orgtype}
          onChange={handleSelectChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-light text-gray-900 bg-white focus:border-black focus:outline-none transition-all duration-300"
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
      <FormField label="Website*" name="website" value={form.website} onChange={handleChange} />
      <FormField label="Licenses*" name="licenses" value={form.licenses} onChange={handleChange} />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" disabled={loading}
        className={`w-full py-4 mt-2 rounded-xl font-medium text-base transition-all cursor-pointer
        ${loading ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-black text-white hover:bg-gray-900 hover:scale-[1.02]'}`}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-light text-gray-900 leading-tight mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Ready to move forward? Let&apos;s talk.<br /><br />
            If you&apos;ve already run the simulator and know you qualify, drop your details here.<br />
            Our compliance team reviews each submission manually—most get a response in 24 hours.
            <br /><br />
            Not ready yet? Check out our <a className="underline hover:text-gray-900" href="/resources">Resources</a> or <a className="underline hover:text-gray-900" href="/eligibility">Eligibility Widget</a> first →
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* FORM COLUMN */}
          <section>
            {/* Tabs */}
            <div className="flex gap-3 mb-8">
              {tabs.map(t => (
                <button key={t.key}
                  onClick={() => { setTab(t.key); setSubmitted(false) }}
                  className={`px-6 py-3 rounded-full font-medium transition-all text-sm duration-300 cursor-pointer
                  ${tab === t.key ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>
            {/* Animation switcher */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm min-h-[370px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted && !loading && tab === 'merchant' && (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center min-h-[300px]"
                  >
                    <p className="text-2xl text-gray-900 font-medium mb-4">Great! You&apos;re on your way.</p>
                    <p className="text-gray-500">If you&apos;re qualified, we&apos;ll reach out to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <TrustList />
          </section>

          {/* INFO COLUMN */}
          <section className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-600">
              Why Choose Our Platform
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Free compliance and risk review</h3>
                <p className="text-gray-600 text-base">Every inquiry is double-checked by specialists for accuracy and speed.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Registered & Certified</h3>
                <p className="text-gray-600 text-base">FinCEN, FINTRAC, PCI DSS Level 1—plus licensed in 22+ global jurisdictions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Privacy First</h3>
                <p className="text-gray-600 text-base">We never sell or share your data. Real people only, no bots.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
