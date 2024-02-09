import { ContentList } from "@/components/ContentList/types"

import type { ReactElement, JSXElementConstructor } from 'react'

export interface Meta {
  id: string
  title: string
  slug: string
  date: string
  tags: string[]
}

export interface Research {
  meta: Meta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}