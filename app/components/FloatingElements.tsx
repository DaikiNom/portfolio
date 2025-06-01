"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createFloatingElement = (size: number, delay: number) => {
      const element = document.createElement("div")
      element.className = "floating-element absolute rounded-full opacity-15"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.background = "linear-gradient(45deg, #667eea, #764ba2)"
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`

      container.appendChild(element)

      gsap.to(element, {
        y: "random(-200, 200)",
        x: "random(-200, 200)",
        rotation: 360,
        duration: "random(8, 15)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      })

      gsap.to(element, {
        scale: "random(0.3, 2)",
        duration: "random(3, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      })

      gsap.to(element, {
        rotation: "+=360",
        duration: "random(20, 40)",
        repeat: -1,
        ease: "none",
        delay: delay,
      })

      return element
    }

    // フローティング要素
    const elements: HTMLElement[] = []
    for (let i = 0; i < 13; i++) {
      const size = Math.random() * 80 + 20
      const delay = Math.random() * 8
      elements.push(createFloatingElement(size, delay))
    }

    return () => {
      elements.forEach((element) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
}
