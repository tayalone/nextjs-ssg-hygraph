import type { NextApiRequest, NextApiResponse } from 'next'
import { createHmac } from 'crypto'
import getConfig from 'next/config'

// import { verifyWebhookSignature } from '@graphcms/utils'

const { serverRuntimeConfig } = getConfig()

const revalidateIndexPage = (req: NextApiRequest, res: NextApiResponse) => {
  const { body = null, headers } = req

  const { hygraphSecret: secret }: { hygraphSecret: string } =
    serverRuntimeConfig

  const signature = headers['gcms-signature'] || ''

  if (typeof signature === 'string') {
    const [rawSign, rawEnv, rawTimestamp] = signature.split(', ')

    const sign = rawSign.replace('sign=', '')
    const EnvironmentName = rawEnv.replace('env=', '')
    const Timestamp = parseInt(rawTimestamp.replace('t=', ''), 10)

    const payload = JSON.stringify({
      Body: JSON.stringify(body),
      EnvironmentName,
      TimeStamp: Timestamp,
    })

    const hash = createHmac('sha256', secret).update(payload).digest('base64')

    return res.status(200).send({ mesasge: 'POST: /api/revalidate is called' })
  }
  console.info('')
  return null
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

  // Check for secret to confirm this is a valid request

  // try {
  //   // this should be the actual path not a rewritten path
  //   // e.g. for "/blog/[slug]" this should be "/blog/post-1"
  //   await res.revalidate('/')
  //   return res.json({ revalidated: true })
  // } catch (err) {
  //   // If there was an error, Next.js will continue
  //   // to show the last successfully generated page
  //   return res.status(500).send('Error revalidating')
  // }
}

export default handler
