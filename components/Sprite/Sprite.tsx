'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function Sprite () {
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
    <div
        className={cn('sprite', 'container')}
        ref={spriteRef}
        style={{
          width: '200px',
          height: '200px',
          backgroundImage: `url('/metheduck.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
  )
}

export default Sprite
