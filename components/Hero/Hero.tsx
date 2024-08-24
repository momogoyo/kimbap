import { cn } from '@/lib/utils'

interface HeroProps {
  children: React.ReactNode
}

export function Hero ({
  children
}: HeroProps) {
  return (
    <section className={cn('py-[28vh]')}>
      <div className={cn('container')}>
        <div className={cn('row', 'relative', 'flex', 'flex-wrap')}>
          <div className={cn('w-full', 'max-w-full', 'py-0', 'px-[15px]')}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
