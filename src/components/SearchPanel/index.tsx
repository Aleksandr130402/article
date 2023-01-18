import { FormEvent } from 'react'

import { InputAdornment, TextField } from '@mui/material'

import useSearchPanel from '../../hooks/useSearchPanel'

import searchIcon from '../../assets/images/search-icon.svg'

import './SearchPanel.scss'

const SearchPanel = () => {
  const { searchValue, handleSearchValue, handleSearchButton } =
    useSearchPanel()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearchButton(true)
    console.log('pressed')
  }

  return (
    <div className="search-panel">
      <h2>Filter by keywords</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleSearchValue}
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  className="search-icon"
                  src={searchIcon}
                  alt="search icon"
                  onClick={() => handleSearchButton(true)}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </form>
    </div>
  )
}

export default SearchPanel
