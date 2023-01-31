import { API_HEADERS, API_URL } from '@API/common'
import App from '@Components/App'
import styles from '@Styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
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
      fallback: false
    }
  }
}
