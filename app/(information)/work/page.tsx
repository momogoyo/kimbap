import Image from 'next/image'
import { workConfig } from '@/config/work'
import { cn } from '@/lib/utils'

export default async function WorkPage () {
  return (
    <section className={cn('projects-feed')}>
      {workConfig.map((work) => (
        <>
          <div key={work.name} className={cn('line', 'max-w-[840px]')} style={{margin: '0 auto'}} />
          <div className={cn('my-[8vh]')}>
            <div className={cn('large-container')}>
              <h2>{work.name}</h2>
            </div>

            {work.items.map((item, index) => (
              <a className={cn('block', 'relative', 'my-[8vh]')} key={`${item.title} - ${index}`}>
                <div className={cn('large-container')}>
                  <div className={cn('row')}>
                    <div className={cn('column-100')}>
                      <Image className={cn('lazy', 'fluid-img', 'mb-[var(--spacer-medium)]')} src={item.thumbnail} alt={item.title} width={1600} height={1200} />
                    </div>
                  </div>
                </div>
              
                <div className={cn('container')}>
                  <div className={cn('row')}>
                    <div className={cn('row')}>
                      <div className={cn('w-[25%]', 'max-w-[25%]')}>
                        <p className={cn('text-[length:var(--font-size-regular)] text-[var(--text-secondary)] mb-[var(--spacer-small)] leading-[100%]')}>{item.date}</p>
                      </div>
                      <div className={cn('w-[75%]', 'max-w-[75%]')}>
                        <h3 className={cn('mt-0', 'mb-[0.83em]')}>{item.title}</h3>
                        <p className={cn('text-[length:var(--font-size-regular)]', 'text-[var(--text-secondary)]', 'mb-[var(--spacer-small)]')}>{item.description}</p>
                        <p className={'text-[length:var(--font-size-small)] text-[var(--text-secondary)]'}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </a>
            ))}
          </div>
        </>
      ))}
    </section>   
  )
}