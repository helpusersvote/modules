const stateDeadlines = require('./state-deadlines')
const stateInfo = require('./state-info')
const states = require('./states')

module.exports = {
  stateDeadlines,
  stateInfo,
  states,
  getState: stateLookupKey => {
    const state = states.reduce((prev, s) => {
      if (s.abbr === stateLookupKey || s.name === stateLookupKey) {
        return s
      } else {
        return prev
      }
    })

    if (!state) {
      return { error: true, code: 'not_found' }
    }

    return {
      ...state,
      ...stateDeadlines[state.abbr],
      ...stateInfo[state.abbr]
    }
  }
}
