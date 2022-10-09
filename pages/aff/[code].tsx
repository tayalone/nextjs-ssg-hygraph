import React from 'react'
import { useRouter } from 'next/router'

const Link = () => {
  const router = useRouter()
  const { code } = router.query

  return <div>Code: {code}</div>
}

export default Link
