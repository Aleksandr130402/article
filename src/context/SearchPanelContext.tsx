import { FC, createContext, useState, ReactNode, ChangeEvent } from 'react'

type InitialStateProps = {
  searchValue: string
  searchButton: boolean
  handleSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSearchButton: (val: boolean) => void
}

const initialState = {
  searchValue: '',
  searchButton: false,
  handleSearchValue: () => {},
  handleSearchButton: () => {},
}

const SearchPanelContext = createContext<InitialStateProps>(initialState)

type SearchPanelProviderProps = {
  children: ReactNode
}

const SearchPanelProvider: FC<SearchPanelProviderProps> = ({ children }) => {
  const [search, setSearch] = useState({ value: '', button: false })

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, value: e.target.value })
  }

  const handleSearchButton = (value: boolean) => {
    if (search.value !== '') {
      setSearch({ ...search, button: value })
    }
  }

  return (
    <SearchPanelContext.Provider
      value={{
        searchValue: search.value,
        searchButton: search.button,
        handleSearchValue,
        handleSearchButton,
      }}
    >
      {children}
    </SearchPanelContext.Provider>
  )
}
export { SearchPanelProvider, SearchPanelContext }
