module.exports = { checkTimeFactory }

function defaultTimeCheck(currentDate, keyDate) {
  return (
    currentDate.month() === keyDate.month() &&
    currentDate.date() === keyDate.date()
  )
}

function checkTimeFactory(check) {
  if (check) {
    const checkParts = check.split(' ')
    const checkVar = checkParts[0]
    let checkOp = checkParts[1]
    let checkValue = checkParts[2]

    if (!checkOp || !checkValue) {
      // Missing check operation and value
      return defaultTimeCheck
    }

    try {
      checkValue = parseInt(checkValue, 10)
    } catch (err) {
      console.log('helpusersvote.logic: failed to parse `input.check`')
      console.error(err)
      return defaultTimeCheck
    }

    if (checkOp === '<') {
      checkOp = (a, b) => a < b
    } else if (checkOp === '>') {
      checkOp = (a, b) => a > b
    }

    return function(currentDate, keyDate) {
      const currTime = currentDate.toDate().getTime()
      const keyTime = keyDate.toDate().getTime()
      const timeDiff = keyTime - currTime

      // if current time is after key date time
      if (timeDiff < 0) {
        // double check that it's not ED/NVRD
        return defaultTimeCheck(currentDate, keyDate)
      }

      if (checkVar === 'days') {
        // compare against X days
        const compareValue = checkValue * 1000 * 60 * 60 * 24

        return timeDiff <= compareValue
      } else if (checkVar === 'hours') {
        // compare against X hours
        const compareValue = checkValue * 1000 * 60 * 60

        return timeDiff <= compareValue
      } else {
        // invalid checkVar
        return false
      }
    }
  } else {
    return defaultTimeCheck
  }
}
