'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { t, type Lang } from '@/lib/translations'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  BookOpen,
  Atom,
  Smartphone,
  Server,
  Flame,
  Palette,
  ArrowLeftRight,
  Users,
  Wind,
  FileCode,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const contact = {
  email: 'celsoluiz.ferrazdoamaral@gmail.com',
  phone: '(13) 9 9128-2984',
  location: 'São Vicente, SP',
  github: 'https://github.com/CelsoLFAmaral',
  linkedin: 'https://www.linkedin.com/in/celsoluiz/',
}

const skills = [
  // Frontend — do mais complexo ao mais básico
  { label: 'React', icon: Atom, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'TypeScript', icon: FileCode, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'React Native', icon: Smartphone, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'JavaScript', icon: Terminal, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'Tailwind CSS', icon: Wind, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'SASS', icon: Palette, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'HTML5', icon: Code2, group: { pt: 'Frontend', en: 'Frontend' } },
  { label: 'CSS3', icon: Layers, group: { pt: 'Frontend', en: 'Frontend' } },
  // Backend
  { label: 'Node.js', icon: Server, group: { pt: 'Backend', en: 'Backend' } },
  { label: 'Express', icon: Server, group: { pt: 'Backend', en: 'Backend' } },
  { label: 'PHP', icon: FileCode, group: { pt: 'Backend', en: 'Backend' } },
  { label: 'Firestore', icon: Flame, group: { pt: 'Backend', en: 'Backend' } },
  { label: 'REST API', icon: ArrowLeftRight, group: { pt: 'Backend', en: 'Backend' } },
  // Banco de Dados
  { label: 'MySQL', icon: Database, group: { pt: 'Banco de Dados', en: 'Database' } },
  { label: 'NoSQL', icon: Database, group: { pt: 'Banco de Dados', en: 'Database' } },
  // CMS
  { label: 'WordPress', icon: Globe, group: { pt: 'CMS', en: 'CMS' } },
  { label: 'ACF', icon: FileCode, group: { pt: 'CMS', en: 'CMS' } },
  // Integrações
  { label: 'HubSpot', icon: Users, group: { pt: 'Integrações', en: 'Integrations' } },
  { label: 'RD Station', icon: Users, group: { pt: 'Integrações', en: 'Integrations' } },
  { label: 'Omie', icon: Users, group: { pt: 'Integrações', en: 'Integrations' } },
  // Ferramentas
  { label: 'Git', icon: ArrowLeftRight, group: { pt: 'Ferramentas', en: 'Tools' } },
  // IA
  { label: 'Cursor', icon: Atom, group: { pt: 'IA', en: 'AI' } },
  { label: 'Claude (Anthropic)', icon: Atom, group: { pt: 'IA', en: 'AI' } },
  // Idiomas
  { label: { pt: 'Inglês Intermediário', en: 'Intermediate English' }, icon: BookOpen, group: { pt: 'Idiomas', en: 'Languages' } },
]

const portfolioMeta = [
  { image: '/img/superapp.png', url: 'https://superapp.escoladocaos.com/', tags: ['React', 'Node.js', 'Express', 'Firestore', 'Zustand', 'Tailwind', 'REST API'], category: 'react' },
  { image: '/img/pnlplay.png', url: 'https://pnlplay.com.br/home/', tags: ['WordPress', 'PHP', 'PagSeguro', 'DocSign', 'REST API'], category: 'wordpress' },
  { image: '/img/festivalcasamoda.png', url: 'https://festivalcasamoda.com.br/', tags: ['WordPress', 'ACF', 'REST API', 'HubSpot', 'Omie', 'JavaScript'], category: 'wordpress' },
  { image: '/img/casanoivas.png', url: 'https://salaocasanoivas.com.br/', tags: ['WordPress', 'ACF', 'REST API', 'HubSpot', 'Omie', 'JavaScript'], category: 'wordpress' },
  { image: '/img/escoladocaos.png', url: 'https://escoladocaos.com/', tags: ['WordPress', 'ACF', 'JavaScript'], category: 'wordpress' },
  { image: '/img/consag.png', url: 'https://consagsa.com.br/', tags: ['WordPress', 'ACF', 'Multilíngue'], category: 'wordpress' },
]

