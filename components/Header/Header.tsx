'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Header () {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const computedPathName = pathname.replace('/', '') || 'home'

  const handlePanelClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a')) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const menuPanel = document.querySelector('.menu-panel')
      if (menuPanel && !menuPanel.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleDocumentClick)
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [isOpen])

  return (
    <header>
      <div className={'container'}>
        <div className={cn('row')}>
          <div className={cn('header-container', 'relative', 'w-full', 'max-w-full', 'py-0', 'px-[15px]', 'mt-[8vh]')}>
            <div className={cn('main-header', 'flex', 'items-center', 'justify-between')}>
              <div className={cn('header-path', 'text-[length:var(--font-size-small)]', 'flex', 'gap-[12px]')}>
                <Link className={cn('text-[var(--text-secondary)]')} href="https://kimbap.app">kimbap.app</Link>
                <span className={cn('text-[var(--text-secondary)]')}>/</span>
                <span>{computedPathName}</span>
              </div>

              <div className={cn('header-menu-btn', 'select-none')}>
              {!isOpen ? 
                <button type="button" onClick={() => setIsOpen(true)} className={cn('menu-button', 'text-[length:var(--font-size-small)]')}>Menu</button>
                : <button type="button" onClick={() => setIsOpen(false)} className={cn('menu-button', 'text-[length:var(--font-size-small)]')}>Close</button>
              }
              </div>
              
              <div className={cn('menu-panel', isOpen ? 'open' : 'close', 'bg-[color:var(--bg-secondary)]')} onClick={handlePanelClick}>
                <div className={cn('nav-columns', 'flex')}>
                  <div className={cn('column', 'w-[50%]')}>
                    <h2 className={'m-0'}>Information</h2>
                    <ul>
                      <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/about">About</Link></li>
                      <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/work">Work</Link></li>
                      {/* 블로그는 나만 보이게 */}
                      {/* <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/blog">Blog</Link></li> */}
                    </ul>
                  </div>
                  <div className={cn('column', 'w-[50%]')}>
                    <h2 className={'m-0'}>Browse</h2>
                    <ul>
                      <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/gallery">Gallery</Link></li>
                      <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/goods">Goods</Link></li>
                      <li className={cn('my-[10px]')}><Link className={cn('text-[var(--text-secondary)]')} href="/soundscape">SoundScape</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header