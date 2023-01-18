import { Fragment, useEffect, useState } from 'react'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

import useArticles from '../../hooks/useArticles'
import useSearchPanel from '../../hooks/useSearchPanel'

import getSliceDescription from '../../utils/getSliceDescription'
import getDateFormatted from '../../utils/getDateFormatted'

import { CardStyled } from './HomePage.styles'

import { ButtonStyled } from '../../components/App/App.styles'
import SearchPanel from '../../components/SearchPanel'

import arrowRight from '../../assets/images/arrow-right.svg'

import './HomePage.scss'

const HomePage = () => {
  const { highlight, articles, getArticles, getArticlesByKeyword } =
    useArticles()
  const { searchValue, searchButton, handleSearchButton } = useSearchPanel()

  const getHighlitedText = (text: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return (
      <>
        {parts.map((part, id) => (
          <Fragment key={id}>
            {part.toLowerCase() === highlight.toLowerCase() ? (
              <span className="highlight">{part}</span>
            ) : (
              part
            )}
          </Fragment>
        ))}
      </>
    )
  }

  //получить статьи по ключевому слову
  useEffect(() => {
    if (searchButton) {
      getArticlesByKeyword(searchValue)
      handleSearchButton(false)
    }
  }, [searchButton])

  //если поиск пустой получить начальный список статей
  useEffect(() => {
    if (searchValue === '') {
      getArticles()
      handleSearchButton(false)
    }
  }, [searchValue])

  return (
    <div className="container">
      <header>
        <SearchPanel />
        <div className="results">
          Results: {articles.length > 0 ? articles.length : 0}
        </div>
      </header>
      <main className="articles">
        {articles ? (
          articles?.map((item) => (
            <CardStyled key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.imageUrl}
                title="arcticle poster"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {getDateFormatted(item.publishedAt)}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {(highlight && getHighlitedText(item.title)) || item.title}
                </Typography>
                <Typography
                  id="article-summary"
                  variant="body2"
                  color="text.secondary"
                >
                  {(highlight &&
                    getHighlitedText(getSliceDescription(item.summary))) ||
                    getSliceDescription(item.summary)}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonStyled size="small">
                  <Link to={`/article/${item.id}`}>
                    {'Read more'}
                    <img
                      className="arrow-right"
                      src={arrowRight}
                      alt="arrow right"
                    />
                  </Link>
                </ButtonStyled>
              </CardActions>
            </CardStyled>
          ))
        ) : (
          <h2>No item was found.</h2>
        )}
      </main>
    </div>
  )
}

export default HomePage
