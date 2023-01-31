import { HEADER_HEIGHT } from '@Components/Header/Header'
import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'

const mainStyle: React.CSSProperties = {
  paddingInline: AppTheme.paddings.double,
  paddingTop: HEADER_HEIGHT + AppTheme.paddings.double
}

export default function Main() {
  return <Layout.Content style={mainStyle}>Main</Layout.Content>
}
