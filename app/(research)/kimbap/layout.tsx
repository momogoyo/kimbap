interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <div className="mx-auto max-w-5xl">{children}</div>
  )
}