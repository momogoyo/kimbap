import { ThemeProvider } from 'styled-components'

import { THEME } from '@/constants'
import GlobalStyles from '@/components/GlobalStyles'

import type { AppProps } from 'next/app'

function App({
  Component,
  pageProps
}: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App