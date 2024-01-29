import Image from 'next/image'
import Metheduxk from '../../../public/metheduxk.png'

const Wrapper = () => {
  return (
    <main>
      <Image 
        src={Metheduxk} 
        alt="kimbap metheduxk"
        style={{
          width: '30%',
          height: 'auto',
        }}
      />
    </main>
  )
}

export default Wrapper