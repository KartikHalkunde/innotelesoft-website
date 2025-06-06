'use client'

import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible')
        }
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elements = document.querySelectorAll('.fade-up-scroll')
    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])
} 