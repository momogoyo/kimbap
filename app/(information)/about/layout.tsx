import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout ({
  children
}: React.PropsWithChildren<AboutLayoutProps>) {
  return (
    <>
      <Hero>
        <h1>Hello, I'm Yu Jin.</h1>
      </Hero>

      {children}
    </>
  )
}
