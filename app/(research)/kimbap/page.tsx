import Link from 'next/link'
import { allKimbaps } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { cn, formatDate } from '@/lib/utils'

import Hero from '@/components/Hero'

export const metadata = {
  title: '김밥 연구소',
  description: '김밥과 UX를 관련지어서 김밥의 문화 역사를 기록합니다.'
}

export default function KimbapPage () {
  const kimbaps = allKimbaps
    .filter((kimbap) => kimbap.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <Hero>
        <h1>김밥연구소</h1>
      </Hero>

      <section className={cn('kimbap-feed')}>
        <div className={'container'}>
          <div className={cn('row', 'relative')}>
            <div className={cn('column-100', 'py-0')}>
              <h2 className={cn('mb-[12px]')}>2024</h2>

              {kimbaps?.length ? (
                kimbaps.map((kimbap, index) => (
                  <Link 
                    href={kimbap.slug} 
                    className={cn('border-t-[color:var(--border)] block relative cursor-pointer px-0 py-[1.5vh] border-t border-solid')}
                  >
                    <article key={kimbap._id}>
                      <div>
                        <h2>{kimbap.title}</h2>
                        <p className="text-muted-foreground">{kimbap.description}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(kimbap.date)}</p>
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