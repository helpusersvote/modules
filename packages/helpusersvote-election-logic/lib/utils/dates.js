const Day = require('dayjs')

const electionDay = {
  date: Day('2018-11-06'),
  regions: ['country:USA']
}

const elections = [electionDay]

const registrationDeadlines = []

module.exports = {
  elections,
  registrationDeadlines
}
