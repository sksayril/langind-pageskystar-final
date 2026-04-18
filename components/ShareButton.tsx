'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  excerpt: string
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error))
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = typeof window !== 'undefined' ? window.location.href : ''
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <button 
      onClick={handleShare}
      className="flex items-center space-x-2 hover:text-neon-cyan transition-colors"
      aria-label="Share article"
    >
      <Share2 size={16} />
      <span>Share</span>
    </button>
  )
}
