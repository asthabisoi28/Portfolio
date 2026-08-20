import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowUpRight, FiArrowRight, FiCheckCircle, FiCode, FiCpu, FiDatabase, FiEye, FiLayers, FiShield, FiX } from 'react-icons/fi'
import HeadingReveal from './HeadingReveal'

const filterCategories = ['ALL', 'AI/ML', 'GENERATIVE AI', 'COMPUTER VISION', 'APPLICATIONS']

const projectsData = [
  {
    num: '01',
    title: 'SmartHire',
    category: 'AI/ML',
    categories: ['AI/ML', 'APPLICATIONS'],
    subtitle: 'AI-Powered Virtual Interview & Proctored Assessment System',
    description: 'An AI-powered recruitment platform integrating ATS resume screening, technical assessments, AI-driven virtual interviews and real-time AI proctoring.',
    tech: ['React.js', 'FastAPI', 'Python', 'TensorFlow.js', 'OpenAI API'],
    github: 'https://github.com/asthabisoi28/SmartHire2',
    visualType: 'smarthire',
    caseStudy: {
      problem: 'Traditional recruitment processes are slow, manual, and resource-heavy, while remote testing options suffer from high rates of candidate cheating.',
      solution: 'An automated system that parses resumes with ATS screening, runs technical assessments, conducts interactive virtual video interviews, and monitors behavior using local web models.',
      decisions: [
        {
          title: 'On-Device Computer Vision',
          desc: 'Ran face mesh and object detection directly in the browser via TensorFlow.js. This saved backend API cost, protected candidate privacy, and eliminated network video-feed lag.'
        },
        {
          title: 'Asynchronous FastAPI Tasks',
          desc: 'Configured the backend to process ATS scanning and AI evaluation asynchronously, preventing blockages during peak candidate submission times.'
        }
      ],
      metrics: [
        '4-point proctoring: tracks gaze, detects multiple people, flags auxiliary devices, and logs browser tab switches.',
        'Zero-lag local video monitoring.'
      ]
    }
  },
  {
    num: '02',
    title: 'AI Chat with Document Search',
    category: 'GENERATIVE AI',
    categories: ['GENERATIVE AI'],
    subtitle: 'Retrieval-Augmented Generation PDF QA System',
    description: 'An end-to-end Retrieval-Augmented Generation application that lets users upload PDFs and ask context-aware questions using semantic search.',
    tech: ['Python', 'FastAPI', 'React.js', 'FAISS', 'Sentence Transformers', 'Gemini API'],
    github: 'https://github.com/asthabisoi28/RAG-project',
    visualType: 'rag',
    caseStudy: {
      problem: 'Finding specific facts inside lengthy, dense PDF manuals is slow, and using general-purpose LLMs directly on raw files leads to hallucinations.',
      solution: 'A local Retrieval-Augmented Generation (RAG) pipeline that extracts document text, generates semantic vector embeddings, and retrieves matching blocks to ground query responses.',
      decisions: [
        {
          title: 'Local In-Memory Indexing',
          desc: 'Used FAISS as a vector database. This provided rapid vector similarity calculations and saved deployment costs compared to remote cloud-hosted database providers.'
        },
        {
          title: 'Contextual Overlapping Chunking',
          desc: 'Implemented custom text chunking with sliding character windows, ensuring critical context remains grouped together across split boundaries.'
        }
      ],
      metrics: [
        '100% offline local vector database calculation.',
        'Zero cloud leakage of scanned document content.'
      ]
    }
  },
  {
    num: '03',
    title: 'Hand Gesture & Face Recognition System',
    category: 'COMPUTER VISION',
    categories: ['COMPUTER VISION'],
    subtitle: 'Real-Time Camera Feed Detection & Tracking',
    description: 'Real-time computer vision system using webcam input for hand gesture recognition and face identification.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    github: 'https://github.com/asthabisoi28/Hand-Gesture-Recognition-Face-Detection-System',
    visualType: 'vision',
    caseStudy: {
      problem: 'Processing high-frequency raw webcam streams introduces processing latency, leading to laggy gesture detection and dropped frames.',
      solution: 'A high-performance pipeline using OpenCV for feed ingestion, MediaPipe for landmark localization, and a trained classifier for gesture tracking.',
      decisions: [
        {
          title: 'Input Feed Downsampling',
          desc: 'Resized input video frames prior to feature extraction to maintain a smooth framerate on mid-tier hardware.'
        },
        {
          title: 'Normalized Coordinate Tracking',
          desc: 'Calculated hand pose structures relative to wrist coordinates, rendering gesture classification invariant to camera distance.'
        }
      ],
      metrics: [
        'Real-time processing running at a stable 60.0 FPS.',
        '98.4% model validation classification accuracy.'
      ]
    }
  },
  {
    num: '04',
    title: 'Credit Card Fraud Detection',
    category: 'AI/ML',
    categories: ['AI/ML'],
    subtitle: 'Predictive Anomaly Detection Engine',
    description: 'Machine learning project for identifying suspicious credit-card transactions with feature scaling and model evaluation.',
    tech: ['Python', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/asthabisoi28/Credit-Card-Fraud-Detection',
    visualType: 'fraud',
    caseStudy: {
      problem: 'Transactional datasets are heavily imbalanced (under 0.2% fraud instances), causing naive models to bias heavily towards predicting everything as normal.',
      solution: 'A machine learning system applying standardizing preprocessors, transaction scaling, and class-balancing configurations to detect fraud.',
      decisions: [
        {
          title: 'Class Weight Calibration',
          desc: 'Integrated SMOTE and random undersampling adjustments to force classification algorithms to prioritize recall of fraud flags.'
        },
        {
          title: 'Metric Prioritization Shift',
          desc: 'Moved away from standard accuracy metrics to evaluate performance using Precision-Recall Area Under Curve (PR-AUC) and ROC scores.'
        }
      ],
      metrics: [
        'Enhanced classification recall for minority fraud transactions.',
        'Feature scaling implementation on transaction amounts.'
      ]
    }
  },
  {
    num: '05',
    title: 'AI Business Analytics Assistant',
    category: 'GENERATIVE AI',
    categories: ['GENERATIVE AI', 'APPLICATIONS'],
    subtitle: 'Natural Language Text-to-SQL Analytics',
    description: 'Natural-language business analytics application connecting LLM-generated SQL with SQLite data.',
    tech: ['Python', 'SQLite', 'LLM SQL', 'Streamlit'],
    github: 'https://github.com/asthabisoi28/AI-Business-Analytics-Assistant',
    visualType: 'analytics',
    caseStudy: {
      problem: 'Business managers frequently require database snapshots, but lacking SQL skills forces them to bottleneck analytics teams with manual requests.',
      solution: 'A text-to-SQL utility translating user conversational English queries directly into valid database queries, executing them, and plotting charts.',
      decisions: [
        {
          title: 'Database Schema Injection',
          desc: 'Fed target database schemas and table relationships into the prompt context to ground SQL generation and prevent syntax failures.'
        },
        {
          title: 'Safety Execution Sandbox',
          desc: 'Configured query interceptors restricting generated SQL commands to read-only SELECT commands to prevent deletion anomalies.'
        }
      ],
      metrics: [
        '100% automated translation from query to SQLite commands.',
        'Zero manual SQL coding required by business users.'
      ]
    }
  },
  {
    num: '06',
    title: 'Fitness Tracker',
    category: 'APPLICATIONS',
    categories: ['APPLICATIONS'],
    subtitle: 'Web Activity & Health Metrics Dashboard',
    description: 'Web application for tracking fitness metrics including steps, calories, water intake and active minutes.',
    tech: ['JavaScript', 'HTML/CSS', 'Web App'],
    github: 'https://github.com/asthabisoi28/Fitness-Tracker',
    visualType: 'fitness',
    caseStudy: {
      problem: 'Users need to track diverse lifestyle and hydration stats in one place without signing up for complex, heavy cloud databases.',
      solution: 'A responsive single-page dashboard calculating daily activity values and persisting parameters client-side.',
      decisions: [
        {
          title: 'Vanilla Web Components',
          desc: 'Omitted large frameworks (like React or Angular) to build this project with native DOM selectors, yielding instant load times.'
        },
        {
          title: 'Client-Side Local Storage',
          desc: 'Stored user metrics directly in the browser localStorage. This guarantees zero latency, complete user data ownership, and offline capability.'
        }
      ],
      metrics: [
        '100% offline-ready operations.',
        'Sub-millisecond chart loading times.'
      ]
    }
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'ALL') return true
    return p.category === activeFilter || (p.categories && p.categories.includes(activeFilter))
  })

  // Render visual schematic based on type
  const renderSchematic = (type) => {
    switch (type) {
      case 'smarthire':
        return (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">1. RESUME UPLOAD</span>
              <span className="text-[var(--color-accent)]">PDF / DOCX</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">2. ATS SCREENING</span>
              <span className="text-[var(--color-accent)]">MATCH SCORE</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">3. ASSESSMENT</span>
              <span className="text-[var(--color-accent)]">TF.JS PROCTOR</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="p-3 rounded-md border border-[var(--color-accent)] bg-[var(--color-accent-soft)] flex items-center justify-between">
              <span className="text-[var(--color-accent)] font-bold">4. AI EVALUATION</span>
              <span className="text-[var(--color-accent)] font-bold">INSIGHTS</span>
            </div>
          </div>
        )
      case 'rag':
        return (
          <div className="space-y-2 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">PDF DOCUMENT</div>
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">TEXT EXTRACTION</div>
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">CHUNKING</div>
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">EMBEDDINGS</div>
            </div>
            <div className="bg-[var(--color-accent-soft)] p-3 rounded-md border border-[var(--color-accent)] text-center text-[var(--color-accent)] font-bold">
              FAISS VECTOR SEARCH ENGINE
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">CONTEXT RETRIEVAL</div>
              <div className="bg-[var(--color-surface)] p-2.5 rounded-md border border-[var(--color-border)] text-center text-[var(--color-text)] font-semibold">LLM SYNTHESIS</div>
            </div>
          </div>
        )
      case 'vision':
        return (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)]">TARGET STATUS:</span>
              <span className="text-[var(--color-accent)] font-bold">FACE DETECTED</span>
            </div>
            <div className="flex justify-between items-center bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)]">LANDMARKS:</span>
              <span className="text-[var(--color-accent)] font-semibold">21 HAND POINTS</span>
            </div>
            <div className="flex justify-between items-center bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)]">GESTURE STATE:</span>
              <span className="text-[var(--color-text)] font-bold">PALM / OPEN</span>
            </div>
            <div className="flex justify-between text-[0.7rem] text-[var(--color-muted)] pt-1">
              <span>FPS: 60.0</span>
              <span>ACCURACY: 98.4%</span>
            </div>
          </div>
        )
      case 'fraud':
        return (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">1. TRANSACTION INGEST</span>
              <span className="text-[var(--color-accent)]">RAW DATA</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">2. FEATURE SCALING</span>
              <span className="text-[var(--color-accent)]">PREPROCESSING</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-accent-soft)] p-3 rounded-md border border-[var(--color-accent)] flex items-center justify-between">
              <span className="text-[var(--color-accent)] font-bold">3. ML CLASSIFIER</span>
              <span className="text-[var(--color-accent)] font-bold">PREDICTION</span>
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">NATURAL QUERY</span>
              <span className="text-[var(--color-accent)] font-medium">USER INPUT</span>
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-accent-soft)] p-3 rounded-md border border-[var(--color-accent)] text-center text-[var(--color-accent)] font-bold">
              LLM TEXT-TO-SQL TRANSLATION
            </div>
            <div className="text-center text-[var(--color-muted)] text-xs">↓</div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)] flex items-center justify-between">
              <span className="text-[var(--color-text)] font-semibold">SQLITE ENGINE</span>
              <span className="text-[var(--color-accent)] font-medium">DATASET RESULT</span>
            </div>
          </div>
        )
      case 'fitness':
        return (
          <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)] block text-[0.65rem]">DAILY STEPS</span>
              <span className="text-[var(--color-text)] font-bold text-lg">10,420</span>
            </div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)] block text-[0.65rem]">CALORIES BURNED</span>
              <span className="text-[var(--color-accent)] font-bold text-lg">680 kcal</span>
            </div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)] block text-[0.65rem]">WATER INTAKE</span>
              <span className="text-[var(--color-text)] font-bold text-lg">2.5 L</span>
            </div>
            <div className="bg-[var(--color-surface)] p-3 rounded-md border border-[var(--color-border)]">
              <span className="text-[var(--color-muted)] block text-[0.65rem]">ACTIVE MINUTES</span>
              <span className="text-[var(--color-accent)] font-bold text-lg">45 min</span>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="work" className="py-24 sm:py-32 bg-[var(--color-bg)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <HeadingReveal>
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <span className="section-label">04 / SELECTED WORK</span>
            <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-semibold text-[var(--color-text)] leading-[1.08] tracking-tight mt-2">
              Things I've built.
            </h2>
          </div>
        </HeadingReveal>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-14 sm:mb-18 border-b border-[var(--color-border)] pb-6">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[var(--color-text)] text-[var(--color-bg)] border border-[var(--color-text)] shadow-xs'
                  : 'bg-[var(--color-surface-2)] text-[var(--color-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Editorial Project Sections */}
        <div className="space-y-12 sm:space-y-20">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group editorial-card p-6 sm:p-10 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded-2xl bg-[var(--color-surface)] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Details & Content */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category & Number Header */}
                  <div className="flex items-center justify-between border-b border-[var(--color-border)]/70 pb-3">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-heading text-xl font-bold text-[var(--color-muted)]">
                      {project.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {project.title.trim()}
                    </h3>
                    {project.subtitle && (
                      <p className="font-body text-sm sm:text-base text-[var(--color-accent)] font-medium mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-body text-base text-[var(--color-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <h4 className="font-mono text-[0.7rem] font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2.5">
                      TECHNOLOGY STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="skill-tag inline-flex items-center px-3 py-1 bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] rounded-[4px] font-mono text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className="btn-primary uppercase text-xs tracking-wider inline-flex items-center gap-2 cursor-pointer"
                    >
                      VIEW CASE STUDY <FiArrowUpRight size={16} className="btn-arrow-diagonal" />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary uppercase text-xs tracking-wider inline-flex items-center gap-2"
                    >
                      VIEW CODEBASE <FiArrowRight size={15} className="github-arrow" />
                    </a>
                  </div>

                </div>

                {/* Right Column: Custom Visual Diagram / Telemetry */}
                <div className="lg:col-span-5 self-stretch flex flex-col justify-center">
                  <div className="project-visual bg-[var(--color-surface-2)] p-6 rounded-xl border border-[var(--color-border)] space-y-4 min-h-[220px]">
                    
                    {/* Visual Header */}
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                      <span className="font-mono text-[0.7rem] font-bold text-[var(--color-muted)] uppercase tracking-wider flex items-center gap-1.5">
                        <FiLayers size={13} className="text-[var(--color-accent)]" /> SYSTEM SCHEMATIC
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    </div>

                    {/* Render visual content */}
                    {renderSchematic(project.visualType)}

                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Lightbox Modal */}
      {activeCaseStudy && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--color-bg)]/85 backdrop-blur-md overflow-x-hidden overflow-y-auto">
          {/* Modal Overlay / Backdrop Click Handler */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveCaseStudy(null)} />
          
          <div className="relative w-full max-w-4xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col z-10">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] shrink-0">
              <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
                {activeCaseStudy.category} &middot; ENGINEERING CASE STUDY
              </span>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="p-1.5 hover:bg-[var(--color-border)] rounded-full transition-colors cursor-pointer text-[var(--color-text)] flex items-center justify-center"
                aria-label="Close case study"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8">
              
              {/* Title & Subtitle */}
              <div>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] tracking-tight">
                  {activeCaseStudy.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[var(--color-accent)] font-medium mt-1">
                  {activeCaseStudy.subtitle}
                </p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: System Narrative & Decisions */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Problem & Solution block */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[0.7rem] font-bold text-[var(--color-text)] uppercase tracking-wider mb-2 border-b border-[var(--color-border)] pb-1">
                        THE CHALLENGE
                      </h4>
                      <p className="font-body text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                        {activeCaseStudy.caseStudy.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[0.7rem] font-bold text-[var(--color-text)] uppercase tracking-wider mb-2 border-b border-[var(--color-border)] pb-1">
                        THE SYSTEM SOLUTION
                      </h4>
                      <p className="font-body text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                        {activeCaseStudy.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technical Decisions */}
                  <div className="space-y-4 pt-2">
                    <h4 className="font-mono text-[0.7rem] font-bold text-[var(--color-text)] uppercase tracking-wider border-b border-[var(--color-border)] pb-1.5">
                      KEY ARCHITECTURAL DECISIONS
                    </h4>
                    <div className="space-y-4">
                      {activeCaseStudy.caseStudy.decisions.map((dec, index) => (
                        <div key={index} className="space-y-1.5">
                          <h5 className="font-body text-sm sm:text-base font-semibold text-[var(--color-text)] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                            {dec.title}
                          </h5>
                          <p className="font-body text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed pl-3.5">
                            {dec.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {activeCaseStudy.caseStudy.metrics && (
                    <div className="space-y-2 pt-2">
                      <h4 className="font-mono text-[0.7rem] font-bold text-[var(--color-text)] uppercase tracking-wider border-b border-[var(--color-border)] pb-1">
                        EVALUATION &amp; OUTCOMES
                      </h4>
                      <ul className="list-disc pl-4 text-xs sm:text-sm font-body text-[var(--color-muted)] space-y-1.5">
                        {activeCaseStudy.caseStudy.metrics.map((metric, i) => (
                          <li key={i}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Right Side: Visual Workflow & Stack */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Schematic Rendering */}
                  <div className="bg-[var(--color-surface-2)] p-6 rounded-xl border border-[var(--color-border)] space-y-4">
                    <span className="font-mono text-[0.65rem] font-bold text-[var(--color-muted)] uppercase tracking-wider flex items-center gap-1.5 border-b border-[var(--color-border)] pb-3">
                      <FiLayers size={13} className="text-[var(--color-accent)]" /> ARCHITECTURE / WORKFLOW
                    </span>
                    {renderSchematic(activeCaseStudy.visualType)}
                  </div>

                  {/* Technical Stack */}
                  <div>
                    <h4 className="font-mono text-[0.65rem] font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2.5">
                      TECHNOLOGY STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCaseStudy.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center px-3 py-1 bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] rounded-[4px] font-mono text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2">
                    <a
                      href={activeCaseStudy.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center uppercase text-xs tracking-wider inline-flex items-center gap-2"
                    >
                      VIEW GITHUB REPOSITORY <FiArrowUpRight size={16} className="btn-arrow-diagonal" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
            
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
