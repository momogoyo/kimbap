import { notFound } from 'next/navigation'
import { allDesigns } from '@/.contentlayer/generated'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

interface DesignPageProps {
  params: {
    slug: string[]
  }
}

async function getDesignFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const design = allDesigns.find((design) => design.slugAsParams === slug)

  if (!design) null

  return design
}

export async function generateMetadata({
  params
}: DesignPageProps) {
  const design = await getDesignFromParam(params)
  
  if (!design) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<DesignPageProps['params'][]> {
  return allDesigns.map((design) => ({
    slug: design.slugAsParams.split('/')
  }))
}

export default async function DesignPage ({
  params
}: DesignPageProps) {
  const design = await getDesignFromParam(params)

  if (!design) {
    notFound()
  }

  return (
    <main className="relative">
      <div>
        <ResearchHeader
          date={design.date}
          heading={design?.title}
          text={design?.description}
        />

        <MDX code={design.body.code} />
      </div>
    </main>
  )
}