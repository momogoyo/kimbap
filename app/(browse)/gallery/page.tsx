import { cn } from '@/lib/utils'

export default async function GalleryPage () {
  return (
    <>
      <section className={cn('gallery')}>
        <div className={cn('gallery-feed', 'flex flex-wrap gap-5 items-center justify-center px-5 py-0')}>
          {Array(44).fill(null).map((_, index) => (
            <figure key={index} className={cn('aspect-square w-[220px] bg-[color:var(--bg-secondary)] h-auto relative rounded-[var(--radius-small)]')}>
            <img src={'thumbnail.jpg'} 
              className={cn('block w-auto h-auto max-h-[80%] max-w-[80%] absolute -translate-y-2/4 -translate-x-2/4 m-0 left-2/4 top-2/4 -ms-transform: translateY(-50%) translateX(-50%) cursor-zoom-in')}
            />
          </figure>
          ))}
        </div>
      </section>

      <section id="why" className={cn('why', 'pt-[var(--spacer-large)] pb-[var(--spacer-large)] px-0')}>
        <div className={cn('container')}>
          <div className={cn('row')}>
            <div className={cn('column-100', 'py-0')}>
              <h2 className="mt-0 mb-[var(--spacer-medium)] text-[var(--text-primary)]">Why this is.</h2>
              
              <p className="text-[length:var(--font-size-regular)] text-[var(--text-secondary)] mt-[var(--spacer-medium)]">This is mostly intended for my personal consumption. If you read these words and feel anything from perusing this gallery, that's great. But there is really no goal to this. We all see things. Few can catch and hold on to the feeling of a moment without the help of photography.</p>
              <p className="text-[length:var(--font-size-regular)] text-[var(--text-secondary)] mt-[var(--spacer-medium)]">I'm building this thing because there doesn't seem to be much satisfying alternative to instagram. Although this is an attempt at exiting the voyeurism of social media, there is still some ego in needing to keep a record. I'm working on it here.</p>
              <p className="text-[length:var(--font-size-regular)] text-[var(--text-secondary)] mt-[var(--spacer-medium)]">I'm trying to not grow my footprint too much and tame my ego. These compressed JPGs will be hosted here as I'm purging all my cloud accounts and other devices.</p>
              <p className="text-[length:var(--font-size-regular)] text-[var(--text-secondary)] mt-[var(--spacer-medium)]">It's simple like a folder, but online. A place to store all of my photos that are currently scattered across google drive, my phone library, old phones, my instagram archive, and a bunch of SD cards. The images are intentionally low-res, the moment matters. I remember the details.</p>
              <p className="text-[length:var(--font-size-small)] text-[var(--text-secondary)] mt-[var(--spacer-medium)] ">Final point — I live in the same world, go slower and look around.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
