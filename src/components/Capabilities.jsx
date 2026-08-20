import { FiActivity, FiCode, FiCpu, FiEye, FiServer, FiTool } from 'react-icons/fi'
import HeadingReveal from './HeadingReveal'

const skillGroups = [
  {
    num: '01',
    category: 'Programming',
    icon: FiCode,
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'C++'],
  },
  {
    num: '02',
    category: 'Machine Learning',
    icon: FiCpu,
    skills: ['Machine Learning', 'Deep Learning', 'Scikit-learn', 'TensorFlow', 'Neural Networks', 'Model Evaluation'],
  },
  {
    num: '03',
    category: 'Computer Vision',
    icon: FiEye,
    skills: ['OpenCV', 'MediaPipe', 'YOLO', 'CNNs', 'Image Processing', 'Object Detection'],
  },
  {
    num: '04',
    category: 'Generative AI',
    icon: FiActivity,
    skills: ['Generative AI', 'RAG (Retrieval-Augmented Generation)', 'LLM Applications', 'Sentence Transformers', 'OpenAI API', 'Gemini API'],
  },
  {
    num: '05',
    category: 'Backend',
    icon: FiServer,
    skills: ['FastAPI', 'Flask', 'REST APIs', 'Streamlit', 'Pandas', 'NumPy', 'MySQL', 'SQLite'],
  },
  {
    num: '06',
    category: 'Tools',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'Docker', 'Power BI', 'Tableau', 'VS Code'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <HeadingReveal>
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <span className="section-label">02 / CAPABILITIES</span>
            <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold text-[var(--color-text)] leading-[1.08] tracking-tight mt-2">
              What I work with.
            </h2>
          </div>
        </HeadingReveal>

        {/* 6 Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.category}
                className="group editorial-card p-6 sm:p-7 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header: Num, Icon & Category Name */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                      {group.num}
                    </span>
                    <div className="p-2 rounded-md bg-[var(--color-surface-2)] text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent-soft)] transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-[var(--color-text)] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Clean Technical Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]/60">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag inline-flex items-center px-3 py-1.5 bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] rounded-[5px] font-mono text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

