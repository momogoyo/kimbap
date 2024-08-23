import { cn } from '@/lib/utils'

import Hero from '@/components/Hero'
import Sprite from '@/components/Sprite'

export default function Home() {
  return (
    <>
      <Hero>
        <Sprite />
      </Hero>

      <section>
        <div className={'container'}>
          <div className={cn('row', 'relative', 'flex', 'flex-wrap')}>
          <div className={cn('line')} />
          <div className={cn('welcome', 'w-full', 'max-w-full', 'py-0', 'px-[15px]')}>
            <h2>Welcome</h2>
            <p className={cn('texts', 'medium-margin-top', 'text-color-secondary')}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
