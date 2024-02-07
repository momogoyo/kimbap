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

export const getStaticPaths = async () => {
  // mdx로 페이지 정적으로 생성해서...
}

const Wrapper = styled.div``

export default Home