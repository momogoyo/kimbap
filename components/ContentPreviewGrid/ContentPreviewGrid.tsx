import styled from 'styled-components'

import ContentPreview from '@/components/ContentPreview/'

import type { ContentPreviewGridProps } from './types'

const ContentPreviewGrid = ({
  title,
  contentList
}: ContentPreviewGridProps) => {
  const pluralizedCount = contentList.length === 1 ? `1 Article` : `${contentList.length} Articles`

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Count>{pluralizedCount}</Count>
      </Header>

      <Grid>
        {contentList.map((node, index) => (
          <ItemWrapper key={node.slug}>
            <ContentPreview {...node} />
          </ItemWrapper>
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Header = styled.div``

const Title = styled.h3``

const Count = styled.span``

const Grid = styled.div``

const ItemWrapper = styled.div``

export default ContentPreviewGrid