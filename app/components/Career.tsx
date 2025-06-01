"use client"

import type { Career as CareerType } from "../../types"

interface CareerProps {
  careers: CareerType[]
}

// 日付から期間を生成（資格取得などの単発イベント対応）
const formatPeriod = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate)
  const startYear = start.getFullYear()

  if (!endDate) {
    return `${startYear} - 現在`
  }

  const end = new Date(endDate)
  const endYear = end.getFullYear()

  // 開始日と終了日が同じ場合（資格取得など）は年のみ
  if (startDate === endDate) {
    return `${startYear}`
  }

  return `${startYear} - ${endYear}`
}

export default function Career({ careers }: CareerProps) {
  return (
    <section id="career" className="section py-12 md:py-20 px-4 bg-gray-50 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            <span className="gradient-text">Career</span>
          </h2>

          <div className="relative">
            {/* タイムライン */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-8 md:space-y-12">
              {careers.map((career, index) => (
                <div
                  key={career.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* タイムラインドット */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 neumorphism-small bg-white border-2 md:border-4 border-blue-500 rounded-full z-20 transform -translate-x-1/2 hover:scale-125 transition-transform duration-200"></div>

                  {/* コンテンツ */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "lg:pr-8 md:pr-12" : "lg:pl-8 md:pl-12"}`}
                  >
                    <div className="neumorphism p-4 md:p-6 hover:scale-105 hover:shadow-xl transition-transform duration-200 relative z-10">
                      <div className="text-blue-600 font-semibold mb-2 text-xs md:text-sm">
                        {formatPeriod(career.startDate, career.endDate)}
                      </div>
                      <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-gray-800">{career.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-base">{career.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
