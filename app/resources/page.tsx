'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, Download, Play, Eye, Calendar, FileText, Video, BookOpen, Users, MessageCircle, ChevronDown } from 'lucide-react'

const ResourceCenter = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Animation effect on mount
  useEffect(() => {
    // Simulate GSAP timeline for hero animation
    if (heroRef.current) {
      heroRef.current.style.opacity = '0'
      heroRef.current.style.transform = 'translateY(50px)'
      
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'all 1s ease-out'
        }
        if (heroRef.current) {
          heroRef.current.style.opacity = '1'
        }
        if (heroRef.current) {
          heroRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }

    // Stagger card animations
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        
        setTimeout(() => {
          card.style.transition = 'all 0.6s ease-out'
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, 200 + index * 100)
      }
    })
  }, [])

  const resources = [
    {
      id: 1,
      type: 'Blog',
      title: 'KYC Automation in High-Risk Industries',
      description: 'Explore how automated KYC processes are revolutionizing compliance workflows for cryptocurrency exchanges and online gaming platforms.',
      date: 'Jan 15, 2025',
      category: 'product',
      icon: FileText
    },
    {
      id: 2,
      type: 'Blog',
      title: 'PCI DSS 4.0: What\'s New for Payment Processors',
      description: 'Breaking down the latest PCI DSS requirements and their impact on payment processing for regulated verticals.',
      date: 'Jan 12, 2025',
      category: 'industry',
      icon: FileText
    },
    {
      id: 3,
      type: 'Whitepaper',
      title: 'AML Compliance Checklist for Crypto Exchanges',
      description: 'Complete 50-point checklist covering transaction monitoring, suspicious activity reporting, and regulatory filing requirements.',
      date: 'Dec 2024',
      category: 'content-type',
      icon: Download
    },
    {
      id: 4,
      type: 'Guide',
      title: 'GDPR Implementation for Fintech',
      description: 'Step-by-step guide to achieving GDPR compliance while maintaining operational efficiency in financial services.',
      date: 'Dec 2024',
      category: 'product',
      icon: BookOpen
    },
    {
      id: 5,
      type: 'Webinar',
      title: 'Regulatory Landscape 2025: What\'s Ahead',
      description: 'Join leading compliance experts as they discuss upcoming regulatory changes affecting payment processors and high-risk merchants.',
      date: 'Live Jan 25',
      category: 'content-type',
      icon: Video
    },
    {
      id: 6,
      type: 'Webinar',
      title: 'Risk Assessment Strategies',
      description: 'Learn advanced risk scoring methodologies and fraud prevention techniques from industry veterans.',
      date: 'On-Demand',
      category: 'industry',
      icon: Play
    },
    {
      id: 7,
      type: 'Case Study',
      title: 'iGaming Platform: 40% Faster Onboarding',
      description: 'How a leading European iGaming operator reduced customer onboarding time while improving compliance scores by 95%.',
      date: 'Jan 2025',
      category: 'product',
      icon: Users
    },
    {
      id: 8,
      type: 'Case Study',
      title: 'Crypto Exchange: Zero Compliance Violations',
      description: 'Discover how automated monitoring helped a major exchange maintain perfect regulatory compliance across 15 jurisdictions.',
      date: 'Dec 2024',
      category: 'industry',
      icon: Eye
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const filterContent = (type: React.SetStateAction<string>) => {
    setActiveFilter(type)
    // Animate filter change
    cardsRef.current.forEach(card => {
      if (card) {
        card.style.transform = 'scale(0.95)'
        card.style.opacity = '0.7'
        setTimeout(() => {
          card.style.transform = 'scale(1)'
          card.style.opacity = '1'
        }, 200)
      }
    })
  }

  const loadMoreContent = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('More resources would be loaded here')
    }, 1000)
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'Blog': 'bg-blue-500',
      'Whitepaper': 'bg-purple-500',
      'Guide': 'bg-green-500',
      'Webinar': 'bg-red-500',
      'Case Study': 'bg-yellow-500'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-500'
  }

  const getActionText = (type: string) => {
    const actions = {
      'Blog': 'Read More',
      'Whitepaper': 'Download',
      'Guide': 'Download',
      'Webinar': 'Register Now',
      'Case Study': 'View Story'
    }
    return actions[type as keyof typeof actions] || 'View'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="mx-5 md:mx-10 pt-10 pb-6"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center border border-white/20 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Resource Center
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Take your knowledge to the next level — compliance, onboarding, and payments for high-risk verticals
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-5 md:mx-10 mb-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Filter Section */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-10 border-b border-slate-200">
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              {[
                { key: 'all', label: 'All Resources' },
                { key: 'product', label: 'By Product' },
                { key: 'industry', label: 'By Industry' },
                { key: 'content-type', label: 'Content Type' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => filterContent(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    activeFilter === filter.key
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-white text-slate-600 border-2 border-slate-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Find guides, compliance checklists, onboarding resources…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-6 pr-12 py-4 border-2 border-slate-200 rounded-full focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>

          {/* Featured Content */}
          <div className="p-6 md:p-10">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  Future of Regulated iGaming Payments
                </h3>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
                  Comprehensive analysis of emerging payment technologies, regulatory frameworks, and compliance strategies for the evolving iGaming landscape.
                </p>
                <button className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <Download className="w-5 h-5" />
                  Download Whitepaper
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 md:p-10">
            {/* Resources Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-slate-800 relative">
                Latest Resources
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource, index) => {
                  const IconComponent = resource.icon
                  return (
                    <div
                      key={resource.id}
                      ref={el => { cardsRef.current[index] = el }}
                      className="bg-slate-50 rounded-2xl p-6 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-slate-100 group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <span className={`${getTypeColor(resource.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {resource.type}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {resource.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <button className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-indigo-600 hover:scale-105 group-hover:shadow-lg">
                        <IconComponent className="w-4 h-4" />
                        {getActionText(resource.type)}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Load More Section */}
            <div className="text-center">
              <button
                onClick={loadMoreContent}
                disabled={isLoading}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Load More Resources
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button
          onClick={() => alert('Compliance expert chat would open here')}
          className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="Ask a Compliance Expert"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
        
        <button
          onClick={() => alert('Request consultation would open here')}
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-red-700 transition-all duration-300 hover:scale-105 whitespace-nowrap"
        >
          Request Consultation
        </button>
      </div>
    </div>
  )
}

export default ResourceCenter