export interface SkillCategory {
  id: string
  title: string
  icon: string[]
  color: string
  order: number
  skills: Skill[]
  publishedAt: string
  updatedAt: string
}

export interface Skill {
  fieldId: string
  name: string
  url: string
}

export interface Portfolio {
  id: string
  title: string
  type: string
  description: string
  image: {
    url: string
    width: number
    height: number
  }
  tags: string[]
  year: string
  demoUrl?: string
  githubUrl?: string
  youtubeUrl?: string
  publishedAt: string
  updatedAt: string
}

export interface Career {
  id: string
  title: string
  description: string
  startDate: string
  endDate?: string
  publishedAt: string
  updatedAt: string
}

// フロントエンド用のグループ化された型
export interface SkillCategory {
  title: string
  icon: string[]
  color: string
  skills: Skill[]
}
