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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

