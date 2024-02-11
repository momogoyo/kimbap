interface DesignLayoutProps {
  children: React.ReactNode
}

export default function DesignLayout ({
  children
}: React.PropsWithChildren<DesignLayoutProps>) {
  return (
    <div className="mx-auto max-w-5xl">{children}</div>
  )
}