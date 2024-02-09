import { compileMDX } from 'next-mdx-remote/rsc'

import type { Meta, Research } from './types/types'

type Filetree = {
  "tree": [
    { "path": string}
  ]
}

export async function getPostByName(fileName: string): Promise<Research | undefined> {
  const res = await fetch(`https://api.github/com/repos/momogoyo/kimbap-researchs/main/${fileName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': `2024-02-10`
    }
  })

  if (!res.ok) {
    return undefined
  }

  const rawMDX = await res.text()

  if (rawMDX === '404: Not Found') return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string,
    slug: string,
    date: string,
    tags: string[]
  }>({ source: rawMDX })

  const id = fileName.replace(/\.mdx$/, '')
  const researchObj: Research = {
    meta: {
      id,
      title: frontmatter.title,
      slug: frontmatter.slug,
      date: frontmatter.date,
      tags: frontmatter.tags
    }, 
    content
  }

  return researchObj
}

export async function getPostsMeta (): Promise<Meta[] | undefined> {
  const res = await fetch('https://api.github/com/repos/momogoyo/kimbap-researchs/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': `2024-02-10`
    }
  })

  if (!res.ok) {
    return undefined
  }

  const repoFileTree:Filetree = await res.json()
  const filesArray = repoFileTree.tree.map((obj) => obj.path).filter((path) => path.endsWith('.mdx'))
  const posts: Meta[] = []

  for (const file of filesArray) {
    const post = await getPostByName(file)
    
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }

  return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}