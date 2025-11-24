import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopping Page - Ecommerce Store',
  description: 'Discover amazing products at our online shopping store. Browse through a wide selection of quality items with great prices.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shopping Page - Ecommerce Store',
    description: 'Discover amazing products at our online shopping store. Browse through a wide selection of quality items with great prices.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
  }

  return (
    <html lang="en">
      <body>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  )
}

