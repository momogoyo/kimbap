import { cn } from '@/lib/utils'

interface SoundScapeLayoutProps {
  children: React.ReactNode
}

export default function SoundScapeLayout ({
  children
}: React.PropsWithChildren<SoundScapeLayoutProps>) {
  return (
    <div className={cn('relative max-w-[840px] px-[15px]')} style={{margin: '0 auto'}}>
      {children}
    </div>
  )
}
