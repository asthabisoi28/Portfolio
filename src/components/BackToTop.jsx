import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-[var(--color-text)] text-[var(--color-surface)] hover:bg-[var(--color-accent)] rounded-[4px] border border-[var(--color-border)] shadow-[0_14px_30px_-20px_rgba(37,37,34,0.65)] transition-all duration-300 hover:scale-105"
      aria-label="Back to top"
      title="Back to top"
    >
      <FiArrowUp size={18} />
    </button>
  )
}
