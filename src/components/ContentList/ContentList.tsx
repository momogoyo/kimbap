import styled from 'styled-components'
import StandardLayout from '@/components/@Layout/StandardLayout'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ContentPreviewGrid from '@/components/ContentPreviewGrid'

import type { ContentListProps } from './types'

const ContentList = ({
  groupContent
}: ContentListProps) => {
  return (
    <StandardLayout background="var(--color-subtle-background)">
      <MaxWidthWrapper>
        <Main>
          {groupContent.map((section, index) => (
            <ContentPreviewGrid 
              key={index}
              title={section.title}
              contentList={section.content}
            />
          ))}
        </Main>
      </MaxWidthWrapper>
    </StandardLayout>
  )
}

const Main = styled.div``

export default ContentList