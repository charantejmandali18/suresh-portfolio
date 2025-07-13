import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
  )
}