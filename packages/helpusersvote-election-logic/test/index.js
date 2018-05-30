const test = require('ava')
const Day = require('dayjs')

const { shouldShowCTA } = require('..')

test(`check if 11/6/18 is election day, should pass`, t => {
  const date = Day('11/6/2018').toDate()

  return t.is(shouldShowCTA({ date }), true)
})

test(`check if 11/5/18 is election day, should fail`, t => {
  const date = Day('11/5/2018').toDate()

  return t.is(shouldShowCTA({ date }), false)
})
