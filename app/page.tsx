'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState, useRef } from 'react'
import Preloader from './components/Preloader'

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
      <section className="relative h-screen flex items-center justify-center">
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
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 160" className="w-full h-auto fill-[#FAFAFA] relative" preserveAspectRatio="none">
            <path d="M0,160 C480,80 960,80 1440,160 L1440,160 L0,160 Z" />
          </svg>
          
          {/* Scroll Arrow Button */}
          <button 
            onClick={() => {
              const curveEnd = document.querySelector('.curve-end');
              curveEnd?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute left-1/2 top-[calc(50%+20px)] -translate-x-1/2 -translate-y-1/2 transform z-20 bg-[#FFFFFF] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#FFB300] group"
            aria-label="Scroll Down"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-[#0F1C30] group-hover:text-white transition-colors duration-300 group-hover:animate-bounceArrow"
            >
              <path 
                d="M4.5 9L12 16.5L19.5 9" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 fade-up-scroll">
            <span className="relative inline-block">
              Innovative
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-[#FFB300] rounded-full ${!isLoading ? 'animate-underline' : 'opacity-0'}`}></span>
            </span>
            {" "}Telecom & Software Solutions
          </h1>
          <div className="flex gap-4 justify-center fade-up-scroll">
            <Link 
              href="/services" 
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-[#FFB300] text-gray-900 rounded-full hover:bg-[#E0A800] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Add a div to mark the end of the curve */}
      <div className="curve-end"></div>

      {/* Services Overview */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-2 fade-up-scroll">Our</h2>
            <h2 className="text-5xl md:text-6xl font-bold text-black fade-up-scroll uppercase">
              CORE SERVICES<span className="text-[#FFB300]">.</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 fade-up-scroll">
              We provide comprehensive solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#746FA8] flex flex-col h-full">
              <div className="relative h-56 w-full group overflow-hidden">
                <Image src="/images/services/software.jpg" alt="Software Solutions" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">Software Solutions</h3>
                <p className="text-white">Custom software development and integration services</p>
              </div>
            </div>
            {/* Block 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#1B6AA8] flex flex-col h-full">
              <div className="relative h-56 w-full group overflow-hidden">
                <Image src="/images/services/telecom.jpg" alt="Telecom Services" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">Telecom Services</h3>
                <p className="text-white">End-to-end telecom infrastructure and support</p>
              </div>
            </div>
            {/* Block 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#3398B3] flex flex-col h-full">
              <div className="relative h-56 w-full group overflow-hidden">
                <Image src="/images/services/infrastructure.jpg" alt="Infrastructure Setup" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">Infrastructure Setup</h3>
                <p className="text-white">Complete telecom infrastructure solutions and management</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-lg text-[#DA8637] hover:text-[#DA8637]/80 transition-all duration-300"
            >
              and more
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3398B3] text-white">
        <div className="container-custom text-center">
          <h2 className="mega-title mb-12 fade-up-scroll text-[#ffffff]">
            Ready to Transform Your Business?
          </h2>
          <Link
            href="/contact"
            className="bg-[#FFB300] text-black rounded-full hover:bg-[#E5A05C] transition-all duration-300 cta-button fade-up-scroll"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
} 