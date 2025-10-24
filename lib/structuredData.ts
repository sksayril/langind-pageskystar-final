// Structured data helpers for SEO
// Usage: Add to page metadata or inject in layout/page components

/**
 * To use structured data in Next.js 14 App Router:
 * 
 * 1. In page.tsx, export a function that returns the structured data:
 * 
 * export function generateMetadata() {
 *   return {
 *     title: 'Page Title',
 *     other: getOrganizationSchema(), // Add as custom metadata
 *   }
 * }
 * 
 * 2. Or inject directly in the page component using dangerouslySetInnerHTML:
 * 
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
 * />
 */

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Skystar Solution',
    description: 'Premium digital marketing agency specializing in SEO, paid advertising, social media, and web development.',
    url: 'https://skystarsolution.com',
    logo: 'https://skystarsolution.com/logo.png',
    image: 'https://skystarsolution.com/og-image.jpg',
    email: 'hello@skystarsolution.com',
    telephone: '+1-234-567-890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    sameAs: [
      'https://facebook.com/skystarsolution',
      'https://twitter.com/skystarsolution',
      'https://linkedin.com/company/skystarsolution',
      'https://instagram.com/skystarsolution',
      'https://youtube.com/@skystarsolution',
    ],
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Alex Rivera',
        jobTitle: 'CEO & Founder',
      },
    ],
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Skystar Solution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://skystarsolution.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Skystar Solution',
      url: 'https://skystarsolution.com',
    },
    areaServed: 'Worldwide',
    url: service.url,
    ...(service.image && { image: service.image }),
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Skystar Solution',
    image: 'https://skystarsolution.com/og-image.jpg',
    '@id': 'https://skystarsolution.com',
    url: 'https://skystarsolution.com',
    telephone: '+1-234-567-890',
    email: 'hello@skystarsolution.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }
}

export function getReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Skystar Solution',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }
}

