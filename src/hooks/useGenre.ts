import { API_URL } from '@API/common'
import { GenreType } from '@Types'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_OAUTH_TOKEN}`
      }
    })
    .then((res) => res.data)

export function useGenre(genre: GenreType) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/recommendations?seed_genres=${genre}&limit=50`,
    fetcher
  )

  return {
    genreTracks: data?.tracks ?? [],
    isLoading: isLoading,
    isError: error
  }
}
