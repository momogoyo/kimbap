import { notFound } from 'next/navigation'
import { allKimbaps } from '@/.contentlayer/generated'
import ResearchHeader from '@/components/ResearchHeader'

interface KimbapPageProps {
  params: {
    slug: string[]
  }
}

async function getKimbapFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const kimbap = allKimbaps.find((kimbap) => kimbap.slugAsParams === slug)

  if (!kimbap) null

  return kimbap
}

export default async function KimbapPage ({
  params
}: KimbapPageProps) {
  const kimbap = await getKimbapFromParam(params)

  if (!kimbap) {
    notFound()
  }

  return (
    <main className="relative">
      <div>
        <ResearchHeader 
          heading={kimbap?.title}
          text={kimbap?.description}
        />

        {/* <MDX /> */}
      </div>
    </main>
  )
}