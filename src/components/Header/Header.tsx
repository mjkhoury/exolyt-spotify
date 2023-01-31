import COLORS from '@Static/colors'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'

export const HEADER_HEIGHT = 78

const headerStyle: React.CSSProperties = {
  color: COLORS.white,
  height: HEADER_HEIGHT,
  paddingInline: AppTheme.paddings.double,
  backgroundColor: AppTheme.colors.transparentPrimary,
  paddingBlock: AppTheme.paddings.base,
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1
}

export default function Header() {
  return <Layout.Header style={headerStyle}>Header</Layout.Header>
}
