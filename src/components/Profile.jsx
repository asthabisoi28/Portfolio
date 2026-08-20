import { FiCode, FiCpu, FiMessageSquare } from 'react-icons/fi'
import HeadingReveal from './HeadingReveal'

const buildAreas = [
  {
    icon: FiCode,
    label: 'SOFTWARE ENGINEERING',
    desc: 'Backend services, REST APIs, databases and full stack applications.',
  },
  {
    icon: FiCpu,
    label: 'AI AND MACHINE LEARNING',
    desc: 'Machine learning, computer vision and intelligent applications.',
  },
  {
    icon: FiMessageSquare,
    label: 'GENERATIVE AI',
    desc: 'RAG pipelines, LLM powered applications and AI assistants.',
  },
]

export default function Profile() {
  return (
    <section id="profile" className="py-24 sm:py-32 bg-[var(--color-surface-2)] border-y border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <HeadingReveal>
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <span className="section-label">01 / ABOUT ME</span>
            <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold text-[var(--color-text)] leading-[1.08] tracking-tight mt-2">
              About Me
            </h2>
          </div>
        </HeadingReveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            <p className="font-heading text-xl sm:text-2xl text-[var(--color-text)] font-medium leading-relaxed">
              I’m Astha Bisoi, a Software Engineer focused on AI and full-stack development. I build intelligent applications, backend systems, and APIs that bring AI from models into real products. I enjoy working across the stack from data and ML to system architecture and user-facing applications.
            </p>

            <p className="body-large text-[var(--color-muted)] leading-relaxed">
              I’m currently focused on building production-ready AI systems, LLM applications, and agentic workflows as I grow toward AI Engineer and Software Engineer roles.
            </p>

          </div>

          {/* Right Column: What I Enjoy Building */}
          <div className="lg:col-span-5 bg-[var(--color-surface)] p-7 sm:p-9 rounded-xl border border-[var(--color-border)] shadow-[0_16px_45px_-32px_rgba(0,0,0,0.15)] space-y-7">

            {/* Card header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
              <h3 className="font-mono text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">
                WHAT I ENJOY BUILDING
              </h3>
            </div>

            {/* Build areas list */}
            <div className="space-y-6">
              {buildAreas.map(({ icon: Icon, label, desc }, i) => (
                <div key={label}>
                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Icon size={16} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                        {label}
                      </h4>
                      <p className="body-copy text-sm text-[var(--color-muted)] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                  {/* Thin divider between items, not after the last */}
                  {i < buildAreas.length - 1 && (
                    <div className="border-t border-[var(--color-border)] mt-6" />
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
