interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <>
      {children}
    </>
  )
}