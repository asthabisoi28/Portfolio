import HeadingReveal from './HeadingReveal'

const certifications = [
  {
    num: 'CERTIFICATION 01',
    title: 'Data Science',
    issuer: 'Wipro',
  },
  {
    num: 'CERTIFICATION 02',
    title: 'Generative AI Studio',
    issuer: 'Simplilearn',
  },
  {
    num: 'CERTIFICATION 03',
    title: 'Networking and Web Technology',
    issuer: 'Infosys Springboard',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-28 bg-[var(--color-surface-2)] border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <HeadingReveal>
          <div className="mb-12 md:mb-16">
            <span className="section-label">05 / CREDENTIALS</span>
            <h2 className="section-heading">Learning, made intentional.</h2>
          </div>
        </HeadingReveal>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Certifications Vertical List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
              CERTIFICATIONS
            </h3>

            <div className="space-y-4">
              {certifications.map((item) => (
                <div
                  key={item.num}
                  className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[var(--color-accent)] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[0.7rem] text-[var(--color-accent)] font-semibold tracking-wider uppercase">
                      {item.num}
                    </span>
                    <h4 className="font-heading text-xl font-semibold text-[var(--color-text)] mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-muted)] bg-[var(--color-surface-2)] px-3 py-1 rounded-[4px] border border-[var(--color-border)] self-start sm:self-auto">
                    {item.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievement & Education */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Achievement Subsection */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                ACHIEVEMENT
              </h3>
              
              <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg space-y-2">
                <span className="inline-block font-mono text-[0.65rem] font-bold text-[var(--color-accent)] bg-[var(--color-accent-soft)] px-2.5 py-0.5 rounded-[4px] border border-[var(--color-accent)]/40 uppercase tracking-wider">
                  2ND PLACE
                </span>
                <h4 className="font-heading text-xl font-semibold text-[var(--color-text)]">
                  Trope Trivia
                </h4>
                <p className="font-body text-xs text-[var(--color-muted)]">
                  College Annual Fest · 2024
                </p>
              </div>
            </div>

            {/* Education Subsection */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                EDUCATION
              </h3>
              
              <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    2022 — 2026
                  </span>
                  <span className="font-mono text-[0.65rem] text-[var(--color-muted)] uppercase">
                    Bengaluru, Karnataka
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-xl font-semibold text-[var(--color-text)]">
                    CMR Institute of Technology
                  </h4>
                  <p className="font-body text-sm text-[var(--color-muted)] mt-1">
                    Bachelor of Engineering — Artificial Intelligence & Data Science
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
