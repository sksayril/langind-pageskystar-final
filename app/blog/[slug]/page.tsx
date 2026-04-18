import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'
import ShareButton from '@/components/ShareButton'
import * as motion from 'framer-motion/client'

interface PageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  await connectDB()
  return Blog.findOne({ slug: slug.toLowerCase(), isPublished: true }).lean()
}

export async function generateStaticParams() {
  await connectDB()
  const blogs = await Blog.find({ isPublished: true }, 'slug').lean()
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug) as any
  
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: post.canonicalUrl || `https://skystarsolution.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.ogImage || post.featuredImage],
      type: 'article',
      publishedTime: post.createdAt?.toString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.ogImage || post.featuredImage],
    },
    keywords: post.focusKeyword || '',
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug) as any

  if (!post) {
    notFound()
  }

  // Create Article Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.featuredImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Skystar Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Skystar Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://skystarsolution.com/logo.png'
      }
    },
    description: post.excerpt,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-neon-gold/5 rounded-full blur-[150px]" />
      </div>

      <article className="pt-40 pb-24 relative">
        <div className="container-custom max-w-5xl">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="mb-12 animate-fade-in">
              <Link
                href="/blog"
                className="inline-flex items-center text-neon-cyan hover:text-white transition-colors px-6 py-2 rounded-full glass border border-neon-cyan/20 group"
              >
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Resources
              </Link>
            </div>

            <div className="mb-8 animate-slide-up">
              <span className="bg-neon-cyan/10 text-neon-cyan px-4 py-1.5 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-neon-cyan/20 inline-block">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-10 leading-tight animate-slide-up-delayed">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 mb-12 pb-12 border-b border-white/5 animate-fade-in-delayed">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full border border-neon-cyan/20 overflow-hidden relative p-0.5">
                  <Image
                    src={post.author?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'}
                    alt={post.author?.name || 'Skystar Team'}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white leading-none">{post.author?.name || 'Skystar Team'}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-neon-cyan opacity-70">Author</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-neon-cyan" />
                <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-neon-gold" />
                <span>{post.readTime || '5 min read'}</span>
              </div>

              <div className="hidden sm:block">
                <ShareButton title={post.title} excerpt={post.excerpt} />
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden mb-20 group animate-slide-up">
            <Image
              src={post.featuredImage}
              alt={post.imageAltText || post.title}
              fill
              className="object-cover transition-transform duration-[2s]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
          </div>

          {/* Content Container */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] -z-10" />
              
              <div
                className="prose prose-invert prose-2xl max-w-none
                  prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter
                  prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-white
                  prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:text-gray-400 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-lg
                  prose-ul:my-10 prose-ul:space-y-4
                  prose-li:text-gray-400 prose-li:text-lg
                  prose-strong:text-white prose-strong:font-black
                  prose-a:text-neon-cyan prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                  prose-blockquote:border-l-8 prose-blockquote:border-neon-cyan prose-blockquote:bg-neon-cyan/5 prose-blockquote:p-10 prose-blockquote:rounded-3xl prose-blockquote:italic prose-blockquote:text-white prose-blockquote:text-2xl
                  prose-img:rounded-[2.5rem] prose-img:border prose-img:border-white/5"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Section or CTA */}
      <section className="section-padding bg-dark-gradient overflow-hidden">
        <div className="container-custom max-w-4xl relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-gold/10 rounded-full blur-3xl" />
          
          <div className="bg-[#0f0f12] rounded-[3rem] p-12 text-center border border-white/5 shadow-2xl relative z-10 backdrop-blur-xl">
            <h2 className="text-4xl font-heading font-black mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Our expert team specializes in data-driven strategies that deliver measurable results. 
              Let&apos;s build your success story together.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-3 group text-lg py-4 px-10">
              Start Your Project
              <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
