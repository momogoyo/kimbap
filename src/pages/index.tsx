import { NextSeo } from 'next-seo'

import StandardLayout from '@/components/@Layout/StandardLayout'
import Wrapper from '@/components/Wrapper'

function Home() {
  return (
    <>
      <NextSeo title="momogoyo home" />
      <StandardLayout>
        <Wrapper />
      </StandardLayout>
    </>
  )
}

export default Home