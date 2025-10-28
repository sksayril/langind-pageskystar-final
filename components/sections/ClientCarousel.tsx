'use client'

import Image from 'next/image'
import { Facebook, Instagram, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Client {
  id: string
  name: string
  logo: string
  facebook?: string
  instagram?: string
  website?: string
}

const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Farakka Progressive Education Society',
    logo: '/clients/farakka.png',
    facebook: 'https://www.facebook.com/profile.php?id=61580086631162',
    instagram: 'https://www.facebook.com/profile.php?id=61580086631162',
    website: 'https://www.fpews.in'
  },
  {
    id: 'client-2',
    name: 'Shreeeji',
    logo: '/clients/sreeji.jpg',
    facebook: 'https://www.facebook.com/profile.php?id=61579281754431',
    instagram: 'https://www.facebook.com/profile.php?id=61579281754431',
    website: 'https://www.facebook.com/profile.php?id=61579281754431'
  },
  {
    id: 'client-3',
    name: 'Jakir Hossain Medical College',
    logo: '/clients/jakirhossain.png',
    facebook: 'https://www.facebook.com/profile.php?id=61575658216452',
    instagram: 'https://www.facebook.com/profile.php?id=61575658216452',
    website: 'https://jhmcri.com'
  },
  {
    id: 'client-4',
    name: 'Aurangabad Public School',
    logo: '/clients/publicschool.png',
    facebook: 'https://www.facebook.com/APSchool2019',
    instagram: 'https://www.facebook.com/APSchool2019',
    website: 'https://www.facebook.com/APSchool2019'
  },
  {
    id: 'client-5',
    name: 'My Choice',
    logo: '/clients/mychoice.png',
    facebook: 'https://www.facebook.com/profile.php?id=61579582529261',
    instagram: 'https://www.facebook.com/profile.php?id=61579582529261',
    website: 'https://my-choice.co.in'
  },
  {
    id: 'client-6',
    name: 'Cripcocode Tech ',
    logo: '/clients/cripcocodetech.png',
    facebook: 'https://www.facebook.com/profile.php?id=61577836036556',
    instagram: 'https://www.facebook.com/profile.php?id=61577836036556',
    website: 'https://www.cripcocode.org/'
  }
]

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleWebsiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg font-heading mb-6">
            Our <span className="neon-text">Trusted Clients</span>
          </h2>
          <p className="text-lg text-gray-300">
            We&apos;re proud to partner with innovative businesses across various industries, 
            helping them achieve their digital marketing goals.
          </p>
        </div>

        <div className="relative">
          {/* Client Card */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="card-hover p-8 text-center transition-all duration-500"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Client Logo */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={clients[currentIndex].logo}
                  alt={`${clients[currentIndex].name} logo`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Client Name */}
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                {clients[currentIndex].name}
              </h3>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                {clients[currentIndex].facebook && (
                  <button
                    onClick={() => handleSocialClick(clients[currentIndex].facebook!)}
                    className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors group"
                    aria-label={`Visit ${clients[currentIndex].name} on Facebook`}
                  >
                    <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </button>
                )}
                
                {clients[currentIndex].instagram && (
                  <button
                    onClick={() => handleSocialClick(clients[currentIndex].instagram!)}
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 flex items-center justify-center transition-all group"
                    aria-label={`Visit ${clients[currentIndex].name} on Instagram`}
                  >
                    <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </button>
                )}

                {clients[currentIndex].website && (
                  <button
                    onClick={() => handleWebsiteClick(clients[currentIndex].website!)}
                    className="w-12 h-12 rounded-xl bg-neon-gradient hover:opacity-80 flex items-center justify-center transition-all group"
                    aria-label={`Visit ${clients[currentIndex].name} website`}
                  >
                    <ExternalLink size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>

              {/* Website Link */}
              {clients[currentIndex].website && (
                <button
                  onClick={() => handleWebsiteClick(clients[currentIndex].website!)}
                  className="text-neon-cyan hover:text-neon-cyan/80 font-medium transition-colors"
                >
                  Visit Website →
                </button>
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-neon-cyan scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to ${clients[index].name}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)
              setIsAutoPlaying(false)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
            aria-label="Previous client"
          >
            <svg className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev + 1) % clients.length)
              setIsAutoPlaying(false)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
            aria-label="Next client"
          >
            <svg className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {clients.map((client, index) => (
            <button
              key={client.id}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`group relative w-full h-20 rounded-xl overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-neon-cyan scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="w-full h-full bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={60}
                  height={60}
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
