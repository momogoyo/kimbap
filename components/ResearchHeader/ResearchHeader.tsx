interface ResearchHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function ResearchHeader ({
  heading,
  text,
  className,
  ...props
}: ResearchHeaderProps) {
  return (
    <>
      <div className={className} {...props}>
        <h1 className="inline-block font-heading text-4xl">{heading}</h1>
        {text && <p className="text-xl text-muted-foreground">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}

export default ResearchHeader