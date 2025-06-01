"use client"

import { Code, Server, Shield, Database, Wrench, Palette, Film, Zap, ExternalLink } from "lucide-react"
import type { SkillCategory } from "../../types"

interface SkillsProps {
  skills: SkillCategory[]
}

export default function Skills({ skills }: SkillsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-5 h-5 md:w-6 md:h-6" />
      case "palette":
        return <Palette className="w-5 h-5 md:w-6 md:h-6" />
      case "film":
        return <Film className="w-5 h-5 md:w-6 md:h-6" />
      case "zap":
        return <Zap className="w-5 h-5 md:w-6 md:h-6" />
      case "server":
        return <Server className="w-5 h-5 md:w-6 md:h-6" />
      case "shield":
        return <Shield className="w-5 h-5 md:w-6 md:h-6" />
      case "database":
        return <Database className="w-5 h-5 md:w-6 md:h-6" />
      case "wrench":
        return <Wrench className="w-5 h-5 md:w-6 md:h-6" />
      
      default:
        return <Code className="w-5 h-5 md:w-6 md:h-6" />
    }
  }

  return (
    <section id="skills" className="section py-12 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((category) => (
              <div key={category.id} className="neumorphism p-6 md:p-8 transition-all duration-300 stagger-card">
                {/* カテゴリヘッダー */}
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="neumorphism-small p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <div className={`bg-gradient-to-r ${category.color} p-2 rounded-full text-white animate-spin-slow`}>
                      {getIcon(category.icon[0])}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* スキルタグ */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {category.skills.map((skill, index) =>
                    skill.url ? (
                      <a
                        key={`${category.id}-${index}`}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neumorphism-small p-2 md:p-3 text-center transition-all duration-200 hover:shadow-md group clickable hover:scale-105 hover:rotate-1"
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-xs md:text-sm font-medium text-gray-700">{skill.name}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    ) : (
                      <div
                        key={`${category.id}-${index}`}
                        className="neumorphism-small p-2 md:p-3 text-center transition-all duration-200 hover:shadow-md group clickable hover:scale-105 hover:rotate-1"
                      >
                        <span className="text-xs md:text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
