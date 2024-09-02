import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { cn, formatDate } from '@/lib/utils'

import Hero from '@/components/Hero'

export const metadata = {
  title: '블로그',
  description: '배움의 모든 것을 기록합니다.'
}

export default function BlogPage () {
  const posts = allPosts
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <Hero>
        <h1>Blog</h1>
      </Hero>
      
      <section className={cn('blog-feed')}>
        <div className={'container'}>
          <div className={cn('row', 'relative')}>
            <div className={cn('column-100', 'py-0')}>
              <h2 className={cn('mb-[12px]')}>2024</h2>
        
              {posts?.length ? (
                posts.map((post, index) => (
                  <Link
                    href={post.slug}
                    className={cn('border-t-[color:var(--border)] block relative cursor-pointer px-0 py-[1.5vh] border-t border-solid')}
                  >
                    <article key={post._id}>
                      <div>
                        <h2>{post.title}</h2>
                        <p className="text-muted-foreground">{post.description}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
                      </div>

                      <span className="sr-only">View</span>
                    </article>
                  </Link>
                ))
              ) : (
                <p>기록이 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}