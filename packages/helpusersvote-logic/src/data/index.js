import stateDeadlines from './state-deadlines'
import states from './states'
import { keyDates } from './dates'

const combineState = (state, deadlines, info) =>
  Object.assign({}, state, deadlines, info)

export const getStates = stateLookupKeys => {
  if (!stateLookupKeys) {
    return states.map(state => combineState(state, stateDeadlines[state.abbr]))
  }

  return states.reduce((prev, state) => {
    if (
      stateLookupKeys.includes(state.abbr) ||
      stateLookupKeys.includes(state.name)
    ) {
      prev.push(combineState(state, stateDeadlines[state.abbr]))

      return prev
    } else {
      return prev
    }
  }, [])
}

export const getState = stateLookupKey => {
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

  return combineState(state, stateDeadlines[state.abbr])
}

export * from './dates'

export default {
  keyDates,
  stateDeadlines,
  states,
  getState,
  getStates
}
