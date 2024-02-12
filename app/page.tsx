import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/kimbap">GO TO KIMBAP LABS</Link>
      모모고요
    </main>
  )
}
