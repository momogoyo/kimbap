import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '/public/kimbap/hero.png'

export default function Home() {
  return (
    <div>
      <header className="z-[var(--z-overlay)] fixed w-full top-0">
        <div className="block max-w-[10em] mx-auto my-0 px-0 py-[1em] text-center text-[2em]">
          <Link href="https://kimbap.app">삼각연구소</Link>
        </div>
      </header>
      
      <main className="block">
        <section className="bg-[color:var(--highlight-light)] h-screen flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={HeroImage} alt="illustration of kimbap metheduxk" height={300} />

            <div className="text-center m-[1em]">
              <p className="text-[4em]">김밥과 샌드위치</p>
              <p className="mt-[1.8rem] leading-[1.8rem]">안녕하세요, 세상의 모든 김밥과 샌드위치를 연구하는 삼각연구소입니다.</p>
              <p className="leading-[1.8rem]">딱딱한지 않아요. 시각적인 즐거움과 시청각적인 요소를 더했습니다.</p>
              <p className="leading-[1.8rem]">지금 바로 이어폰을 끼고 같이 탐구해 보아요.</p>
            </div>

            <div className="flex items-center relative border-2 border-solid border-[black] mt-[1.4rem]">
              <Link href="/kimbap" className="flex items-center bg-[white] h-full text-[color:var(--color-fg)] p-[1em] rounded-none border-[none]">🍙 김밥연구소</Link>
              <Link href="/sandwich" className="flex items-center bg-[white] h-full text-[color:var(--color-fg)] p-[1em] rounded-none border-[none]">🥪 샌디치연구소</Link>
              {/* <Link href="/design" className="flex items-center bg-[white] h-full text-[color:var(--color-fg)] p-[1em] rounded-none border-[none]">🎨 디자인 연구소</Link> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
