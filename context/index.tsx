/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { GenresType, SelectedTabType } from '@Types'
import { createContext, useState } from 'react'

export const Spotify_data = createContext({
  genresList: [] as GenresType,
  setGenresList: (_genres: GenresType) => {},
  selectedTab: {
    tab: 'home',
    subTab: 'home'
  } as SelectedTabType,
  setSelectedTab: (_selectedTab: SelectedTabType) => {}
})

interface ContextProps {
  children: React.ReactNode
}

function Context({ children }: ContextProps) {
  const [genresList, setGenresList] = useState<GenresType>([])
  const [selectedTab, setSelectedTab] = useState<SelectedTabType>({
    tab: 'home',
    subTab: 'home'
  })

  return (
    <Spotify_data.Provider
      value={{
        genresList,
        setGenresList,
        selectedTab,
        setSelectedTab
      }}
    >
      {children}
    </Spotify_data.Provider>
  )
}

export default Context
