const { text, html } = require('../static')

function getElectionText() {
  return {
    titleText: text.registration.title,
    ctaText: text.registration.cta
  }
}

function getElectionHTML() {
  return html.registration
}

module.exports = {
  getElectionHTML,
  getElectionText
}
