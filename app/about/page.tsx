'use client'

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Image from 'next/image'

export default function About() {
  useScrollAnimation()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
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
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up-scroll">
            About Us
          </h1>
          <p className="text-xl max-w-2xl fade-up-scroll">
            We are committed to delivering innovative telecom and software solutions that transform businesses across India
          </p>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="pb-0">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black fade-up-scroll">
            WHAT DRIVES US<span className="text-[#DA8637]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Spirit of Innotelesoft */}
          <div className="bg-[#D6D7D6] p-12 fade-up-scroll">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1C30] mb-6">
              SPIRIT OF INNOTELESOFT
            </h3>
            <p className="text-lg text-gray-700 mb-10">
              These values are our bedrock. They define and make us. Our character and destinies are energized by our values.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#DA8637]"></div>
                <p className="text-xl font-medium">Be passionate about clients' success</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#DA8637]"></div>
                <p className="text-xl font-medium">Treat each person with respect</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#DA8637]"></div>
                <p className="text-xl font-medium">Be global and responsible</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#DA8637]"></div>
                <p className="text-xl font-medium">Unyielding integrity in everything we do</p>
              </div>
            </div>
          </div>

          {/* Five Habits */}
          <div className="bg-[#CFCFCF] p-12 fade-up-scroll">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1C30] mb-6">
              FIVE HABITS
            </h3>
            <p className="text-lg text-gray-700 mb-10">
              When our behaviors and ways of working consistently reflect our values. We see the five habits in action.
            </p>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold">Being Respectful</h4>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Being Responsive</h4>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Always Communicating</h4>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Demonstrating Stewardship</h4>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Building Trust</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 