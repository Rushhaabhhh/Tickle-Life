'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, FileText, Users, ChevronDown } from 'lucide-react'



const filterCategories = {
  product: ['Cards', 'APMs', 'Crypto', 'Fraud', 'Routing'],
  industry: ['iGaming', 'Forex', 'Adult', 'Wellness', 'Crypto'],
  contentType: ['Blog', 'Checklist', 'Case Study', 'Compliance PDF', 'Webinar']
}

const featuredResources = [
  {
    title: "Why your onboarding keeps getting delayed in LatAm—and what to fix",
    image: "/placeholder-latam.jpg"
  },
  {
    title: "Playbook: How we got a Forex client live in GCC in 5 days",
    image: "/placeholder-forex.jpg"
  },
  {
    title: "Checklist: Documents that trigger red flags in high-risk onboarding",
    image: "/placeholder-checklist.jpg"
  }
]

const blogs = [
  { title: "Why 'High-Risk' Isn't a Dirty Word", filter: 'Recent' },
  { title: "The Real Cost of Frozen Funds", filter: 'iGaming' },
  { title: "Banking Blind Spots: What PSPs Still Don't Get About iGaming", filter: 'Forex' }
]

const complianceDocs = [
  { title: "Merchant Onboarding Checklist (2025 Edition)", filter: 'iGaming' },
  { title: "Cross-Border Payment Rules: A Quick Reference", filter: 'Forex' },
  { title: "KYC & AML Essentials for High-Risk Merchants", filter: 'Adult' }
]

const successStories = [
  { title: "How a Forex Platform Cut MDR by 40% With Local Banking Rails", filter: 'Forex' },
  { title: "From 12 Declines to 97% Approvals: A Tier-1 iGaming Case", filter: 'iGaming' },
  { title: "Rebuilding Trust After a PayPal Freeze: The Merchant Comeback Story", filter: 'Adult' }
]

export default function ResourceSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeProductFilter, setActiveProductFilter] = useState<string | null>(null)
  const [activeIndustryFilter, setActiveIndustryFilter] = useState<string | null>(null)
  const [activeContentFilter, setActiveContentFilter] = useState<string | null>(null)

  return (
    <section className="bg-transparent py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-6 tracking-tight">
            Resource Center
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
            For those who actually run things. No fluff, no theory—just real guidance.
          </p>
        </motion.header>

        {/* Filter Bar */}
        <motion.div
          className="mb-16 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 bg-transparent border border-gray-200 rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <DropdownFilter
              label="Product"
              items={filterCategories.product}
              active={activeProductFilter}
              setActive={setActiveProductFilter}
            />
            <DropdownFilter
              label="Industry"
              items={filterCategories.industry}
              active={activeIndustryFilter}
              setActive={setActiveIndustryFilter}
            />
            <DropdownFilter
              label="Content Type"
              items={filterCategories.contentType}
              active={activeContentFilter}
              setActive={setActiveContentFilter}
            />
          </div>

          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <button
              className="px-5 py-3 bg-black text-white text-sm rounded-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              onClick={() => console.log('Apply Filters')}
            >
              Apply Filters
            </button>
            <button
              className="px-5 py-3 bg-gray-200 text-gray-800 text-sm rounded-xl hover:bg-gray-300 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setActiveProductFilter(null)
                setActiveIndustryFilter(null)
                setActiveContentFilter(null)
              }}
            >
              Clear Filters
            </button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="relative max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Find onboarding docs, compliance walkthroughs, or geo-level approval guides…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-6 pr-14 py-4 border text-gray-800 border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none transition-all duration-300 text-base font-light"
          />
          <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </motion.div>

        {/* Featured Content */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-102 transition-all duration-500 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    {resource.title}
                  </h3>
                  <div className="mt-4 text-sm text-gray-900 transition-colors">
                    Read More
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blogs Section */}
        <ContentSection title="Blogs" items={blogs} icon={FileText} align="left" />

        {/* Compliance Docs Section */}
        <ContentSection title="Compliance Docs" items={complianceDocs} icon={Download} align="right" />

        {/* Success Stories Section */}
        <ContentSection title="Success Stories" items={successStories} icon={Users} align="left" />

      </div>
    </section>
  )
}

type DropdownFilterProps = {
  label: string
  items: string[]
  active: string | null
  setActive: (v: string | null) => void
}

function DropdownFilter({ label, items, active, setActive }: DropdownFilterProps) {
  return (
    <div className="flex flex-col relative">
      <label className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={active ?? ''}
          onChange={(e) => setActive(e.target.value || null)}
          className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-800 text-sm bg-white focus:border-gray-900 focus:outline-none transition-all cursor-pointer"
        >
          <option value="">Select {label}</option>
          {items.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      </div>
    </div>
  )
}

type ContentSectionProps = {
  title: string
  items: { title: string; filter: string }[]
  icon: React.ComponentType<{ className?: string }>
  align: 'left' | 'right'
}

function ContentSection({ title, items, icon: Icon, align }: ContentSectionProps) {
  return (
    <motion.section
      className={`mb-24 ${align === 'right' ? 'text-right' : 'text-left'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10">{title}</h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-900 hover:shadow-md transition-all cursor-pointer duration-300 flex items-center justify-between ${
              align === 'right' ? 'flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: align === 'right' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={align === 'right' ? 'text-right' : ''}>
              <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
              <span className="text-sm text-gray-400">{item.filter}</span>
            </div>
            <Icon className="w-6 h-6 text-gray-400" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
