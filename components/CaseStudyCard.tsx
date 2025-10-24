import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp } from 'lucide-react'

interface CaseStudyCardProps {
  title: string
  client: string
  category: string
  image: string
  results: {
    metric: string
    value: string
  }[]
  slug: string
}

export default function CaseStudyCard({ title, client, category, image, results, slug }: CaseStudyCardProps) {
  return (
    <div className="card-hover group overflow-hidden">
      <div className="relative h-64 -m-6 md:-m-8 mb-6 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
        
        <div className="absolute top-4 right-4">
          <span className="glass px-3 py-1 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="text-sm text-neon-cyan font-medium mb-2">{client}</div>
      
      <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-neon-cyan transition-colors">
        {title}
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {results.map((result, index) => (
          <div key={index} className="flex items-start space-x-2">
            <TrendingUp size={16} className="text-neon-gold mt-1" />
            <div>
              <div className="text-2xl font-bold neon-text">{result.value}</div>
              <div className="text-xs text-gray-400">{result.metric}</div>
            </div>
          </div>
        ))}
      </div>
      
      <Link 
        href={`/blog/${slug}`}
        className="inline-flex items-center text-neon-cyan hover:text-neon-gold transition-colors duration-300 font-medium"
      >
        Read Case Study
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}

