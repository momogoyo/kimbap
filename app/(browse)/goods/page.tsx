import { cn } from '@/lib/utils'
import Image from 'next/image'

export default async function GoodsPage () {
  return (
    <section className={cn('goods')}>
      <div className={cn('goods-tags')}>

      </div>

      <div className={cn('large-container')}>
        {/* <div className={cn('row')}> */}

          <div className={cn('goods-container', 'row', 'gap-[20px]', 'items-center', 'justify-start', 'px-[30px]', 'py-0')}>
          {Array(5).fill(null).map((_, index) => (
            <div className={cn('md:w-[calc(50%_-_10px)] sm:w-[100%]', 'mb-[var(--spacer-large)]')}>
              <img src={'thumbnail.jpg'} className={cn('mb-[20px]')} />

              <div className={cn('metadata')}>
                <p className={cn('text-[length:var(--font-size-large)]', 'text-[var(--text-primary)]')}>스티커</p>
                <p className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-secondary)]')}>5000₩</p>
                <p className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-primary)]', 'mt-[var(--spacer-medium)] mb-[var(--spacer-small)]')}>엉뚱한 미더덕의 일상 이모티콘을 스티커로 제작했습니다. 잘 찢어지지 않는 코팅 형 스티커로, 제거할 때에도 지저분하게 제거되지 않아요!</p>
                <a className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-secondary)]')}>→ Add to cart</a>
              </div>
            </div>
          ))}
            
          </div>
      {/* </div> */}
      </div>
    </section>
  )
}