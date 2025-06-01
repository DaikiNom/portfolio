"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Career from "./components/Career"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingElements from "./components/FloatingElements"
import LoadingScreen from "./components/LoadingScreen"
import type { SkillCategory, Portfolio as PortfolioType, Career as CareerType } from "../types"

interface PortfolioSiteClientProps {
  skills: SkillCategory[]
  portfolios: PortfolioType[]
  careers: CareerType[]
}

export default function PortfolioSiteClient({ skills, portfolios, careers }: PortfolioSiteClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 5秒後にローディング完了
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    gsap.registerPlugin(ScrollTrigger)

    // ページロードアニメーション（ローディング後）
    const tl = gsap.timeline({ delay: 0.5 })

    // セクションのスクロールアニメーション
    gsap.utils.toArray(".section").forEach((section: any, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // 個別要素のアニメーション
    gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 98%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // カードのステージングアニメーション
    gsap.utils.toArray(".stagger-card").forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          delay: index * 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 97%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // パララックス
    gsap.utils.toArray(".parallax").forEach((element: any) => {
      gsap.to(element, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isLoading])

  return (
    <>
      <LoadingScreen />
      <div ref={containerRef} className="min-h-screen relative overflow-hidden">
        <FloatingElements />
        <main>
          <About />
          <Skills skills={skills} />
          <Portfolio portfolios={portfolios} />
          <Career careers={careers} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
