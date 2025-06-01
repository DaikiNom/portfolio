"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Instagram, Mail } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // メールアドレスを難読化
  const email = String.fromCharCode(99,111,110,116,97,99,116,64,100,97,105,107,105,110,111,109,117,114,97,46,116,101,99,104);
  const encodedEmail = `mailto:${email}`;

  // ソーシャルリンク
  const socialLinks = [
    { icon: Github, href: "https://github.com/DaikiNom", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/DaikiNom", label: "Instagram" },
    { icon: Mail, href: encodedEmail, label: "Email" },
  ]

  return (
    <section className="h-dvh flex items-center justify-center px-3 md:px-4 py-4 md:py-8 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl h-full flex items-center">
        <div
          className={`hero-content flex flex-col lg:flex-row items-center gap-6 lg:gap-16 transition-all duration-1000 w-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* プロフィール画像 */}
          <div className="flex-1 flex justify-center">
            <div className="relative hero-profile-image">
              <div
                className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 neumorphism p-3 md:p-4 lg:p-5 flex items-center justify-center group hover:shadow-2xl transition-shadow duration-500">
                <div className="w-full h-full rounded-full overflow-hidden neumorphism-inset group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/profile.jpg?height=400&width=400"
                    alt="Daiki Nomura"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 lg:-top-3 lg:-right-3 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 neumorphism-small parallax"></div>
              <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 lg:-bottom-3 lg:-left-3 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 neumorphism-small parallax"></div>
            </div>
          </div>

          {/* テキスト */}
          <div className="flex-1 text-center lg:text-left hero-text">
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3">
                  <span className="gradient-text">Daiki</span>
                  <br />
                  <span className="text-gray-700">Nomura</span>
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 font-medium">Software Developer</p>
              </div>

              <div className="neumorphism p-3 md:p-4 lg:p-6">
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base mb-2 md:mb-3">
                2006年生まれ。
                システムエンジニアである父の影響から、幼少期より情報技術に強い関心を持つ。
                中学時代にはITインフラにも関心を持ち、自宅にサーバーを設置するなど、システム設計や運用に関する知識を深める。
                高校時代には、スクールバスの位置情報を共有するアプリ「N-BOIS」を開発し、プロジェクト管理やUI設計などの実践的なスキルを習得。
                </p>
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base mb-2 md:mb-3">
                現在は、セキュリティ分野に特化した技術の向上を目指して日々努力を重ねている。
                </p>
              </div>

              {/* ソーシャルリンク */}
              <div className="flex justify-center lg:justify-start gap-2 md:gap-3 social-links">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 neumorphism-button flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon
                      size={16}
                      className="md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
