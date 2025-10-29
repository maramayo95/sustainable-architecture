import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Materials } from "@/components/materials"
import { Impact } from "@/components/impact"
import { Press } from "@/components/press"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Manifesto />
      <Projects />
      <Process />
      <Materials />
      <Impact />
      <Press />
      <Contact />
      <Footer />
    </main>
  )
}
