import { useEffect } from 'react'

export function useScrollTracking() {
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contato')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        
        if (isVisible && typeof window !== 'undefined' && window.trackContactScroll) {
          window.trackContactScroll()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
} 