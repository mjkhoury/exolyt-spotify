import { Spotify_data } from '@Context'
import styled from '@emotion/styled'
import { TrackType } from '@Types'
import { Card } from 'antd'
import Image from 'next/image'
import { useContext } from 'react'

interface TrackProps {
  track: TrackType
}

const Track = ({ track }: TrackProps) => {
  const { setSelectedTrack } = useContext(Spotify_data)

  const onTrackClick = (track: TrackType) => {
    setSelectedTrack(track)
  }

  if (!track) return null
  return (
    <StyledCard
      hoverable
      onClick={() => onTrackClick(track)}
      cover={
        <Image
          alt="example"
          width={135}
          height={150}
          src={
            track.album?.images?.[0]?.url ??
            '/../public/default_album_cover.jpeg'
          }
        />
      }
    >
      <Card.Meta title={track.name} description={track.artists?.[0]?.name} />
    </StyledCard>
  )
}

export default Track

const StyledCard = styled(Card)`
  width: 164px;
  padding: ${({ theme }) => theme.paddings.half}px;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  background: #181818;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.shadowGrey};
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadowGrey};
  }
  .ant-card-meta-title {
    color: ${({ theme }) => theme.colors.white};
  }
  .ant-card-meta-description {
    color: ${({ theme }) => theme.colors.shadowGrey};
  }
  .ant-card-body {
    padding-inline: 0;
    padding-block: ${({ theme }) => theme.paddings.base}px;
  }
  .ant-card-cover img {
    border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  }
`
