interface DesignLayoutProps {
  children: React.ReactNode
}

export default function DesignLayout ({
  children
}: React.PropsWithChildren<DesignLayoutProps>) {
  return (
    <div className="flex-col flex p-16">
      {children}
    </div>
  )
}