const Day = require('dayjs')
const { keyDates, getState } = require('../data')

module.exports = {
  hasRegPassed,
  shouldShowCTA
}

const AVG_REG_DEADLINE = '10/22/2018'

function hasRegPassed(input) {
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

function shouldShowCTA(input) {
  try {
    const config = Object.assign(
      {
        date: new Date(),
        regions: ['country:USA']
      },
      input || {}
    )
    const currentDate = Day(config.date)

    const matchedKeyDates = keyDates.filter(kd => {
      const keyDate = Day(kd.date)

      return (
        config.regions.filter(r => {
          return kd.regions ? kd.regions.includes(r) : true
        }).length > 0 &&
        currentDate.month() === keyDate.month() &&
        currentDate.date() === keyDate.date()
      )
    })

    return matchedKeyDates.length > 0
  } catch (err) {
    if (input && input.debug) {
      console.error(err)
    }
    // Silence error for production
    return false
  }
}
