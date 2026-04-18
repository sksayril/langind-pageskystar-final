'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/20 to-neon-gold/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative h-full bg-[#0f0f12] rounded-[2.5rem] p-6 border border-white/5 overflow-hidden transition-all duration-300 group-hover:border-neon-cyan/30 group-hover:-translate-y-2">
        <Link href={`/blog/${slug}`} className="flex flex-col h-full">
          {/* Image Container */}
          <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-[2.5rem]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-6 left-6">
              <span className="bg-neon-cyan/10 backdrop-blur-md text-neon-cyan px-4 py-1.5 text-xs font-bold rounded-full border border-neon-cyan/20 tracking-wider uppercase">
                {category}
              </span>
            </div>
          </div>
          
          {/* Metadata */}
          <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4 px-2">
            <div className="flex items-center space-x-1.5">
              <Calendar size={14} className="text-neon-cyan" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock size={14} className="text-neon-gold" />
              <span>{readTime}</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 px-2">
            <h3 className="text-2xl font-heading font-bold mb-4 leading-tight group-hover:text-neon-cyan transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto px-2">
            {author ? (
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neon-cyan/20 p-0.5">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm text-gray-300 font-medium">{author.name}</span>
              </div>
            ) : (
              <div className="text-sm text-gray-500 font-medium">Skystar Team</div>
            )}
            
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-gradient group-hover:text-dark-bg transition-all duration-300">
              <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </motion.article>
  )
}

