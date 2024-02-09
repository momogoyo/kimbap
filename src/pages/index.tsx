import { NextSeo } from 'next-seo'
import styled from 'styled-components'

import PostContent from '@/components/PostContent'

interface HomeProps {
  postContent: any
}

const Home = ({
  postContent
}: HomeProps) => {
  return (
    <Wrapper>
      <NextSeo title="momogoyo home" />
      <PostContent content={postContent} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Home