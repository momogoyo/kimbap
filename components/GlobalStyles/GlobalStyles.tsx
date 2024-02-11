import React from 'react'
import { ExecutionProps, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }
`

const GlobalStylesWrapper = (props: React.JSX.IntrinsicAttributes & ExecutionProps & object) => {
  return <GlobalStyles {...props} />
}

export default React.memo(GlobalStylesWrapper)
