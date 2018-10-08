import Day from 'dayjs'
import inUS from 'in-us'
import { get } from 'axios'
import { keyDates, getState } from './data'
import { checkTimeFactory } from './utils/time'

export default {
  asyncShouldShowCTA,
  shouldShowCTA,
  hasDeadlinePassed
}

export function shouldShowCTA(input) {
  try {
    const config = Object.assign(
      {
        date: new Date(),
        regions: ['country:USA'],
        checkInUS: true,
        useNetwork: false,
        _async: false
      },
      input || {}
    )

    const debug = checkForDebug()

    if (debug.key) {
      return debug.value
    }

    if (config.checkInUS) {
      // Check if the user is not in the United States
      // based on browser timezone and locale
      if (config.alwaysUseNetwork || !inUS()) {
        // Just in case, check using geoIP lookup service
        if (config.useNetwork) {
          if (!config._async) {
            console.warn(
              '🇺🇸 · shouldShowCTA: use `asyncShouldShowCTA` for `useNetwork` option'
            )
            return false
          }

          return get('https://us.helpusersvote.com/v1/check')
            .then(r => {
              return r.data
            })
            .then(res => Boolean(res && res.country === 'US'))
        } else {
          return false
        }
      }
    }

    if (!config.regions && config.state) {
      config.regions = ['state:' + config.state]
    }

    const currentDate = Day(config.date)
    const checkTime = checkTimeFactory(config.check)

    const matchedKeyDates = keyDates.filter(kd => {
      const keyDate = Day(kd.date)

      return (
        config.regions.filter(r => {
          return kd.regions ? kd.regions.includes(r) : true
        }).length > 0 && checkTime(currentDate, keyDate)
      )
    })

    return matchedKeyDates.length > 0
  } catch (err) {
    if (input && typeof input === 'object' && input.debug) {
      console.error(err)
    }
    // Silence error for production
    return false
  }
}

export function asyncShouldShowCTA(input) {
  return new Promise(resolve => {
    if (input && typeof input === 'object') {
      input._async = true
    }

    if (!input) {
      input = { _async: true }
    }

    const result = shouldShowCTA(input)

    if (typeof result === 'boolean') {
      return resolve(result)
    }

    return result.then(resolve).catch(err => {
      console.error('🇺🇸 · asyncShouldShowCTA.error:', err)
      resolve(false)
    })
  })
}

const CTA_DEBUG_KEY = 'huv_debug_cta'

function checkForDebug() {
  if (
    typeof window === 'undefined' ||
    typeof window.localStorage === 'undefined'
  ) {
    return false
  }

  let key = window.localStorage[CTA_DEBUG_KEY]

  if (!key) {
    const params = new URLSearchParams(window.location.search)

    if (params.get(CTA_DEBUG_KEY)) {
      key = params.get(CTA_DEBUG_KEY)
    }
  }

  if (!key) {
    return { key, value: false }
  }

  const value = getValueForDebug(key)

  return { key, value }
}

function getValueForDebug(key) {
  switch (key) {
    case 'always':
      return true
    case '50%':
      return Math.round(Math.random()) === 1
    default:
      return false
  }
}

const AVG_REG_DEADLINE = '10/22/2018'

export function hasDeadlinePassed(input) {
  const config = Object.assign(
    {
      date: new Date(),
      state: ''
    },
    input || {}
  )

  let end = Day(AVG_REG_DEADLINE)

  if (config.state) {
    const state = getState(config.state)

    if (state && state.reg_deadline) {
      end = Day(state.reg_deadline)
    }
  }

  const currentDate = Day(config.date)

  return (
    currentDate.month() > end.month() ||
    (currentDate.month() === end.month() && currentDate.date() > end.date())
  )
}
