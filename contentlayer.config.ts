import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (research) => `/${research._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (research) => research._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

export const Kimbap = defineDocumentType(() => ({
  name: 'Kimbap',
  filePathPattern: `kimbap/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string'
    },
    image: {
      type: 'string',
      default: 'https://static.oku.club/static/media/oku@2x.78506015.png'
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Kimbap],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
})