import { notFound } from 'next/navigation'
import { allMudscones } from '@/.contentlayer/generated'

import ResearchHeader from '@/components/ResearchHeader'
import MDX from '@/components/Mdx'

interface MudsconePageProps {
  params: {
    slug: string[]
  }
}

async function getMudsconeFromParam (params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const mudscone = allMudscones.find((mudscone) => mudscone.slugAsParams === slug)

  if (!mudscone) null

  return mudscone
}

export async function generateMetadata({
  params
}: MudsconePageProps) {
  const mudscone = await getMudsconeFromParam(params)
  
  if (!mudscone) {
    return {
      status: 404
    }
  }
  
  const url = process.env.NEXT_PUBLIC_APP_URL
}

export async function generateStaticParams (): Promise<MudsconePageProps['params'][]> {
  return allMudscones.map((mudscone) => ({
    slug: mudscone.slugAsParams.split('/')
  }))
}

export default async function MudsconePage ({
  params
}: MudsconePageProps) {
  const mudscone = await getMudsconeFromParam(params)

  if (!mudscone) {
    notFound()
  }

  return (
    <main className="container relative max-w-[816px] mx-auto pb-12 px-8">
      <ResearchHeader 
        date={mudscone.date}
        heading={mudscone?.title}
        text={mudscone?.description}
      />

      <MDX code={mudscone.body.code} />
    </main>
  )
}