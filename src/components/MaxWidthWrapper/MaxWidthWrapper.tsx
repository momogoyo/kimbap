import styled from 'styled-components'

type MaxWidthWrapperProps = {
  maxWidth?: number
}

const MaxWidthWrapper = styled.div<MaxWidthWrapperProps>`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${(p) => p.maxWidth || 1100}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
`

export default MaxWidthWrapper