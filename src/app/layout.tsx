'use client'

import './styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Landing Page ',
  description: 'Portfolio of ',
}

// formally MyApp
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          {children}
        </ThemeProvider>
      </body>
    </html>

  )
}