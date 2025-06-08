'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState, useRef } from 'react'
import Preloader from './components/Preloader'
import CurveSection from './components/CurveSection'

export default function Home() {
  useScrollAnimation()
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    videoRef.current?.play()
  }

  return (
    <>
      <Preloader onLoadingComplete={handleLoadingComplete} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            poster="/images/hero-bg.jpg"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Curved Bottom */}
        <CurveSection showScrollButton={true} />

        <div className="container-custom relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 fade-up-scroll">
            <span className="relative inline-block">
              Innovative
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-[#FFB300] rounded-full ${!isLoading ? 'animate-underline' : 'opacity-0'}`}></span>
            </span>
            {" "}Telecom & Software Solutions
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up-scroll">
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 text-base sm:text-lg"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FFB300] text-gray-900 rounded-full hover:bg-[#E0A800] transition-all duration-300 hover:scale-105 text-base sm:text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Add a div to mark the end of the curve */}
      <div className="curve-end"></div>

      {/* Services Overview */}
      <section className="section-spacing bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black fade-up-scroll uppercase">
              CORE SERVICES<span className="text-[#FFB300]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Block 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#746FA8] flex flex-col h-full">
              <div className="relative h-48 sm:h-56 w-full group overflow-hidden">
                <Image src="/images/services/software.jpg" alt="Software Solutions" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Software Solutions</h3>
              </div>
            </div>
            {/* Block 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1B6AA8] flex flex-col h-full">
              <div className="relative h-48 sm:h-56 w-full group overflow-hidden">
                <Image src="/images/services/telecom.jpg" alt="Telecom Services" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Telecom Services</h3>
              </div>
            </div>
            {/* Block 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#3398B3] flex flex-col h-full">
              <div className="relative h-48 sm:h-56 w-full group overflow-hidden">
                <Image src="/images/services/infrastructure.jpg" alt="Infrastructure Setup" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Infrastructure Setup</h3>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-block text-base sm:text-lg text-[#DA8637] hover:text-[#DA8637]/80 transition-all duration-300"
            >
              and more...
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-[#3398B3] text-white">
        <div className="container-custom text-center px-4 sm:px-6">
          <h2 className="mega-title mb-8 sm:mb-12 fade-up-scroll text-[#ffffff]">
            Ready to Transform Your Business?
          </h2>
          <Link
            href="/contact"
            className="bg-[#FFB300] text-black rounded-full hover:bg-[#E5A05C] transition-all duration-300 cta-button fade-up-scroll w-full sm:w-auto"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
} 