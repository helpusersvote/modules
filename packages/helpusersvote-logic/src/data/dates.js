import Day from 'dayjs'

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

export const keyDates = [electionDay, nvrDay]

export const registrationDeadlines = []

export default {
  keyDates,
  registrationDeadlines
}
