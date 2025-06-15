'use client'

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useState } from 'react'

export default function Contact() {
  useScrollAnimation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Form submission started')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      console.log('Sending request to Formspree')
      const response = await fetch('https://formspree.io/f/mkgbbvvn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      console.log('Response received:', response.status)
      if (response.ok) {
        console.log('Form submitted successfully')
        setIsSubmitted(true)
        form.reset()
      } else {
        console.error('Form submission failed with status:', response.status)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#F9F5EC] pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6">
        {!isSubmitted ? (
          <>
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

            <form 
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="fade-up-scroll">
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#0F1C30] mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                    required
                  />
                </div>

                <div className="fade-up-scroll">
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#0F1C30] mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                    required
                  />
                </div>
              </div>

              <div className="fade-up-scroll">
                <label htmlFor="email" className="block text-sm font-medium text-[#0F1C30] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                  required
                />
              </div>

              <div className="fade-up-scroll">
                <label htmlFor="phone" className="block text-sm font-medium text-[#0F1C30] mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>

              <div className="fade-up-scroll">
                <label htmlFor="message" className="block text-sm font-medium text-[#0F1C30] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DA8637] focus:border-transparent transition-all duration-300 bg-white"
                  required
                />
              </div>

              <div className="text-center fade-up-scroll pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#0F1C30] text-white rounded-full hover:bg-[#0F1C30]/90 transition-all duration-300 text-base sm:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-lg fade-up-scroll max-w-2xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-[#0F1C30] mb-4">Thank you for your message!</h3>
            <p className="text-lg text-[#0F1C30]/80">Innotelesoft will contact you shortly.</p>
          </div>
        )}
      </div>
    </section>
  )
} 