'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 0)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0081D4]/90 backdrop-blur-md' 
            : isHomePage 
              ? 'bg-transparent' 
              : 'bg-[#0081D4]/90 backdrop-blur-md'
        }`}
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white hover:text-[#FFB300] transition-colors">
              Innotelesoft
            </Link>

            {/* Menu Button */}
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Overlay - Separate from header */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Navigation Menu - Separate from header */}
      <aside 
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0081D4] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex-1">
            <div className="space-y-10">
              <Link
                href="/"
                className="block text-xl text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-xl text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-xl text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-xl text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Logo at bottom */}
          <div className="mt-auto pt-6">
            <Link 
              href="/" 
              className="block text-2xl font-bold text-white hover:text-[#FFB300] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Innotelesoft
            </Link>
          </div>
        </div>
      </aside>

      {/* Close button - Always on top */}
      <button
        className={`fixed top-4 text-white p-2 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ right: 'calc((100% - 1280px) / 2 + 2rem)' }}
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </>
  )
} 