import PortfolioSiteClient from "./PortfolioSiteClient"
import { getSkills, getWorks, getCareers } from "../lib/microcms"

export const dynamic = "force-static"

// データ取得
export async function getStaticData() {
  const [skills, portfolios, careers] = await Promise.all([
    getSkills(),
    getWorks(), // getPortfolios から getWorks に変更
    getCareers(),
  ])

  return {
    skills,
    portfolios,
    careers,
  }
}

export default async function PortfolioSite() {
  const data = await getStaticData()

  return <PortfolioSiteClient {...data} />
}