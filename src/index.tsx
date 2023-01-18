import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/style.scss'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { ArticlesProvider } from './context/ArticlesContext'
import { SearchPanelProvider } from './context/SearchPanelContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter><SearchPanelProvider>
      <ArticlesProvider>
        
          <App />
        
      </ArticlesProvider></SearchPanelProvider>
    </BrowserRouter>
  </React.StrictMode>
)
