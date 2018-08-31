const stateDeadlines = require('./state-deadlines')
const stateInfo = require('./state-info')
const states = require('./states')
const { keyDates } = require('./dates')

const combineState = (state, deadlines, info) =>
  Object.assign({}, state, deadlines, info)

module.exports = {
  keyDates,
  stateDeadlines,
  stateInfo,
  states,
  getStates: stateLookupKeys => {
    if (!stateLookupKeys) {
      return states.map(state =>
        combineState(state, stateDeadlines[state.abbr], stateInfo[state.abbr])
      )
    }

    return states.reduce((prev, state) => {
      if (
        stateLookupKeys.includes(state.abbr) ||
        stateLookupKeys.includes(state.name)
      ) {
        prev.push(
          combineState(state, stateDeadlines[state.abbr], stateInfo[state.abbr])
        )

        return prev
      } else {
        return prev
      }
    }, [])
  },
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

    return combineState(
      state,
      stateDeadlines[state.abbr],
      stateInfo[state.abbr]
    )
  }
}
