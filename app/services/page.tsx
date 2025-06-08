'use client'

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'
import CurveSection from '../components/CurveSection'

const services = [
  {
    title: 'OEM Equipment Supply',
    description: 'At Innotelesoft Pvt. Ltd., we specialize in the reliable supply of high-quality OEM equipment sourced from leading global manufacturers. Our partnerships with trusted OEM brands ensure clients receive performance-driven hardware tailored to their project needs. We provide end-to-end support—from product selection and procurement to deployment—ensuring seamless integration and long-term operational efficiency.',
    image: '/images/services/oem_equipment.jpg'
  },
  {
    title: 'Man Power Supply',
    description: 'We provide skilled and project-ready technical manpower to support diverse operational needs across IT, telecom, and infrastructure domains. From short-term project staffing to long-term resource deployment, we offer flexible and scalable solutions that align with your timelines, budgets, and technical requirements—ensuring seamless execution and productivity across all stages.',
    image: '/images/services/man_power.jpg'
  },
  {
    title: 'Technical Services',
    description: 'We offer a wide range of technical services designed to support the full lifecycle of IT and telecom projects. Our expertise spans system integration, infrastructure setup, network deployment, and technical support. With a focus on precision, reliability, and compliance, we ensure smooth execution and optimal performance across all technical operations.',
    image: '/images/services/technical_services.jpg'
  },
  {
    title: 'Project Management',
    description: 'We deliver end-to-end project management services that ensure timely, cost-effective, and quality-driven execution. From planning and resource allocation to implementation and monitoring, our experienced team ensures every project meets its goals with precision and transparency. We follow industry best practices to minimize risks and maximize efficiency across IT, telecom, and infrastructure domains.',
    image: '/images/services/project_management.jpg'
  },
  {
    title: 'Security Solutions',
    description: 'We provide comprehensive security solutions designed to protect critical infrastructure, data, and operations. Our offerings include surveillance systems, access control, cybersecurity measures, and integrated threat management. With a focus on reliability and compliance, we tailor each solution to meet the unique security needs of IT, telecom, and enterprise environments',
    image: '/images/services/security_solutions.jpg'
  },
  {
    title: 'Installation and Commissioning',
    description: 'We offers professional installation and commissioning services, ensuring that your equipment and systems are set up accurately and function flawlessly. We handle everything from precise assembly and configuration to thorough testing and calibration, guaranteeing optimal performance and reliability right from the start. Our skilled team ensures a smooth, hassle-free process tailored to your project needs.',
    image: '/images/services/installation.jpg'
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
      <section className="relative min-h-[400px] sm:h-[60vh] flex items-center">
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

        {/* Curved Bottom */}
        <CurveSection />

        <div className="container-custom relative z-10 text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 fade-up-scroll">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-2xl fade-up-scroll">
            Comprehensive telecom and software solutions to power your business growth
          </p>
        </div>
      </section>

      {/* Add curve end marker */}
      <div className="curve-end-services"></div>

      {/* Services We Provide Section */}
      <section className="bg-[#FAFAFA] pt-16 sm:pt-20">
        <div className="text-center mb-12 -mt-[66px]">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black fade-up-scroll px-4 sm:px-0">
            SERVICES WE PROVIDE<span className="text-[#FFB300]">.</span>
          </h2>
        </div>
        <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          {/* Row 1: image, text, image, text */}
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[0].image} alt={services[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center bg-[#2993D1] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[0].title}</h3>
            <p className="text-base mb-0">{services[0].description}</p>
          </div>
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[1].image} alt={services[1].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center bg-[#8B8CC7] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
            <p className="text-base mb-0">{services[1].description}</p>
          </div>
          {/* Row 2: text, image, text, image */}
          <div className="flex flex-col justify-center bg-[#36A9C5] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
            <p className="text-base mb-0">{services[2].description}</p>
          </div>
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[2].image} alt={services[2].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center bg-[#DA8637] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[3].title}</h3>
            <p className="text-base mb-0">{services[3].description}</p>
          </div>
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[3].image} alt={services[3].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          {/* Row 3: image, text, image, text */}
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[4].image} alt={services[4].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center bg-[#18B6A4] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[4].title}</h3>
            <p className="text-base mb-0">{services[4].description}</p>
          </div>
          <div className="relative h-96 group overflow-hidden">
            <Image src={services[5].image} alt={services[5].title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center bg-[#1B6AA8] text-white p-8 h-96">
            <h3 className="text-2xl font-bold mb-3">{services[5].title}</h3>
            <p className="text-base mb-0">{services[5].description}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Innotelesoft Services Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden group py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/services/partnership.jpg"
            alt="Innotelesoft Partnerships"
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 fade-up-scroll leading-tight">
              Why Choose Innotelesoft Services<span className="text-[#FFB300]">?</span>
            </h2>
            
            <div className="space-y-6 sm:space-y-10 fade-up-scroll">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFB300] aspect-square shrink-0"></span>
                <p className="text-base sm:text-xl leading-relaxed">Proudly partnered with leading global OEM manufacturers, ensuring access to cutting-edge technology and reliable equipment for all your project needs.</p>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFB300] aspect-square shrink-0"></span>
                <p className="text-base sm:text-xl leading-relaxed">Direct partnerships enable us to offer competitive pricing, priority support, and authentic products with full manufacturer warranties.</p>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFB300] aspect-square shrink-0"></span>
                <p className="text-base sm:text-xl leading-relaxed">Our certified team provides expert consultation, seamless integration, and comprehensive after-sales support for all OEM equipment.</p>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFB300] aspect-square shrink-0"></span>
                <p className="text-base sm:text-xl leading-relaxed">Regular training and certification programs with our OEM partners ensure our team stays updated with the latest technologies and best practices.</p>
              </div>
            </div>
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