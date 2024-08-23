interface GoodsLayoutProps {
  children: React.ReactNode
}

export default function GoodsLayout ({
  children
}: React.PropsWithChildren<GoodsLayoutProps>) {
  return (
    <div>
      {children}
    </div>
  )
}
