import Header from '@/components/Header'

interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}