import { ResultStatusType } from 'antd/es/result'

export type GenreType = string

export type GenresType = GenreType[]

export type TabOptions = 'home' | 'genres'

export type MenuItem = {
  key: React.Key
  keyPath?: React.Key[]
}

export type SelectedTabType = {
  tab: TabOptions
  subTab: string
}

export type TrackType = {
  id: string
  name: string
  artists: ArtistType[]
  album: AlbumType
  duration_ms: number
  explicit: boolean
  preview_url: string
  uri: string
  popularity: number
  disc_number: number
  track_number: number
  is_local: boolean
  available_markets: string[]
  external_urls: {
    spotify: string
  }
}

export type TracksType = TrackType[]

export type ArtistType = {
  id: string
  name: string
  uri: string
}

export type ArtistsType = ArtistType[]

export type AlbumType = {
  id: string
  name: string
  images: ImageType[]
  uri: string
  release_date: string
}

export type ImageType = {
  height: number
  width: number
  url: string
}

export type ErrorType = {
  status: ResultStatusType
  message: string
}
