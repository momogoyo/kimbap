'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import type { MainNavItem } from '@/types'

interface MainNavProps {
  items?: MainNavItem[]
}

export function Header ({
  items,
  children
}: React.PropsWithChildren<MainNavProps>) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className="flex">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo /> */}
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link 
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ?  <span>close</span> : <span>logo</span>}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <></>
      )}
    </div>
  )
}

export default Header