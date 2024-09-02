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

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
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

export const Onibooks = defineDocumentType(() => ({
  name: 'Onibooks',
  filePathPattern: `onibooks/**/*.mdx`,
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
  documentTypes: [Kimbap, Post, Onibooks],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
})