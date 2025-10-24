'use client'

import { useState, useEffect } from 'react'
import { Contrast } from 'lucide-react'

export default function HighContrastToggle() {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('highContrast')
    if (saved === 'true') {
      setHighContrast(true)
      document.body.classList.add('high-contrast')
    }
  }, [])

  const toggle = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('highContrast', String(newValue))
    
    if (newValue) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors duration-300"
      aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
      title={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
    >
      <Contrast size={18} className={highContrast ? 'text-neon-cyan' : ''} />
    </button>
  )
}

