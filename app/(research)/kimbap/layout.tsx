interface KimbapLayoutProps {
  children: React.ReactNode
}

export default function KimbapLayout ({
  children
}: React.PropsWithChildren<KimbapLayoutProps>) {
  return (
    <div className="max-w-[760px] w-full min-h-screen relative z-[1] flex-col flex mx-auto my-0 p-16">
      <div className="flex-col flex">
        <div className="flex-row items-center justify-between flex">
          <h1 className="text-5xl font-bold text-black;">김밥 연구소</h1>
        </div>
        <div className="flex-col flex mt-8">
          <span className="w-fit inline-block relative text-sm text-[rgb(102,102,102)] leading-6">우리는 모든 건강하고 맛있는 김밥을 연구합니다.</span>
        </div>
      </div>

      <div className="flex-col flex mt-16">
        {children}
      </div>
    </div>
  )
}