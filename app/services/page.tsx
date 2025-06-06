'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const services = [
  {
    title: 'Software Solutions',
    description: 'Custom software development and integration services',
    icon: '💻'
  },
  {
    title: 'Infrastructure Setup',
    description: 'Complete telecom infrastructure solutions',
    icon: '🏗️'
  },
  {
    title: 'Technical Services',
    description: 'Expert technical support and maintenance',
    icon: '🔧'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project planning and execution',
    icon: '📊'
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive cybersecurity services',
    icon: '🔒'
  },
  {
    title: 'Cloud Services',
    description: 'Cloud migration and management',
    icon: '☁️'
  }
]

const features = [
  {
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of industry experience',
    icon: '👨‍💻'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services',
    icon: '🔄'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored solutions designed to meet your specific business needs',
    icon: '🎯'
  }
]

export default function Services() {
  useScrollAnimation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up-scroll">Our Services</h1>
          <p className="text-xl max-w-2xl fade-up-scroll">
            Comprehensive telecom and software solutions to power your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0F1C30]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#F8F8FF] fade-up-scroll">Services We Offer</h2>
            <p className="text-xl text-[#F8F8FF] fade-up-scroll">To Empower Your Business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1B2A40] p-8 rounded-lg transition-all duration-300 hover:border-[#DA8637] hover:border fade-up-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#F8F8FF]">{service.title}</h3>
                <p className="text-[#F8F8FF]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-up-scroll">
              <span className="text-[#DA8637]">Why</span> <span className="text-[#F8F8FF]">Choose Our Services?</span>
            </h2>
            <p className="text-[#F8F8FF] max-w-2xl mx-auto fade-up-scroll">
              We deliver excellence through innovation, reliability, and customer-centric approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-lg hover:bg-black/50 hover:border-[#DA8637] hover:border transform hover:translate-y-[-4px] transition-all duration-300 fade-up-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-6 text-[#F8F8FF] group-hover:transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#F8F8FF]">
                  {feature.title}
                </h3>
                <p className="text-[#F8F8FF]">{feature.description}</p>
              </div>
            ))}
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