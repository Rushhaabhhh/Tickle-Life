'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, FileText, Users } from 'lucide-react'

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
    <section className="bg-white py-24 px-4 md:px-8 min-h-screen">
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

        {/* Filter Labels */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FilterRow label="Product" items={filterCategories.product} active={activeProductFilter} setActive={setActiveProductFilter} />
          <FilterRow label="Industry" items={filterCategories.industry} active={activeIndustryFilter} setActive={setActiveIndustryFilter} />
          <FilterRow label="Content Type" items={filterCategories.contentType} active={activeContentFilter} setActive={setActiveContentFilter} />
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

type FilterRowProps = {
  label: string
  items: string[]
  active: string | null
  setActive: (v: string | null) => void
}

function FilterRow({ label, items, active, setActive }: FilterRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-400 uppercase tracking-widest min-w-[100px]">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <button
            key={item}
            onClick={() => setActive(active === item ? null : item)}
            className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 cursor-pointer ${
              active === item
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
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
