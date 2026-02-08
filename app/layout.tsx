import React from "react"
import type { Metadata } from 'next'
import { Crimson_Text, Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds | Therapy for Anxiety & Relationships in Austin',
  description:
    'Dr. Maya Reynolds provides compassionate therapy for anxiety, depression, and relationship concerns in Austin, Texas. In-person and virtual sessions available.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
