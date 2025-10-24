import React from 'react'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Skystar Solution. Schedule a free consultation or request a quote for your digital marketing needs.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'services09.skystar@gmail.com',
    href: 'mailto:services09.skystar@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8617318068',
    href: 'tel:+918617318068',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '74/2 Incinerator Road, Lp 81/5/1/1\nDum Dum Cant, Nagerbazar\nKolkata, West Bengal, India, 700028',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM - 6PM IST\nWeekends: By appointment',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div>
      <section className="pt-32 pb-16 bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-heading mb-6">
              Let&apos;s <span className="neon-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your digital presence? Get in touch and let&apos;s discuss 
              how we can help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="heading-sm font-heading mb-6">Get in Touch</h2>
                <p className="text-gray-400">
                  Have a question or ready to start your project? We&apos;re here to help. 
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-neon-gradient/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-neon-cyan" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-neon-cyan transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white whitespace-pre-line">{item.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3 className="font-heading font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-neon-cyan mt-1">✓</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neon-cyan mt-1">✓</span>
                    <span>Free initial consultation (30 min)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neon-cyan mt-1">✓</span>
                    <span>Custom strategy proposal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-neon-cyan mt-1">✓</span>
                    <span>No commitment required</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm
                title="Send Us a Message"
                subtitle="Fill out the form below and we&apos;ll get back to you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="section-padding bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md font-heading mb-4">
                Schedule a <span className="neon-text">Strategy Call</span>
              </h2>
              <p className="text-lg text-gray-300">
                Prefer to talk? Book a free 30-minute strategy call with our team.
              </p>
            </div>

            <div className="card">
              <div className="aspect-[16/9] bg-dark-surface rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">
                    Calendar integration placeholder
                  </p>
                  <p className="text-sm text-gray-500">
                    (Integrate with Calendly, Cal.com, or similar service)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md font-heading mb-12 text-center">
              Frequently Asked <span className="neon-text">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How much do your services cost?',
                  a: 'Our pricing depends on your specific needs and goals. We offer packages starting at $2,999/month, with custom solutions for larger organizations. Schedule a consultation for a personalized quote.',
                },
                {
                  q: 'How long does it take to see results?',
                  a: 'Timeline varies by service. Paid advertising can show results within weeks, while SEO typically takes 3-6 months for significant results. We provide realistic timelines during our initial consultation.',
                },
                {
                  q: 'Do you work with businesses in my industry?',
                  a: 'We work with businesses across 50+ industries including e-commerce, SaaS, professional services, healthcare, and more. Our strategies are customized to your specific market and audience.',
                },
                {
                  q: 'What makes Skystar Solution different?',
                  a: 'We combine strategic thinking, creative excellence, and data-driven execution. Unlike agencies focused on vanity metrics, we optimize for business outcomes—revenue, leads, and ROI.',
                },
                {
                  q: 'Do you require long-term contracts?',
                  a: 'We offer flexible month-to-month contracts. While we recommend at least 6 months for optimal results, we don&apos;t lock you into long-term commitments. Our goal is to earn your business every month.',
                },
              ].map((faq, index) => (
                <div key={index} className="card-hover">
                  <h3 className="font-heading font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}