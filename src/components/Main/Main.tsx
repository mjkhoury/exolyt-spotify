import { HEADER_HEIGHT } from '@Components/Header/Header'
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
  const { tab } = selectedTab

  return (
    <Layout.Content style={mainStyle}>
      {tab === 'genres' && 'GENRES'}
      {tab === 'home' && 'HOME'}
    </Layout.Content>
  )
}
