import Logo from 'public/kimbap/logo.png'
import Image from 'next/image'

export const Icons  = {
  logo: <Image src={Logo} alt={'logo'} width={50} height={50} />,
  close: <span>close</span>
}

export default Icons