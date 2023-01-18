import { useEffect } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import ArticlePage from '../../pages/ArticlePage'
import useArticles from '../../hooks/useArticles'

import './App.scss'
import useSearchPanel from '../../hooks/useSearchPanel'

function App() {
  const { pathname } = useLocation()
  const { getArticles } = useArticles()

  useEffect(() => {
    getArticles()
  }, [])
  //при каждом роуте перемещать скрол вверх страницы
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Route>
    </Routes>
  )
}

export default App
