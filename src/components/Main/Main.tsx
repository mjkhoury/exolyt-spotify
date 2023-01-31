import Genre from '@Components/Genres/Genre'
import { HEADER_HEIGHT } from '@Components/Header/Header'
import Home from '@Components/Home/Home'
import { Spotify_data } from '@Context'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'
import { useContext } from 'react'

const mainStyle: React.CSSProperties = {
  paddingInline: AppTheme.paddings.double,
  paddingTop: HEADER_HEIGHT + AppTheme.paddings.double
}

export default function Main() {
  const { selectedTab } = useContext(Spotify_data)
  const { tab, subTab: genre } = selectedTab

  return (
    <Layout.Content style={mainStyle}>
      {tab === 'genres' && <Genre genre={genre} />}
      {tab === 'home' && <Home />}
    </Layout.Content>
  )
}
