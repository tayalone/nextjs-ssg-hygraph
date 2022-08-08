import React, { useMemo } from 'react'
import Image from 'next/image'
import {
  Box,
  // Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import dayjs from 'dayjs'

type Props = {
  title: string
  subtitle: string
  imageUrl: string
  updatedAt: string
}

const Card = ({ title, subtitle, imageUrl, updatedAt }: Props) => {
  const formatedDate = useMemo(() => {
    return dayjs(updatedAt).format('MMM DD, YYYY')
  }, [updatedAt])

  return (
    <Box
      maxW='445px'
      w='full'
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow='2xl'
      rounded='md'
      p={6}
      overflow='hidden'
    >
      <Box h='210px' bg='gray.100' mt={-6} mx={-6} mb={6} pos='relative'>
        <Image src={imageUrl} layout='fill' />
      </Box>
      <Stack>
        <Text
          color='green.500'
          textTransform='uppercase'
          fontWeight={800}
          fontSize='sm'
          letterSpacing={1.1}
        >
          Blog
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize='2xl'
          fontFamily='body'
        >
          {title}
        </Heading>
        <Text color='gray.500'>{subtitle}</Text>
      </Stack>
      <Stack mt={6} direction='row' spacing={4} align='center'>
        <Text color='gray.500'>{formatedDate}</Text>
      </Stack>
    </Box>
  )
}

export default Card
