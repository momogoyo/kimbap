interface SandwichLayoutProps {
  children: React.ReactNode
}

export default function SandwichLayout ({
  children
}: React.PropsWithChildren <SandwichLayoutProps>) {
  return (
    <div className="mx-auto max-w-5xl">{children}</div>
  )
}