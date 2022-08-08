import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// import Head from 'next/head'
// import Image from 'next/image'

import apolloClinet from '@utils/apollo-client'

import { gql } from '@apollo/client'
import { Blog as BlogInterface } from '@interfaces/Blog'
import styles from '../styles/Home.module.css'

interface IndexProps {
  latestBlogs: BlogInterface[]
}

const Home: NextPage<IndexProps> = ({ latestBlogs }: IndexProps) => {
  const router = useRouter()

  const handlerClinkBlog = (slug: string) => {
    router.push(`blog/${encodeURIComponent(slug)}`)
  }

  return <h1>Index page</h1>
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
