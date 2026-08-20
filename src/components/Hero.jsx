import { FiArrowDownRight, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Headline */}
            <h1 className="hero-reveal delay-100 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-[var(--color-text)] leading-[1.05] tracking-tight">
              Hi, I'm Astha Bisoi
              <br />
              I build{" "}
              <span className="font-heading italic text-[var(--color-accent)] font-semibold">
                intelligent systems
              </span>
            </h1>

            {/* Subtitle */}
            <div className="hero-reveal delay-200 pt-1">
              <p className="font-mono text-xs sm:text-sm text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                Software Engineering · AI · Full Stack
              </p>
            </div>

            {/* Main CTAs: VIEW MY WORK & LET'S CONNECT */}
            <div className="hero-reveal delay-300 pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#work" className="btn-primary uppercase text-xs tracking-wider">
                VIEW MY WORK <FiArrowRight size={15} className="btn-arrow" />
              </a>
              <a href="#contact" className="btn-secondary uppercase text-xs tracking-wider">
                LET'S CONNECT <FiMessageSquare size={15} />
              </a>
            </div>

            {/* Quick Link Row: Resume, GitHub, LinkedIn, Email */}
            <div className="hero-reveal delay-400 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--color-muted)] border-t border-[var(--color-border)]/60 pt-5">
              <a
                href="/Astha_Bisoi_Resume1.pdf"
                download="Astha_Bisoi_Resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors"
              >
                <FiDownload size={14} /> Resume PDF
              </a>
              <span className="text-[var(--color-border)]">•</span>
              <a
                href="https://github.com/asthabisoi28"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors"
              >
                <FiGithub size={14} /> GitHub
              </a>
              <span className="text-[var(--color-border)]">•</span>
              <a
                href="https://www.linkedin.com/in/astha-bisoi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>
              <span className="text-[var(--color-border)]">•</span>
              <a
                href="mailto:asbi1852@gmail.com"
                className="group inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors"
              >
                <FiMail size={14} /> Email
              </a>
            </div>

          </div>

          {/* Right Column: Compact Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            {/* Outer wrapper — controls overall card width */}
            <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[310px]">



              {/* Card shell — rounded top corners only, square bottom */}
              <div
                style={{
                  borderRadius: '16px 16px 10px 10px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
                className="profile-card-animate"
              >

                {/* ── Photo area — fills upper portion, portrait 3:4 ── */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '3 / 4' }}
                >
                  <img
                    src={portrait}
                    alt="Astha Bisoi"
                    className="w-full h-full object-cover object-top profile-img"
                    style={{ display: 'block' }}
                  />
                  {/* Soft gradient blending photo edge into info panel */}
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: '56px',
                      background: 'linear-gradient(to top, var(--color-surface), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* ── Info panel — sits directly below the photo ── */}
                <div
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    padding: '14px 18px 16px',
                    textAlign: 'center',
                  }}
                >
                  {/* Name */}
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}
                  >
                    Astha Bisoi
                  </p>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.45,
                      marginTop: '4px',
                      marginBottom: 0,
                    }}
                  >
                    Software Engineer | AI &amp; Full-Stack
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Quick Highlights / Metrics Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1 min-w-0">
              <span className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] block">2026</span>
              <p className="font-mono text-[0.65rem] sm:text-xs text-[var(--color-muted)] uppercase tracking-wide leading-tight">
                B.E. AI &amp; Data Science
              </p>
            </div>
            <div className="space-y-1 min-w-0">
              <span className="font-heading text-3xl sm:text-4xl font-semibold italic text-[var(--color-accent)] block">Full-Stack</span>
              <p className="font-mono text-[0.65rem] sm:text-xs text-[var(--color-muted)] uppercase tracking-wide leading-tight">
                AI &amp; Web Engineering
              </p>
            </div>
            <div className="space-y-1 min-w-0">
              <span className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] block">3+</span>
              <p className="font-mono text-[0.65rem] sm:text-xs text-[var(--color-muted)] uppercase tracking-wide leading-tight">
                Featured Projects
              </p>
            </div>
            <div className="space-y-1 min-w-0">
              <span className="font-heading text-3xl sm:text-4xl font-semibold italic text-[var(--color-accent)] block">BLP AI</span>
              <p className="font-mono text-[0.65rem] sm:text-xs text-[var(--color-muted)] uppercase tracking-wide leading-tight">
                Software Intern
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

