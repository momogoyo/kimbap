import { allKimbaps } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export const metadata = {
  title: '연구 기록',
  description: '모모연구소의 삼각김밥 연구 공간입니다.'
}

export default function KimbapPage () {
  const kimbaps = allKimbaps
    .filter((kimbap) => kimbap.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div>
      {kimbaps?.length ? (
        kimbaps.map((kimbap) => (
          <article key={kimbap._id} className="transition-all duration-[235ms] ease-[ease] delay-[0s] shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)] transition-all duration-[235ms] ease-[ease-in-out] delay-[0s] text-[#41403e] bg-white self-center bg-none cursor-pointer inline-block text-base p-3 rounded-tl-[255px_15px] rounded-tr-[15px_225px] rounded-br-[225px_15px] rounded-bl-[15px_255px] border-[#41403e] border-solid border-2">
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">
                  {kimbap.title}
                </h2>$
                
                {kimbap.description && (
                  <p className="text-muted-foreground">{kimbap.description}</p>
                )}
                {kimbap.date && (
                  <p className="text-sm text-muted-foreground">{kimbap.date}</p>
                )}
              </div>
            </div>
            <Link href={kimbap.slug} className="absolute inset-0">
              <span className="sr-only">View</span>
            </Link>
          </article>
        ))
      ) : (
        <p>연구 기록이 없습니다.</p>
      )}
    </div>
  )
}