import Hero from "@/components/Home/Hero"
import About from "@/components/Home/About"
import Skills from "@/components/Home/Skills"
import Projects from "@/components/Home/Projects"
import Education from "@/components/Home/Education"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </main>
  )
}