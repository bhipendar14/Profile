import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

