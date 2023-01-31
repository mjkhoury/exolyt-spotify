/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ErrorType, GenresType, SelectedTabType, TrackType } from '@Types'
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
  setSelectedTrack: (_selectedTrack: TrackType) => {},
  errorMessage: {} as ErrorType,
  setErrorMessage: (_errorMessage: ErrorType) => {}
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
  const [errorMessage, setErrorMessage] = useState<ErrorType>({} as ErrorType)

  return (
    <Spotify_data.Provider
      value={{
        genresList,
        setGenresList,
        selectedTab,
        setSelectedTab,
        selectedTrack,
        setSelectedTrack,
        errorMessage,
        setErrorMessage
      }}
    >
      {children}
    </Spotify_data.Provider>
  )
}

export default Context
