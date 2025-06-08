'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F1C30]' : isHomePage ? 'bg-transparent' : 'bg-[#0F1C30]'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-12">
            <Image
              src="/images/logo.png"
              alt="InnoTelesoft"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FFB300] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#FFB300] transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-[#FFB300] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-[#FFB300] transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#FFB300] text-black px-6 py-2 rounded-full hover:bg-[#E5A05C] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
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
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Navigation Overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Navigation Menu */}
          <div 
            className={`fixed top-0 right-0 h-full w-full bg-[#0F1C30] md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <Link href="/" className="relative w-40 h-12" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="InnoTelesoft"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <svg
                  className="w-8 h-8"
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
            </div>
            <nav className="p-6">
              <div className="space-y-6">
                <Link
                  href="/about"
                  className="flex justify-between items-center text-xl text-white hover:text-[#FFB300] transition-colors py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="flex justify-between items-center text-xl text-white hover:text-[#FFB300] transition-colors py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="flex justify-between items-center text-xl text-white hover:text-[#FFB300] transition-colors py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 