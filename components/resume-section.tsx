"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, Calendar } from "lucide-react"
import Link from "next/link"

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      position: "Full-Stack Developer",
      company: "DSR Group",
      period: "Jan 2025 – Apr 2025",
      responsibilities: [
        "Built and deployed the official financial website dsrgroupmandsaur.com using Next.js, TypeScript, and Nodemailer",
        "Designed a responsive UI/UX, implemented backend logic, and integrated secure email communication via Nodemailer",
        "Optimized website performance, ensured SEO best practices, and contributed to a strong digital presence for the company"
      ],
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and experience in the tech industry.
          </p>
          <Button 
            className="mt-6 bg-primary hover:opacity-90" 
            asChild
          >
            <Link 
              href="/Resume.1.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Bhipendar_Resume.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.position}
              variants={item}
              className={`mb-12 relative pl-8 ${
                index !== experiences.length - 1
                  ? "before:content-[''] before:absolute before:left-3 before:top-8 before:w-0.5 before:h-full before:bg-muted-foreground/30"
                  : ""
              }`}
            >
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                <Briefcase className="w-3 h-3" />
              </div>

              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-bold mb-2">{exp.position}</h3>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full mr-2 bg-primary" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

