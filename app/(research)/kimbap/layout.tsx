interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <div className="flex-col flex p-16">
      {children}
    </div>
  )
}