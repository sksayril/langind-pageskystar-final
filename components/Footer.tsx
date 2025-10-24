import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Services: [
    { name: 'SEO Optimization', href: '/services#seo' },
    { name: 'Paid Advertising', href: '/services#paid-ads' },
    { name: 'Social Media', href: '/services#social-media' },
    { name: 'Content Marketing', href: '/services#content' },
    { name: 'Web Development', href: '/services#web-dev' },
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/blog/category/case-studies' },
    { name: 'SEO Guide', href: '/blog/category/seo' },
    { name: 'What is AIO?', href: '/blog/what-is-aio' },
    { name: 'What is LMO?', href: '/blog/what-is-lmo' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ0HQqftX420Zf9qmxYPJyeOxmz7YULfAXrPXPYgHgAgH_7bQQ=s360-c-no"
                  alt="Skystar Solution Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-heading font-bold">
                <span className="neon-text">Skystar</span> Solution
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Transform your brand with cutting-edge digital marketing strategies. 
              We deliver results that matter.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:services09.skystar@gmail.com" className="flex items-center space-x-2 hover:text-neon-cyan transition-colors">
                <Mail size={16} />
                <span>services09.skystar@gmail.com</span>
              </a>
              <a href="tel:+918617318068" className="flex items-center space-x-2 hover:text-neon-cyan transition-colors">
                <Phone size={16} />
                <span>+91 8617318068</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>74/2 Incinerator Road, Lp 81/5/1/1<br />Dum Dum Cant, Nagerbazar<br />Kolkata, West Bengal, India, 700028</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Skystar Solution. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

