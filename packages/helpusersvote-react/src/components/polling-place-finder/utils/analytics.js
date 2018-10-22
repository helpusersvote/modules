import AEvent from 'analytics-event'
import * as Sentry from '@sentry/browser'
import { sendEvents } from './network'
import { SENTRY_DSN } from './settings'

const dsn = SENTRY_DSN
let hasInit

if (dsn) {
  Sentry.init({ dsn })
  hasInit = true
}

export function reportError(error, info) {
  if (!hasInit) {
    if (!dsn) {
      console.warn('huv: could not find `SENTRY_DSN` setting value')
      return
    }

    Sentry.init({ dsn })
  }

  // De-risk error handling
  try {
    if (info) {
      Sentry.withScope(scope => {
        // Attach extra info to Sentry error scope
        Object.keys(info).forEach(k => scope.setExtra(k, info[k]))
        Sentry.captureException(error)
      })
    } else {
      Sentry.captureException(error)
    }
  } catch (err) {
    console.warn('huv: failed reporting to sentry')
    console.log(err)
  }
}

const batch = []
const EVENT_BATCH_SIZE = 10
const EVENT_BATCH_INTERVAL = 2000 // 2 seconds

let isListeningForEvents

export function listenForEvents() {
  if (isListeningForEvents) {
    return
  }

  isListeningForEvents = true

  setInterval(async () => {
    try {
      const batchToSend = batch.splice(0, EVENT_BATCH_SIZE)

      await sendEvents(batchToSend)
    } catch (err) {
      // Silence errors from analytics
    }
  }, EVENT_BATCH_INTERVAL)
}

export function track(input) {
  if (!input.context) {
    const campaign = getUTM()

    if (campaign) {
      input.context = {
        campaign
      }
    }
  }

  const event = AEvent(input)

  batch.push(event)

  if (typeof ga !== 'undefined') {
    if (event.name === 'Page Viewed' && shouldSendToGA(event)) {
      gaPage(event)
    }
  }
}

// alias for clearer naming
export const trackEvent = track

export function trackPageview(input = {}) {
  try {
    const context = {}
    const properties = input.properties || {}
    const campaign = getUTM()

    if (campaign) {
      context.campaign = campaign
    }

    const title = input.name || document.title
    const path = window.location.pathname

    if (title) {
      properties.title = title
    }

    if (path) {
      properties.path = path
    }

    track({
      name: 'Page Viewed',
      properties,
      context
    })
  } catch (err) {
    reportError(err)
  }
}

export function gaPage(event) {
  const payload = {}
  const { properties = {}, context = {} } = event
  const { campaign = {} } = context

  payload.title = properties.title || ''
  payload.page = properties.path || ''

  if (campaign.name) payload.campaignName = campaign.name
  if (campaign.source) payload.campaignSource = campaign.source
  if (campaign.medium) payload.campaignMedium = campaign.medium
  if (campaign.content) payload.campaignContent = campaign.content
  if (campaign.term) payload.campaignKeyword = campaign.term

  ga('send', 'pageview', payload)
}

// Analytics utilities

let blockGA = false

export function turnOffGA() {
  blockGA = true
}

function shouldSendToGA(event) {
  // Manual override to avoid double reporting
  if (blockGA) {
    return false
  }

  const { integrations = {} } = event

  if (typeof integrations['ga'] !== 'undefined') {
    return integrations['ga']
  }

  return true
}

const utmParams = [
  { param: 'utm_campaign', key: 'name' },
  'utm_term',
  'utm_medium',
  'utm_source',
  'utm_content'
].map(param => {
  if (typeof param === 'string') {
    return {
      param,
      key: param.replace('utm_', '')
    }
  } else {
    return param
  }
})

function getUTM() {
  try {
    const params = new URLSearchParams(window.location.search)
    const campaign = {}

    utmParams.forEach(({ param, key }) => {
      if (params.get(param)) {
        campaign[key] = params.get(param)
      }
    })

    return campaign
  } catch (err) {
    // Silence error
    return null
  }
}
