import { getState } from './data'

export default {
  getCountdown,
  getMsBetweenDates
}

// Constants
const MS = 1000
const HOUR = 3600
const dstCheck = d =>
  // 2018-11-04 02:00
  !(d.getMonth() >= 10 && d.getDate() >= 4 && d.getHours() >= 2)

const emptyCountdown = {
  days: 0,
  hours: 0,
  remainder: 0,
  error: true
}

export function getCountdown(input) {
  if (typeof input !== 'object') {
    // if input is a string, assume it's a state
    if (typeof input === 'string') {
      input = { state: input }
    } else if (!input) {
      input = {}
    }
  }

  let { start, end, state } = input

  if (!start) {
    start = new Date()
  }

  // If no end date is set
  if (!end) {
    // lookup by state
    if (state) {
      const foundState = getState(state)

      if (!foundState) {
        return emptyCountdown
      }

      end = foundState.reg_deadline
    } else {
      // otherwise, assume election day
      end = '11/06/2018'
    }
  }

  const diff = getDayDiff(start, end)

  return diff
}

function getDayDiff(start, end) {
  const spansDST = checkIfSpansDST(start, end)
  const diff = getMsBetweenDates(start, end)
  const diffInHours = diff / (MS * HOUR)
  const totalDays = diff / (MS * HOUR * 24)
  const days = Math.floor(totalDays)
  const hours = Math.floor((diffInHours - days * 24) % 24) - (spansDST ? 2 : 0)
  const remainder = Math.floor((totalDays - Math.floor(totalDays)) * 10000000)

  return {
    days,
    hours: hours > 0 ? hours : 0,
    remainder
  }
}

export function getMsBetweenDates(d1, d2) {
  const date1 = createDate(d1)
  const date2 = createDate(d2)

  return date2.getTime() - date1.getTime()
}

function checkIfSpansDST(start, end) {
  const d1 = dstCheck(createDate(start))
  const d2 = dstCheck(createDate(end))

  return d1 !== d2
}

function createDate(dateString) {
  if (dateString instanceof Date) {
    return dateString
  }

  const d = new Date()
  // assuming dateString =
  // - year-month-day, e.g. "2018-10-08"
  // - month/day/year, e.g. "10/08/2018"
  // or with a specific time = "2018-10-08 17:30"
  const dateParts = dateString.split(' ')
  const { year, month, date } = parseDateString(dateParts[0])

  // Default 08:00 a.m.
  let hours = 8
  let minutes = 0

  if (dateParts[1]) {
    const timeParts = dateParts[1].split(':')

    hours = parseInt(timeParts[0], 10)
    minutes = parseInt(timeParts[1], 10)
  }

  d.setFullYear(year, month - 1, date)
  d.setHours(hours) // Default to 8 a.m.
  d.setMinutes(minutes)
  d.setMilliseconds(0)
  d.setSeconds(0)

  return d
}

// parseDateString(): returns [year, month, date] array given a string
function parseDateString(dateString) {
  const separator = dateString.indexOf('-') > 0 ? '-' : '/'
  const parts = dateString.split(separator)

  let year = 2018
  let month = 0
  let date = 0

  // Check if the first value is year, e.g. 2018-XX-XX
  if (parts[0].length > 2) {
    year = parseInt(parts[0], 10)
    month = parseInt(parts[1], 10)
    date = parseInt(parts[2], 10)
  } else {
    // otherwise assume the year is at the end, e.g. 10-08-XXXX
    month = parseInt(parts[0], 10)
    date = parseInt(parts[1], 10)
    // ignore if there's no year, e.g. 10/08
    if (parts[2]) {
      year = parseInt(parts[2], 10)
    }
  }

  return {
    year,
    month,
    date
  }
}
