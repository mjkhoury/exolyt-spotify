/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { GenresType, SelectedTabType, TrackType } from '@Types'
import { createContext, useState } from 'react'

export const Spotify_data = createContext({
  genresList: [] as GenresType,
  setGenresList: (_genres: GenresType) => {},
  selectedTab: {
    tab: 'home',
    subTab: 'home'
  } as SelectedTabType,
  setSelectedTab: (_selectedTab: SelectedTabType) => {},
  selectedTrack: {} as TrackType,
  setSelectedTrack: (_selectedTrack: TrackType) => {}
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
  const [selectedTrack, setSelectedTrack] = useState<TrackType>({} as TrackType)

  return (
    <Spotify_data.Provider
      value={{
        genresList,
        setGenresList,
        selectedTab,
        setSelectedTab,
        selectedTrack,
        setSelectedTrack
      }}
    >
      {children}
    </Spotify_data.Provider>
  )
}

export default Context
