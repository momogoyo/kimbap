import { allSandwiches } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export const metadata = {
  title: '연구 기록',
  description: '모모연구소의 샌드위치 연구 공간입니다.'
}

export default function SandwichPage () {
  const sandwiches = allSandwiches
  .filter((sandwich) => sandwich.published)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <div>
      {sandwiches?.length ? (
        sandwiches.map((sandwich) => (
          <article
            key={sandwich._id}
            className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">
                  {sandwich.title}
                </h2>$
                
                {sandwich.description && (
                  <p className="text-muted-foreground">{sandwich.description}</p>
                )}
                {sandwich.date && (
                  <p className="text-sm text-muted-foreground">{sandwich.date}</p>
                )}
              </div>
            </div>
            <Link href={sandwich.slug} className="absolute inset-0">
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