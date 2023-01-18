import { useEffect, useState } from 'react'

import { IArticle } from '../../Article'

import { Typography } from '@mui/material'

import { Link, useParams } from 'react-router-dom'

import useArticles from '../../hooks/useArticles'

import { ButtonStyled } from '../../components/App/App.styles'
import { CardStyled } from './ArticlePage.styles'

import arrowLeft from '../../assets/images/arrow-left.svg'

import './ArticlePage.scss'


const ArticlePage = () => {
  const [currArticle, setCurrArticle] = useState<IArticle>({} as IArticle)
  const { articles } = useArticles()
  const { id } = useParams()

  useEffect(() => {
    //поиск необходимой статьи
    if (id) {
      const article = articles.find((item) => item.id == parseInt(id))
      //если есть статья с таким id - отобразить ее
      if (article) {
        setCurrArticle(article)
      }
    }
  }, [id])

  return (
    <div>
      {!!Object.keys(currArticle).length && (
        <>
          <header className="article-poster">
            <img src={currArticle.imageUrl} alt="article poster" />
          </header>
          <div className="container article-content">
            <CardStyled>
              <Typography
                sx={{ fontSize: 24 }}
                mb="50px"
                textAlign="center"
                variant="h5"
                component="div"
              >
                {currArticle.title}
              </Typography>
              <Typography sx={{ fontSize: 18 }} pb={0} variant="body2">
                {currArticle.summary}
              </Typography>
            </CardStyled>
            <ButtonStyled sx={{ marginTop: '35px' }} variant="text">
              <Link to="/">
                <img
                  className="article-back-icon"
                  src={arrowLeft}
                  alt="arrow right"
                />
                Back to homepage
              </Link>
            </ButtonStyled>
          </div>
        </>
      )}
    </div>
  )
}

export default ArticlePage
