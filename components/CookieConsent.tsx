'use client'

import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show after 2 seconds
      setTimeout(() => setShowConsent(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom">
      <div className="glass rounded-2xl p-6 shadow-2xl">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Cookie className="text-neon-cyan" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-lg mb-2">
              We value your privacy
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="btn-primary text-sm flex-1"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="btn-ghost text-sm flex-1"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

