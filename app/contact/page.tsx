'use client'

import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Contact() {
  useScrollAnimation()

  return (
    <section className="min-h-screen bg-[#F9F5EC] pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 fade-up-scroll">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1C30] mb-4 sm:mb-6">
            Every day, Innotelesoft empowers Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#0F1C30]/80 max-w-3xl mx-auto">
            to build a more resilient, secure and sustainable future.
          </p>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F1C30] fade-up-scroll">
            How can we help you?
          </h2>
        </div>

        <form className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="fade-up-scroll">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                required
              />
            </div>
            <div className="fade-up-scroll">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                required
              />
            </div>
          </div>

          <div className="fade-up-scroll">
            <input
              type="email"
              placeholder="Work Email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
              required
            />
          </div>

          <div className="fade-up-scroll">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
              required
            />
          </div>

          <div className="fade-up-scroll">
            <input
              type="text"
              placeholder="Company"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
              required
            />
          </div>

          <div className="fade-up-scroll">
            <select
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
              required
            >
              <option value="">Country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="fade-up-scroll">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
              required
            />
          </div>

          <div className="text-center fade-up-scroll pt-2 sm:pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#0F1C30] text-white rounded-full hover:bg-[#0F1C30]/90 transition-all duration-300 text-base sm:text-lg font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
} 