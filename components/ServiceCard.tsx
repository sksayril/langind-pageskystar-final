import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href: string
}

export default function ServiceCard({ icon: Icon, title, description, features, href }: ServiceCardProps) {
  return (
    <div className="card-hover group">
      <div className="w-14 h-14 rounded-xl bg-neon-gradient/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-neon-cyan" />
      </div>
      
      <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
            <span className="text-neon-cyan mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center text-neon-cyan hover:text-neon-gold transition-colors duration-300 font-medium"
      >
        Learn More
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

