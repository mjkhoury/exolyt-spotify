import { API_HEADERS, API_URL } from '@API/common'
import App from '@Components/App'
import { Spotify_data } from '@Context'
import styles from '@Styles/Home.module.css'
import { ErrorType, GenresType } from '@Types'
import Head from 'next/head'
import { useContext, useEffect } from 'react'

interface HomeProps {
  genresList: GenresType
  error: ErrorType
}

export default function Home({ genresList, error }: HomeProps) {
  const { setGenresList, setErrorMessage } = useContext(Spotify_data)

  useEffect(() => {
    setGenresList(genresList)
  }, [genresList, setGenresList])

  useEffect(() => {
    if (error) {
      setErrorMessage({
        status: 403,
        message: error.message
      })
    }
  }, [error, setErrorMessage])

  return (
    <>
      <Head>
        <title>Exolyt Spotify</title>
        <meta name="description" content="Exolyt Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <App />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const genresData = await fetch(
    `${API_URL}/recommendations/available-genre-seeds`,
    {
      headers: API_HEADERS
    }
  ).then((response) => response.json())

  return {
    props: {
      genresList: genresData?.genres ?? [],
      fallback: false,
      error: genresData?.error ?? null
    }
  }
}
