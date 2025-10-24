import Link from 'next/link'
import { Search, Target, Share2, FileText, Sparkles, Code, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital marketing services including SEO, Paid Ads, Social Media, Content Marketing, Creative Studio, and Web Development.',
}

const services = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    tagline: 'Dominate Search Rankings',
    description: 'Our comprehensive SEO strategies help you climb to the top of search results and stay there. We combine technical excellence with content mastery to drive sustainable organic growth.',
    features: [
      'Comprehensive technical SEO audit',
      'Advanced keyword research & strategy',
      'On-page optimization & content optimization',
      'Link building & digital PR',
      'Local SEO & Google My Business optimization',
      'Competitor analysis & market research',
      'Core Web Vitals optimization',
      'Monthly reporting & strategy refinement',
    ],
    benefits: [
      'Increase organic traffic by 200-400%',
      'Improve search rankings for high-value keywords',
      'Build long-term sustainable traffic',
      'Reduce cost per acquisition',
    ],
  },
  {
    id: 'paid-ads',
    icon: Target,
    title: 'Paid Advertising',
    tagline: 'Maximize Your ROI',
    description: 'Data-driven paid advertising campaigns that deliver qualified leads and measurable results. We manage every aspect from strategy to optimization.',
    features: [
      'Google Ads campaign management',
      'Facebook & Instagram advertising',
      'LinkedIn ads for B2B',
      'Display & retargeting campaigns',
      'Shopping ads for e-commerce',
      'Landing page optimization',
      'Conversion tracking & analytics',
      'A/B testing & continuous optimization',
    ],
    benefits: [
      'Achieve 3-8x return on ad spend',
      'Target high-intent customers',
      'Scale profitable campaigns',
      'Reduce wasted ad spend',
    ],
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Marketing',
    tagline: 'Build Your Community',
    description: 'Strategic social media management that builds engaged communities and amplifies your brand voice across all major platforms.',
    features: [
      'Social media strategy & planning',
      'Content creation & curation',
      'Community management & engagement',
      'Social listening & monitoring',
      'Influencer partnerships',
      'Social advertising campaigns',
      'Analytics & reporting',
      'Crisis management',
    ],
    benefits: [
      'Grow engaged follower base',
      'Increase brand awareness by 300%+',
      'Drive website traffic from social',
      'Build customer loyalty',
    ],
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content Marketing',
    tagline: 'Stories That Convert',
    description: 'Compelling content that educates, engages, and converts. From blog posts to video content, we create assets that drive results.',
    features: [
      'Content strategy & editorial calendar',
      'Blog posts & long-form articles',
      'E-books & whitepapers',
      'Email marketing campaigns',
      'Video scripts & production',
      'Podcast planning & production',
      'Infographics & visual content',
      'Content distribution strategy',
    ],
    benefits: [
      'Generate 3x more leads than traditional marketing',
      'Build thought leadership',
      'Nurture leads through the funnel',
      'Create reusable content assets',
    ],
  },
  {
    id: 'creative',
    icon: Sparkles,
    title: 'Creative Studio',
    tagline: 'Visuals That Captivate',
    description: 'Award-winning creative services that make your brand stand out. From brand identity to motion graphics, we bring your vision to life.',
    features: [
      'Brand identity & logo design',
      'Graphic design & illustrations',
      'Video production & editing',
      'Animation & motion graphics',
      'Photography & image editing',
      'Social media graphics',
      'Print & digital collateral',
      'Brand guidelines & asset library',
    ],
    benefits: [
      'Increase engagement by 150%+',
      'Stand out from competition',
      'Build memorable brand identity',
      'Drive higher conversion rates',
    ],
  },
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    tagline: 'Performance Meets Design',
    description: 'High-performance websites and web applications built with modern technologies. Fast, secure, and optimized for conversions.',
    features: [
      'Custom website development',
      'E-commerce solutions (Shopify, WooCommerce)',
      'Performance optimization',
      'Mobile-first responsive design',
      'CMS integration (WordPress, Contentful)',
      'Security & maintenance',
      'Analytics & tracking setup',
      'Ongoing support & updates',
    ],
    benefits: [
      'Improve site speed by 70%+',
      'Increase mobile conversions',
      'Reduce bounce rate',
      'Scale with your business',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-heading mb-6">
              <span className="neon-text">Services</span> That Drive Results
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              End-to-end digital marketing solutions designed to accelerate your growth. 
              From strategy to execution, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-dark-bg' : 'bg-dark-gradient'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="sticky top-24">
                  <div className="w-16 h-16 rounded-xl bg-neon-gradient/10 flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-neon-cyan" />
                  </div>
                  
                  <h2 className="heading-md font-heading mb-3">{service.title}</h2>
                  <p className="text-xl text-neon-cyan mb-6">{service.tagline}</p>
                  <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="card mb-8">
                    <h3 className="font-heading font-bold text-lg mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-neon-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" className="btn-primary inline-block group">
                    Get Started
                    <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="card">
                  <h3 className="font-heading font-bold text-xl mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-neon-cyan mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-12 md:p-16">
            <h2 className="heading-md font-heading mb-6">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a free consultation and we'll help you create a custom strategy 
              tailored to your goals and budget.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

