import { useContext } from 'react'
import { SearchPanelContext } from '../context/SearchPanelContext'

const useSearchPanel = () => useContext(SearchPanelContext)

export default useSearchPanel
