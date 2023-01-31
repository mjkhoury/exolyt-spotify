/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { GenresType } from '@Types'
import { createContext, useState } from 'react'

export const Spotify_data = createContext({
  genresList: [] as GenresType,
  setGenresList: (_genres: GenresType) => {}
})

interface ContextProps {
  children: React.ReactNode
}

function Context({ children }: ContextProps) {
  const [genresList, setGenresList] = useState<GenresType>([])

  return (
    <Spotify_data.Provider
      value={{
        genresList,
        setGenresList
      }}
    >
      {children}
    </Spotify_data.Provider>
  )
}

export default Context
