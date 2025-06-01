import { createClient } from "microcms-js-sdk"

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required")
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required")
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// スキル取得
export const getSkills = async () => {
  try {
    const data = await client.get({
      endpoint: "skills",
      queries: {
        limit: 100,
      },
    })
    return data.contents
  } catch (error) {
    console.error("Failed to fetch skills:", error)
    return []
  }
}

// 作品取得
export const getWorks = async () => {
  try {
    const data = await client.get({
      endpoint: "works",
      queries: {
        limit: 50,
        orders: "-publishedAt",
      },
    })
    return data.contents
  } catch (error) {
    console.error("Failed to fetch works:", error)
    return []
  }
}

// キャリア取得
export const getCareers = async () => {
  try {
    const data = await client.get({
      endpoint: "careers",
      queries: {
        limit: 30,
        orders: "-startDate",
      },
    })
    return data.contents
  } catch (error) {
    console.error("Failed to fetch careers:", error)
    return []
  }
}
