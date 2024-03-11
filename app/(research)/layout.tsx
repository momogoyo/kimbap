import React from 'react'
import Header from '@/components/Header'

interface ResearchLayoutProps {
  children: React.ReactNode
}

export default function ResearchLayout ({
  children
}: React.PropsWithChildren<ResearchLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  )
}
