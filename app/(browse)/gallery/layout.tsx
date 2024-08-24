import Hero from '@/components/Hero'
import { cn } from '@/lib/utils'

interface GalleryLayoutProps {
  children: React.ReactNode
}

export default function GalleryLayout ({
  children
}: React.PropsWithChildren<GalleryLayoutProps>) {
  return (
    <>
      <Hero>
        <h1>Pictures with Metheduck</h1>
        <p className={cn('mt-[var(--spacer-medium)] text-[length:var(--font-size-small)] text-[var(--text-secondary)] max-w-400')}>
          An instagram replacement, more like a camera roll folder. No tags, no likes, no links, low res only. Many years, many cameras.
        </p>
        
        <a href="#why" className={cn('mt-[var(--spacer-small)] text-[length:var(--font-size-small)]')}>Learn more</a>
      </Hero>

      {children}
    </>
  )
}
