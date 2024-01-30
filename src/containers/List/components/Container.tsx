import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'

const Container = (props: SimpleGridProps) => {
  return (
    <SimpleGrid
      as="ul"
      py="8px"
      px={{
        base: '16px'
      }}
      columns={{
        base: 1
      }}
      spacing={'16px'}
      {...props}
    />
  )
}

export default Container