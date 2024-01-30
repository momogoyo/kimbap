import Image from 'next/image'
import Metheduxk from '../../../public/metheduxk.png'

import List from '@/containers/List'

const Wrapper = () => {
  const data = [
    {
      id: '0',
      thumbnail: '',
      title: 'titletitletitletitletitletitle',
      progress: false
    },
    {
      id: '1',
      thumbnail: '',
      title: 'titletitletitletitletitletitle',
      progress: false
    },
    {
      id: '2',
      thumbnail: '',
      title: 'titletitletitletitletitletitle',
      progress: false
    },
  ]
  
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

      <List data={data} />
    </main>
  )
}

export default Wrapper