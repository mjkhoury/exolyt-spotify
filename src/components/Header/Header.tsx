import { Title } from '@Components/Reusable'
import { Spotify_data } from '@Context'
import COLORS from '@Static/colors'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'
import { useContext } from 'react'

export const HEADER_HEIGHT = 78

const headerStyle: React.CSSProperties = {
  color: COLORS.white,
  height: HEADER_HEIGHT,
  paddingInline: AppTheme.paddings.double,
  backgroundColor: AppTheme.colors.transparentPrimary,
  paddingBlock: AppTheme.paddings.base,
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1
}

export default function Header() {
  const { selectedTab } = useContext(Spotify_data)
  const { tab, subTab: genre } = selectedTab

  if (tab !== 'genres') return null

  return (
    <Layout.Header style={headerStyle}>
      <Title uppercase>
        <span className="secondary">{genre}</span> Genre
      </Title>
    </Layout.Header>
  )
}
