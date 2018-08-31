const test = require('ava')

const { getCountdown, getState } = require('..')

test(`check same date`, t => {
  const d = '1/1/2018'
  const { days, hours } = getCountdown({ start: d, end: d })

  t.is(days, 0, 'days should be zero')
  t.is(hours, 0, 'hours should be zero')
})

test(`check hardcoded dates`, t => {
  const d = '1/1/2018'
  const d2 = '1/2/2018 10:00'

  const { days, hours } = getCountdown({ start: d, end: d2 })

  t.is(days, 1, 'days should be one')
  t.is(hours, 2, 'hours should be two')
})

test(`check Date objects`, t => {
  const d = new Date()
  const d2 = new Date()

  d2.setDate(d2.getDate() + 1)
  d2.setHours(d2.getHours() + 2)

  const { days, hours } = getCountdown({ start: d, end: d2 })

  t.is(days, 1, 'days should be one')
  t.is(hours, 2, 'hours should be two')
})

test(`check NVRD to Election Day`, t => {
  const d = '2018-09-25'
  const d2 = '2018-11-06'

  const { days, hours } = getCountdown({ start: d, end: d2 })

  t.is(days, 42, 'days should be 42')
  t.is(hours, 0, 'hours should be zero')
})

test(`check NVRD to Ohio Registration Deadline`, t => {
  const state = getState('OH')
  const d = '2018-09-25 08:00'
  const d2 = state.reg_deadline

  const { days, hours } = getCountdown({ start: d, end: d2 })

  t.is(days, 14, 'days should be 14')
  t.is(hours, 15, 'hours should be 15')
})

test(`check NVRD to Ohio Registration Deadline`, t => {
  const d = '09/25/2018 08:00'

  const { days, hours } = getCountdown({ start: d, state: 'OH' })

  t.is(days, 14, 'days should be 14')
  t.is(hours, 15, 'hours should be 15')
})
