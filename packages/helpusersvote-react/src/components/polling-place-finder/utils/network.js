import fetch from 'isomorphic-fetch'
import { toAddr } from './address'

export function fetchVoterInfo({ address }) {
  const shouldUseGoogleApi = true
  const req = shouldUseGoogleApi
    ? getCivicInfoApiRequest({ address })
    : getDefaultInfoApiRequest({ address })

  return req
}

const eventsApiHost = 'https://events-api.helpusersvote.com'

export function sendEvents(events) {
  if (!events || events.length === 0) {
    return Promise.resolve()
  }

  return fetch(`${eventsApiHost}/v1/track`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ events })
  })
}

function getDefaultInfoApiRequest() {
  return fetch('/api/info/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address })
  })
    .then(r => r.json())
    .then(d => d.voterInfo)
}

const electionId = 6000 // 2018 U.S. Midterms
const googleApiKey =
  process.env.CIVIC_INFO_API_KEY || 'AIzaSyBq-ezGmXRaCYBUaUhBuxpXu-k_7uPkk_E'
const googleCivicInfoApiHost =
  process.env.CIVIC_INFO_API_HOST ||
  'https://content.googleapis.com/civicinfo/v2/voterinfo'

function getCivicInfoApiRequest({ address }) {
  const addr = toAddr(address)
  const url = `${googleCivicInfoApiHost}?key=${googleApiKey}&address=${addr}&electionId=${electionId}&returnAllAvailableData=true`

  return fetch(url).then(r => r.json())
}

export default {
  fetchVoterInfo
}
