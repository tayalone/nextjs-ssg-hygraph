import React from 'react'
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
// type Props = {}

const NavBar = () =>
  // props: Props
  {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <Box>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontSize='xl'
              color={useColorModeValue('gray.800', 'white')}
            >
              MyBlog
            </Text>
          </Box>

          <Flex alignItems='center'>
            <Stack direction='row' spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    )
  }

export default NavBar
