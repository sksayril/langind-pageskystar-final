'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isExpanded ? (
        <div className="glass rounded-2xl p-6 w-80 animate-in slide-in-from-bottom shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-heading font-bold text-lg">Ready to grow?</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Let's discuss how we can transform your digital presence.
          </p>
          <div className="space-y-2">
            <Link
              href="/contact"
              className="btn-primary w-full text-center block text-sm"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact#calendar"
              className="btn-ghost w-full text-center block text-sm"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 rounded-full bg-neon-gradient flex items-center justify-center text-dark-bg shadow-2xl neon-glow-hover hover:scale-110 transition-transform duration-300"
          aria-label="Open contact options"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  )
}

