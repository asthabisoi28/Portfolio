const groups = [
  {
    title: 'Programming',
    items: ['Python', 'Java'],
  },
  {
    title: 'Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Computer Vision',
    items: ['OpenCV', 'MediaPipe', 'YOLO'],
  },
  {
    title: 'Generative AI',
    items: ['Generative AI', 'RAG', 'LLM Applications', 'Sentence Transformers'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'REST APIs', 'Streamlit'],
  },
  {
    title: 'Data',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'SQLite'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
  {
    title: 'Visualization',
    items: ['Power BI', 'Tableau', 'Microsoft Excel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="section-label">04 — Toolbox</span>
        <h2 className="section-heading mb-12">Technologies I work with</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group) => (
            <div key={group.title} className="card">
              <h3 className="font-heading font-semibold text-charcoal text-sm mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
