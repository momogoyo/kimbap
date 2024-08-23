interface WorkLayoutProps {
  children: React.ReactNode
}

export default function WorkLayout ({
  children
}: React.PropsWithChildren<WorkLayoutProps>) {
  return (
    <div>
      {children}
    </div>
  )
}
