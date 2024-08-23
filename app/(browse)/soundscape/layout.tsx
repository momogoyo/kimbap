interface SoundScapeLayoutProps {
  children: React.ReactNode
}

export default function SoundScapeLayout ({
  children
}: React.PropsWithChildren<SoundScapeLayoutProps>) {
  return (
    <div>
      {children}
    </div>
  )
}
