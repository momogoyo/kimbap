import Link from 'next/link'
import styled from 'styled-components'

interface ContentPreviewProps {
  title: string
  subtitle: string
  pathname: string
  externalLabel: boolean
}

const ContentPreview = ({
  title,
  subtitle,
  pathname,
  externalLabel
}: ContentPreviewProps) => {
  const isExternal = !!externalLabel

  return (
    <Article>
      <LinkWrapper href={pathname}>
        <Title>{title}</Title>
        <Subheading>{subtitle}</Subheading>
      </LinkWrapper>
    </Article>
  )
}

const Article = styled.article``

const LinkWrapper = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  color: var(--color-text);
`

const Title = styled.h3`
  display: flex;
`

const Subheading = styled.h4``

export default ContentPreview