import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.info(metric)
}

export default MyApp
