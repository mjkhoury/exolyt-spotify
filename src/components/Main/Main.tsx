import Genre from '@Components/Genres/Genre'
import { HEADER_HEIGHT } from '@Components/Header/Header'
import Home from '@Components/Home/Home'
import { Error } from '@Components/Reusable'
import { Spotify_data } from '@Context'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'
import { ResultStatusType } from 'antd/es/result'
import { useContext } from 'react'

const mainStyle: React.CSSProperties = {
  paddingInline: AppTheme.paddings.double,
  paddingTop: HEADER_HEIGHT + AppTheme.paddings.double
}

export default function Main() {
  const { selectedTab, errorMessage } = useContext(Spotify_data)
  const { tab, subTab: genre } = selectedTab

  if (errorMessage?.status) {
    return (
      <Error
        status={errorMessage.status as ResultStatusType}
        title={errorMessage.status}
        subTitle={errorMessage.message}
      />
    )
  }
  return (
    <Layout.Content style={mainStyle}>
      {tab === 'genres' && <Genre genre={genre} />}
      {tab === 'home' && <Home />}
    </Layout.Content>
  )
}
