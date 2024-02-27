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
  console.log(date)

  return (
    <>
      <div className={className} {...props}>
        <time className="block text-base text-center text-[color:var(--theme-ui-colors-blueberry-80)] mt-16 mb-6">{formatDate(date)}</time>
        <h1 className="text-5xl text-center text-[color:var(--theme-ui-colors-blueberry-100)] font-normal leading-[1.3] tracking-[-0.7px] mb-16">{heading}</h1>
        {text && <p className="text-base leading-[1.8] text-[color:var(--theme-ui-colors-blueberry-80)] mb-6">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}

export default ResearchHeader