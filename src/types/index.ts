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
