import AppTheme from '@Theme/AppTheme'
import { Layout } from 'antd'
import Main from 'src/components/Main/Main'

import Footer, { FOOTER_HEIGHT } from './Footer/Footer'
import Header from './Header/Header'
import LeftAside from './LeftAside/LeftAside'

const wrapperLayoutStyle: React.CSSProperties = {
  width: '100vw',
  height: `calc(100vh - ${FOOTER_HEIGHT}px)`,
  backgroundColor: AppTheme.colors.primary
}

const contentLayoutStyle: React.CSSProperties = {
  backgroundColor: AppTheme.colors.primary,
  overflow: 'auto',
  marginBottom: `${AppTheme.paddings.double}px`
}

const App: React.FC = () => {
  return (
    <Layout style={wrapperLayoutStyle}>
      <LeftAside />
      <Layout style={contentLayoutStyle}>
        <Header />
        <Main />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
