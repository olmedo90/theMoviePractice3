import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Navbar from './components/Nav'
import Footer from './components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create todo and movies list',
  description: 'Create todo and movies list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
