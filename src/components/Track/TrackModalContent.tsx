import styled from '@emotion/styled'
import AppTheme from '@Theme/AppTheme'
import { TrackType } from '@Types'
import { Divider } from 'antd'
import Image from 'next/image'

const albumCoverImageStyle: React.CSSProperties = {
  borderRadius: AppTheme.borderRadius.large
}

interface TrackModalContentProps {
  track: TrackType
}

export default function TrackModalContent({ track }: TrackModalContentProps) {
  const { album, artists } = track
  const albumName = album?.name ?? ''
  return (
    <Wrapper>
      <RightSideDiv>
        <Image
          width={450}
          height={450}
          style={albumCoverImageStyle}
          alt={`${albumName} Album cover`}
          src={album?.images?.[0]?.url ?? '/../public/default_album_cover.jpeg'}
        />
        <iframe
          src={`https://open.spotify.com/embed/track/${track.id}`}
          width="450"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
        />
      </RightSideDiv>
      <LeftSideDiv>
        <p>
          <span className="secondary">Name: </span>
          {artists.map((artist) => artist.name).join(', ')}
        </p>
        <p>
          <span className="secondary">Album: </span>
          {album?.name}
        </p>
        <Divider style={{ background: 'white' }} />
        <p>
          <span className="secondary">Release Date: </span>
          {album?.release_date}
        </p>
        <p>
          <span className="secondary">Popularity: </span>
          {track.popularity}
        </p>
        <p>
          <span className="secondary">Duration: </span>
          {track.duration_ms}
        </p>
        <p>
          <span className="secondary">Explicit: </span>
          {track.explicit ? 'Yes' : 'No'}
        </p>
        <p>
          <span className="secondary">Track Number: </span>
          {track.track_number}
        </p>
        <p>
          <span className="secondary">Disc Number: </span>
          {track.disc_number}
        </p>
        {/* <p>
          <span className="secondary">Available Markets: </span>
          {track.available_markets.join(', ')}
        </p> */}
      </LeftSideDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  p {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    .secondary {
      color: ${({ theme }) => theme.colors.shadowGrey};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
  }
`
const LeftSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.paddings.base}px;
  flex: 1;
  gap: ${({ theme }) => theme.margins.half}px;
`

const RightSideDiv = styled.div`
  flex: 1;
`
