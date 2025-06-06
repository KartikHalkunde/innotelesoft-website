'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-up-scroll">
              Transforming Businesses Through Technology
            </h1>
            <p className="text-xl text-gray-200 mb-8 fade-up-scroll">
              Innotelesoft delivers cutting-edge telecom and software solutions that drive innovation and growth across India.
            </p>
            <div className="flex gap-4 fade-up-scroll">
              <Link 
                href="/services" 
                className="px-6 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-[#DA8637] text-gray-900 rounded-md hover:bg-[#E0A800] transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0F1C30]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-2 fade-up-scroll">Our</h2>
            <h2 className="text-[#DA8637] text-3xl md:text-4xl font-bold fade-up-scroll">Core Services</h2>
            <p className="text-white/90 max-w-2xl mx-auto mt-6 fade-up-scroll">
              We provide comprehensive solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Software Solutions',
                description: 'Custom software development and integration services',
                icon: '💻'
              },
              {
                title: 'Telecom Services',
                description: 'End-to-end telecom infrastructure and support',
                icon: '📡'
              },
              {
                title: 'Technical Support',
                description: '24/7 technical assistance and maintenance',
                icon: '🛠️'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-[#1B2A40] p-8 rounded-lg transition-all duration-300 hover:border-[#DA8637] hover:border fade-up-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#F8F8FF]">{service.title}</h3>
                <p className="text-[#F8F8FF]">{service.description}</p>
              </div>
            ))}
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
      <section className="py-24 bg-[#187777] text-[#D5DBED]">
        <div className="container-custom text-center">
          <h2 className="mega-title mb-12 fade-up-scroll">
            Ready to Transform Your Business?
          </h2>
          <Link
            href="/contact"
            className="bg-[#DA8637] text-black rounded-md hover:bg-[#E5A05C] transition-all duration-300 cta-button fade-up-scroll"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
} 