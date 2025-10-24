'use client'

import { useEffect, useState, useCallback } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; tx: number; ty: number }>>([])
  const [particleId, setParticleId] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })

    // Create particles occasionally
    if (Math.random() > 0.9) {
      const tx = (Math.random() - 0.5) * 100
      const ty = (Math.random() - 0.5) * 100
      setParticles(prev => [...prev.slice(-10), {
        id: particleId,
        x: e.clientX,
        y: e.clientY,
        tx,
        ty,
      }])
      setParticleId(prev => prev + 1)
    }
  }, [particleId])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.closest('button') ||
      target.closest('a')
    ) {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  useEffect(() => {
    // Clean up old particles
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles(prev => prev.slice(1))
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [particles])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block">
      {/* Main cursor */}
      <div
        className={`absolute w-8 h-8 -ml-4 -mt-4 transition-transform duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-neon-cyan opacity-20 blur-lg animate-glow-pulse" />
        
        {/* Inner dot */}
        <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-neon-cyan" />
        
        {/* Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-50" />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute w-1 h-1 rounded-full bg-neon-cyan"
          style={{
            left: particle.x,
            top: particle.y,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

