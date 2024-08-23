import { cn } from '@/lib/utils'

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout ({
  children
}: React.PropsWithChildren<AboutLayoutProps>) {
  return (
    <div className={cn('container')}>
      {children}
    </div>
  )
}
