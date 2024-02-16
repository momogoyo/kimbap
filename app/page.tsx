import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/kimbap">🍙 KIMBAP LABS</Link>
      <Link href="/sandwich">🥪 SANDWICH LABS</Link>
      <Link href="/design">🎨 DESIGN LABS</Link>

      <div className="bg-[color:var(--turquoise)]">모모고요</div>
    </main>
  )
}
