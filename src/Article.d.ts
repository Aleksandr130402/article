interface ILaunches {
  id: string
  provider: string
}

interface IEvents {
  id: string
  provider: string
}

export interface IArticle {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: ILaunches[]
  events: IEvents[]
}
