import { DingdingOutlined, HomeOutlined } from '@ant-design/icons'
import { Spotify_data } from '@Context'
import AppTheme from '@Theme/AppTheme'
import { GenresType, MenuItem, TabOptions } from '@Types'
import { Menu } from 'antd'
import { last } from 'lodash'
import { useContext } from 'react'

const menuStyle = {
  width: 268,
  backgroundColor: AppTheme.colors.black,
  color: AppTheme.colors.white,
  left: 0,
  marginTop: AppTheme.margins.double,
  zIndex: 1,
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
  fontSize: AppTheme.fontSizes.text,
  fontWeight: AppTheme.fontWeights.medium
}

export default function NavMenu() {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem
  }

  const { genresList, setSelectedTab } = useContext(Spotify_data)

  const getGenresList = (genres: GenresType): MenuItem => {
    const genresList: MenuItem[] = []
    genres?.forEach((genre) => {
      genresList.push(getItem(genre, genre))
    })
    return getItem('Genres', 'genres', <DingdingOutlined />, genresList)
  }

  const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined />),
    getGenresList(genresList)
  ]

  const onMenuItemClick = (item: MenuItem) => {
    item?.key &&
      item?.keyPath &&
      setSelectedTab({
        tab: last(item.keyPath) as TabOptions,
        subTab: item.key as string
      })
  }

  return (
    <Menu
      style={menuStyle}
      theme="dark"
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['genres']}
      mode="inline"
      items={items}
      onClick={onMenuItemClick}
    />
  )
}
