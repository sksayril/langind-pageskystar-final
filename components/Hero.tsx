'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div ref={heroRef} className="container-custom relative z-10 py-32 parallax">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top">
            <Sparkles size={16} className="text-neon-cyan" />
            <span className="text-sm font-medium">Transforming Digital Landscapes</span>
          </div>

          {/* Main heading */}
          <h1 className="heading-xl font-heading mb-6 animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.1s' }}>
            Elevate Your Brand with{' '}
            <span className="text-shimmer">Premium Digital Marketing</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.2s' }}>
            We craft data-driven strategies that amplify your online presence, 
            drive qualified traffic, and convert visitors into loyal customers.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
              Start Your Journey
              <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-glass text-lg px-8 py-4">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '250%', label: 'Avg. ROI Increase' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="card-hover">
                <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-neon-cyan rounded-full" />
        </div>
      </div>
    </section>
  )
}

