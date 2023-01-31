import SpotifyTextSVG from '@Static/SVG/SpotifyTextSVG'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'
import { motion } from 'framer-motion'

import NavMenu from './NavMenu'

const LOGO_WIDTH = 130
export const ASIDE_WIDTH = 300

const asideStyle: React.CSSProperties = {
  color: AppTheme.colors.white,
  padding: AppTheme.paddings.base,
  backgroundColor: AppTheme.colors.black
}

const logoStyle: React.CSSProperties = {
  marginTop: AppTheme.margins.base,
  width: LOGO_WIDTH
}

export default function LeftAside() {
  return (
    <Layout.Sider style={asideStyle} width={300}>
      <motion.div
        style={logoStyle}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.2,
            opacity: 0
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1,
              type: 'spring'
            }
          }
        }}
      >
        <SpotifyTextSVG />
        <NavMenu />
      </motion.div>
    </Layout.Sider>
  )
}
