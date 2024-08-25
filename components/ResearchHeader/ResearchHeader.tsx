import { formatDate } from '@/lib/utils'

interface ResearchHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string
  heading: string
  text?: string
}

export function ResearchHeader ({
  date,
  heading,
  text,
  className,
  ...props
}: ResearchHeaderProps) {
  return (
    <div className={className} {...props}>
      <time className="block text-base text-center text-[#46474E] mt-16 mb-6">{date}</time>
      <h1 className="mt-2 font-heading text-5xl text-center text-[#131314] font-normal leading-[1.3] tracking-[-0.7px] mb-[100px]">{heading}</h1>
      {text && <p className="text-base leading-[1.8] text-[#46474E] mb-6">{text}</p>}
    </div>
  )
}

export default ResearchHeader