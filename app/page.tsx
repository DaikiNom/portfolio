import PortfolioSiteClient from "./PortfolioSiteClient"
import { getSkills, getWorks, getCareers } from "../lib/microcms"
import { SkillCategory, Portfolio as PortfolioType, Career as CareerType } from "../types"

// SSG用のgetStaticProps相当
export async function generateStaticParams() {
  return {}
}

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