import { Inter as FontSans } from 'next/font/google'

import '@/styles/globals.css'
import { siteConfig } from '@/config/site'

import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://kimbap.app'
  ),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  authors: [{
    name: 'momogoyo',
    url: 'https://github.com/momogoyo'
  }],
  creator: 'momogoyo',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png'
  },
  // manifest: `${siteConfig.url}/site.webmanifest/`
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="ko" className={fontSans.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
