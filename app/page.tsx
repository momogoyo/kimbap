'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import Avatar from '/public/avatar.png'

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const spriteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const totalFrames = 3
    const frameWidth = 200
    const frameDuration = 300
    let frameIndex = 0
    let lastTime: number | undefined = undefined
    let direction = 1
    let requestId: number

    const spriteElement = spriteRef.current

    const animateSprite = (timestamp: number) => {
      if (lastTime === undefined || timestamp - lastTime > frameDuration) {
        lastTime = timestamp

        const position = frameIndex * -frameWidth
        if (spriteElement) {
          spriteElement.style.backgroundPosition = `${position}px 0px`
        }

        if (frameIndex === totalFrames - 1) {
          direction = -1
        } else if (frameIndex === 0) {
          direction = 1
        }

        frameIndex += direction
      }

      requestId = requestAnimationFrame(animateSprite)
    }

    requestId = requestAnimationFrame(animateSprite)

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return (
    <div>
      <header>
        <div className={'container'}>
          <div className={clsx('row', 'flex', 'flex-wrap')}>
            <div className={clsx('header-container', 'relative', 'w-full', 'max-w-full', 'py-0', 'px-[15px]', 'mt-[8vh]')}>
              <div className={clsx('main-header', 'flex', 'items-center', 'justify-between')}>
                <div className={clsx('header-path', 'small', 'flex', 'gap-[12px]')}>
                  <Link className={clsx('text-color-secondary')} href="https://kimbap.app">kimbap.app</Link>
                  <span className={clsx('text-color-secondary')}>/</span>
                  <span>home</span>
                </div>

                <div className={clsx('header-menu-btn', 'select-none')}>
                {!isOpen ? 
                  <button type="button" onClick={() => setIsOpen(true)} className={clsx('menu-button', 'small')}>Menu</button>
                  : <button type="button" onClick={() => setIsOpen(false)} className={clsx('menu-button', 'small')}>Close</button>
                }
                </div>
                
                <div className={clsx('menu-panel', isOpen ? 'open' : 'close', 'bg-color-secondary')}>
                  <div className={clsx('nav-columns', 'flex')}>
                    <div className={clsx('column', 'w-[50%]')}>
                      <h2 className={'m-0'}>Information</h2>
                      <ul>
                        <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/about">About</Link></li>
                        <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/work">Work</Link></li>
                        {/* 블로그는 나만 보이게 */}
                        {/* <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/blog">Blog</Link></li> */}
                      </ul>
                    </div>
                    <div className={clsx('column', 'w-[50%]')}>
                      <h2 className={'m-0'}>Browse</h2>
                      <ul>
                        <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/gallery">Gallery</Link></li>
                        <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/goods">Goods</Link></li>
                        <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/soundscape">SoundScape</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        <section className={clsx('py-[28vh]')}>
          <div
            className={clsx('sprite', 'container')}
            ref={spriteRef}
            style={{
              width: '200px',
              height: '200px',
              backgroundImage: `url('/metheduck.png')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </section>

        <section>
          <div className={'container'}>
            <div className={clsx('row', 'relative', 'flex', 'flex-wrap')}>
            <div className={clsx('line')} />
            <div className={clsx('welcome', 'w-full', 'max-w-full', 'py-0', 'px-[15px]')}>
              <h2>Welcome</h2>
              <p className={clsx('texts', 'medium-margin-top', 'text-color-secondary')}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={clsx('py-[12vh]')}>
        <div className={'container'}>
          <div className={clsx('row', 'flex', 'flex-wrap')}>
            <div className={clsx('w-full', 'max-w-full', 'py-0', 'px-[15px]')}>
              <div className={clsx('nav-columns', 'flex', 'mb-[12vh]')}>
                <div className={clsx('column', 'w-[50%]')}>
                  <h2 className={'m-0'}>Information</h2>
                  <ul>
                    <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/about">About</Link></li>
                    <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/work">Work</Link></li>
                    {/* 블로그는 나만 보이게 */}
                    {/* <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/blog">Blog</Link></li> */}
                  </ul>
                </div>
                <div className={clsx('column', 'w-[50%]')}>
                  <h2 className={'m-0'}>Browse</h2>
                  <ul>
                    <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/gallery">Gallery</Link></li>
                    <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/goods">Goods</Link></li>
                    <li className={clsx('my-[10px]')}><Link className={clsx('text-color-secondary')} href="/soundscape">SoundScape</Link></li>
                  </ul>
                </div>
              </div>

              <div className={clsx('avatar', 'relative', 'block', 'w-[30px]', 'h-[30px]')}>
                <Image src={Avatar} alt="미더덕 아바타" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
