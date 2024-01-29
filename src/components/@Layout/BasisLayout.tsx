import { ReactNode } from 'react'

import BasisHeader from './components/BasisHeader'

interface BasisLayoutProps {
  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}

const BasisLayout = ({
  header = <BasisHeader />,
  content,
  footer
}: BasisLayoutProps) => {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  )
}

export default BasisLayout