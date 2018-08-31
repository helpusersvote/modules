const { getStates, getState } = require('./data')
const { hasDeadlinePassed, shouldShowCTA, getCountdown } = require('./logic')

module.exports = {
  hasDeadlinePassed,
  shouldShowCTA,
  getCountdown,
  getStates,
  getState
}
