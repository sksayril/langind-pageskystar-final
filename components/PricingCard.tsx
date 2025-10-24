import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  ctaText = 'Get Started',
  ctaHref = '/contact'
}: PricingCardProps) {
  return (
    <div className={`card-hover relative ${popular ? 'gradient-border' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="glass px-4 py-1 rounded-full flex items-center space-x-2">
            <Sparkles size={14} className="text-neon-gold" />
            <span className="text-xs font-bold text-neon-gold">MOST POPULAR</span>
          </div>
        </div>
      )}
      
      <div className={popular ? 'gradient-border-inner p-6 md:p-8' : ''}>
        <h3 className="text-2xl font-heading font-bold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-5xl font-bold neon-text">{price}</span>
            <span className="text-gray-400">/{period}</span>
          </div>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check size={20} className="text-neon-cyan mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href={ctaHref}
          className={popular ? 'btn-primary w-full text-center block' : 'btn-glass w-full text-center block'}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}

