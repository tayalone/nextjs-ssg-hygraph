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

      <Wrap spacing={4} p={4}>
        {latestBlogs.map((lb) => {
          const {
            title,
            subtitle,
            slug,
            heroBanner,
            updatedAt,
          }: BlogInterface = lb
          return (
            <WrapItem
              key={lb.id}
              onClick={() => {
                return handlerClinkBlog(slug)
              }}
            >
              <BlogCard
                title={title}
                subtitle={subtitle}
                imageUrl={heroBanner.url}
                updatedAt={updatedAt}
              />{' '}
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
            updatedAt
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
