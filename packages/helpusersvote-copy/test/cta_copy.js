const test = require('ava')

const { getElectionText } = require('..')

test(`getElectionText: default registration text`, t => {
  const { titleText, ctaText } = getElectionText()

  t.is(titleText, 'Get ready to vote in 2018!')
  t.is(ctaText, `Check if you're registered today`)
})