type FilterKey = 'all' | 'react' | 'wordpress'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-text-muted">{number}</span>
      <div className="h-[1px] w-8 section-line" />
      <span className="font-display text-xs tracking-[0.25em] uppercase text-accent">{label}</span>
    </div>
  )
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('pt')
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('sobre')
  const [filter, setFilter] = useState<FilterKey>('all')
  const tr = t[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['sobre', 'experiencia', 'formacao', 'competencias', 'portifolio']
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { threshold: 0.3 }
    )
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: '#sobre', label: tr.nav.about, id: 'sobre' },
    { href: '#experiencia', label: tr.nav.experience, id: 'experiencia' },
    { href: '#formacao', label: tr.nav.education, id: 'formacao' },
    { href: '#competencias', label: tr.nav.skills, id: 'competencias' },
    { href: '#portifolio', label: tr.nav.portfolio, id: 'portifolio' },
  ]

  const allPortfolio = tr.portfolio.map((p, i) => ({ ...p, ...portfolioMeta[i] }))
  const portfolio = filter === 'all' ? allPortfolio : allPortfolio.filter(p => p.category === filter)

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: lang === 'pt' ? 'Todos' : 'All' },
    { key: 'react', label: 'React' },
    { key: 'wordpress', label: 'WordPress' },
  ]

  return (
    <div className="grain-overlay min-h-screen">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg/90 nav-blur border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#sobre" className="font-display font-bold text-sm tracking-widest text-accent">CLA</a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label, id }) => (
              <a key={href} href={href} className={`font-sans text-xs tracking-wider uppercase transition-colors duration-200 ${activeSection === id ? 'text-accent' : 'text-text-muted hover:text-text-primary'}`}>
                {label}
              </a>
            ))}
          </div>
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="font-mono text-xs px-3 py-1.5 border border-border rounded-sm text-text-muted hover:border-accent hover:text-accent transition-all duration-200"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="sobre" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />

        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="h-[1px] w-12 bg-accent opacity-60" />
            <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">{tr.hero.scrollLabel}</span>
          </div>

          <div className="mb-6 overflow-hidden">
            {['CELSO', 'LUIZ', 'AMARAL'].map((line, i) => (
              <h1
                key={line}
                className="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(4rem,12vw,9rem)] opacity-0"
                style={{
                  animationName: 'fade-up',
                  animationDuration: '0.8s',
                  animationDelay: `${0.2 + i * 0.12}s`,
                  animationFillMode: 'forwards',
                  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  color: i === 2 ? 'transparent' : '#e8e4dc',
                  WebkitTextStroke: i === 2 ? '1px #c9a84c' : undefined,
                }}
              >
                {line}
              </h1>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8 opacity-0" style={{ animationName: 'fade-up', animationDuration: '0.7s', animationDelay: '0.58s', animationFillMode: 'forwards' }}>
            <span className="font-display text-base md:text-lg tracking-[0.2em] uppercase text-text-muted">{tr.hero.title}</span>
            <div className="h-[1px] flex-1 max-w-[80px] bg-border" />
          </div>

          <p className="font-sans text-base text-text-muted max-w-lg leading-relaxed mb-10 opacity-0" style={{ animationName: 'fade-up', animationDuration: '0.7s', animationDelay: '0.68s', animationFillMode: 'forwards' }}>
            {tr.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-10 opacity-0" style={{ animationName: 'fade-up', animationDuration: '0.7s', animationDelay: '0.78s', animationFillMode: 'forwards' }}>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors">
              <Mail size={13} />{contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors">
              <Phone size={13} />{contact.phone}
            </a>
            <span className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <MapPin size={13} />{contact.location}
            </span>
          </div>

          <div className="flex gap-3 opacity-0" style={{ animationName: 'fade-up', animationDuration: '0.7s', animationDelay: '0.88s', animationFillMode: 'forwards' }}>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-xs font-mono text-text-muted hover:border-accent hover:text-accent transition-all duration-200">
              <Github size={14} /><span>GitHub</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-accent text-bg rounded-sm text-xs font-mono font-medium hover:bg-accent-light transition-all duration-200">
              <Linkedin size={14} /><span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse" />
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* EXPERIENCE */}
      <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionLabel {...tr.sections.experience} />
          <div className="space-y-0">
            {tr.experience.map((exp, i) => (
              <div key={i} className="relative pl-6 md:pl-10 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border">
                  {i !== tr.experience.length - 1 && <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-border to-transparent" />}
                </div>
                <div className="absolute left-[-4px] top-[6px] w-2 h-2 rounded-full bg-accent" />
                <div className="border border-border rounded-sm p-6 md:p-8 bg-surface card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary mb-1">{exp.role}</h3>
                      <p className="font-sans text-sm text-accent">{exp.company}</p>
                      {exp.companyFull && <p className="font-sans text-xs text-text-muted mt-0.5">{exp.companyFull}</p>}
                    </div>
                    <Badge variant="outline" className="self-start whitespace-nowrap">{exp.period}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {exp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="text-accent mt-1.5 shrink-0">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* EDUCATION */}
      <section id="formacao" className="py-24 px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionLabel {...tr.sections.education} />
          <div className="grid md:grid-cols-3 gap-4">
            {tr.education.map((edu, i) => (
              <div key={i} className="border border-border rounded-sm p-6 bg-surface card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
                <p className="font-mono text-xs text-text-muted mb-3">{edu.period}</p>
                <h3 className="font-display font-bold text-lg text-text-primary leading-tight mb-1">{edu.course}</h3>
                <p className="font-sans text-xs text-accent mb-3">{edu.detail}</p>
                <Separator className="mb-3" />
                <p className="font-sans text-xs text-text-muted">{edu.institution}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* SKILLS */}
      <section id="competencias" className="py-24 px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionLabel {...tr.sections.skills} />
          <div className="space-y-8">
            {tr.skillGroups.map((group) => {
              const groupSkills = skills.filter((s) => s.group[lang] === group)
              if (!groupSkills.length) return null
              return (
                <div key={group}>
                  <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">{group}</p>
                  <div className="flex flex-wrap gap-2">
                    {groupSkills.map((skill) => {
                      const Icon = skill.icon
                      const label = typeof skill.label === 'string' ? skill.label : skill.label[lang]
                      return (
                        <div key={label} className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm bg-surface hover:border-accent hover:bg-elevated transition-all duration-200 group cursor-default">
                          <Icon size={13} className="text-text-muted group-hover:text-accent transition-colors" />
                          <span className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors">{label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* PORTFOLIO */}
      <section id="portifolio" className="py-24 px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionLabel {...tr.sections.portfolio} />
          {/* Filters */}
          <div className="flex gap-2 mb-8">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`font-mono text-xs px-4 py-2 rounded-sm border transition-all duration-200 ${
                  filter === key
                    ? 'border-accent bg-accent-dim text-accent'
                    : 'border-border text-text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project, i) => {
              const cardClass = 'portfolio-card group block border border-border rounded-sm overflow-hidden bg-surface card-hover'
              const inner = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-elevated">
                    <Image src={project.image} alt={project.title} fill className="portfolio-img object-cover transition-transform duration-500" unoptimized />
                    {project.url && (
                      <div className="portfolio-overlay absolute inset-0 bg-bg/80 flex items-center justify-center opacity-0 transition-opacity duration-300">
                        <div className="flex items-center gap-2 px-4 py-2 border border-accent rounded-sm text-accent text-xs font-mono">
                          <ExternalLink size={12} />{tr.ui.viewProject}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-4 pt-3 pb-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-medium text-sm text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                      {project.url && <ExternalLink size={12} className="text-text-muted group-hover:text-accent transition-colors shrink-0 ml-2" />}
                    </div>
                    {project.description && <p className="font-sans text-xs text-text-muted mb-2 leading-relaxed">{project.description}</p>}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1 pb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border border-border rounded-sm text-text-muted">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )
              return project.url
                ? <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
                : <div key={i} className={cardClass}>{inner}</div>
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-sm tracking-widest text-accent">CLA</span>
          <p className="font-mono text-xs text-text-muted">
            Celso Luiz Ferraz do Amaral — {new Date().getFullYear()} — {tr.footer.rights}
          </p>
          <div className="flex gap-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Github size={16} /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Linkedin size={16} /></a>
            <a href={`mailto:${contact.email}`} className="text-text-muted hover:text-accent transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
