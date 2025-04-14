"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const { theme } = useTheme()
  const isNeon = theme === "neon"

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com/bhipendar14", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://www.linkedin.com/in/bhipendar-kumar", 
      label: "LinkedIn" 
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://x.com/Bhipendar?t=qteP4M5BvI-NEvRyd6pVyQ&s=09", 
      label: "Twitter" 
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: "https://www.instagram.com/_bhipendar/", 
      label: "Instagram" 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: "mailto:bhipendarkumar31@gmail.com", 
      label: "Email" 
    },
  ]

  return (
    <footer className={`py-12 border-t ${isNeon ? "border-[#0ff]/20" : "border-border"}`}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className={`text-2xl font-bold ${isNeon ? "text-[#0ff]" : "text-primary"}`}>
              Bhipendar Kumar
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Full Stack Developer & Flutter Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  isNeon
                    ? "hover:bg-[#0ff]/10 text-muted-foreground hover:text-[#0ff] hover:scale-110"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-110"
                }`}
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bhipendar Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

