const shouldShowCTA = require('./checks/should-show-cta')
const { getCountdown } = require('./utils/countdowns')
const { getStates, getState } = require('./data')

module.exports = {
  shouldShowCTA,
  getCountdown,
  getStates,
  getState
}
