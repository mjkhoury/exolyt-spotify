import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'

const wrapperLayoutStyle: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  backgroundColor: AppTheme.colors.primary
}

const App: React.FC = () => {
  return <Layout style={wrapperLayoutStyle}></Layout>
}

export default App
