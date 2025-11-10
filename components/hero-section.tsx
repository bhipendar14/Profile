"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const { theme } = useTheme()
  const isNeon = theme === "neon"

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {isNeon && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ff] opacity-20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f0f] opacity-20 rounded-full blur-[100px]" />
        </div>
      )}

      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-sm font-medium ${isNeon ? "text-[#0ff]" : "text-primary"}`}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold ${
              isNeon ? "text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]" : ""
            }`}
          >
            Bhipendar Kumar
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`text-2xl md:text-3xl font-semibold ${
              isNeon ? "text-[#f0f] drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]" : "text-muted-foreground"
            }`}
          >
            AI Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-muted-foreground max-w-md"
          >
            I build intelligent web applications that leverage cutting-edge AI technologies. Specializing in creating
            seamless user experiences with modern frameworks and machine learning integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex space-x-4"
          >
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex space-x-4 pt-4"
          >
            <Link href="https://github.com/bhipendar14" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className={isNeon ? "hover:text-[#0ff] hover:shadow-[0_0_10px_rgba(0,255,255,0.7)]" : ""}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/bhipendar-kumar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className={isNeon ? "hover:text-[#0ff] hover:shadow-[0_0_10px_rgba(0,255,255,0.7)]" : ""}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center"
        >
          <div
            className={`relative rounded-full overflow-hidden border-4 ${
              isNeon ? "border-[#0ff] shadow-[0_0_20px_rgba(0,255,255,0.5)]" : "border-primary"
            }`}
          >
            <Image
              src="/profile.png"
              alt="Alex Johnson"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className={`h-6 w-6 ${isNeon ? "text-[#0ff]" : ""}`} />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  )
}

