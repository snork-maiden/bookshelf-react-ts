import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Books search',
  description: 'Start looking for books in Google Books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  )
}
