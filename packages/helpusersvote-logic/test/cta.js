const test = require('ava')
const Day = require('dayjs')

const { asyncShouldShowCTA, shouldShowCTA, hasDeadlinePassed } = require('..')

test(`check if 11/6/18 is election day`, t => {
  const date = Day('11/6/2018').toDate()

  t.is(shouldShowCTA({ date }), true)
})

test(`check if 11/5/18 is election day`, t => {
  const date = Day('11/5/2018').toDate()

  t.is(shouldShowCTA({ date }), false)
})

test(`check if 09/25/2018 is national voter day`, t => {
  const date = Day('09/25/2018').toDate()

  t.is(shouldShowCTA({ date }), true)
})

test(`check if 09/01/2018 is before avg. voter reg deadline`, t => {
  const date = Day('09/01/2018').toDate()

  t.is(hasDeadlinePassed({ date }), false)
})

test(`check if 11/01/2018 is after avg. voter reg deadline`, t => {
  const date = Day('11/01/2018').toDate()

  t.is(hasDeadlinePassed({ date }), true)
})

test(`check if 10/09/2018 is still before OH voter reg deadline`, t => {
  const date = Day('10/09/2018').toDate()

  t.is(hasDeadlinePassed({ date, state: 'OH' }), false)
})

test(`check if 11/01/2018 is after OH voter reg deadline`, t => {
  const date = Day('11/01/2018').toDate()

  t.is(hasDeadlinePassed({ date, state: 'OH' }), true)
})

test(`check 3 days to Ohio Registration Deadline`, t => {
  const date = '10/04/2018 08:00'

  t.is(shouldShowCTA({ date, state: 'OH', check: 'days < 3' }), false)
})

test(`check 3 days to Ohio Registration Deadline`, t => {
  const date = '10/06/2018 08:00'

  t.is(shouldShowCTA({ date, state: 'OH', check: 'days < 3' }), false)
})

test(`check 12 hours to Ohio Registration Deadline`, t => {
  const date = '10/09/2018 12:00'

  t.is(shouldShowCTA({ date, state: 'OH', check: 'hours < 12' }), false)
})

test(`check if in U.S. based on locale/timezone`, async t => {
  const date = Day('11/6/2018').toDate()

  t.is(
    await asyncShouldShowCTA({
      date
    }),
    true
  )
})

test(`check if in U.S. based on IP address`, async t => {
  const date = Day('11/6/2018').toDate()

  t.is(
    await asyncShouldShowCTA({
      date,
      useNetwork: true,
      alwaysUseNetwork: true
    }),
    true
  )
})
