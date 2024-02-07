import styled from 'styled-components'

interface PostContentProps {
  content: any[]
}

const PostContent = ({
  content
}: PostContentProps) => {
  return (
    <Wrapper>
      {/* {content?.map((content) => ( content.title ) )} */}
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PostContent