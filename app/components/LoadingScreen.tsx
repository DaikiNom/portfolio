"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const opacityRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // スクロールを無効化
    document.body.style.overflow = "hidden"

    // GSAPタイムラインを作成
    const tl = gsap.timeline({
      onComplete: () => {
        // アニメーション完了後1秒待機してからフェードアウト
        setTimeout(() => {
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                setIsVisible(false)
                document.body.style.overflow = "auto"
              },
            })
          }
        }, 1000)
      },
    })

    // 初期表示のフェードイン
    gsap.to(opacityRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })

    // SVGパスアニメーション
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path")

      if (paths.length > 0) {

        paths.forEach((path) => {
          // パスの長さを取得
          const pathLength = path.getTotalLength()

          // パスの初期設定
          path.style.strokeDasharray = pathLength.toString()
          path.style.strokeDashoffset = pathLength.toString()
          path.style.stroke = "url(#brushGradient)"
          path.style.strokeWidth = "5"
          path.style.fill = "none"
          path.style.strokeLinecap = "round"
          path.style.strokeLinejoin = "round"
        })

        // 筆文字描画アニメーション
        tl.to(paths, {
          strokeDashoffset: 0,
          duration: 4,
          ease: "power2.inOut",
          stagger: 0.1,
        })
          .to(
            ".loading-bg",
            {
              scale: 1.1,
              duration: 4,
              ease: "power1.inOut",
            },
            0,
          )
          .from(
            ".loading-subtitle",
            {
              opacity: 0,
              y: 30,
              duration: 1,
              ease: "power2.out",
            },
            3,
          )
      }
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center loading-bg"
      style={{
        background: "linear-gradient(135deg, #e0e5ec 0%, #f5f7fa 100%)",
      }}
    >
      <div className="opacity-0" ref={opacityRef}>
        <div className="text-center">
          {/* SVGパスアニメーション */}
          <div className="mx-auto mb-8" style={{ maxWidth: "90vw", maxHeight: "200px" }}>
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1901.22 230.62"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.15))",
                maxWidth: "500px",
                maxHeight: "150px",
              }}
            >
              <defs>
                <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="50%" stopColor="#764ba2" />
                  <stop offset="100%" stopColor="#667eea" />
                </linearGradient>
                </defs>
                <path d="M79.12,225H0V0h79.12c90,0,127.88,50.62,127.88,112.5s-37.88,112.5-127.88,112.5ZM76.88,36.75h-31.12v151.5h31.12c61.5,0,83.25-30.75,83.25-75.75s-21.75-75.75-83.25-75.75Z"/>
                <path d="M285,92.25c16.12,0,35.25,6,46.12,21.75l1.12-16.88h39v127.88h-39l-1.12-16.88c-10.88,15.75-30,21.75-46.12,21.75-34.12,0-60.75-27.75-60.75-69s26.62-68.62,60.75-68.62ZM298.5,199.12c16.12,0,32.25-12.38,32.25-38.25s-16.12-37.88-32.25-37.88-32.25,13.12-32.25,37.88,15.38,38.25,32.25,38.25Z"/>
                <path d="M418.87,58.5V18.75h42v39.75h-42ZM418.87,225v-127.88h42v127.88h-42Z"/>
                <path d="M598.49,225l-48-66v66h-42V0h42v151.88l48-54.75h45l-51.75,57,54.38,70.88h-47.62Z"/>
                <path d="M676.49,58.5V18.75h42v39.75h-42ZM676.49,225v-127.88h42v127.88h-42Z"/>
                <path d="M992.24,225l-117.75-148.5v148.5h-40.88V0h31.88l117.75,148.5V0h40.88v225h-31.88Z"/>
                <path d="M1126.48,230.62c-42,0-75.38-30-75.38-69.75s33.38-69.38,75.38-69.38,75.38,29.62,75.38,69.38-33.75,69.75-75.38,69.75ZM1126.48,122.62c-19.88,0-33.38,15-33.38,38.25s13.5,38.62,33.38,38.62,33.38-15,33.38-38.62-13.12-38.25-33.38-38.25Z"/>
                <path d="M1406.23,225v-71.62c0-18.75-5.62-27.75-20.25-27.75s-28.12,12.38-28.12,31.12v68.25h-42v-71.62c0-18.75-5.25-27.75-20.25-27.75s-27.75,12.38-27.75,31.12v68.25h-42v-127.88h38.25l2.25,22.12c7.88-16.12,27.38-27,45.75-27,24.75,0,37.5,11.25,42.75,29.25,8.25-16.12,25.88-29.25,47.62-29.25,34.5,0,45.75,24,45.75,55.88v76.88h-42Z"/>
                <path d="M1521.72,97.12v70.12c0,20.62,7.5,29.25,22.5,29.25s30.75-14.25,30.75-31.12v-68.25h42v127.88h-38.25l-2.25-22.5c-7.88,16.12-30,27.38-48.38,27.38-34.5,0-48.38-24-48.38-55.88v-76.88h42Z"/>
                <path d="M1693.84,159v66h-42v-127.88h38.25l2.25,22.88c8.25-15.38,25.12-27.75,46.88-27.75v40.5c-22.88-6.75-45.38,4.5-45.38,26.25Z"/>
                <path d="M1814.97,92.25c16.12,0,35.25,6,46.12,21.75l1.12-16.88h39v127.88h-39l-1.12-16.88c-10.88,15.75-30,21.75-46.12,21.75-34.12,0-60.75-27.75-60.75-69s26.62-68.62,60.75-68.62ZM1828.47,199.12c16.12,0,32.25-12.38,32.25-38.25s-16.12-37.88-32.25-37.88-32.25,13.12-32.25,37.88,15.38,38.25,32.25,38.25Z"/>
              </svg>
          </div>

          {/* サブタイトル */}
          <p className="loading-subtitle text-gray-600 text-base md:text-xl font-light tracking-wider">
            Shaping Tomorrow’s Connected World
          </p>
        </div>
      </div>
    </div>
  )
}
