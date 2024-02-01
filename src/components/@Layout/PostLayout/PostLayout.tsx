import styled from 'styled-components'

interface PostLayoutProps {
  hero: string
}

const PostLayout = ({
  hero,
  children
}: React.PropsWithChildren<PostLayoutProps>) => {
  return (
    <Wrapper></Wrapper>
  )
}

const Wrapper = styled.div``

export default PostLayout