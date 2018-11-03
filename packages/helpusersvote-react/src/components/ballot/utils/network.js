import { BALLOT_API_HOST } from '../../polling-place-finder/utils/settings'

export async function getConfig(opts = {}) {
  const { namespaceId, configId } = opts

  if (!(namespaceId && configId)) {
    throw new Error('huv.storeConfig: missing option')
  }

  return await fetch(
    BALLOT_API_HOST + `/v1/namespaces/${namespaceId}/configs/${configId}`
  )
    .then(r => r.json())
    .then(c => c.body)
}

export async function storeConfig(opts = {}) {
  const { namespaceId, configId, body } = opts

  if (!(namespaceId && configId && body)) {
    throw new Error('huv.storeConfig: missing option')
  }

  return await fetch(
    BALLOT_API_HOST + `/v1/namespaces/${namespaceId}/configs/${configId}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        body
      })
    }
  ).then(r => r.json())
}
