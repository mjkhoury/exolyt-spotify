import '@Styles/globals.css'
import 'nprogress/nprogress.css'

import Context from '@Context'
import { Theme, ThemeProvider } from '@emotion/react'
import COLORS from '@Static/colors'
import AppTheme from '@Theme/AppTheme'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.green
        }
      }}
    >
      <ThemeProvider theme={AppTheme as Partial<Theme>}>
        <Context>
          <Component {...pageProps} />
        </Context>
      </ThemeProvider>
    </ConfigProvider>
  )
}
