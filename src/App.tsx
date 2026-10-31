import { useEffect } from 'react'
import { CONFIG } from './config'
import { ToastProvider } from './ui'
import { Header, Hero, About, Skills, Projects, Journey, Values, Contact } from './sections'

export default function App() {
  useEffect(() => { document.title = `${CONFIG.name} | Senior Software Engineer: React, TypeScript, Node.js` }, [])
  return <ToastProvider>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Values />
    </main>
    <Contact />
  </ToastProvider>
}
