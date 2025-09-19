"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

const coreSkills = [
  { name: "Community Engagement", icon: "👥" },
  // { name: "Social Media Management", icon: "📱" },
  { name: "Content Creation & Strategy", icon: "✍️" },
  { name: "Blockchain & Cryptocurrency", icon: "⛓️" },
  // { name: "Event Planning & Management", icon: "🎯" },
  { name: "Public Speaking", icon: "🎤" },
  { name: "Project Management", icon: "📊" },
  { name: "Analytical Thinking", icon: "🧠" },
]

const additionalSkills = [
  "Team Collaboration",
  "Graphic Design",
  "Basic Coding",
  "Data Analysis",
  "Cryptocurrency Trading",
  "Web Development",
  "Content Designing",
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/20 dark:to-gray-900/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-section text-foreground">Skills & Expertise</h2>
          <p className="text-description-primary">
            Comprehensive skill set developed through years of community leadership and Web3 innovation
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="heading-subsection text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h4 className="heading-card text-foreground text-center">{skill.name}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center animate-on-scroll">
          <h3 className="heading-subsection text-foreground mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
