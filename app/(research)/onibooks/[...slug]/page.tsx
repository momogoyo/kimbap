import { notFound } from 'next/navigation'
import { allOnibooks } from '@/.contentlayer/generated'
import { cn } from '@/lib/utils'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

interface OnibooksProps {
  params: {
    slug: string[]
  }
}

async function getOnibooksFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const onibooks = allOnibooks.find((books) => books.slugAsParams === slug)

  if (!onibooks) null

  return onibooks
}

export async function generateMetadata({
  params
}: OnibooksProps) {
  const onibooks = await getOnibooksFromParam(params)
  
  if (!onibooks) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<OnibooksProps['params'][]> {
  return allOnibooks.map((books) => ({
    slug: books.slugAsParams.split('/')
  }))
}

export default async function OnibooksPage ({
  params
}: OnibooksProps) {
  const onibooks = await getOnibooksFromParam(params)

  if (!onibooks) {
    notFound()
  }

  return (
    <section className={cn('onibooks-content', 'pt-[var(--spacer-large)]')}>
      <div className={'container'}>
        <div className={cn('row', 'relative')}>
          <div className={cn('column-100', 'py-0')}>
            <ResearchHeader 
              date={onibooks.date}
              heading={onibooks?.title}
              text={onibooks?.description}
            />

            <MDX code={onibooks.body.code} />
          </div>
        </div>
      </div>
    </section>
  )
}