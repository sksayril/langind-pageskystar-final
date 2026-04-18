import { Metadata } from 'next'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights & Resources | SEO, Digital Marketing & AI Strategy',
  description: 'Expert strategies, industry insights, and actionable tips on SEO, AIO, and Digital Marketing to help you dominate your market.',
  openGraph: {
    title: 'Skystar Solution Blog - Digital Marketing Insights',
    description: 'Expert strategies to help you grow your brand with SEO and AI.',
  }
}

async function getBlogs() {
  await connectDB()
  return Blog.find({ isPublished: true }).sort({ createdAt: -1 }).lean()
}

export default async function BlogPage() {
  const blogPosts = await getBlogs()

  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-gold/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block glass px-6 py-2 rounded-full text-neon-cyan text-xs font-black tracking-[0.3em] uppercase mb-12 border border-neon-cyan/20 animate-fade-in">
              The Intelligence Hub
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-black mb-10 leading-[0.9] tracking-tighter animate-slide-up">
              Decoding the <br />
              <span className="text-transparent bg-clip-text bg-neon-gradient">Digital Frontier</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto animate-fade-in-delayed">
              Master the intersection of Search Engines, Artificial Intelligence, 
              and the future of human information discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-40 relative">
        <div className="container-custom">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post: any) => (
                <BlogCard 
                  key={post._id.toString()} 
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  readTime={post.readTime}
                  image={post.featuredImage}
                  slug={post.slug}
                  author={post.author}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass rounded-[3rem] border border-white/5 mx-auto max-w-2xl opacity-50">
              <h3 className="text-3xl font-heading font-bold mb-4">The vault is being prepared...</h3>
              <p className="text-lg">Our architects are currently documenting the next generation of digital strategies.</p>
            </div>
          )}

          {/* Pagination */}
          {blogPosts.length > 12 && (
            <div className="mt-24 flex justify-center">
              <button className="glass px-8 py-4 rounded-full text-neon-cyan font-bold hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300">
                Load More Insights
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Premium Design */}
      <section className="pb-32 px-4">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 border border-white/5 bg-[#0a0a0c]">
             <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-gold/5" />
             <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-black mb-8">
                  Future-Proof Your <span className="neon-text">Strategy</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                  Join 5,000+ industry leaders receiving our weekly analysis on AI, Search, and Growth.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your professional email"
                    required
                    className="flex-1 px-8 py-5 rounded-2xl glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white text-lg"
                  />
                  <button type="submit" className="btn-primary py-5 px-10 rounded-2xl text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform">
                    Join Us
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
