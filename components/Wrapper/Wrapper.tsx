import Image from 'next/image'
import Metheduxk from '../../../public/metheduxk.png'
import ContentPreviewGrid from '@/components/ContentPreviewGrid'

const Wrapper = () => {
  const props = {
    title: 'UI/UX',
    contentList: [
      {
        slug: 'test',
        title: 'title',
        subtitle: 'subtitle',
        publishedOn: '2024.02.01',
        pathname: 'link',
        externalLabel: false
      },
      {
        slug: 'test1',
        title: 'title',
        subtitle: 'subtitle',
        publishedOn: '2024.02.01',
        pathname: 'link',
        externalLabel: false
      },
      {
        slug: 'test2',
        title: 'title',
        subtitle: 'subtitle',
        publishedOn: '2024.02.01',
        pathname: 'link',
        externalLabel: false
      },
      {
        slug: 'test3',
        title: 'title',
        subtitle: 'subtitle',
        publishedOn: '2024.02.01',
        pathname: 'link',
        externalLabel: false
      }
    ]
  }

  return (
    <>
      <Image 
        src={Metheduxk} 
        alt="kimbap metheduxk"
        style={{
          width: '30%',
          height: 'auto',
        }}
      />

      <ContentPreviewGrid {...props} />
    </>
  )
}

export default Wrapper