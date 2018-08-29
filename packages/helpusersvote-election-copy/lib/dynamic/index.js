const { text, html } = require('../static')

const defaultInput = {
  type: 'simple'
}

function getElectionText(input) {
  if (!input) {
    // Set default
    input = Object.assign({}, defaultInput)
  } else if (typeof input !== 'object') {
    // Alert and use default object
    input = Object.assign({}, defaultInput)
  }

  let title = text.registration.title
  let cta = text.registration.cta

  if (input.type === 'simple' || !input.type) {
    // use default registration text
  }

  // Generate https://go.helpusersvote.com URL
  const ctaHref = 'https://vote.org'

  return { titleText: title, ctaText: cta, ctaHref }
}

function getElectionHTML() {
  return html.registration({ text: text.registration })
}

module.exports = {
  getElectionHTML,
  getElectionText
}
