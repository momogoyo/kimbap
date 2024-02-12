import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (research) => `/${research._raw.flattenedPath}`
  },
  slugParams: {
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
      type: 'string',
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

export const Sandwich = defineDocumentType(() => ({
  name: 'Sandwich',
  filePathPattern: `sandwich/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
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

export const Design = defineDocumentType(() => ({
  name: 'Design',
  filePathPattern: `design/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
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
  documentTypes: [Kimbap, Sandwich, Design],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
})