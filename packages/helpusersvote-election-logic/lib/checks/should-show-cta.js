const Day = require('dayjs')

const { elections } = require('../utils/dates')

function shouldShowCTA(input) {
  try {
    const config = Object.assign({
      date: new Date(),
      regions: ['country:USA']
    }, input || {})
    const currentDate = Day(config.date)

    const matchedElections = elections.filter(election => {
      const electionDay = Day(election.date)

      return (
        config.regions.filter(r => {
          return election.regions ? election.regions.includes(r) : true
        }).length > 0 &&
        currentDate.month() === electionDay.month() &&
        currentDate.date() === electionDay.date()
      )
    })

    return matchedElections.length > 0
  } catch (err) {
    // Silence error for production
    return false
  }
}

module.exports = shouldShowCTA
