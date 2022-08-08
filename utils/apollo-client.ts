import { ApolloClient, InMemoryCache } from '@apollo/client'

// const apolloClient = new ApolloClient({
//   uri: 'https://api-ap-northeast-1.hygraph.com/v2/cl6d7s88w00nu01ueebp02myw/master',
//   cache: new InMemoryCache(),
// })

// export default apolloClient

export const initializeApollo = () => {
  return new ApolloClient({
    uri: 'https://api-ap-northeast-1.hygraph.com/v2/cl6d7s88w00nu01ueebp02myw/master',
    cache: new InMemoryCache(),
  })
}
