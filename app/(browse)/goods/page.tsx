'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { buttons, type GoodsType } from '@/data'
import { getGoods, filterGoods } from '@/services/services'

export default function GoodsPage () {
  const [filtredGoods, setFiltredGoods] = useState<GoodsType[]>([])
  
  useEffect(() => {
    setFiltredGoods(getGoods())
  }, [])

  function handleButton(event: React.MouseEvent<HTMLButtonElement>) {
    const type = (event.currentTarget as HTMLButtonElement).value as string
    
    if (type !== 'all') {
      setFiltredGoods(filterGoods(type))
    } else {
      setFiltredGoods(getGoods())
    }
  }

  return (
    <section className={cn('goods')}>
      <div className={cn('large-container')}>
        <div className={cn('goods-tags', 'px-[30px]')}>
          <ul className={cn('row', 'gap-[4px]')}>
          {buttons.map((button, index) => (
            <li key={index}>
              <button 
                type="button"
                value={button.type}
                className={cn('text-[length:var(--font-size-small)]', 'py-[4px], px-[12px]')}
                onClick={handleButton}
              >
                {button.name}
              </button>
            </li>
          ))}
          </ul>
        </div>

        <div className={cn('goods-container', 'row', 'gap-[20px]', 'items-center', 'justify-start', 'px-[30px]', 'py-0', 'mt-[var(--spacer-large)]')}>
          {filtredGoods && 
            filtredGoods.map((goods, index) => (
              <div key={goods.id} className={cn('md:w-[calc(50%_-_10px)] sm:w-[100%]', 'mb-[var(--spacer-large)]')}>
                <img src={'thumbnail.jpg'} className={cn('mb-[20px]')} />

                <div className={cn('metadata')}>
                  <p className={cn('text-[length:var(--font-size-large)]', 'text-[var(--text-primary)]')}>{goods.name}</p>
                  <p className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-secondary)]')}>{goods.price}원</p>
                  <p className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-primary)]', 'mt-[var(--spacer-medium)] mb-[var(--spacer-small)]')}>{goods.description}</p>
                  <a className={cn('text-[length:var(--font-size-small)]', 'text-[var(--text-secondary)]')}>→ Add to cart</a>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}