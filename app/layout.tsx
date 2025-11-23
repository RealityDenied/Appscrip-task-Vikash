import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopping Page - Ecommerce Store',
  description: 'Discover amazing products at our online shopping store. Browse through a wide selection of quality items with great prices.',
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
    url: 'https://your-domain.com',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

