import Image from 'next/image'
import AuthorCard from '@/components/AuthorCard'
import { Target, Users, Zap, Award } from 'lucide-react'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'About Us - Meet Our Expert Team | Skystar Solution Digital Marketing Agency',
  description: 'Meet Biplop Roy (Founder), Sk Sayril Amed (CEO), Samrin Sultana, Nargis Sultana, and Kabita Das - the expert team behind Skystar Solution digital marketing agency in Kolkata, India.',
  keywords: 'Biplop Roy, Sk Sayril Amed, Samrin Sultana, Nargis Sultana, Kabita Das, digital marketing team, SEO experts, social media experts, Kolkata digital marketing agency, UI UX designer, digital marketing expert',
  openGraph: {
    title: 'Meet Our Expert Team - Skystar Solution',
    description: 'Get to know our digital marketing experts: Biplop Roy (Founder), Sk Sayril Amed (CEO), and our specialized team in Kolkata, India.',
    type: 'website',
  },
}

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your ROI. Every strategy, campaign, and decision is focused on delivering measurable business outcomes.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'Your success is our success. We become an extension of your team, deeply invested in your growth and long-term vision.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of trends and leverage cutting-edge tools to give you a competitive advantage in the digital landscape.',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'From strategy to execution, we maintain the highest standards of quality in everything we deliver.',
  },
]

const team = [
  {
    name: 'Biplop Roy',
    role: 'Founder',
    bio: 'Visionary leader with 10+ years in digital marketing. Passionate about transforming businesses through innovative strategies and cutting-edge technology.',
    avatar: '/team/biplop-roy.jpg',
    email: 'biplop@skystarsolution.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Sk Sayril Amed',
    role: 'CEO',
    bio: 'Strategic leader with extensive experience in business development and digital transformation. Committed to driving growth and innovation.',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEZHWSzDw35Hw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725100013256?e=2147483647&v=beta&t=tjA16ie9BDT7VQ_21Nur4NolGdvMQzRROn9StksAMuA',
    email: 'sayril@skystarsolution.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Samrin Sultana',
    role: 'Digital Marketing Expert',
    bio: 'Specialized in social media marketing and content strategy. Expert in creating engaging campaigns that drive results and build brand awareness.',
    avatar: '/team/samrin-sultana.jpg',
    email: 'samrin@skystarsolution.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Nargis Sultana',
    role: 'Senior Digital Marketing Expert',
    bio: 'Advanced specialist in digital marketing with expertise in SEO, PPC, and conversion optimization. Helps businesses achieve sustainable growth.',
    avatar: '/team/nargis-sultana.jpg',
    email: 'nargis@skystarsolution.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Kabita Das',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user experience and interface design. Creates intuitive and visually appealing digital experiences that engage users.',
    avatar: '/team/kabita-das.jpg',
    email: 'kabita@skystarsolution.com',
    linkedin: 'https://linkedin.com',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl font-heading mb-6">
              We&apos;re <span className="neon-text">Skystar Solution</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A team of digital strategists, creatives, and data scientists on a mission 
              to transform how businesses connect with their audiences in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/952970398/photo/coworkers-in-the-office.jpg?s=612x612&w=0&k=20&c=WZe4u0YkRUEypoE5uxVrQjwOcM3kO93yiJh9H2QLyLo="
                alt="Founder Biplop Roy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
            </div>
            
            <div>
              <h2 className="heading-md font-heading mb-6">
                From Vision to <span className="neon-text">Reality</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Skystar Solution was born from a simple observation: most businesses weren&apos;t 
                  getting the results they deserved from their digital marketing efforts.
                </p>
                <p>
                  After spending over a decade leading marketing teams at Fortune 500 companies, 
                  I saw the same patterns repeatedly—agencies focused on vanity metrics, outdated 
                  strategies, and lack of true partnership.
                </p>
                <p>
                  I founded Skystar Solution to change that. We built a team of the best minds 
                  in digital marketing, united by a common goal: deliver exceptional results 
                  through strategic thinking, creative excellence, and data-driven execution.
                </p>
                <p>
                  Today, we&apos;re proud to partner with forward-thinking brands who refuse to settle 
                  for mediocrity. Together, we&apos;re redefining what&apos;s possible in digital marketing.
                </p>
              </div>
              <div className="mt-8">
                <div className="text-2xl font-heading font-bold">Biplop Roy</div>
                <div className="text-neon-cyan">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-gradient">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg font-heading mb-6">
              Our <span className="neon-text">Values</span>
            </h2>
            <p className="text-lg text-gray-300">
              These principles guide everything we do, from strategy development to campaign execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-hover text-center">
                <div className="w-16 h-16 rounded-xl bg-neon-gradient/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-neon-cyan" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg font-heading mb-6">
              Meet the <span className="neon-text">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our talented team of digital marketing experts led by Biplop Roy (Founder) and Sk Sayril Amed (CEO), 
              including Samrin Sultana, Nargis Sultana, and Kabita Das - united by a passion for digital excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <AuthorCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-dark-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '500+', label: 'Projects Delivered', sublabel: 'Across 50+ industries' },
              { value: '98%', label: 'Client Retention', sublabel: 'Year over year' },
              { value: '$50M+', label: 'Revenue Generated', sublabel: 'For our clients' },
              { value: '15+', label: 'Years Experience', sublabel: 'Combined expertise' },
            ].map((stat, index) => (
              <div key={index} className="card-hover text-center">
                <div className="text-4xl md:text-5xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data for Team Members */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Skystar Solution",
          "description": "Premium Digital Marketing Agency in Kolkata, India",
          "url": "https://skystarsolution.com",
          "logo": "https://lh3.googleusercontent.com/a/ACg8ocJ0HQqftX420Zf9qmxYPJyeOxmz7YULfAXrPXPYgHgAgH_7bQQ=s360-c-no",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "74/2 Incinerator Road, Lp 81/5/1/1, Dum Dum Cant, Nagerbazar",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700028",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8617318068",
            "contactType": "customer service",
            "email": "services09.skystar@gmail.com"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Biplop Roy",
              "jobTitle": "Founder",
              "description": "Visionary leader with 10+ years in digital marketing. Passionate about transforming businesses through innovative strategies and cutting-edge technology.",
              "email": "biplop@skystarsolution.com"
            },
            {
              "@type": "Person",
              "name": "Sk Sayril Amed",
              "jobTitle": "CEO",
              "description": "Strategic leader with extensive experience in business development and digital transformation. Committed to driving growth and innovation.",
              "email": "sayril@skystarsolution.com"
            },
            {
              "@type": "Person",
              "name": "Samrin Sultana",
              "jobTitle": "Digital Marketing Expert",
              "description": "Specialized in social media marketing and content strategy. Expert in creating engaging campaigns that drive results and build brand awareness.",
              "email": "samrin@skystarsolution.com"
            },
            {
              "@type": "Person",
              "name": "Nargis Sultana",
              "jobTitle": "Senior Digital Marketing Expert",
              "description": "Advanced specialist in digital marketing with expertise in SEO, PPC, and conversion optimization. Helps businesses achieve sustainable growth.",
              "email": "nargis@skystarsolution.com"
            },
            {
              "@type": "Person",
              "name": "Kabita Das",
              "jobTitle": "UI/UX Designer",
              "description": "Creative designer focused on user experience and interface design. Creates intuitive and visually appealing digital experiences that engage users.",
              "email": "kabita@skystarsolution.com"
            }
          ]
        }}
      />
    </>
  )
}

