import { createHmac } from 'crypto'

export const verifyWebhookSignature = ({
  body,
  headers,
  secret,
}: {
  body: any
  headers: any
  secret: string
}): boolean => {
  let isValid = false
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
    isValid = sign === hash
  }

  return isValid
}
