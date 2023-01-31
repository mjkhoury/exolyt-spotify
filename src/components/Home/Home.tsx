import styled from '@emotion/styled'
import SpotifySVG from '@Static/SVG/SpotifySVG'
import { motion } from 'framer-motion'

const motionProps = (delay?: number) => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: delay || 0,
        type: 'easeInOut'
      }
    }
  }
})

export default function Home() {
  return (
    <Wrapper>
      <Title {...motionProps()}>Exolyt</Title>
      <motion.div {...motionProps(0.2)}>
        <RotatingSpotifySVG width={'300'} height={'auto'} />
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.margins.double};
  text-transform: uppercase;
  width: 500px;
  position: relative;
`
const Title = styled(motion.h1)`
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const RotatingSpotifySVG = styled(SpotifySVG)`
  opacity: 0;
  animation: rotate 15s linear infinite;
  opacity: 1;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
