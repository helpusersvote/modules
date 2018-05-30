const Day = require('dayjs')

const { elections } = require('../utils/dates')

function shouldShowCTA(input) {
  const config = input || { date: new Date() }
  const currentDate = Day(config.date)

  const matchedElections = elections.filter(election => {
    const electionDay = Day(election.date)

    return (
      currentDate.month() === electionDay.month() &&
      currentDate.date() === electionDay.date()
    )
  })

  return matchedElections.length > 0
}

module.exports = shouldShowCTA
