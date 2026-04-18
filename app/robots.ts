import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/superadmin/', '/api/auth/'],
    },
    sitemap: 'https://skystarsolution.com/sitemap.xml',
  }
}
