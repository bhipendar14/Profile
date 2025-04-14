"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Building2, MapPin, Calendar, BookOpen, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const education = [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Marwadi University",
      location: "Rajkot, Gujarat",
      period: "2022 - 2026",
      description: "Focus on software development, cloud computing, and web technologies with hands-on project experience.",
      achievements: [
        "Data Structures & Algorithms",
        "Cloud Computing",
        "Web Development",
        "Database Management",
        "Software Development",
        "Machine Learning"
      ],
      type: "education"
    },
    {
      degree: "High School",
      institution: "Mahavir Public School",
      location: "Sundar Nagar, Himachal Pradesh",
      period: "2021 - 2022",
      description: "Completed higher secondary education with focus on science and mathematics.",
      achievements: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science"
      ],
      type: "education"
    }
  ]

  const certifications = [
    {
      degree: "Flutter Development Certification",
      institution: "Net Ninja",
      location: "Online",
      period: "2024",
      description: "Advanced mobile application development certification focusing on Flutter framework and Dart programming.",
      achievements: [
        "Flutter UI Development",
        "State Management",
        "API Integration",
        "Firebase Integration",
        "App Publishing",
        "Cross-Platform Development"
      ],
      type: "certification",
      image: "/net ninja.jpg"
    },
    {
      degree: "Flutter & Dart Certification",
      institution: "Udemy",
      location: "Online",
      period: "2023",
      description: "Comprehensive course covering Flutter framework fundamentals and Dart programming language.",
      achievements: [
        "Dart Programming",
        "Widget Development",
        "App Architecture",
        "Local Storage",
        "REST APIs",
        "UI/UX Design"
      ],
      type: "certification",
      pdf: "/certificate.pdf"
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

  const renderEducationItem = (edu: typeof education[0]) => (
    <motion.div
      key={edu.degree}
      variants={item}
      className="mb-8"
    >
      <Card className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Education
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm">
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{edu.institution}</span>
              </div>

              <div className="hidden sm:block text-muted-foreground">•</div>

              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{edu.location}</span>
              </div>

              <div className="hidden sm:block text-muted-foreground">•</div>

              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{edu.period}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-3 text-sm sm:text-base">{edu.description}</p>

            <div className="flex flex-wrap gap-2">
              {edu.achievements.map((achievement, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )

  const renderCertificationItem = (cert: typeof certifications[0]) => (
    <motion.div
      key={cert.degree}
      variants={item}
      className="mb-8"
    >
      <Card className="p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shrink-0">
            <Award className="w-6 h-6" />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-lg sm:text-xl font-bold">{cert.degree}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Certification
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm">
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{cert.institution}</span>
              </div>

              <div className="hidden sm:block text-muted-foreground">•</div>

              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{cert.location}</span>
              </div>

              <div className="hidden sm:block text-muted-foreground">•</div>

              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                <span>{cert.period}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-3 text-sm sm:text-base">{cert.description}</p>

            {cert.image && (
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.degree}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity hover:opacity-0" />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-3">
              {cert.achievements.map((achievement, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary"
                >
                  {achievement}
                </span>
              ))}
            </div>

            <div>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link 
                  href={cert.pdf || cert.image || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey, professional certifications, and educational background that shaped my technical foundation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            <div className="grid gap-6">
              {education.map(renderEducationItem)}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Certifications</h3>
            <div className="grid gap-6">
              {certifications.map(renderCertificationItem)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

