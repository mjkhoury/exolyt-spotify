import { Spotify_data } from '@Context'
import styled from '@emotion/styled'
import { Modal } from 'antd'
import { useContext } from 'react'

import TrackModalContent from './TrackModalContent'

interface TrackModalProps {
  visible: boolean
  onCancel: () => void
}

const TrackModal = ({ visible, onCancel }: TrackModalProps) => {
  const { selectedTrack } = useContext(Spotify_data)
  return (
    <StyledModal
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={1000}
      destroyOnClose
    >
      <TrackModalContent track={selectedTrack} />
    </StyledModal>
  )
}

export default TrackModal

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${({ theme }) => theme.colors.transparentPrimary};
    border: 1px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.white};
  }
  .ant-modal-title {
    color: ${({ theme }) => theme.colors.primary};
    background: transparent !important;
  }
  .ant-modal-close-x {
    color: ${({ theme }) => theme.colors.white};
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`
