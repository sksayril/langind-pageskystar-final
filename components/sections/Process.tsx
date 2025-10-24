import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Research',
    description: 'We dive deep into your business, audience, and competition to uncover opportunities and craft a winning strategy.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy & Planning',
    description: 'Our team develops a comprehensive roadmap with clear goals, tactics, and timelines tailored to your objectives.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Execution & Optimization',
    description: 'We launch your campaigns with precision, continuously testing and refining to maximize performance.',
  },
  {
    icon: BarChart,
    number: '04',
    title: 'Reporting & Growth',
    description: 'Track progress with transparent reporting and actionable insights that drive continuous improvement.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-dark-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-gradient" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-gradient" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg font-heading mb-6">
            Our Proven <span className="neon-text">Process</span>
          </h2>
          <p className="text-lg text-gray-300">
            A systematic approach to digital marketing success. We combine strategy, 
            creativity, and data to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-neon-cyan/50 to-transparent -z-10" />
              )}
              
              <div className="card-hover text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-neon-gradient opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-full h-full glass rounded-full flex items-center justify-center">
                    <step.icon size={32} className="text-neon-cyan" />
                  </div>
                </div>
                
                <div className="text-6xl font-bold text-white/5 mb-4 font-heading">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

