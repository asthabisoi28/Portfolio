import { FiArrowUpRight, FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const footerLinks = [
  { label: 'Profile',    href: '#profile' },
  { label: 'Skills',     href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#work' },
  { label: 'Contact',    href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/asthabisoi28',
    icon: FiGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/astha-bisoi',
    icon: FiLinkedin,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:asbi1852@gmail.com',
    icon: FiMail,
    external: false,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-2)] border-t border-[var(--color-border)] overflow-x-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Main footer body */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-[var(--color-border)]">

          {/* Left: Brand + tagline */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="font-mono font-bold text-xs tracking-wider px-2 py-1 bg-[var(--color-accent-soft)] text-[var(--color-text)] border border-[var(--color-accent)]/40 rounded-[4px] group-hover:border-[var(--color-accent)] transition-colors duration-200">
                AB
              </span>
              <span className="font-mono text-xs text-[var(--color-muted)] tracking-wider uppercase font-medium group-hover:text-[var(--color-text)] transition-colors duration-200">
                / portfolio
              </span>
            </a>

            <p className="font-heading text-xl sm:text-2xl font-semibold text-[var(--color-text)] leading-snug">
              Astha Bisoi
            </p>
            <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
              Software Engineer | AI &amp; Full-Stack
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(s.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="w-9 h-9 rounded-[6px] border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-[var(--color-surface)] hover:bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all duration-250"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right: Nav links + social labels */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">

            {/* Site navigation */}
            <div className="space-y-3">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-4">
                Navigation
              </p>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-4">
                Connect
              </p>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-1 font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {s.label}
                  <FiArrowUpRight size={12} className="opacity-60" />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--color-muted)]">
            © 2026 Astha Bisoi. All rights reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200 px-3 py-1.5 rounded-[5px] border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-[var(--color-surface)] hover:bg-[var(--color-accent-soft)]"
          >
            Back to top
            <FiArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </footer>
  )
}
