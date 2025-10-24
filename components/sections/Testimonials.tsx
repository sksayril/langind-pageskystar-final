'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechGear Pro',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    quote: 'Skystar Solution transformed our online presence completely. Our revenue increased by 900% within 8 months. Their strategic approach and attention to detail are unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'CloudSync',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: 'Working with Skystar has been a game-changer. They don\'t just execute campaigns—they become true partners in your success. The results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HomeStyle Pros',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote: 'The team at Skystar Solution delivered beyond our expectations. Their local SEO strategy helped us dominate our market and triple our lead volume in just 6 months.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'VP of Growth',
    company: 'FitLife App',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote: 'Exceptional work! Skystar\'s data-driven approach and creative campaigns helped us acquire 100K+ users while maintaining a profitable CAC. Highly recommended!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg font-heading mb-6">
            Client <span className="neon-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-300">
            Don&apos;t just take our word for it. Hear from the brands we&apos;ve helped grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card relative">
            <Quote size={48} className="text-neon-cyan/20 mb-6" />
            
            <div className="mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} className="inline-block text-neon-gold fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              &quot;{current.quote}&quot;
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden glass">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{current.name}</div>
                <div className="text-gray-400 text-sm">
                  {current.role} at {current.company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-dark-border">
              <button
                onClick={previous}
                className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-neon-cyan w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

