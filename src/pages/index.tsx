import { NextSeo } from 'next-seo'

import BasisLayout from '@/components/@Layout/BasisLayout/BasisLayout'
import Wrapper from '@/components/Wrapper'

function Home() {
  return (
    <>
      <NextSeo title="momogoyo home" />
      <BasisLayout content={<Wrapper />} />
    </>
  )
}

export default Home