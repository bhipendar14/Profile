"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ShoppingCart, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "DSR Group Mandasaur",
      subtitle: "Finance & Stock Market Website",
      description: [
        "Developed a comprehensive finance website with real-time stock market data using Socket.io",
        "Implemented secure contact form with Nodemailer for client communications",
        "Built with Next.js and TypeScript for robust type safety and performance",
        "Created RESTful APIs for data management and integration with external services"
      ],
      image: "/dsr.png",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Next.js", "TypeScript", "Socket.io", "Nodemailer", "REST API", "Tailwind CSS"],
      demo: "https://dsrgroupmandsaur.com",
      gradient: "from-[#2563eb] to-[#3b82f6]"
    },
    {
      title: "B-Market",
      subtitle: "E-commerce Platform",
      description: [
        "Developed a MERN stack e-commerce platform with user authentication (JWT, bcrypt)",
        "Integrated MongoDB for dynamic product management and secure payments",
        "Built a responsive UI using Tailwind CSS and optimized performance with React.js",
        "Deployed using Docker and AWS for scalability"
      ],
      image: "/b-market.png",
      icon: <ShoppingCart className="w-5 h-5" />,
      tags: ["React.js", "MongoDB", "Node.js", "Docker", "AWS", "Tailwind CSS"],
      github: "https://github.com/bhipendar14/B-Market",
      demo: "https://b-market.vercel.app/",
      gradient: "from-[#00b894] to-[#00cec9]"
    },
    {
      title: "ADmyBRAND",
      subtitle: "SaaS Landing Page",
      description: [
        "A modern, responsive landing page for the fictional AI-powered marketing tool ADmyBRAND AI Suite. Built using Next.js 14+, TypeScript, and Tailwind CSS, the page follows 2025 design trends like glassmorphism, scroll-based animations, and mobile-first UX."
      ],
      image: "/home.png",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Next.js", "Typescript", "Tailwind CSS"],
      github: "https://github.com/bhipendar14",
      demo: "https://admybrand-landing-roan.vercel.app/",
      gradient: "from-[#FFB6C1] to-[#FFD700]"
    },
    {
      title: "Pet Pickup Service",
      subtitle: "Real-time Booking System",
      description: [
        "Created a real-time slot booking system using Socket.io for instant notifications",
        "Implemented secure authentication and scheduling features using MongoDB and JWT",
        "Built a modern UI with React and Vite, ensuring full mobile responsiveness"
      ],
      image: "/paw.png",
      icon: <Calendar className="w-5 h-5" />,
      tags: ["React", "Socket.io", "MongoDB", "Vite", "JWT"],
      github: "https://github.com/bhipendar14/PAW-TO-GO",
      demo: "https://paw-to-go.vercel.app/",
      gradient: "from-[#6c5ce7] to-[#a55eea]"
    }
  ]

  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-gradient-to-b from-background to-background/80">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-[1]" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl -z-[1]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development, real-time systems, and scalable solutions.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`
                relative rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} p-[1px]
                transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full
              `}>
                <div className="relative h-full bg-background rounded-xl overflow-hidden">
                  {/* Project Content */}
                  <div className="flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-grow p-5 sm:p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} 
                                    bg-opacity-10 transform group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2.5 mb-6">
                        {project.description.map((desc, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-base"
                          >
                            <span className={`w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                            <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className={`text-xs sm:text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 
                                     hover:bg-opacity-20 transition-all duration-300 text-foreground`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-4">
                        {project.github && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            asChild
                            className="flex-1 group/button hover:border-primary/50"
                          >
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4 group-hover/button:rotate-12 transition-transform duration-300" />
                              Code
                            </Link>
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          asChild
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90`}
                        >
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

