'use client'

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Image from 'next/image'

export default function About() {
  useScrollAnimation()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Innotelesoft"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 160" className="w-full h-auto fill-[#FAFAFA] dark:fill-[#1a1a1a] relative" preserveAspectRatio="none">
            <path d="M0,160 C480,80 960,80 1440,160 L1440,160 L0,160 Z" />
          </svg>
        </div>

        <div className="container-custom relative z-10 text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 fade-up-scroll">
            About Us
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl fade-up-scroll">
            We are committed to delivering innovative telecom and software solutions that transform businesses across India
          </p>
        </div>
      </section>

      {/* Add curve end marker */}
      <div className="curve-end-about"></div>

      {/* What Drives Us Section */}
      <section className="bg-[#FAFAFA] pt-16 sm:pt-20">
        <div className="text-center mb-12 sm:mb-16 -mt-[77px]">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black fade-up-scroll px-4 sm:px-0">
            WHAT WE DO<span className="text-[#FFB300]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Section A: Company Description */}
          <div className="bg-[#F0F0F0] p-6 sm:p-8 md:p-12 fade-up-scroll min-h-[500px] sm:min-h-[650px] flex flex-col justify-center text-left">
            <div className="max-w-2xl ml-0 lg:ml-auto px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Company Description</h3>
              <div className="text-base sm:text-lg md:text-xl text-[#333] mb-6 font-medium">With a strong foundation in technology and IT consultancy, our company delivers end-to-end solutions across software development, OEM infrastructure setup and management, project execution, and strategic consultancy.</div>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFB300] aspect-square inline-block"></span>
                  <p>We specialize in providing comprehensive project management services, ensuring seamless integration of technology and operational efficiency. Our expertise also extends to reliable manpower supply tailored to project needs, and robust security solutions designed to protect critical infrastructure and data assets.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFB300] aspect-square inline-block"></span>
                  <p>Committed to innovation, quality, and client success, we serve as a trusted partner for organizations seeking scalable, future-ready technology and infrastructure services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section B: About Innotelesoft */}
          <div className="bg-white p-6 sm:p-8 md:p-12 fade-up-scroll min-h-[500px] sm:min-h-[650px] flex flex-col justify-center text-left">
            <div className="max-w-2xl mr-0 lg:mr-auto px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">About Innotelesoft</h3>
              <div className="text-base sm:text-lg md:text-xl text-[#333] mb-6 font-medium">We are a technology firm dedicated to providing comprehensive IT and software consultancy, OEM infrastructure setup and management, and end-to-end project management solutions. Our expertise spans diverse industries, where we consistently deliver operational excellence and drive digital transformation for our clients.</div>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFB300] aspect-square inline-block"></span>
                  <p>Beyond our core services, we also offer specialized manpower solutions to meet unique project requirements and implement advanced security measures to protect critical infrastructure.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFB300] aspect-square inline-block"></span>
                  <p>We are committed to innovation, integrity, and client success, aiming to be your trusted partner in building sustainable and future-ready technology ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 