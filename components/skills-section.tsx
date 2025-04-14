"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Cpu, Globe, Server, Layout, GitBranch, Cloud } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      items: ["React", "Vite", "Next.js", "Flutter", "TypeScript", "JavaScript", "Tailwind CSS"],
      gradient: "from-[#ff6b6b] to-[#ee5253]",
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: ["Node.js", "Express", "Python", "FastAPI"],
      gradient: "from-[#4834d4] to-[#686de0]",
    },
    {
      category: "AI & ML",
      icon: <Cpu className="w-5 h-5" />,
      items: ["TensorFlow", "PyTorch", "Google Collable", "OpenAI API"],
      gradient: "from-[#6c5ce7] to-[#a55eea]",
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: ["MongoDB", "PostgreSQL", "MySQL" , "SQLite", "Firebase"],
      gradient: "from-[#00b894] to-[#00cec9]",
    },
    {
      category: "DevOps",
      icon: <Cloud className="w-5 h-5" />,
      items: ["Docker", "AWS", "Render", "Vercel"],
      gradient: "from-[#0984e3] to-[#74b9ff]",
    },
    {
      category: "Version Control",
      icon: <GitBranch className="w-5 h-5" />,
      items: ["Git", "GitHub", "GitLab", "Code Reviews"],
      gradient: "from-[#e17055] to-[#fab1a0]",
    },
    {
      category: "Web Technologies",
      icon: <Globe className="w-5 h-5" />,
      items: ["REST API", "GraphQL", "WebSockets", "JWT"],
      gradient: "from-[#fdcb6e] to-[#ffeaa7]",
    },
    {
      category: "Programming",
      icon: <Code className="w-5 h-5" />,
      items: ["JavaScript", "TypeScript", "Python", "C", "Java", "C#"],
      gradient: "from-[#fd79a8] to-[#ff7675]",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I've developed expertise in various technologies across the full stack, with a special focus on AI
            integration and modern web development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={item}
              className="group relative overflow-hidden p-6 rounded-xl bg-card/50 border border-border/50 
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                       hover:border-primary/20 backdrop-blur-sm"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 
                            bg-gradient-to-br ${skill.gradient}`} 
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4 gap-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.gradient} 
                                bg-opacity-10 text-foreground group-hover:scale-110 
                                transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary 
                               transition-colors duration-300">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} 
                        className="flex items-center gap-2.5 transform transition-transform duration-200 
                                 hover:translate-x-1">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.gradient}`} />
                      <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground 
                                   transition-colors duration-200">
                        {item}
                      </span>
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

