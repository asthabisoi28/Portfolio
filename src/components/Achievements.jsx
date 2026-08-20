import { FiAward, FiCheckCircle } from 'react-icons/fi'

const achievements = [
  { type: 'award', title: '2nd Place', detail: 'Trope Trivia', sub: 'College Annual Fest · 2024' },
  { type: 'cert', title: 'Data Science', detail: 'Wipro', sub: null },
  { type: 'cert', title: 'Generative AI Studio', detail: 'Simplilearn', sub: null },
  { type: 'cert', title: 'Networking and Web Technology', detail: 'Infosys Springboard', sub: null },
]

export default function Achievements() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="section-heading mb-12">Achievements & Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <div key={i} className="card group text-center">
              <div className="mx-auto mb-3 p-2.5 rounded-xl bg-lavender-bg inline-flex">
                {a.type === 'award'
                  ? <FiAward className="text-blush" size={20} />
                  : <FiCheckCircle className="text-lavender" size={20} />
                }
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-sm">{a.title}</h3>
              <p className="text-lavender text-sm font-medium">{a.detail}</p>
              {a.sub && <p className="text-gray-light text-xs mt-1">{a.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
