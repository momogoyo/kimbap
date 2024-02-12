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

export async function generateMetadata({
  params
}: KimbapPageProps) {
  const kimbap = await getKimbapFromParam(params)
  
  if (!kimbap) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<KimbapPageProps['params'][]> {
  return allKimbaps.map((kimbap) => ({
    slug: kimbap.slugAsParams.split('/')
  }))
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