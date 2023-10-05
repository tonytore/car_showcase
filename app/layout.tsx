import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the best car show case in the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
