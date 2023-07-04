import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intellectuals Blog',
  description: "The Intellectuals' Blog Site. Content directed toward peers who wants to self-improve."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className={inter.className + `h-screen dark:bg-gray-800
       dark:border-gray-700`}>
        <Navbar/>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
