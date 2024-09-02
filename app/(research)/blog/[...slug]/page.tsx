import { notFound } from 'next/navigation'
import { allPosts } from '@/.contentlayer/generated'
import { cn } from '@/lib/utils'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

async function getPostsFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const posts = allPosts.find((post) => post.slugAsParams === slug)

  if (!posts) null

  return posts
}

export async function generateMetadata({
  params
}: BlogPageProps) {
  const posts = await getPostsFromParam(params)
  
  if (!posts) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<BlogPageProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/')
  }))
}

export default async function BlogPage ({
  params
}: BlogPageProps) {
  const posts = await getPostsFromParam(params)

  if (!posts) {
    notFound()
  }

  return (
    <section className={cn('blog-content', 'pt-[var(--spacer-large)]')}>
      <div className={'container'}>
        <div className={cn('row', 'relative')}>
          <div className={cn('column-100', 'py-0')}>
            <ResearchHeader 
              date={posts.date}
              heading={posts?.title}
              text={posts?.description}
            />

            <MDX code={posts.body.code} />
          </div>
        </div>
      </div>
    </section>
  )
}