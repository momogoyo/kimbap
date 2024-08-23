'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'

interface InformationLayoutProps {
  children: React.ReactNode
}

export default function InformationLayout ({
  children
}: React.PropsWithChildren<InformationLayoutProps>) {
  const pathname = usePathname()
  const computedPathName = pathname.replace('/', '')

  return (
    <div className={cn('container')}>      
      <Hero>
        <div>{computedPathName.charAt(0).toUpperCase() + computedPathName.slice(1)}</div>
      </Hero>

      {children}
    </div>
  )
}
