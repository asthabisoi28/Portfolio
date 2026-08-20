import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import HeadingReveal from './HeadingReveal'

const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'BLP Industry AI',
    period: 'JUN 2026 — PRESENT',
    location: 'Bengaluru, IN',
    type: 'Internship',
    bullets: [
      'Worked with real-world image datasets for annotation, preprocessing, and preparation of training data for computer vision models.',
      'Implemented and tested computer vision models using YOLO, CNNs, and OpenCV for detection and classification tasks.',
      'Gained hands-on experience in deep learning model training, evaluation, and optimization in a collaborative AI development environment.',
    ],
    skills: ['YOLO', 'CNNs', 'OpenCV', 'Computer Vision', 'Deep Learning', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[var(--color-surface-2)] border-y border-[var(--color-border)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <HeadingReveal>
          <div className="mb-14 sm:mb-20 max-w-3xl">
            <span className="section-label">03 / EXPERIENCE</span>
            <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold text-[var(--color-text)] leading-[1.08] tracking-tight mt-2">
              Learning in the real world.
            </h2>
          </div>
        </HeadingReveal>

        {/* Clean Vertical Timeline Container */}
        <div className="relative pl-5 sm:pl-10 ml-2 sm:ml-4 border-l-2 border-[var(--color-border)] space-y-12">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[29px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-surface-2)] group-hover:scale-125 transition-transform duration-300">
                <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-ping opacity-30" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-9 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded-xl shadow-[0_16px_45px_-32px_rgba(0,0,0,0.15)] transition-all duration-300 space-y-6">
                
                {/* Header Row: Role, Company, Date Badge */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[var(--color-border)]/70 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <FiBriefcase size={16} />
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[var(--color-text)] tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--color-muted)] pl-0.5">
                      <span className="font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <FiMapPin size={13} /> {exp.location}
                      </span>
                      <span>•</span>
                      <span className="uppercase tracking-wider">{exp.type}</span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md font-mono text-xs font-semibold text-[var(--color-text)] tracking-wider uppercase shrink-0 self-start whitespace-nowrap">
                    <FiCalendar size={13} className="text-[var(--color-accent)]" />
                    {exp.period}
                  </div>
                </div>

                {/* Verified Bullet Points */}
                <ul className="space-y-3.5 font-body text-base text-[var(--color-text)]/90 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="font-mono text-[var(--color-accent)] font-bold text-sm mt-1 shrink-0">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Clean Technology Tags */}
                <div className="pt-3 border-t border-[var(--color-border)]/60 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mr-2">
                    TECHNOLOGIES:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] rounded-[4px] font-mono text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

