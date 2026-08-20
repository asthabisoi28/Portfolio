import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const repos = [
  'SmartHire2',
  'RAG-project',
  'Hand-Gesture-Recognition-Face-Detection-System',
  'Credit-Card-Fraud-Detection',
  'AI-Business-Analytics-Assistant',
  'Fitness-Tracker',
]

export default function GithubSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <FiGithub className="mx-auto text-gray-light mb-5" size={32} />
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-3">More on GitHub</h2>
        <p className="text-gray mb-8 max-w-md mx-auto">
          Explore my experiments, projects and code.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
          {repos.map((repo) => (
            <a
              key={repo}
              href={`https://github.com/asthabisoi28/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-xl border border-border-light text-sm font-mono text-gray hover:text-lavender hover:border-lavender/30 transition-all duration-300 text-left truncate"
            >
              {repo}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/asthabisoi28"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Visit GitHub Profile <FiArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
