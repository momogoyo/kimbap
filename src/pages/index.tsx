import { NextSeo } from 'next-seo'

import BasisLayout from '@/components/@Layout/BasisLayout'
import Wrapper from '@/containers/Wrapper'

function Home() {
  return (
    <>
      <NextSeo title="momogoyo home" />
      <BasisLayout content={<Wrapper />} />
    </>
  )
}

export default Home