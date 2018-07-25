const test = require('ava')

const { getState } = require('..')

test(`lookup state by full state name`, t => {
  return t.is(getState('California').abbr, 'CA')
})

test(`lookup state by abbreviation`, t => {
  return t.is(getState('CA').name, 'California')
})
