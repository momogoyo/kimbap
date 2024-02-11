import styled from 'styled-components'

interface StandardLayoutProps {
  background?: string
}

const StandardLayout = ({
  children,
  background = 'var(--color-background)'
}: React.PropsWithChildren<StandardLayoutProps>) => {
  return (
    <Wrapper>
      <ChildWrapper style={{ background }}>
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ChildWrapper = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 100vw;
  overflow: hidden;
`


export default StandardLayout