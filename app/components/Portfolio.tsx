"use client"

import Image from "next/image"
import { ExternalLink, Github, Play, Camera, Youtube } from "lucide-react"
import type { Portfolio as PortfolioType } from "../../types"

interface PortfolioProps {
  portfolios: PortfolioType[]
}

export default function Portfolio({ portfolios }: PortfolioProps) {
  const items = portfolios || []

  return (
    <section id="portfolio" className="section py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Portfolio</span>
          </h2>

          {/* 作品グリッド */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="neumorphism p-6 group hover:shadow-2xl transition-all duration-500 stagger-card"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={item.image?.url || "/placeholder.svg"}
                    alt={item.title}
                    width={item.image?.width || 400}
                    height={item.image?.height || 300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          className="neumorphism-button p-3 text-white hover:text-blue-400 transition-colors"
                          aria-label="View Project"
                        >
                          {item.type === "映画制作" || item.type === "映像制作" ? (
                            <Play size={20} />
                          ) : item.type === "写真撮影" ? (
                            <Camera size={20} />
                          ) : (
                            <ExternalLink size={20} />
                          )}
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          className="neumorphism-button p-3 text-white hover:text-blue-400 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {item.youtubeUrl && (
                        <a
                          href={item.youtubeUrl}
                          className="neumorphism-button p-3 text-white hover:text-red-400 transition-colors"
                          aria-label="YouTube"
                        >
                          <Youtube size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* タイプバッジ */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-[0.6rem] md:text-xs font-medium">
                      {item.type}
                    </span>
                  </div>

                  {/* 年バッジ */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-[0.6rem] md:text-xs font-medium">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {(item.tags || []).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="neumorphism-small px-3 py-1 text-xs text-gray-600 font-medium hover:scale-105 hover:rotate-1 transition-transform duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* メッセージ */}
          <div className="mt-16 neumorphism p-8 text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">挑戦と成長を続けるクリエイターを目指して</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-xs md:text-base">
              ソフトウェア開発における<strong className="text-purple-600">技術的スキル</strong>を磨きながら、  
              セキュリティ分野でも知識を深めています。分野を問わず<strong className="text-blue-600">創造的な価値</strong>を提供することを目指し、  
              常に<strong className="text-green-600">新しいアイデアと技術</strong>を取り入れて、成長し続けています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
