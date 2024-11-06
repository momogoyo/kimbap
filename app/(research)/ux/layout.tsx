'use client'

import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

import UX from '@/components/UX'

interface UXLayoutProps {
  children: React.ReactNode
}

export default function UXLayout ({
  children
}: React.PropsWithChildren<UXLayoutProps>) {
  // const router = useRouter()
  
  const projectLength = Object.keys(UX).length
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  
  const uxComponents = Object.entries(UX)
  const [, Component] = uxComponents[currentIndex]
  const TypedComponent = Component as React.ComponentType
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectLength) % projectLength)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectLength)
  }
  
  //  useEffect(() => {
  //   router.replace(`/ux/${currentIndex}`)
  // }, [currentIndex])

  return (
    <div className={cn('relative max-w-[840px] px-[15px]')} style={{margin: '0 auto'}}>
      <div className={cn('flex w-full items-center justify-between my-8')}>
        <div className={cn(' tabular-nums', 'flex gap-4')}>
          <span className={cn('text-natural-700')}>
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(projectLength).padStart(2, '0')}</span>
        </div>

        <div>
          <button 
            type="button"
            onClick={handlePrev}
            className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg> 
          </button>
          <button
            type="button" 
            onClick={handleNext}
            className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>
      </div>
      
      <div
        className={
          cn(
            'preview-container',
            'shadow-custom-card',
            'border-wrapper relative mx-auto flex min-h-96 flex-col items-center justify-center overflow-hidden rounded-md bg-natural-150 px-8 py-8'
          )
        }
      >
        <div className={cn('interactions')}>
          <div className={cn('flex flex-wrap gap-5 items-center justify-center px-5 py-0')}>
            <TypedComponent />
          </div>
        </div>
      </div>

      <div className={cn('grid h-12 w-80 grid-cols-2 rounded-full bg-natural-200 p-1 mt-8 mb-0 mx-auto')}>
        <button className={cn("inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative isolate h-full rounded-full")}>
          <div className={cn("absolute inset-0 -z-10 bg-natural-300/50", "rounded-[24px] opacity-100")}></div>
          Preview
        </button>
        <button className={cn("inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative isolate h-full rounded-full")}>
          Code
        </button>
      </div>
    </div>
  )
}
