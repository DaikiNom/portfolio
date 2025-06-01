"use client"

import { Github, Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // メールアドレスを難読化
  const email = String.fromCharCode(99,111,110,116,97,99,116,64,100,97,105,107,105,110,111,109,117,114,97,46,116,101,99,104);;
  const encodedEmail = `mailto:${email}`;

  // ソーシャルリンク
  const socialLinks = [
    { icon: Github, href: "https://github.com/DaikiNom", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/DaikiNom", label: "Instagram" },
    { icon: Mail, href: encodedEmail, label: "Email" },
  ]

  return (
    <footer className="py-12 px-4 bg-gray-50 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="neumorphism p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* ロゴ・名前 */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">Daiki Nomura</h3>
              <p className="text-gray-600 text-sm md:text-base">Software Developer</p>
            </div>

            {/* ソーシャルリンク*/}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 neumorphism-button flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1 flex-wrap justify-center">
                <span>Copyright © 2022 - {currentYear} Daiki Nomura.</span>
                <span className="inline-flex items-center gap-1">
                  <span>Made with</span>
                  <Heart size={14} className="text-red-500 inline-block" fill="currentColor" />
                  <span>in Japan.</span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
