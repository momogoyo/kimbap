import Link from 'next/link'
import Image from 'next/image'
import { allKimbaps } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { formatDate } from '@/lib/utils'

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
    <div className="max-w-[760px] w-full min-h-screen relative z-[1] flex-col flex mx-auto my-0">
      <div className="flex-col flex">
        <div className="flex-row items-center justify-between flex">
          <h1 className="text-5xl font-bold text-black bg-[color:var(--baby-pink)]">김밥 연구소</h1>
          <div>
            <Image
              src="/kimbap/kimbap-icon.png"
              alt="김밥 아이콘"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex-col flex mt-6">
          <span className="w-fit inline-block relative text-sm text-[rgb(102,102,102)] leading-6">우리는 모든 건강하고 맛있는 김밥을 연구합니다.</span>
        </div>
      </div>

      {kimbaps?.length ? (
        kimbaps.map((kimbap, index) => (
          <article
            key={kimbap._id}
            className="
              group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg
              mt-16 w-full
              transition-all duration-[235ms] ease-[ease] delay-[0s] shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)] transition-all duration-[235ms] ease-[ease-in-out] delay-[0s] 
              text-[#41403e] bg-white self-center bg-none cursor-pointer inline-block text-base p-3 rounded-tl-[255px_15px] rounded-tr-[15px_225px] rounded-br-[225px_15px] rounded-bl-[15px_255px] border-[#41403e] border-solid border-2
            "
          >
            {/* {kimbap.image && ( */}
              <Image src={kimbap.image} alt={kimbap.title} width={804} height={452} className="rounded-md border bg-muted transition-colors" priority={index <= 1} />
            {/* )} */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">
                  {kimbap.title}
                </h2>
                
                {kimbap.description && (
                  <p className="text-muted-foreground">{kimbap.description}</p>
                )}
                {kimbap.date && (
                  <p className="text-xs text-muted-foreground">{formatDate(kimbap.date)}</p>
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