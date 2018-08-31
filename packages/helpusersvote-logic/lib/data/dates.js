const Day = require('dayjs')

// Election Day
const electionDay = {
  date: Day('2018-11-06'),
  regions: ['country:USA']
}

// National Voter Registration Day
const nvrDay = {
  date: Day('2018-09-25'),
  regions: ['country:USA']
}

const keyDates = [electionDay, nvrDay]

const registrationDeadlines = []

module.exports = {
  keyDates,
  registrationDeadlines
}
