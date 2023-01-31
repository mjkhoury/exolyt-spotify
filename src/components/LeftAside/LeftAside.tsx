import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'

export const ASIDE_WIDTH = 300

const asideStyle: React.CSSProperties = {
  color: AppTheme.colors.white,
  padding: AppTheme.paddings.base,
  backgroundColor: AppTheme.colors.black
}

export default function LeftAside() {
  return (
    <Layout.Sider style={asideStyle} width={300}>
      Aside
    </Layout.Sider>
  )
}
