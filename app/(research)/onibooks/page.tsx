import Link from 'next/link'
import { allOnibooks } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { cn, formatDate } from '@/lib/utils'

import Hero from '@/components/Hero'

export const metadata = {
  title: '오니북스',
  description: '오니북스는 전자책의 모든 것을 연구합니다.'
}

export default function OnibooksPage () {
  const onibooks = allOnibooks
  .filter((books) => books.published)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <>
      <Hero>
        <h1>오니북스 연구소</h1>
      </Hero>

      <section className={cn('onibooks-feed')}>
        <div className={'container'}>
          <div className={cn('row', 'relative')}>
            <div className={cn('column-100', 'py-0')}>
              <h2 className={cn('mb-[12px]')}>2024</h2>
              
              {onibooks?.length ? (
                onibooks.map((books, index) => (
                  <Link
                    href={books.slug}
                    className={cn('border-t-[color:var(--border)] block relative cursor-pointer px-0 py-[1.5vh] border-t border-solid')}
                  >
                    <article key={books._id}>
                      <div>
                        <h2>{books.title}</h2>
                        <p className="text-muted-foreground">{books.description}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(books.date)}</p>
                      </div>

                    <span className="sr-only">View</span>
                    </article>
                  </Link>
                ))
              ) : (
                <p>연구 기록이 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}