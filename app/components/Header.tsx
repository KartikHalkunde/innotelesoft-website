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
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-4 py-4 border-t ${isScrolled ? 'border-gray-700 bg-[#0F1C30]' : isHomePage ? 'border-white/20 bg-[#0F1C30]' : 'border-gray-700 bg-[#0F1C30]'}`}>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#FFB300] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-[#FFB300] text-black px-6 py-2 rounded-full hover:bg-[#E5A05C] transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 