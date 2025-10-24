'use client'

import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { useState } from 'react'

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'SEO', slug: 'seo' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'AIO', slug: 'aio' },
  { name: 'LMO', slug: 'lmo' },
  { name: 'Case Studies', slug: 'case-studies' },
]

const blogPosts = [
  {
    title: 'What is AIO? The Complete Guide to AI Optimization',
    excerpt: 'Discover how AI Optimization (AIO) is revolutionizing digital marketing and learn strategies to leverage AI for better search visibility and user engagement.',
    category: 'AIO',
    date: 'Oct 20, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    slug: 'what-is-aio',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    title: 'What is LMO? Language Model Optimization Explained',
    excerpt: 'Learn about Language Model Optimization (LMO) and how to optimize your content for AI-powered search engines like ChatGPT and Google Bard.',
    category: 'LMO',
    date: 'Oct 18, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    slug: 'what-is-lmo',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    title: 'E-commerce Growth: How TechGear Pro Achieved 900% Revenue Increase',
    excerpt: 'An in-depth case study showing how we helped TechGear Pro scale from $50K to $500K monthly revenue through strategic SEO and paid advertising.',
    category: 'Case Studies',
    date: 'Oct 15, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    slug: 'techgear-ecommerce-growth',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    title: 'The Ultimate SEO Checklist for 2025: 50+ Actionable Tips',
    excerpt: 'A comprehensive SEO checklist covering technical optimization, content strategy, link building, and local SEO to dominate search rankings this year.',
    category: 'SEO',
    date: 'Oct 12, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&crop=center',
    slug: 'seo-checklist-2025',
    author: {
      name: 'Sarah Kim',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    title: 'How to Create a Winning Content Marketing Strategy in 2025',
    excerpt: 'Learn the proven framework for creating content that attracts, engages, and converts your target audience. Includes templates and real examples.',
    category: 'Digital Marketing',
    date: 'Oct 8, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
    slug: 'content-marketing-strategy-2025',
    author: {
      name: 'Lisa Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    title: 'SaaS Marketing: CloudSync\'s Journey to Market Leadership',
    excerpt: 'How we helped CloudSync achieve 320% MQL growth and establish thought leadership in a competitive SaaS market.',
    category: 'Case Studies',
    date: 'Oct 5, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    slug: 'cloudsync-brand-transformation',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  },
]

export default function BlogPage() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-heading mb-6">
              <span className="neon-text">Insights</span> & Resources
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert strategies, industry insights, and actionable tips to help you 
              dominate your market and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-dark-bg border-b border-dark-border sticky top-20 z-30 backdrop-blur-lg">
        <div className="container-custom">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.slug === 'all' ? '/blog' : `/blog/category/${category.slug}`}
                className="glass-hover px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:text-neon-cyan"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => {}}
              className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center"
              aria-label="Previous page"
            >
              ←
            </button>
            <button className="w-10 h-10 bg-neon-gradient text-dark-bg rounded-lg font-bold">
              1
            </button>
            <button onClick={() => {}} className="w-10 h-10 glass glass-hover rounded-lg">
              2
            </button>
            <button onClick={() => {}} className="w-10 h-10 glass glass-hover rounded-lg">
              3
            </button>
            <button 
              onClick={() => {}}
              className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center"
              aria-label="Next page"
            >
              →
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center card">
            <h2 className="heading-sm font-heading mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-gray-300 mb-6">
              Get weekly insights, strategies, and updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

