import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// import Head from 'next/head'
// import Image from 'next/image'

import apolloClinet from '@utils/apollo-client'

import { gql } from '@apollo/client'
import { Blog as BlogInterface } from '@interfaces/Blog'
import { Heading, Wrap, WrapItem } from '@chakra-ui/react'

import BlogCard from '@components/Blog/Card'

interface IndexProps {
  latestBlogs: BlogInterface[]
}

const Home: NextPage<IndexProps> = ({ latestBlogs }: IndexProps) => {
  const router = useRouter()

  const handlerClinkBlog = (slug: string) => {
    router.push(`blog/${encodeURIComponent(slug)}`)
  }

  return (
    // <Box
    //   w='100%'
    //   h='100vh'
    //   bgGradient={[
    //     'linear(to-tr, teal.300, yellow.400)',
    //     'linear(to-t, blue.200, teal.500)',
    //     'linear(to-b, orange.100, purple.300)',
    //   ]}
    // >
    <>
      <Heading
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'
        as='h1'
        p={2}
      >
        Latest Blogs
      </Heading>

      <Wrap p={2}>
        {latestBlogs.map((lb) => {
          return (
            <WrapItem>
              <BlogCard key={lb.id} />{' '}
            </WrapItem>
          )
        })}
      </Wrap>
    </>

    // </Box>
  )
}

export async function getStaticProps() {
  try {
    const { data } = await apolloClinet.query({
      query: gql`
        query MyQuery {
          myBlogs(orderBy: publishedAt_DESC, first: 10) {
            id
            title
            subtitle
            slug
            heroBanner {
              url
              width
              height
            }
          }
        }
      `,
    })
    return {
      props: {
        latestBlogs: data.myBlogs,
      },
    }
  } catch (err: any) {
    return {
      props: {
        latestBlogs: [],
      },
    }
  }
}

export default Home
