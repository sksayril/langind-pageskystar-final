import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://skystarsolution.com'),
  title: {
    default: 'Skystar Solution - Premium Digital Marketing Agency',
    template: '%s | Skystar Solution',
  },
  description: 'Transform your brand with cutting-edge digital marketing strategies. SEO, Paid Ads, Social Media, Content Marketing & Web Development.',
  keywords: ['digital marketing', 'SEO', 'paid advertising', 'social media marketing', 'web development', 'AIO', 'LMO'],
  authors: [{ name: 'Skystar Solution' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skystarsolution.com',
    title: 'Skystar Solution - Premium Digital Marketing Agency',
    description: 'Transform your brand with cutting-edge digital marketing strategies.',
    siteName: 'Skystar Solution',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skystar Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skystar Solution - Premium Digital Marketing Agency',
    description: 'Transform your brand with cutting-edge digital marketing strategies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-dark-bg text-white antialiased">
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </body>
    </html>
  )
}

