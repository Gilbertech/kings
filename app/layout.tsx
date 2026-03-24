import type { Metadata, Viewport } from 'next'
import { Cinzel, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Loading from '@/components/Loading'
import './globals.css'

const cinzel = Cinzel({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const raleway = Raleway({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  themeColor: '#294188',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Kings Law Advocates LLP | Premium Legal Services Kenya',
  description: 'Kings Law Advocates LLP offers comprehensive legal services in commercial law, dispute resolution, banking & finance, real estate, and more in Nairobi, Kenya.',
  keywords: 'law firm, legal services, advocates, commercial law, dispute resolution, real estate, Kenya',
  generator: 'v0.app',
  metadataBase: new URL('https://kingslawadvocates.com'),
  openGraph: {
    title: 'Kings Law Advocates LLP | Premium Legal Services',
    description: 'Specialized legal solutions for corporate and individual clients',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Loading />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
