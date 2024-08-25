import Hero from '@/components/Hero'

interface GoodsLayoutProps {
  children: React.ReactNode
}

export default function GoodsLayout ({
  children
}: React.PropsWithChildren<GoodsLayoutProps>) {
  return (
    <>
      <Hero>
        <h1>Goods</h1>
      </Hero>

      {children}
    </>
  )
}
