import { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'

const useArticles = () => useContext(ArticlesContext)

export default useArticles
