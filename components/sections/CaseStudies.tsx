import CaseStudyCard from '../CaseStudyCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-commerce Growth Strategy: From $50K to $500K Monthly Revenue',
    client: 'TechGear Pro',
    category: 'SEO & Paid Ads',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    results: [
      { metric: 'Revenue Increase', value: '900%' },
      { metric: 'ROAS', value: '8.5x' },
    ],
    slug: 'techgear-ecommerce-growth',
  },
  {
    title: 'Brand Transformation: Building a Market Leader in SaaS',
    client: 'CloudSync',
    category: 'Full-Service Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    results: [
      { metric: 'MQL Growth', value: '320%' },
      { metric: 'Brand Awareness', value: '+450%' },
    ],
    slug: 'cloudsync-brand-transformation',
  },
  {
    title: 'Local Business Domination: Scaling Multi-Location Service Provider',
    client: 'HomeStyle Pros',
    category: 'Local SEO & Social',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center',
    results: [
      { metric: 'Organic Traffic', value: '+275%' },
      { metric: 'Lead Volume', value: '3.5x' },
    ],
    slug: 'homestyle-local-seo',
  },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-lg font-heading mb-6">
              Success <span className="neon-text">Stories</span>
            </h2>
            <p className="text-lg text-gray-300">
              Real results for real businesses. See how we've helped brands achieve 
              extraordinary growth through strategic digital marketing.
            </p>
          </div>
          
          <Link 
            href="/blog/category/case-studies"
            className="btn-glass whitespace-nowrap group"
          >
            View All Case Studies
            <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}

