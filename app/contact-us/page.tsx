'use client'

import { useState, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Globe, EyeOff, UserCheck, FileBadge2 } from 'lucide-react'
import { Button, Input } from '@/app/components/ui'

// Tabs
const tabs = [
  { label: 'For Merchants', key: 'merchant' },
  { label: 'For Agents', key: 'agent' },
  { label: 'For Partners', key: 'partner' }
] as const

type TabKey = (typeof tabs)[number]['key']

// Trust-list
function TrustList() {
  const trustItems = [
    {
      icon: <FileBadge2 size={18} className="text-brand" />,
      text: 'Free compliance and risk review with every inquiry.'
    },
    {
      icon: <UserCheck size={18} className="text-brand" />,
      text: 'Real people, no bots - every submission is reviewed manually.'
    },
    {
      icon: <EyeOff size={18} className="text-brand" />,
      text: 'Your data stays private - never shared or sold.'
    },
    {
      icon: <Globe size={18} className="text-brand" />,
      text: 'Registered with FinCEN (U.S.) and FINTRAC (Canada).'
    },
    {
      icon: <ShieldCheck size={18} className="text-brand" />,
      text: 'PCI DSS Level 1 certified and licensed in 22+ jurisdictions.'
    }
  ]

  return (
    <ul className="mt-6 space-y-3 list-none pl-0">
      {trustItems.map(({ icon, text }) => (
        <li
          key={text}
          className="inter-300 flex items-center gap-3 text-base text-brand"
        >
          {icon}
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

// Form Field Component
type FieldProps = {
  label: string
  name: string
  value: string
  type?: string
  placeholder?: string
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

function FormField({ label, ...props }: FieldProps) {
  return (
    <div>
      <label className="inter-600 mb-2 block text-xs uppercase tracking-widest text-brand">
        {label}
      </label>
      <Input
        {...props}
        className="inter-300 rounded-lg px-4 py-3 text-base bg-white/20 backdrop-blur-md"
      />
    </div>
  )
}

// Generic Form Submission Handler
async function submitForm(formData: Record<string, string>) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SPREADSHEET_FORM_ENDPOINT!, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Submission failed. Please try again.' }
  }
}

// Merchant Form
function MerchantForm({
  onDone,
  loading,
  setLoading,
  setError
}: {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
  setError: (error: string | null) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    website: '',
    region: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  const handleSubmit = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault()
    setError(null)
    setLoading(true)

    const result = await submitForm(formData)

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        website: '',
        region: ''
      })
      onDone()
    } else {
      setError(result.error || 'Submission failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-5">
      <FormField label="Name*" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Company*" name="company" value={formData.company} onChange={handleChange} />
      <FormField label="Industry*" name="industry" value={formData.industry} onChange={handleChange} />
      <FormField label="Company Website*" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Operating Region*" name="region" value={formData.region} onChange={handleChange} />

      {/** Error will be passed from parent */}
      <SubmitButton loading={loading} onClick={() => handleSubmit()} />
    </div>
  )
}

// Agent Form
function AgentForm({
  onDone,
  loading,
  setLoading,
  setError
}: {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
  setError: (error: string | null) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    website: '',
    regions: '',
    types: '',
    sourcing: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  const handleSubmit = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault()
    setError(null)
    setLoading(true)

    const result = await submitForm(formData)

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        agency: '',
        website: '',
        regions: '',
        types: '',
        sourcing: ''
      })
      onDone()
    } else {
      setError(result.error || 'Submission failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-5">
      <FormField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Company / Agency Name" name="agency" value={formData.agency} onChange={handleChange} />
      <FormField label="Website or LinkedIn Profile" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Operating Regions" name="regions" value={formData.regions} onChange={handleChange} />
      <FormField label="Merchant Types You Work With" name="types" value={formData.types} onChange={handleChange} />
      <FormField label="How Do You Source Leads?" name="sourcing" value={formData.sourcing} onChange={handleChange} />

      {/** Error will be passed from parent */}
      <SubmitButton loading={loading} onClick={() => handleSubmit()} />
    </div>
  )
}

// Partner Form
function PartnerForm({
  onDone,
  loading,
  setLoading,
  setError
}: {
  onDone: () => void
  loading: boolean
  setLoading: (v: boolean) => void
  setError: (error: string | null) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    orgtype: '',
    website: '',
    licenses: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  const handleSubmit = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault()
    setError(null)
    setLoading(true)

    const result = await submitForm(formData)

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        org: '',
        orgtype: '',
        website: '',
        licenses: ''
      })
      onDone()
    } else {
      setError(result.error || 'Submission failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-5">
      <FormField label="Name*" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Work Email*" type="email" name="email" value={formData.email} onChange={handleChange} />
      <FormField label="Organization Name*" name="org" value={formData.org} onChange={handleChange} />
      <div>
        <label className="inter-600 mb-2 block text-xs uppercase tracking-widest text-brand">
          Organization Type*
        </label>

        <select
          name="orgtype"
          value={formData.orgtype}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              orgtype: e.target.value
            }))
          }
          className="inter-300 ui-input w-full rounded-lg px-4 py-3 text-base bg-white/20 backdrop-blur-md"
        >
          <option value="">Select type</option>
          <option value="bank">Bank</option>
          <option value="iso">ISO</option>
          <option value="processor">Processor</option>
          <option value="tech">Technology</option>
          <option value="compliance">Compliance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <FormField label="Website*" name="website" value={formData.website} onChange={handleChange} />
      <FormField label="Licenses*" name="licenses" value={formData.licenses} onChange={handleChange} />

      {/** Error will be passed from parent */}
      <SubmitButton loading={loading} onClick={() => handleSubmit()} />
    </div>
  )
}

