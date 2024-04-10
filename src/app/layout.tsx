import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sustain Spark',
  description: 'E-commerce platform for sustainable products and appliances',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}
