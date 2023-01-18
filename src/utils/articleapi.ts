export default class ArticleService {
  _apiBase = 'https://api.spaceflightnewsapi.net/v3'

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
  }

  getArticles = async () => {
    const res = await this.getResource('/articles/')
    return res
  }

  getArticleTitleContains = async (value: string) => {
    const res = await this.getResource(`/articles?title_contains=${value}`)
    return res
  }

  getArticleDescriptionContains = async (value: string) => {
    const res = await this.getResource(`/articles?summary_contains=${value}`)
    return res
  }
}
