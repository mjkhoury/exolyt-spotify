import styled from '@emotion/styled'
import AppTheme from '@Theme/AppTheme'
import { TrackType } from '@Types'
import { Divider } from 'antd'
import Image from 'next/image'

import { trackData } from './Utils'

const albumCoverImageStyle: React.CSSProperties = {
  borderRadius: AppTheme.borderRadius.large
}

interface TrackModalContentProps {
  track: TrackType
}

export default function TrackModalContent({ track }: TrackModalContentProps) {
  const albumName = track?.album?.name ?? ''
  return (
    <Wrapper>
      <LeftSideDiv>
        <Image
          width={450}
          height={450}
          style={albumCoverImageStyle}
          alt={`${albumName} Album cover`}
          src={
            track?.album?.images?.[0]?.url ??
            '/../public/default_album_cover.jpeg'
          }
        />
        <iframe
          src={`https://open.spotify.com/embed/track/${track.id}`}
          width="450"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
        />
      </LeftSideDiv>
      <RightSideDiv>
        {trackData(track).map((data) => {
          if (!data.value) return null
          return (
            <>
              <Flex key={data.label}>
                <Title>
                  <span>{data.icon}</span> {data.label}
                </Title>
                <Info>{data.value}</Info>
              </Flex>
              {data.label === 'Album' && <StyledDivider />}
            </>
          )
        })}
      </RightSideDiv>
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
const RightSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.paddings.base}px;
  flex: 1;
  gap: ${({ theme }) => theme.margins.half}px;
`

const LeftSideDiv = styled.div`
  flex: 1;
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.margins.half}px;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.shadowGrey};
  > span {
    margin-right: ${({ theme }) => theme.margins.half}px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  > a {
    text-decoration: underline;
  }
`
const StyledDivider = styled(Divider)`
  margin: ${({ theme }) => theme.margins.base}px 0;
  border-color: ${({ theme }) => theme.colors.shadowGrey};
`
