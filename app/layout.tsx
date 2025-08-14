import type { Metadata } from 'next'
import { Inter, Gelasio } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const gelasio = Gelasio({ 
  subsets: ['latin'],
  variable: '--font-gelasio',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Epoxy Flooring - Transform Your Space Today',
  description: 'Professional epoxy flooring services in North Jersey. Transform your garage, basement, or commercial space with durable, beautiful epoxy floors.',
  keywords: 'epoxy flooring, garage floors, basement coating, commercial flooring, North Jersey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gelasio.variable}`}>
        {children}
      </body>
    </html>
  )
}
