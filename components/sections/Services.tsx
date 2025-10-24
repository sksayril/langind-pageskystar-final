import ServiceCard from '../ServiceCard'
import { Search, Target, Share2, FileText, Sparkles, Code } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and qualified leads.',
    features: [
      'Technical SEO audits & fixes',
      'Keyword research & strategy',
      'On-page & off-page optimization',
      'Local SEO & Google My Business',
    ],
    href: '/services#seo',
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Maximize ROI with precision-targeted campaigns across Google Ads, Facebook, and LinkedIn.',
    features: [
      'PPC campaign management',
      'Ad copywriting & A/B testing',
      'Conversion rate optimization',
      'Retargeting & remarketing',
    ],
    href: '/services#paid-ads',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand voice across all major platforms.',
    features: [
      'Content strategy & planning',
      'Community management',
      'Influencer partnerships',
      'Social media advertising',
    ],
    href: '/services#social-media',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Create compelling content that educates, engages, and converts your target audience.',
    features: [
      'Blog posts & articles',
      'Video & podcast content',
      'Email marketing campaigns',
      'Content distribution strategy',
    ],
    href: '/services#content',
  },
  {
    icon: Sparkles,
    title: 'Creative Studio',
    description: 'Stunning visuals and brand assets that capture attention and drive engagement.',
    features: [
      'Brand identity design',
      'Graphics & illustrations',
      'Video production & editing',
      'Animation & motion graphics',
    ],
    href: '/services#creative',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance websites and web applications built with modern technologies.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Performance optimization',
      'Maintenance & support',
    ],
    href: '/services#web-dev',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-dark-gradient">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg font-heading mb-6">
            Comprehensive <span className="neon-text">Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-300">
            From strategy to execution, we provide end-to-end digital marketing services 
            that drive measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

