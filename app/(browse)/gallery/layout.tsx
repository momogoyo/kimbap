interface GalleryLayoutProps {
  children: React.ReactNode
}

export default function GalleryLayout ({
  children
}: React.PropsWithChildren<GalleryLayoutProps>) {
  return (
    <div>
      {children}
    </div>
  )
}
