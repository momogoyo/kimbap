import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

import MdxCard from '@/components/MdxCard'

interface ComponentProps {
  className?: string
}

const components = {
  h1: ({ className, ...props }: ComponentProps) => (
    <h1 
      className={`mt-2 scroll-m-20 text-4xl font-bold tracking-tight ${className}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps) => (
    <h2 
      className={`mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps) => (
    <h3
      className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentProps) => (
    <h4
      className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentProps) => (
    <h5 
      className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight ${className}`}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentProps) => (
    <h6 
      className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight ${className}`}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps) => (
    <a className={`${className}`} {...props}/>
  ),
  p: ({ className, ...props }: ComponentProps) => (
    <p className={`${className}`} {...props}/>
  ),
  ul: ({ className, ...props }: ComponentProps) => (
    <ul className={`${className}`} {...props}/>
  ),
  ol: ({ className, ...props }: ComponentProps) => (
    <ol className={`${className}`} {...props}/>
  ),
  li: ({ className, ...props }: ComponentProps) => (
    <li className={`${className}`} {...props}/>
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={`rounded-md border ${className}`} alt={alt} {...props}/>
  ),
  code: ({ className, ...props}: ComponentProps) => (
    <code 
      className={`relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm ${className}`}
      {...props}
    />
  ),

  Image,
  Card: MdxCard
}


interface MdxProps {
  code: string
}

const Mdx = ({
  code
}: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div className="Mdx">
      <Component components={components} />
    </div>
  )
}

export default Mdx