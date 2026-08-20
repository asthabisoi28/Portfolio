import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Capabilities from './components/Capabilities'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="min-h-screen bg-page text-main font-body">
      {/* Scroll Progress Indicator */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          backgroundColor: 'var(--color-accent)',
          zIndex: 9999,
        }}
      />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <ScrollReveal><Profile /></ScrollReveal>
        <ScrollReveal><Capabilities /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Credentials /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
