import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navmovies from './Nav/page'

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
      <>
      <Navmovies/>
      </>
  )
}
