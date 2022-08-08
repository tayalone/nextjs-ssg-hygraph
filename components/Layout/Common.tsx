import React from 'react'
import NavBar from '@components/Layout/NavBar'
import Footer from '@components/Layout/Footer'
import { Box } from '@chakra-ui/react'

type Props = { children: React.ReactNode }

const Common = ({ children }: Props) => {
  return (
    <Box minH='100vh' display='flex' flexDirection='column'>
      <NavBar />
      <Box as='main' flex='1' p={2}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Common
