import React from 'react'
import { Blog as BlogInterface } from '@interfaces/Blog'
import { NextPage } from 'next'
import { initializeApollo } from '@utils/apollo-client'
import { gql } from '@apollo/client'

export interface IAppProps {
  blog: BlogInterface
}

// const Home: NextPage<IndexProps> =

const BlogSlug: NextPage<IAppProps> = ({ blog }: IAppProps) => {
  console.info('blog', blog)
  return <div />
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'blog-1' } }, // See the "paths" section below
      { params: { slug: 'blog-2' } }, // See the "paths" section below
    ],
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery($slug: String) {
        myBlog(where: { slug: $slug }) {
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
    variables: { slug },
  })
  return {
    props: {
      blog: data.myBlog,
    },
  }
}

export default BlogSlug
