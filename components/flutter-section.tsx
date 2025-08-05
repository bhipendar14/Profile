"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Flutter Development Certification",
    issuer: "Google Developers",
    date: "2024",
    description: "Comprehensive Flutter development certification covering mobile application development, UI/UX design, and cross-platform development.",
    image: "/net ninja.jpg",
    skills: ["Flutter", "Dart", "Mobile Development", "UI/UX", "Cross-platform"],
    link: "/net ninja.jpg"
  },
  {
    title: "Flutter & Dart Certification",
    issuer: "Udemy",
    date: "2024",
    description: "Complete Flutter framework fundamentals and Dart programming language certification.",
    image: "/certificate.pdf",
    skills: ["Flutter", "Dart", "State Management", "API Integration", "Firebase"],
    link: "/certificate.pdf"
  }
];

export default function FlutterSection() {
  return (
    <section id="flutter" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flutter Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in Flutter development and mobile application creation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  View Certificate
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 