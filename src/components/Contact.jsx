import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import HeadingReveal from './HeadingReveal'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    handle: 'asbi1852@gmail.com',
    href: 'mailto:asbi1852@gmail.com',
    icon: FiMail,
    note: 'Preferred channel',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'asthabisoi28',
    href: 'https://github.com/asthabisoi28',
    icon: FiGithub,
    note: 'Open source & projects',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'astha-bisoi',
    href: 'https://www.linkedin.com/in/astha-bisoi',
    icon: FiLinkedin,
    note: 'Professional network',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 bg-[var(--color-bg)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Top rule */}
        <div className="border-t border-[var(--color-border)] mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: Headline block */}
          <div className="lg:col-span-6 space-y-6">
            <HeadingReveal>
              <div className="space-y-6">
                <span className="section-label">05 / CONTACT</span>

                <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold text-[var(--color-text)] leading-[1.04] tracking-tight">
                  Let's build<br />
                  <span className="italic text-[var(--color-accent)]">something</span> useful.
                </h2>
              </div>
            </HeadingReveal>

            <p className="font-body text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-md">
              If there's an interesting AI problem to solve or a meaningful collaboration to explore,
              I'm always glad to start a conversation.
            </p>

            {/* Large email CTA */}
            <div className="pt-2">
              <a
                href="mailto:asbi1852@gmail.com"
                className="group inline-flex items-center gap-3 font-mono text-sm sm:text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 border-b border-[var(--color-border)] hover:border-[var(--color-accent)] pb-1"
              >
                <FiMail size={16} className="text-[var(--color-accent)] shrink-0" />
                asbi1852@gmail.com
                <FiArrowUpRight
                  size={14}
                  className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Right: Contact links stack */}
          <div className="lg:col-span-6 space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.id}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center justify-between w-full p-5 sm:p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon badge */}
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent-soft)] flex items-center justify-center transition-all duration-300 shrink-0">
                      <Icon size={17} className="text-[var(--color-accent)]" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                        {link.label}
                      </p>
                      <p className="font-body text-sm sm:text-base font-medium text-[var(--color-text)] mt-0.5">
                        {link.handle}
                      </p>
                    </div>
                  </div>

                  {/* Right: note + arrow */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="hidden sm:inline font-mono text-xs text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                      {link.note}
                    </span>
                    <div className="w-8 h-8 rounded-md border border-[var(--color-border)] group-hover:border-[var(--color-accent)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)]">
                      <FiArrowUpRight size={15} className="text-[var(--color-muted)] group-hover:text-[var(--color-bg)] transition-colors" />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
