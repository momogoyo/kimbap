'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface IPhoneProps {
  
}

export function IPhone ({
  children
}: React.PropsWithChildren<IPhoneProps>) {
  return (
    <div className={cn('relative flex aspect-[9/18.5505] w-[380px] flex-col overflow-hidden rounded-[56px] bg-[#C1C1C1] p-[6.62px]')}>
      <div className={cn('w-full grow overflow-auto rounded-[51px] bg-black p-[7.76px]')}>
        <div className={cn('no-scrollbar relative isolate h-full w-full rounded-[42px] overflow-hidden bg-white')}>
          <div className={cn('sticky top-0 z-50 flex h-[48px] shrink-0 items-center justify-center')}>
            <div className={cn('h-[28.43px] w-[96.25px] rounded-full bg-black')} />
          </div>

          <div className={cn('min-h-[calc(100%-48px)] pb-[26px]')}>
            {children}
          </div>
        </div>
      </div>

      <div className={cn('absolute bottom-4 left-1/2 flex h-[20px] shrink-0 -translate-x-1/2 items-center justify-center')}>
        <div className={cn('h-[3.21px] w-[105.58px] rounded-full bg-[#C1C1C1]')} />
      </div>
    </div>
  )
}