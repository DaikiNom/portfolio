"use client"
import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const email = String.fromCharCode(99,111,110,116,97,99,116,64,100,97,105,107,105,110,111,109,117,114,97,46,116,101,99,104);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Contact</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 連絡先情報 */}
            <div className="space-y-8">
              <div className="neumorphism p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">お気軽にお問い合わせください</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-8 leading-relaxed">
                  プロジェクトのご相談や技術的なお問い合わせなど、 どんなことでもお気軽にご連絡ください。
                  24時間以内にお返事いたします。
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: email},
                    { icon: MapPin, label: "Location", value: "Chiba, Japan" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="neumorphism-small p-3">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{label}</div>
                        <div className="text-xs md:text-sm text-gray-600">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* お問い合わせフォーム */}
            <div className="neumorphism p-8">
              
              <form className="space-y-6" action="https://formsubmit.co/6e27fbceea12469da132995af3aa4a96" method="POST">
                { /* FormSubmit関連 */}
                <input type="text" name="_honey" className="invisible"></input>
                <input type="hidden" name="_template" value="box"></input>
                <input type="hidden" name="_autoresponse" value="お問い合わせは正常に処理されました。近日中にお返事を差し上げますので、少々お待ちください。"></input>

                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm text-gray-700 font-medium mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full neumorphism-inset p-4 text-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg transition-transform duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm text-gray-700 font-medium mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full neumorphism-inset p-4 text-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm text-gray-700 font-medium mb-2">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full neumorphism-inset p-4 text-gray-700 focus:ring-2 focus:ring-blue-500 rounded-lg resize-none transition-transform duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full neumorphism-button p-4 text-gray-700 text-sm md: text-base font-medium hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-3 transition-transform duration-200"
                >
                  <Send size={20} />
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
