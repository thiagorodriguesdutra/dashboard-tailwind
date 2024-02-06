import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard | Tailwind',
  description: 'Dashboard | Tailwind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex h-screen flex-col overflow-y-hidden lg:flex-row`}
      >
        <Sidebar />
        <div className="h-full w-full overflow-auto px-3 sm:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
