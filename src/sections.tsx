import { useState, type ReactNode } from 'react'
import { CONFIG as C, type Project } from './config'
import { Ph, useReveal, ExtLink, ResumeButton, useNotify } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header><div className="wrap"><nav aria-label="Primary"><b>{C.name}</b>
    <button id="menuBtn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>Menu</button>
    <ul id="menu" className={open ? 'open' : ''} onClick={() => setOpen(false)}>
      {['about', 'skills', 'projects', 'journey', 'contact'].map(l => <li key={l}><a href={'#' + l}>{l[0].toUpperCase() + l.slice(1)}</a></li>)}
    </ul></nav></div></header>
}

function Diagram() {
  const rows = [['Interface', 'React · TypeScript', 10], ['API', 'Node.js · Express · REST', 108], ['Data', 'MongoDB · Mongoose', 206]] as const
  return <svg className="diagram" viewBox="0 0 340 330" role="img" aria-label="Diagram: interface connects to API, API to database, all shipped through a CI/CD pipeline">
    {rows.map(([a, b, y]) => <g key={a}><rect x="20" y={y} width="300" height="62" rx="8" /><text x="38" y={y + 28}>{a}</text><text className="s" x="38" y={y + 48}>{b}</text></g>)}
    <path d="M170 72v36M170 170v36" /><path d="M332 40v250M332 40h-12M332 290H320" strokeDasharray="4 4" />
    <text className="s" x="20" y="312">Tested and shipped with CI/CD</text></svg>
}

export function Hero() {
  return <section className="wrap hero" id="top"><div>
    {C.available && <div className="status">
      <span className="dot" aria-hidden="true" /><span>
        {C.available}
      </span>
    </div>}
    <h1>Building scalable web experiences, from interface to backend.</h1>
    <p className="lead">Software engineer with deep frontend expertise and hands-on full-stack experience, building reliable, maintainable applications with React, TypeScript, Node.js, and MongoDB.</p>
    <div className="btns"><a className="btn p" href="#projects">Explore My Work</a><ResumeButton /></div>
    {/* <div className="links"><ExtLink url={C.linkedin} what="LinkedIn URL">LinkedIn</ExtLink><ExtLink url={C.github} what="GitHub URL">GitHub</ExtLink></div> */}
  </div><Diagram /></section>
}

export function About() {
  const r = useReveal<HTMLDivElement>()
  return <section className="wrap content" id="about"><div className="about"><h2>About</h2><div ref={r} className="rv">
    <p>I started with what users see: the interface, the interactions, the details that make an application feel right.</p>
    <p>Then I followed the questions behind the screen: how data moves, how APIs hold up, how code reaches production. Now I bring both views to the same team, pairing years of frontend depth with practical full-stack work, and I care most about code the next engineer can extend.</p>
  </div></div></section>
}

export function Skills() {
  const r = useReveal<HTMLDivElement>()
  return <section className="wrap content" id="skills"><h2>Technical Expertise</h2><div ref={r} className="skills rv">
    {C.skills.map(s => <div key={s.g}><h3>{s.g}</h3><ul className="chips">
      {s.key.map(k => <li key={k} className="k">{k}</li>)}{s.rest.map(k => <li key={k}>{k}</li>)}</ul></div>)}
  </div></section>
}

const Field = ({ label, v }: { label: string; v: string }) => <div><h4>{label}</h4><p><Ph t={v} /></p></div>

function ProjectCard({ p }: { p: Project }) {
  const r = useReveal<HTMLDetailsElement>()
  return <details ref={r} className="proj rv"><summary>
    <span className={'tag' + (/progress/i.test(p.status) ? ' wip' : '')}>{p.kind} · {p.status}</span>
    <h3>{p.title}<span className="exp" aria-hidden="true">+</span></h3>
    <span className="lead" style={{ fontSize: 17 }}>{p.desc}</span>
    <ul className="chips">{p.stack.map(s => <li key={s}>{s}</li>)}</ul></summary>
    <div className="more">
      <Field label="Role" v={p.role} /><Field label="Main challenge" v={p.challenge} /><Field label="My contribution" v={p.contribution} />
      <Field label="Technical approach" v={p.approach} /><Field label="Outcome and status" v={p.outcome} />
      <div><h4>Links</h4><p style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{p.github || p.demo
        ? <>{p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">{p.githubBackend ? 'GitHub (frontend)' : 'GitHub'}</a>}{p.githubBackend && <a href={p.githubBackend} target="_blank" rel="noopener noreferrer">GitHub (backend)</a>}{p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}</>
        : <span className="ph">[Add GitHub / demo links]</span>}</p></div>
    </div></details>
}
export const Projects = () => <section className="wrap content" id="projects"><h2>Featured Projects</h2>{C.projects.map(p => <ProjectCard key={p.title} p={p} />)}</section>

export function Journey() {
  const r = useReveal<HTMLOListElement>()
  return <section className="wrap content" id="journey"><h2>Career Journey</h2><ol ref={r} className="tl rv">
    {C.timeline.map(t => <li key={t.co + t.role}><b><Ph t={t.co} /></b> · <Ph t={t.role} /><div className="mono"><Ph t={t.dates} /></div><p><Ph t={t.line} /></p></li>)}
  </ol></section>
}

const VALUES = [['Maintainable by design', 'Code that other engineers can understand and extend.'], ['Quality built in', 'Tests, code reviews, and static analysis to keep releases reliable.'], ['Performance matters', 'Responsive, efficient applications, judged by what users actually experience.'], ['End-to-end ownership', 'Understanding how frontend, APIs, data, and deployment fit together.']]
export function Values() {
  const r = useReveal<HTMLDivElement>()
  return <section className="wrap content" id="how"><h2>How I build software</h2><div ref={r} className="vals rv">
    {VALUES.map(([h, t]) => <div key={h}><h3>{h}</h3><p>{t}</p></div>)}</div></section>
}

const Icon = ({ d }: { d: string }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
const IN = 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.82-1.95 3.75-1.95 4 0 4.74 2.5 4.74 5.8V21h-4v-5.1c0-1.2-.02-2.8-1.75-2.8s-2 1.3-2 2.7V21h-4z'
const GH = 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z'
function Card({ name, sub, url, what, d }: { name: string; sub: string; url: string; what: string; d: string }): ReactNode {
  return <ExtLink className="card" url={url} what={what}><i><Icon d={d} /></i><b>{name}</b><span>{sub}</span></ExtLink>
}
export function Contact() {
  const notify = useNotify()
  return <footer id="contact"><section className="wrap ct" style={{ border: 0 }}>
    <p className="big content">Let's build something meaningful.</p>
    <p className="lead">I'm interested in opportunities where strong engineering, thoughtful architecture, and product impact come together.</p>
    <div className="cards"><Card name="LinkedIn" sub="Connect with me" url={"https://www.linkedin.com/in/akanksha-bhardwaj-3408096a/"} what="LinkedIn URL" d={IN} /><Card name="GitHub" sub="View my projects" url={"https://github.com/AkankshaB-004/"} what="GitHub URL" d={GH} /></div>
    <div className="btns">
      {C.email ? <a className="btn p" href={`mailto:${C.email}`}>Send me an email</a>
        : <a className="btn p" href="#contact" onClick={e => { e.preventDefault(); notify('Placeholder: add your email address in src/config.ts.') }}>Send me an email</a>}
      <ResumeButton /></div></section>
    <div className="wrap foot"><span>© {new Date().getFullYear()} {C.name}</span><span></span></div></footer>
}