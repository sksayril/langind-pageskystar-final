import PricingCard from '../PricingCard'

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹1,099',
    period: 'month',
    description: 'Perfect for small businesses starting their digital journey.',
    features: [
      'Social Media Management (20 days/month)',
      'Facebook, Instagram, LinkedIn, Twitter',
      'Custom Templates',
      '1 Website SEO',
      'Monthly Performance Report',
      'Email Support',
    ],
  },
  {
    name: 'Standard',
    price: '₹12,999',
    period: 'month',
    description: 'Ideal for growing businesses ready to scale their marketing efforts.',
    features: [
      'Social Media Management (30 days/month)',
      'All Premium Platforms',
      '1 Website SEO',
      'Meta Ads (10 days/month)',
      'Custom Content Creation',
      'Bi-weekly Strategy Calls',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹17,999',
    period: 'month',
    description: 'Advanced solutions for established businesses seeking growth.',
    features: [
      'Social Media Management (30 days/month)',
      'Meta Ads (29 days/month)',
      '2 Websites SEO',
      'Advanced Analytics',
      'Custom Campaign Strategy',
      'Weekly Strategy Sessions',
      'Dedicated Account Manager',
    ],
  },
  {
    name: 'Advanced',
    price: '₹29,999',
    period: 'month',
    description: 'Comprehensive solutions for businesses seeking market dominance.',
    features: [
      'All Social Media Platforms (30 days)',
      'YouTube Shorts Upload',
      'Google Ads Management',
      'Meta Ads (Full Month)',
      'Lead Conversion Optimization',
      '2+ Websites SEO',
      'Video Content Creation',
      'White-glove Support',
    ],
    ctaText: 'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <section className="section-padding bg-dark-gradient">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg font-heading mb-6">
            Transparent <span className="neon-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-300">
            Choose the plan that fits your goals. No hidden fees, no surprises. 
            Scale up or down as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Discount Structure */}
        <div className="mt-16 p-8 glass rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            <span className="neon-text">Bulk Discounts</span> Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-dark-surface/50">
              <div className="text-3xl font-bold text-neon-cyan mb-2">2% OFF</div>
              <div className="text-lg font-semibold mb-2">3 Month Plan</div>
              <div className="text-sm text-gray-400">Pay for 3 months upfront</div>
            </div>
            <div className="p-4 rounded-lg bg-dark-surface/50">
              <div className="text-3xl font-bold text-neon-gold mb-2">9% OFF</div>
              <div className="text-lg font-semibold mb-2">6 Month Plan</div>
              <div className="text-sm text-gray-400">Pay for 6 months upfront</div>
            </div>
            <div className="p-4 rounded-lg bg-dark-surface/50">
              <div className="text-3xl font-bold text-neon-cyan mb-2">15% OFF</div>
              <div className="text-lg font-semibold mb-2">12 Month Plan</div>
              <div className="text-sm text-gray-400">Pay for 12 months upfront</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Flexible contracts</span>
            <span>✓ ROI guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

