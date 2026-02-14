// Structured Data Schemas for SEO
// Place in: app/lib/schemas.ts

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TickleCharge',
  description: 'The trusted PSP for regulated, high-risk merchants',
  url: 'https://www.ticklecharge.com',
  logo: 'https://www.ticklecharge.com/images/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/ticklecharge',
    'https://twitter.com/ticklecharge',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'hello@ticklecharge.com',
    url: 'https://www.ticklecharge.com/contact-us',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressLocality: 'Palo Alto',
    addressRegion: 'CA',
    streetAddress: '123 Innovation Drive, Suite 100',
  },
  foundingDate: '2023',
  areaServed: [
    'US',
    'EU',
    'APAC',
    'Global',
  ],
  knowsAbout: [
    'Payment Processing',
    'High-Risk Merchant Solutions',
    'Open Banking',
    'Cryptocurrency Payments',
    'Fraud Prevention',
    'Compliance Consulting',
  ],
  founders: [
    {
      '@type': 'Person',
      name: 'TickleCharge Team',
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.ticklecharge.com',
  name: 'TickleCharge',
  description: 'Payment solutions for regulated, high-risk businesses',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.ticklecharge.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact TickleCharge',
  url: 'https://www.ticklecharge.com/contact-us',
  description: 'Get in touch with our team. Free compliance review included.',
}

export const blogPostSchema = (post: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
  content: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    '@type': 'Person',
    name: post.author,
  },
  url: post.url,
  articleBody: post.content,
})

export const serviceSchema = (service: {
  name: string
  description: string
  image: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  image: service.image,
  url: service.url,
  provider: {
    '@type': 'Organization',
    name: 'TickleCharge',
    url: 'https://www.ticklecharge.com',
  },
  areaServed: ['US', 'EU', 'APAC', 'Global'],
})
