import { notFound } from 'next/navigation'
import { allKimbaps } from '@/.contentlayer/generated'
import { cn } from '@/lib/utils'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

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
    <section className={cn('onibooks-content', 'pt-[var(--spacer-large)]')}>
      <div className={'container'}>
        <div className={cn('row', 'relative')}>
          <div className={cn('column-100', 'py-0')}>
            <ResearchHeader 
              date={kimbap.date}
              heading={kimbap?.title}
              text={kimbap?.description}
            />

            <MDX code={kimbap.body.code} />
          </div>
        </div>
      </div>
    </section>
  )
}