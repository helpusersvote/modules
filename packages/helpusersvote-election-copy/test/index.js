const test = require('ava')

const { getElectionText } = require('..')

test(`getElectionText: default registration text`, t => {
  const { title, cta } = getElectionText()

  t.is(title, 'Get ready to vote in 2018!')
  t.is(cta, `Check if you're registered today`)
})
