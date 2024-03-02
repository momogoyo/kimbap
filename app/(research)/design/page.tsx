import Link from 'next/link'
import { allDesigns } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { formatDate } from '@/lib/utils'

export const metadata = {
  title: '연구 기록',
  description: '모모연구소의 design 연구 공간입니다.'
}

export default function DesignPage () {
  const designs = allDesigns
  .filter((design) => design.published)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <div className="max-w-[760px] w-full min-h-screen relative z-[1] flex-col flex mx-auto my-0">
      <div className="flex-col flex">
        <div className="flex-row items-center justify-between flex">
          <h1 className="text-5xl font-bold text-black bg-[color:var(--orange)]">디자인 연구소</h1>
          <div>
            🎨
          </div>
        </div>
        <div className="flex-col flex mt-6">
          <span className="w-fit inline-block relative text-sm text-[rgb(102,102,102)] leading-6">우리는 모든 편안하지만 유니크한 디자인을 연구합니다.</span>
        </div>
      </div>

      <section className="grid gap-10 sm:grid-cols-2">
        {designs?.length ? (
          designs.map((design) => (
            <article
              key={design._id}
              className="
                group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg
                mt-16 w-full
                transition-all duration-[235ms] ease-[ease] delay-[0s] shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)] transition-all duration-[235ms] ease-[ease-in-out] delay-[0s] 
                text-[#41403e] bg-white self-center bg-none cursor-pointer inline-block text-base p-3 rounded-tl-[255px_15px] rounded-tr-[15px_225px] rounded-br-[225px_15px] rounded-bl-[15px_255px] border-[#41403e] border-solid border-2
              "
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight">
                    {design.title}
                  </h2>
                  
                  {design.description && (
                    <p className="text-muted-foreground">{design.description}</p>
                  )}
                  {design.date && (
                    <p className="text-sm text-muted-foreground">{formatDate(design.date)}</p>
                  )}
                </div>
              </div>
              <Link href={design.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))
        ) : (
          <p>연구 기록이 없습니다.</p>
        )}
      </section>
    </div>
  )
}