import Hero from '@/components/Hero'

interface WorkLayoutProps {
  children: React.ReactNode
}

export default function WorkLayout ({
  children
}: React.PropsWithChildren<WorkLayoutProps>) {
  return (
    <>
      <Hero>
        <h1>
          Selected Projects
          <br />
          <span className={'text-[var(--text-secondary)]'}>2021-06</span>
        </h1>
      </Hero>

      {children}
    </>
  )
}
