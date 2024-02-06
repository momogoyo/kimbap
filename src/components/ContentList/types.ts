import type { ContentPreview } from '@/components/ContentPreview/types'

interface ContentList extends ContentPreview {
  slug: string
  publishedOn: string
}

type GroupContentType = {
  title: string,
  content: ContentList[]
}

export interface ContentListProps {
  groupContent: GroupContentType[]
}