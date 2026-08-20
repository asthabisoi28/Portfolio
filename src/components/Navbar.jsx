import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const navLinks = [
  { id: 'profile', label: 'Profile' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]'
          : 'bg-[var(--color-bg)]/80 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand: AB / portfolio */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-[var(--color-text)] hover:opacity-90 transition-opacity"
        >
          <span className="font-mono font-bold text-xs tracking-wider px-2 py-1 bg-[var(--color-accent-soft)] text-[var(--color-text)] border border-[var(--color-accent)]/40 rounded-[4px] group-hover:border-[var(--color-accent)] transition-colors">
            AB
          </span>
          <span className="font-mono text-xs text-[var(--color-muted)] tracking-wider uppercase font-medium group-hover:text-[var(--color-text)] transition-colors">
            / portfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === 'capabilities' && activeSection === 'skills')
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-body text-xs font-medium tracking-wider uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-[var(--color-text)] font-semibold'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent)] rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right Actions: Social, Light/Dark Toggle, Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[var(--color-border)]">
            <a
              href="https://github.com/asthabisoi28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[4px] transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/astha-bisoi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[4px] transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FiLinkedin size={16} />
            </a>
          </div>

          {/* Light/Dark Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[4px] transition-colors flex items-center justify-center cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun size={17} className="text-amber-300" /> : <FiMoon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[4px] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-5 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === 'capabilities' && activeSection === 'skills')
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between font-mono text-xs tracking-wider uppercase py-2.5 border-b border-[var(--color-border)]/40 last:border-b-0 transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)] font-bold'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />}
              </a>
            )
          })}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/asthabisoi28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <FiGithub size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/astha-bisoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] cursor-pointer transition-colors"
            >
              {theme === 'dark' ? <FiSun size={15} className="text-amber-300" /> : <FiMoon size={15} />}
              <span className="sr-only sm:not-sr-only">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

