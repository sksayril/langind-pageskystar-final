import Image from 'next/image'
import { Mail, Linkedin, Twitter } from 'lucide-react'

interface AuthorCardProps {
  name: string
  role: string
  bio: string
  avatar: string
  email?: string
  linkedin?: string
  twitter?: string
}

export default function AuthorCard({
  name,
  role,
  bio,
  avatar,
  email,
  linkedin,
  twitter
}: AuthorCardProps) {
  return (
    <div className="card-hover text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <Image
          src={avatar}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
        <div className="absolute inset-0 rounded-full bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-heading font-bold mb-1">{name}</h3>
      <p className="text-neon-cyan text-sm mb-4">{role}</p>
      <p className="text-gray-400 text-sm mb-6">{bio}</p>
      
      <div className="flex items-center justify-center space-x-3">
        {email && (
          <a
            href={`mailto:${email}`}
            className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        )}
      </div>
    </div>
  )
}

