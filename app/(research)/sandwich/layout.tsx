interface SandwichLayoutProps {
  children: React.ReactNode
}

export default function SandwichLayout ({
  children
}: React.PropsWithChildren <SandwichLayoutProps>) {
  return (
    <div className="flex-col flex p-16">
      {children}
    </div>
  )
}