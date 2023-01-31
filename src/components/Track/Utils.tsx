import styled from '@emotion/styled'
import { TrackType } from '@Types'
import { Badge, Button, Tooltip } from 'antd'
import ReactCountryFlag from 'react-country-flag'
import {
  FaCalendar,
  FaClock,
  FaExclamation,
  FaGlobe,
  FaLink,
  FaMusic,
  FaRecordVinyl,
  FaStar,
  FaUser
} from 'react-icons/fa'

export const trackData = (track: TrackType) => [
  {
    label: 'Name',
    value: track.name,
    icon: <FaMusic />
  },
  {
    label: 'Album',
    value: track.album?.name,
    icon: <FaRecordVinyl />
  },
  {
    label: 'Release Date',
    value: track.album?.release_date,
    icon: <FaCalendar />
  },
  {
    label: 'Popularity',
    value: track.popularity,
    icon: <FaStar />
  },
  {
    label: 'Duration',
    value: track.duration_ms,
    icon: <FaClock />
  },
  {
    label: 'Explicit',
    value: track.explicit,
    icon: <FaExclamation />
  },

  {
    label: 'Artists',
    value: track.artists.map((artist) => artist.name).join(', '),
    icon: <FaUser />
  },
  {
    label: 'Link',
    value: (
      <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
        Spotify
      </a>
    ),
    icon: <FaLink />
  },
  {
    value: track.available_markets.length ? (
      <Tooltip
        overlayStyle={{ maxWidth: '500px' }}
        placement="top"
        title={
          <ToolTipInner>
            {track.available_markets.length > 0
              ? track.available_markets.map((market) => (
                  <ReactCountryFlag
                    key={market}
                    countryCode={market}
                    style={{
                      fontSize: '2em',
                      lineHeight: '2em'
                    }}
                  />
                ))
              : 'No markets available'}
          </ToolTipInner>
        }
      >
        <Badge count={track.available_markets.length}>
          <Button>Available markets</Button>
        </Badge>
      </Tooltip>
    ) : null,
    icon: <FaGlobe />
  }
]

const ToolTipInner = styled.div`
  padding: ${({ theme }) => theme.paddings.half}px;
  width: 500px;
`
