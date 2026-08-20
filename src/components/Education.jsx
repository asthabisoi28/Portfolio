import { FiBook } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="section-label">05 — Education</span>
        <h2 className="section-heading mb-12">Academic background</h2>

        <div className="max-w-2xl">
          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-lavender border-4 border-ivory-dark" />

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-lavender-bg shrink-0">
                <FiBook className="text-lavender" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-charcoal">CMR Institute of Technology</h3>
                <p className="text-gray text-sm mt-0.5">Bachelor of Engineering — Artificial Intelligence & Data Science</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-xs text-gray-light">2022 — 2026</span>
                  <span className="text-border">·</span>
                  <span className="font-mono text-xs text-gray-light">Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
