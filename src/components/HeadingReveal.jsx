import { useEffect, useRef } from 'react'

export default function HeadingReveal({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('heading-visible')
        }
      },
      { threshold: 0.1 }
    )

    const el = ref.current
    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [])

  return (
    <div ref={ref} className="heading-reveal">
      {children}
    </div>
  )
}
