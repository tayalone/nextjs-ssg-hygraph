import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

import { verifyWebhookSignature } from '@utils/graphcms'

// import { verifyWebhookSignature } from '@graphcms/utils'

const { serverRuntimeConfig } = getConfig()

const revalidateIndexPage = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { body = null, headers } = req

  const { hygraphSecret: secret }: { hygraphSecret: string } =
    serverRuntimeConfig

  // console.info('body', body)
  // console.info('headers', headers)
  // console.info('secret', secret)

  const isValid = verifyWebhookSignature({
    body,
    headers,
    secret,
  })

  if (isValid) {
    await res.revalidate('/')
    return res.json({ revalidated: true })
  }

  return res.status(401).json({ message: 'Invalid token' })
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'POST':
      return revalidateIndexPage(req, res)
    default:
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
