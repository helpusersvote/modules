const Day = require('dayjs')
const dates = {}

const electionDay = {
  date: Day('2018-11-06')
}

const sfMayoralElectionDay = {
  date: Day('2018-06-05'),
  regions: ['city:San Francisco']
}

const elections = [electionDay, sfMayoralElectionDay]

const sfMayoralRegistration = {
  date: Day('2018-05-21'),
  regions: ['city:San Francisco']
}

const registrationDeadlines = []

module.exports = {
  elections,
  registrationDeadlines
}
