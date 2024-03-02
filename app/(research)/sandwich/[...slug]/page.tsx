import { notFound } from 'next/navigation'
import { allSandwiches } from '@/.contentlayer/generated'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

interface SandwichPageProps {
  params: {
    slug: string[]
  }
}

async function getSandwichFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const sandwich = allSandwiches.find((sandwich) => sandwich.slugAsParams === slug)

  if (!sandwich) null

  return sandwich
}

export async function generateMetadata({
  params
}: SandwichPageProps) {
  const sandwich = await getSandwichFromParam(params)
  
  if (!sandwich) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<SandwichPageProps['params'][]> {
  return allSandwiches.map((sandwich) => ({
    slug: sandwich.slugAsParams.split('/')
  }))
}

export default async function SandwichPage ({
  params
}: SandwichPageProps) {
  const sandwich = await getSandwichFromParam(params)

  if (!sandwich) {
    notFound()
  }

  return (
    <main className="relative">
      <div>
        <ResearchHeader 
          date={sandwich.date}
          heading={sandwich?.title}
          text={sandwich?.description}
        />

        <MDX code={sandwich.body.code} />
      </div>
    </main>
  )
}