// Submit Button
function SubmitButton({
  loading,
  onClick
}: {
  loading: boolean
  onClick: () => void
}) {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      variant="secondary"
      className={`inter-700 mt-2 w-full rounded-xl py-4 text-base ${loading ? 'cursor-not-allowed opacity-70' : 'hover:scale-105'}`}
    >
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  )
}

// Main Contact Section
export default function ContactSection() {
  const [tab, setTab] = useState<TabKey>('merchant')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  return (
    <section className="bg-white py-24 px-4 md:px-8 min-h-screen text-brand">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="inter-800 text-5xl leading-tight mb-3 text-center bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="inter-300 text-lg max-w-2xl mx-auto text-brand">
            Ready to move forward? Let&apos;s talk.<br /><br />
            If you&apos;ve already run the simulator and know you qualify, drop your details here.<br />
            Our compliance team reviews each submission manually; most get a response in 24 hours.
            <br /><br />
            Not ready yet? Check out our{' '}
            <a 
              className="inter-600 underline hover:no-underline transition-all bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent" 
              href="/resources"
            >
              Resources
            </a>{' '}
            or{' '}
            <a 
              className="inter-600 underline hover:no-underline transition-all bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent" 
              href="/resources"
            >
              Eligibility Widget
            </a>{' '}
            first
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          <section>
            <h2 className="inter-800 text-2xl md:text-4xl mb-10 bg-gradient-to-r from-[#2B1E17] to-[#4A3428] bg-clip-text text-transparent">
              Why Choose Our Platform
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="inter-600 text-lg mb-1 text-brand">
                  Free compliance and risk review
                </h3>
                <p className="inter-300 text-base text-brand/80">
                  Every inquiry is double - checked by specialists for accuracy and speed.
                </p>
              </div>
              <div>
                <h3 className="inter-600 text-lg mb-1 text-brand">
                  Registered & Certified
                </h3>
                <p className="inter-300 text-base text-brand/80">
                  FinCEN, FINTRAC, PCI DSS Level 1 - plus licensed in 22+ global jurisdictions.
                </p>
              </div>
              <div>
                <h3 className="inter-600 text-lg mb-1 text-brand">
                  Privacy First
                </h3>
                <p className="inter-300 text-base mb-20 text-brand/80">
                  We never sell or share your data. Real people only, no bots.
                </p>
              </div>
            </div>
            <TrustList />
          </section>

          <section>
            <div className="flex gap-3 mb-8">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => { 
                    setTab(t.key); 
                    setSubmitted(false);
                    setError(null);
                  }}
                  className={`inter-500 px-6 py-3 rounded-full transition-all text-sm duration-300 cursor-pointer flex-1 ${tab === t.key ? 'ui-btn ui-btn-secondary border-transparent' : 'ui-btn ui-btn-ghost bg-white/20 backdrop-blur-md border-brand'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="p-8 rounded-2xl shadow-sm min-h-[370px] flex flex-col justify-center border-2 bg-white/20 backdrop-blur-xl border-[#2B1E17]">
              <AnimatePresence mode="wait">
                {!submitted && !loading && tab === 'merchant' && (
                  <motion.div
                    key="merchant"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MerchantForm 
                      onDone={() => setSubmitted(true)} 
                      loading={loading} 
                      setLoading={setLoading}
                      setError={setError}
                    />
                  </motion.div>
                )}
                {!submitted && !loading && tab === 'agent' && (
                  <motion.div
                    key="agent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AgentForm 
                      onDone={() => setSubmitted(true)} 
                      loading={loading} 
                      setLoading={setLoading}
                      setError={setError}
                    />
                  </motion.div>
                )}
                {!submitted && !loading && tab === 'partner' && (
                  <motion.div
                    key="partner"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PartnerForm 
                      onDone={() => setSubmitted(true)} 
                      loading={loading} 
                      setLoading={setLoading}
                      setError={setError}
                    />
                  </motion.div>
                )}
                {(submitted || loading) && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center min-h-[300px] text-center text-brand"
                  >
                    <p className="inter-500 text-2xl mb-4">Great! You&apos;re on your way.</p>
                    <p className="inter-300 opacity-80">If you&apos;re qualified, we&apos;ll reach out to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              {error && !submitted && !loading && (
                <div className="inter-600 text-sm text-brand mt-4">
                  {error}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
