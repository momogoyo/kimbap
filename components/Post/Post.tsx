import ContentList from '@/components/ContentList'

const Post = () => {
  return (
    <>
      <ContentList
        groupContent={[
          {
            title: 'Latest Content',
            content: [{
              slug: 'latest',
              title: 'Post 1',
              subtitle: 'Subtitle 1',
              pathname: '/post-1',
              publishedOn: '2022-01-01T00:00:00.000Z',
              externalLabel: false,
            }],
          },
        ]}
      />
    </>
  )
}

export default Post