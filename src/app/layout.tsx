import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '../components/shared'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sustain Spark',
  description: 'E-commerce platform for sustainable products and appliances',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
