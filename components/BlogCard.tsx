import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
  author?: {
    name: string
    avatar: string
  }
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
  author
}: BlogCardProps) {
  return (
    <article className="card-hover group overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 -m-6 md:-m-8 mb-6 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="glass px-3 py-1 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        {author && (
          <div className="flex items-center space-x-3 pt-4 border-t border-dark-border">
            <Image
              src={author.avatar}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm text-gray-300">{author.name}</span>
          </div>
        )}
        
        <div className="inline-flex items-center text-neon-cyan hover:text-neon-gold transition-colors duration-300 font-medium mt-4">
          Read More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </article>
  )
}

