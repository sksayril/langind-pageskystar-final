'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gradient px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-9xl font-heading font-bold text-white/5">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-heading font-bold neon-text">404</span>
          </div>
        </div>

        <h2 className="heading-md font-heading mb-4">Page Not Found</h2>
        
        <p className="text-lg text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary group">
            <Home size={18} className="inline-block mr-2" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn-glass group"
          >
            <ArrowLeft size={18} className="inline-block mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="mt-12 glass rounded-2xl p-6 inline-block">
          <p className="text-sm text-gray-400 mb-2">Need help?</p>
          <Link href="/contact" className="text-neon-cyan hover:text-neon-gold transition-colors">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  )
}

