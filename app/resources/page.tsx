'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Search, Download, Users, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { calculateReadingTime, stripHtmlTags } from '@/app/components/BlogPostSchema'

const filterCategories = {
  product: ['Cards', 'APMs', 'Crypto', 'Fraud', 'Routing'],
  industry: ['iGaming', 'Forex', 'Adult', 'Wellness', 'Crypto'],
  contentType: ['Blog', 'Checklist', 'Case Study', 'Compliance PDF', 'Webinar']
}

interface Post {
  id: number
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  categories: number[]
  tags: number[]
  _links: {
    'wp:featuredmedia'?: Array<{ embeddable: boolean; href: string }>
  }
  featuredImageUrl?: string
}


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
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [activeProductFilter, setActiveProductFilter] = useState<string | null>(null)
  const [activeIndustryFilter, setActiveIndustryFilter] = useState<string | null>(null)
  const [activeContentFilter, setActiveContentFilter] = useState<string | null>(null)
  
  const [posts, setPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const postsPerPage = 9

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Fetch posts from WordPress API with pagination
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const params = new URLSearchParams({
          per_page: postsPerPage.toString(),
          page: currentPage.toString(),
          _embed: 'wp:featuredmedia', // Embed featured media to reduce requests
        })

        // Add search filter if exists
        if (debouncedSearchTerm) {
          params.append('search', debouncedSearchTerm)
        }

        const response = await fetch(`https://www.ticklecharge.com/wp-json/wp/v2/posts?${params}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data: Post[] = await response.json()
        
        // Get total pages and posts from headers
        const totalPagesHeader = response.headers.get('X-WP-TotalPages')
        const totalPostsHeader = response.headers.get('X-WP-Total')
        
        if (totalPagesHeader) setTotalPages(parseInt(totalPagesHeader, 10))
        if (totalPostsHeader) setTotalPosts(parseInt(totalPostsHeader, 10))
        
        // Process posts with embedded featured images
        const postsWithImages = data.map((post) => {
          const embeddedData = post as typeof post & {
            _embedded?: {
              'wp:featuredmedia'?: Array<{ source_url?: string }>
            }
          }
          const featuredMedia = embeddedData._embedded?.['wp:featuredmedia']?.[0]
          return {
            ...post,
            featuredImageUrl: featuredMedia?.source_url || undefined
          }
        })
        
        setPosts(postsWithImages)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, debouncedSearchTerm])

  // Apply filters - reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchTerm, activeProductFilter, activeIndustryFilter, activeContentFilter])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  return (
    <section className="bg-transparent py-24 px-4 md:px-8 min-h-screen inter-400 text-brand">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs />

        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="inter-800 text-6xl md:text-7xl leading-tight mb-6 tracking-tight" style={{ color: '#2B1E17' }}>
            Resource Center
          </h1>
          <p className="inter-400 text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#2B1E17' }}>
            For those who actually run things. No fluff, no theory - just real guidance.
          </p>
        </motion.header>

        <motion.div
          className="mb-16 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 bg-transparent border border-[#2B1E17] rounded-2xl p-6"
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
              className="inter-semibold px-5 py-3 bg-white text-[#2B1E17] text-base rounded-xl hover:bg-gradient-to-r hover:from-[#2B1E17] hover:to-[#2B1E17]/80 hover:text-white transition-all duration-300 cursor-pointer border border-[#2B1E17]"
              onClick={() => {
                setActiveProductFilter(null)
                setActiveIndustryFilter(null)
                setActiveContentFilter(null)
                setSearchTerm('')
              }}
            >
              Clear All
            </button>
          </div>
        </motion.div>

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
            className="inter-400 w-full pl-6 pr-14 py-4 border text-[#2B1E17] border-[#2B1E17] rounded-xl focus:border-[#2B1E17] focus:outline-none transition-all duration-300 text-lg bg-white"
          />
          <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2B1E17' }} />
        </motion.div>

        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="inter-800 text-4xl md:text-5xl mb-10 text-center" style={{ color: '#2B1E17' }}>
            Featured Resources
          </h2>
          
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B1E17]"></div>
              <p className="mt-4 text-[#2B1E17]">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#2B1E17]">No posts found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    className="inter-normal bg-white border border-[#2B1E17] rounded-2xl overflow-hidden hover:shadow-lg hover:scale-102 transition-all duration-500 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => window.open(`https://www.ticklecharge.com/?p=${post.id}`, '_blank')}
                  >
                    <div className="h-48 bg-gradient-to-br from-[#f8f6f4] to-[#f0ede9] flex items-center justify-center overflow-hidden">
                      {post.featuredImageUrl ? (
                        <Image 
                          src={post.featuredImageUrl} 
                          alt={stripHtml(post.title.rendered)}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="inter-normal text-[#2B1E17]/70 text-sm">Image Placeholder</span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 
                        className="inter-700 text-xl md:text-2xl group-hover:text-[#2B1E17] transition-colors line-clamp-2" 
                        style={{ color: '#2B1E17' }}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p 
                        className="inter-400 text-sm mt-2 text-[#2B1E17]/70 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      
                      {/* Reading Time & Date */}
                      <div className="flex items-center gap-4 mt-4 text-sm text-[#2B1E17]/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {calculateReadingTime(stripHtmlTags(post.content.rendered))} min read
                        </span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>

                      <div className="inter-500 mt-4 text-base group-hover:underline" style={{ color: '#2B1E17' }}>
                        Read the complete guide →
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-[#2B1E17] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2B1E17] hover:text-white transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show first, last, current, and adjacent pages
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            currentPage === pageNum
                              ? 'bg-[#2B1E17] text-white border-[#2B1E17]'
                              : 'border-[#2B1E17] hover:bg-[#2B1E17] hover:text-white'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return (
                        <span key={pageNum} className="px-2">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-[#2B1E17] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2B1E17] hover:text-white transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Page Info */}
              <div className="text-center mt-4 text-sm text-[#2B1E17]/70">
                Showing {((currentPage - 1) * postsPerPage) + 1}-{Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} posts
              </div>
            </>
          )}
        </motion.section>

        <ContentSection title="Compliance Docs" items={complianceDocs} icon={Download} align="right" />
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
      <label className="inter-700 text-sm uppercase tracking-widest mb-2" style={{ color: '#2B1E17' }}>
        {label}
      </label>
      <div className="relative">
        <select
          value={active ?? ''}
          onChange={(e) => setActive(e.target.value || null)}
          className="inter-500 w-full appearance-none border border-[#2B1E17] rounded-xl px-4 py-3 pr-10 text-[#2B1E17] text-base bg-white focus:border-[#2B1E17] focus:outline-none transition-all cursor-pointer"
        >
          <option value="">Select {label}</option>
          {items.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#2B1E17' }} />
      </div>
    </div>
  )
}

type ContentSectionProps = {
  title: string
  items: { title: string; filter: string }[]
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
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
      <h2 className="inter-800 text-4xl md:text-5xl mb-10" style={{ color: '#2B1E17' }}>
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className={`inter-normal bg-white border border-[#2B1E17] rounded-xl p-6 hover:border-[#2B1E17]/80 hover:shadow-md transition-all cursor-pointer duration-300 flex items-center justify-between ${
              align === 'right' ? 'flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: align === 'right' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={align === 'right' ? 'text-right' : ''}>
              <h3 className="inter-700 text-xl md:text-2xl mb-1" style={{ color: '#2B1E17' }}>{item.title}</h3>
              <span className="inter-500 text-base" style={{ color: '#2B1E17' }}>{item.filter}</span>
            </div>
            <Icon className="w-6 h-6" style={{ color: '#2B1E17' }} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
