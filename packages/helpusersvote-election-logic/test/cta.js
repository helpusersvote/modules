const test = require('ava')
const Day = require('dayjs')

const { shouldShowCTA, hasRegPassed } = require('..')

test(`check if 11/6/18 is election day`, t => {
  const date = Day('11/6/2018').toDate()

  return t.is(shouldShowCTA({ date }), true)
})

test(`check if 11/5/18 is election day, should fail`, t => {
  const date = Day('11/5/2018').toDate()

  return t.is(shouldShowCTA({ date }), false)
})

test(`check if 09/25/2018 is national voter day`, t => {
  const date = Day('09/25/2018').toDate()

  return t.is(shouldShowCTA({ date }), true)
})

test(`check if 09/01/2018 is before avg. voter reg deadline`, t => {
  const date = Day('09/01/2018').toDate()

  return t.is(hasRegPassed({ date }), false)
})

test(`check if 11/01/2018 is after avg. voter reg deadline`, t => {
  const date = Day('11/01/2018').toDate()

  return t.is(hasRegPassed({ date }), true)
})

test(`check if 10/09/2018 is still before OH voter reg deadline`, t => {
  const date = Day('10/09/2018').toDate()

  return t.is(hasRegPassed({ date, state: 'OH' }), false)
})

test(`check if 11/01/2018 is after OH voter reg deadline`, t => {
  const date = Day('11/01/2018').toDate()

  return t.is(hasRegPassed({ date, state: 'OH' }), true)
})
