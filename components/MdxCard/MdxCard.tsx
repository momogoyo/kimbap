import Link from 'next/link'

interface MdxCardProps {
  href?: string
  className?: string
  disabled?: boolean,
}

export function MdxCard ({
  href,
  className,
  disabled,
  children,
  ...props
}: React.PropsWithChildren<MdxCardProps>) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {children}
        </div>
      </div>
      {href && (
        <Link href={disabled ? '#' : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  )
}

export default MdxCard