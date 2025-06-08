import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from '../components/Footer'
import Preloader from './components/Preloader'
import DarkModeProvider from './components/DarkModeProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Innotelesoft - Leading Telecom & Software Solutions Provider',
  description: 'Innotelesoft provides cutting-edge telecom and software solutions, equipment supply, infrastructure setup, and technical services across India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DarkModeProvider>
      <body className={`${poppins.variable} font-poppins bg-white dark:bg-[#1a1a1a]`}>
        <Preloader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </DarkModeProvider>
  )
} 