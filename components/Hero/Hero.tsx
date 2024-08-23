import { cn } from '@/lib/utils'

interface HeroProps {
  children: React.ReactNode
}

export function Hero ({
  children
}: HeroProps) {
  return (
    <section className={cn('py-[28vh]')}>
      {children}
    </section>
  )
}

export default Hero
