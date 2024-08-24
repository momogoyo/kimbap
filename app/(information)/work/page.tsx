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
                  <div className={cn('row', 'flex', 'flex-wrap')}>
                    <div className={cn('col-100', 'w-[100%]', 'px-[15px]', 'max-w-[100%]')}>
                      <Image className={cn('lazy', 'fluid-img', 'medium-margin-bottom')} src={item.thumbnail} alt={item.title} width={1600} height={1200} />
                    </div>
                  </div>
                </div>
              
                <div className={cn('container')}>
                  <div className={cn('row', 'flex', 'flex-wrap')}>
                    <div className={cn('row', 'flex', 'flex-wrap')}>
                      <div className={cn('col-25', 'w-[25%]', 'max-w-[25%]')}>
                        <p className={cn('text-regular text-color-secondary small-margin-bottom leading-[100%]')}>{item.date}</p>
                      </div>
                      <div className={cn('col-75', 'w-[75%]', 'max-w-[75%]')}>
                        <h3 className={cn('mt-0', 'mb-[0.83em]')}>{item.title}</h3>
                        <p className={cn('text-regular', 'text-color-secondary', 'small-margin-bottom')}>{item.description}</p>
                        <p className={'text-small text-color-secondary'}>{item.role}</p>
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