import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import Avatar from '/public/avatar.png'

export function Footer () {
  return (
    <footer className={cn('py-[12vh]')}>
      <div className={'container'}>
        <div className={cn('row')}>
          <div className={cn('w-full', 'max-w-full', 'py-0', 'px-[15px]')}>
            <div className={cn('nav-columns', 'flex', 'mb-[12vh]')}>
              <div className={cn('column', 'w-[33.3%]')}>
                <h2 className={'m-0'}>Information</h2>
                <ul>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/about">About</Link></li>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/work">Work</Link></li>
                </ul>
              </div>
              <div className={cn('column', 'w-[33.3%]')}>
                <h2 className={'m-0'}>Browse</h2>
                <ul>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/gallery">Gallery</Link></li>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/goods">Goods</Link></li>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/soundscape">SoundScape</Link></li>
                </ul>
              </div>
              <div className={cn('column', 'w-[33.3%]')}>
                <h2 className={'m-0'}>Research</h2>
                <ul>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/blog">Blog</Link></li>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/kimbap">Kimbap</Link></li>
                  <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/onibooks">Onibooks</Link></li>
                </ul>
              </div> 
            </div>

            <div className={cn('avatar', 'relative', 'block', 'w-[30px]', 'h-[30px]')}>
              <Image src={Avatar} alt="미더덕 아바타" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
