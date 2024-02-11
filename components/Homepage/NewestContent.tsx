import ContentPreview from '@/components/ContentPreview'
import styled from 'styled-components'

interface NewestArticlesProps {
  gridArea: string
  content: any[]
}

const NewestArticles = ({
  gridArea,
  content
}: NewestArticlesProps) => {
  
  return (
    <Wrapper style={{ gridArea }}>
      <h2>Recently Published</h2>
      <div>
        {content?.map(({
          pathname,
          slug,
          ...frontmatter
        }) => {
          return (
            <PreviewWrapper key={slug}>
              <ContentPreview linkTo={pathname} {...frontmatter} />
            </PreviewWrapper>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const PreviewWrapper = styled.div``

export default NewestArticles