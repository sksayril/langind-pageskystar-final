import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-border">
            <div className="gradient-border-inner p-12 md:p-16">
              <h2 className="heading-lg font-heading mb-6">
                Ready to <span className="neon-text">Transform</span> Your Digital Presence?
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's build something extraordinary together. Schedule a free consultation 
                and discover how we can accelerate your growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4 group"
                >
                  Get Your Free Audit
                  <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/contact#calendar"
                  className="btn-glass text-lg px-8 py-4 group"
                >
                  <Calendar size={20} className="inline-block mr-2" />
                  Book a Call
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-magenta rounded-full" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-gold rounded-full" />
                  <span>Results guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

