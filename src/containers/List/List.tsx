import { Box, FlexProps } from '@chakra-ui/react'

import Experiment from '@/components/Post'

import Container from './components/Container'

interface PostProps extends FlexProps {
  thumbnail?: string | null
  title?: string
  progress?: boolean
}

interface ListProps {
  data: (PostProps & { id: string })[]
}

const List = ({
  data,
  ...basisProps
}: ListProps) => {
  
  return (
    <Container
      {...basisProps}
    >
      {data.map((experiment) => (
        <Box as="li" key={experiment.id}>
          <Experiment />
        </Box>
      ))}
    </Container>
  )
}

export default List