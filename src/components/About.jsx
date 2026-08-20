import { FiCpu, FiEye, FiMessageSquare, FiDatabase } from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'Machine Learning',
    desc: 'Building predictive and intelligent systems.',
  },
  {
    icon: FiEye,
    title: 'Computer Vision',
    desc: 'Real-time detection, recognition and image processing.',
  },
  {
    icon: FiMessageSquare,
    title: 'Generative AI',
    desc: 'LLM-powered applications and intelligent workflows.',
  },
  {
    icon: FiDatabase,
    title: 'RAG',
    desc: 'Document search, semantic retrieval and grounded responses.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="section-label">01 — About</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <h2 className="section-heading">
              Building with curiosity.<br />
              Engineering with purpose.
            </h2>
          </div>
          <div className="space-y-5 text-gray leading-relaxed">
            <p>
              Software engineer with a strong foundation in Python, FastAPI, machine learning,
              and full-stack development — open to Software Engineering, AI Engineering, and Backend roles.
            </p>
            <p>
              I enjoy turning ideas into working applications — from RAG pipelines and generative AI
              platforms to full-stack web applications and production backend services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <f.icon className="text-lavender mb-4 group-hover:scale-110 transition-transform duration-300" size={22} />
              <h3 className="font-heading font-semibold text-charcoal mb-1.5 text-sm">{f.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
