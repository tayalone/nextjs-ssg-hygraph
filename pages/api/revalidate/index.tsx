import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      return res
        .status(200)
        .send({ mesasge: 'POST: /api/revalidate is called' })
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
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
