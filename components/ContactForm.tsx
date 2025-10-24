'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface ContactFormProps {
  title?: string
  subtitle?: string
}

export default function ContactForm({ title = 'Get in Touch', subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="card">
      <h2 className="heading-sm font-heading mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400 mb-8">{subtitle}</p>}
      
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-neon-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={32} className="text-dark-bg" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-dark-bg text-white"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO Optimization</option>
                <option value="paid-ads">Paid Advertising</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="content">Content Marketing</option>
                <option value="creative">Creative Studio</option>
                <option value="web-dev">Web Development</option>
                <option value="all">Full Package</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Monthly Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-dark-bg text-white"
            >
              <option value="">Select your budget range</option>
              <option value="<5k">&lt; $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Tell us about your project *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan bg-transparent text-white resize-none"
              placeholder="Describe your goals, challenges, and what you hope to achieve..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full md:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin inline-block mr-2">⌛</span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} className="inline-block ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

