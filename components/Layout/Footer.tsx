import {
  useColorModeValue,
  Container,
  Stack,
  Box,
  Text,
} from '@chakra-ui/react'
import React from 'react'

// type Props = {}

const Footer = () => {
  return (
    <Box
      alignSelf=''
      borderTopWidth={1}
      borderStyle='solid'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container
        as={Stack}
        maxW='100vw'
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  )
}

export default Footer
