interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <div className="flex-col flex">
      {children}
    </div>
  )
}