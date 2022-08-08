import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import CommonLayout from '@components/Layout/Common'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CommonLayout>
        <Component {...pageProps} />{' '}
      </CommonLayout>
    </ChakraProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.info(metric)
}

export default MyApp
