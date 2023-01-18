import { createContext, FC, Fragment, ReactNode, useState } from 'react'
import { IArticle } from '../Article'
import ArticleService from '../utils/articleapi'
import getUniqueValues from '../utils/getUniqueValues'

type InitialStateProps = {
  articles: IArticle[]
  highlight: string
  getArticles: () => void
  getArticlesByKeyword: (keyword: string) => void
}

//все отображаемые статьи
const initialState = {
  articles: [],
  highlight: '',
  getArticles: () => {},
  getArticlesByKeyword: () => {},
}

const ArticlesContext = createContext<InitialStateProps>(initialState)

type ArticlesProviderProps = {
  children: ReactNode
}

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const articleService = new ArticleService()
  const [articles, setArticles] = useState<IArticle[]>([])
  const [highlight, setHighlight] = useState('')

  const getArticles = async () => {
    const data = await articleService.getArticles()
    setArticles(data)
  }

  const getArticlesByKeyword = async (keyword: string) => {
    const newArticlesByTitle = await articleService.getArticleTitleContains(
      keyword
    )
    const newArticlesByDescription =
      await articleService.getArticleDescriptionContains(keyword)
    const newArray = getUniqueValues(
      newArticlesByTitle.concat(newArticlesByDescription)
    )

    setArticles(newArray)
    setHighlight(keyword)
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        highlight,
        getArticles,
        getArticlesByKeyword,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}
export { ArticlesProvider, ArticlesContext }
