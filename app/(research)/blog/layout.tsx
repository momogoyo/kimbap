interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout ({
  children
}: React.PropsWithChildren<BlogLayoutProps>) {
  return (
    <>
      {children}
    </>
  )
}