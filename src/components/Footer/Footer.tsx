import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'

export const FOOTER_HEIGHT = 64

const footerStyle: React.CSSProperties = {
  color: AppTheme.colors.white,
  height: FOOTER_HEIGHT,
  paddingInline: AppTheme.paddings.double,
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(90deg,#af2896,#509bf5)',
  flexDirection: 'row',
  gap: AppTheme.margins.base,
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  zIndex: 1
}

export default function Footer() {
  return <Layout.Footer style={footerStyle}> </Layout.Footer>
}
