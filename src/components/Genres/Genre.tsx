import Track from '@Components/Track/Track'
import TrackModal from '@Components/Track/TrackModal'
import { Spotify_data } from '@Context'
import styled from '@emotion/styled'
import { useGenre } from '@Hooks/useGenre'
import { TrackType } from '@Types'
import { Divider, Spin } from 'antd'
import { useContext, useEffect } from 'react'

interface GenreProps {
  genre: string
}

const Genre = ({ genre }: GenreProps) => {
  const { genreTracks, isLoading, isError } = useGenre(genre)
  const { selectedTrack, setSelectedTrack, setErrorMessage } =
    useContext(Spotify_data)

  useEffect(() => {
    if (isError) {
      setErrorMessage({
        status: 404,
        message: 'Something went wrong. Please try again later.'
      })
    }
  }, [isError, setErrorMessage])

  const onModalClose = () => {
    setSelectedTrack({} as TrackType)
  }

  if (isLoading) return <StyledSpin size="large" />

  return (
    <>
      <TrackModal
        visible={selectedTrack?.name ? true : false}
        onCancel={onModalClose}
      />
      <TracksWrapper>
        {genreTracks.map((track: TrackType) => {
          if (!track?.name) return null
          return <Track key={track.id} track={track} />
        })}
        <Divider />
      </TracksWrapper>
    </>
  )
}

export default Genre

const TracksWrapper = styled.div`
  height: 80vh;
  padding-top: ${({ theme }) => theme.paddings.double};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 2rem;
`
const StyledSpin = styled(Spin)`
  margin-top: 2rem;
`
