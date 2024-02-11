import React from 'react'

interface ResearchLayoutProps {
  children: React.ReactNode
}

export default function ResearchLayout ({
  children
}: React.PropsWithChildren<ResearchLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
    </div>
  )
}