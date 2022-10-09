import { ApolloClient, InMemoryCache } from '@apollo/client'
import getConfig from 'next/config'

export const initializeApollo = () => {
  const { serverRuntimeConfig } = getConfig()
  const { graphQlUri } = serverRuntimeConfig
  return new ApolloClient({
    uri: graphQlUri,
    cache: new InMemoryCache(),
  })
}
